import json
import re
import os
import random
import sys
import io
from datetime import datetime, timedelta

# ================= 1. 参数配置区域 =================
# 建议：如果路径包含反斜杠，请保持 r"..." 格式
MD_PATH = r"D:\Dev\GitHub\NEGIAO.github.io\Pages\Note\md\word-learning-record.md"
JSON_PATH = r"D:\Dev\GitHub\NEGIAO.github.io\Pages\Note\word-list.json"

# 拆分配置
ARCHIVE_DIR = r"D:\Dev\GitHub\NEGIAO.github.io\Pages\Note\md\word-learning-archive"
ARCHIVE_INDEX_PATH = os.path.join(ARCHIVE_DIR, "index.json")
RECENT_DAYS = 7  # 主文件保留最近多少天的记录


# ================= 2. 功能函数区域 =================

def read_markdown_file(md_path):
    """直接读取 Markdown 文件内容"""
    if not os.path.exists(md_path):
        print(f"[错误] 找不到文件: {md_path}")
        return ""

    try:
        with open(md_path, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        print(f"[错误] 读取 Markdown 文件时发生异常: {e}")
        return ""


def parse_markdown_words(markdown_content):
    """解析 Markdown 内容，提取单词信息"""
    lines = markdown_content.split('\n')
    current_date = None
    words = []

    # 日期匹配正则: ### 2025-09-10 (支持可选的后缀文字)
    date_pattern = r'^###\s+(\d{4}-\d{2}-\d{2})'

    for line in lines:
        line = line.strip()
        if not line:
            continue

        # 1. 检查是否是日期行
        date_match = re.search(date_pattern, line)
        if date_match:
            current_date = date_match.group(1)
            continue

        # 2. 检查是否是表格数据行 (以 | 开头和结尾，且不是分割线 ---)
        if line.startswith('|') and line.endswith('|'):
            if '---' in line or '中文释义' in line:
                continue

            # 分割表格列，去除首尾空字符
            parts = [p.strip() for p in line.split('|')]

            # parts 结构通常是: ['', '单词', '词性', '释义', '例句', '']
            # 所以有效数据的索引通常是 1, 2, 3...
            if len(parts) >= 5:
                word_raw = parts[1]
                meaning = parts[3]

                # 清理单词格式 (去除 Markdown 加粗符号 ** 和可能存在的链接格式)
                # 针对 [word](link) 格式也可以简单处理，这里主要处理 **word**
                word = word_raw.replace('**', '').strip()

                # 数据完整性校验
                if word and meaning and current_date:
                    words.append({
                        "word": word,
                        "meaning": meaning,
                        "date": current_date
                    })
    return words


def load_json_words(json_path):
    """读取现有的 JSON 单词列表"""
    if os.path.exists(json_path):
        try:
            with open(json_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                if isinstance(data, list):
                    return data
                else:
                    print("[警告] JSON 文件格式不正确(不是列表)，将初始化为空列表。")
                    return []
        except json.JSONDecodeError:
            print("[警告] JSON 文件损坏或为空，将初始化为空列表。")
            return []
        except Exception as e:
            print(f"[错误] 读取 JSON 文件失败: {e}")
            return []
    return []


def generate_options(correct_meaning, all_meanings, count=3):
    """
    生成包含正确答案和干扰项的选项列表
    :param correct_meaning: 正确的中文释义
    :param all_meanings: 所有可用的释义列表（用于抽取干扰项）
    :param count: 需要生成的干扰项数量
    """
    # 过滤掉正确释义，作为干扰项池
    distractors = [m for m in all_meanings if m != correct_meaning and m.strip()]

    # 去重
    distractors = list(set(distractors))

    # 如果干扰项池为空（比如只有这一个单词），手动补充假数据
    if not distractors:
        distractors = ["未知释义A", "未知释义B", "未知释义C"]

    # 如果干扰项不足 count 个，允许重复采样来凑数
    if len(distractors) < count:
        # 循环拼接直到数量足够
        while len(distractors) < count:
            distractors += distractors

    # 随机选取指定数量的干扰项
    selected_distractors = random.sample(distractors, count)

    # 组合正确答案并打乱
    options = selected_distractors + [correct_meaning]
    random.shuffle(options)
    return options


def split_markdown_file(md_path, archive_dir, recent_days=7):
    """
    增量式拆分：主文件超过 recent_days 天时，将最旧的剥离到对应月份存档。
    - 读取主文件，按 ### 切分
    - 若日期数 > recent_days，取最旧的写入存档（追加到已有存档文件开头）
    - 主文件只保留最近 recent_days 天（倒序：最新在前）
    """
    content = read_markdown_file(md_path)
    if not content:
        print("[跳过] 无法读取 Markdown，跳过拆分。")
        return

    # 1. 分离 header（第一个 ## 之前）
    header_match = re.search(r'^## ', content, re.MULTILINE)
    if not header_match:
        print("[跳过] 未找到 ## 标题，跳过拆分。")
        return

    header = content[:header_match.start()]
    body = content[header_match.start():]

    # 2. 按 ### 切分 sections
    date_pattern = re.compile(r'^### (\d{4}-\d{2}-\d{2})', re.MULTILINE)
    date_positions = list(date_pattern.finditer(body))

    if not date_positions:
        print("[跳过] 未找到 ### 日期条目，跳过拆分。")
        return

    sections = []
    for i, m in enumerate(date_positions):
        start = m.start()
        end = date_positions[i + 1].start() if i + 1 < len(date_positions) else len(body)
        sections.append({
            'date': m.group(1),
            'raw': body[start:end].rstrip()
        })

    # 3. 按日期去重，判断是否需要拆分
    unique_dates = sorted(set(s['date'] for s in sections), reverse=True)

    if len(unique_dates) <= recent_days:
        print(f"[完成] 当前 {len(unique_dates)} 天，未超过 {recent_days} 天，无需拆分。")
        return

    # 4. 分离：最近 N 天留主文件，其余剥离到存档
    keep_dates = set(unique_dates[:recent_days])
    keep_sections = [s for s in sections if s['date'] in keep_dates]
    archive_sections = [s for s in sections if s['date'] not in keep_dates]

    # 5. 找出主文件需要的 ## 月标题（只保留最新月份的标题）
    month_pattern = re.compile(r'^## .+$', re.MULTILINE)
    keep_months = set(s['date'][:7] for s in keep_sections)

    # 只保留最新月份对应的那一个月标题，避免旧月份标题因后面紧跟新月份日期而被误留
    latest_month_header = None
    latest_month_start = -1
    for mm in month_pattern.finditer(body):
        for dp in date_positions:
            if dp.start() > mm.start():
                if dp.group(1)[:7] in keep_months and mm.start() > latest_month_start:
                    latest_month_header = mm.group(0)
                    latest_month_start = mm.start()
                break

    leading_month_headers = [latest_month_header] if latest_month_header else []

    # 6. 写入主文件（按日期倒序：最新在前）
    keep_sections.sort(key=lambda x: x['date'], reverse=True)
    main_body_parts = leading_month_headers[:]
    for s in keep_sections:
        main_body_parts.append(s['raw'])

    with open(md_path, 'w', encoding='utf-8') as f:
        f.write(header + '\n'.join(main_body_parts) + '\n')

    print(f"-> 主文件保留 {len(keep_sections)} 条")

    # 7. 将剥离的 section 写入对应月份存档
    os.makedirs(archive_dir, exist_ok=True)

    # 按月分组
    archive_by_month = {}
    for s in archive_sections:
        ym = s['date'][:7]
        archive_by_month.setdefault(ym, []).append(s)

    # 找出 body 中所有月标题（用于新存档文件）
    all_month_headers = {}
    for mm in month_pattern.finditer(body):
        all_month_headers[mm.start()] = mm.group(0)

    archive_files = []

    for ym, month_secs in sorted(archive_by_month.items(), reverse=True):
        archive_path = os.path.join(archive_dir, f"{ym}.md")

        if os.path.exists(archive_path):
            # 已有存档：读取已有内容，将新 section 插入到正确位置（按日期倒序）
            existing = read_markdown_file(archive_path)
            # 提取已有存档中的 ### sections
            existing_date_matches = list(date_pattern.finditer(existing))
            existing_sections = []
            for i, m in enumerate(existing_date_matches):
                start = m.start()
                end = existing_date_matches[i + 1].start() if i + 1 < len(existing_date_matches) else len(existing)
                existing_sections.append({
                    'date': m.group(1),
                    'raw': existing[start:end].rstrip()
                })

            # 合并并按日期倒序排列
            all_secs = existing_sections + month_secs
            all_secs.sort(key=lambda x: x['date'], reverse=True)

            # 重建存档内容：保留原 header + 月标题
            archive_header_end = existing.find('\n### ')
            if archive_header_end < 0:
                archive_header_end = existing.find('\n## ')
            if archive_header_end < 0:
                archive_header_end = 0
            archive_header = existing[:archive_header_end] if archive_header_end > 0 else ''

            # 找到月标题行
            month_header = ''
            for mm in month_pattern.finditer(existing):
                month_header = mm.group(0)
                break

            parts = []
            if archive_header:
                parts.append(archive_header.rstrip())
            if month_header:
                parts.append(month_header)
            for s in all_secs:
                parts.append(s['raw'])

            with open(archive_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(parts) + '\n')
        else:
            # 新存档文件
            # 找该月的月标题
            month_header_text = ''
            for dp in date_positions:
                if dp.group(1)[:7] == ym:
                    for mpos in sorted(all_month_headers.keys()):
                        if mpos < dp.start():
                            month_header_text = all_month_headers[mpos]
                        else:
                            break
                    break

            parts = [header.split('\n')[0]]  # # 标题行
            if month_header_text:
                parts.append(month_header_text)
            month_secs.sort(key=lambda x: x['date'], reverse=True)
            for s in month_secs:
                parts.append(s['raw'])

            with open(archive_path, 'w', encoding='utf-8') as f:
                f.write('\n'.join(parts) + '\n')

        print(f"   [存档] {ym}.md (+{len(month_secs)} 条)")
        archive_files.append(f"{ym}.md")

    # 8. 更新 index.json
    index_path = os.path.join(archive_dir, "index.json")
    existing_index = {}
    if os.path.exists(index_path):
        try:
            with open(index_path, 'r', encoding='utf-8') as f:
                existing_index = json.load(f)
        except Exception:
            pass

    all_archives = list(set((existing_index.get('archives', []) or []) + archive_files))
    all_archives.sort(reverse=True)

    with open(index_path, 'w', encoding='utf-8') as f:
        json.dump({
            "mainFile": os.path.basename(md_path),
            "archives": all_archives
        }, f, ensure_ascii=False, indent=2)

    print(f"-> 索引已更新: {len(all_archives)} 个月度存档")


def main():
    # 确保在 Windows 控制台下 stdout 使用 UTF-8 编码，避免中文输出出现乱码
    try:
        enc = (sys.stdout.encoding or '').lower()
        if enc != 'utf-8':
            try:
                sys.stdout.reconfigure(encoding='utf-8')
            except AttributeError:
                sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
    except Exception:
        pass

    print("=" * 30)
    print("      开始同步单词本      ")
    print("=" * 30)

    # 1. 直接读取 Markdown 文件
    markdown_content = read_markdown_file(MD_PATH)
    if not markdown_content:
        print("[终止] 无法获取 Markdown 内容。")
        return

    # 2. 解析 Markdown 中的单词（逆序处理，使新词在前）
    extracted_words = parse_markdown_words(markdown_content)
    extracted_words.reverse()
    print(f"-> 从 Markdown 中解析出 {len(extracted_words)} 条记录")

    # 3. 读取现有 JSON
    existing_words_list = load_json_words(JSON_PATH)
    print(f"-> 现有 JSON 中包含 {len(existing_words_list)} 条记录")

    # 创建查找表 (key: 小写单词 + 日期)，用于避免同一天单词重复
    existing_words_map = {
        (w.get('word', '').lower(), w.get('date', '').strip()): True
        for w in existing_words_list
    }

    # 先对现有 JSON 做一次同日去重，保留首次出现的记录
    deduped_existing_words = []
    seen_existing_keys = set()
    for word_item in existing_words_list:
        existing_key = (word_item.get('word', '').lower(), word_item.get('date', '').strip())
        if existing_key in seen_existing_keys:
            continue
        seen_existing_keys.add(existing_key)
        deduped_existing_words.append(word_item)

    # 4. 准备干扰项池
    # 收集所有出现的释义（现有的 + 新提取的），用于生成更好的干扰项
    all_meanings = [w['meaning'] for w in existing_words_list] + [w['meaning'] for w in extracted_words]
    # 简单的去重
    all_meanings = list(set(all_meanings))

    new_words_count = 0
    final_list = list(deduped_existing_words)

    # 5. 合并数据
    for item in extracted_words:
        word_key = (item['word'].lower(), item['date'].strip())

        # 只有当同一单词、同一天不重复时才添加
        if word_key not in existing_words_map:
            # 生成选项
            options = generate_options(item['meaning'], all_meanings)

            new_entry = {
                "word": item['word'],
                "meaning": item['meaning'],
                "options": options,
                "date": item['date']
                # 可以在这里添加更多字段，如 "learned": False
            }

            final_list.append(new_entry)

            # 标记为已存在，防止本次运行中同一天同一单词被重复添加
            existing_words_map[word_key] = True
            new_words_count += 1
            print(f"   [新增] {item['word']} ({item['meaning']})")

    # 6. 按日期倒序排列，确保新词在前
    final_list.sort(key=lambda x: x.get('date', ''), reverse=True)

    # 7. 保存结果
    should_save = new_words_count > 0 or len(deduped_existing_words) != len(existing_words_list)
    if should_save:
        try:
            with open(JSON_PATH, 'w', encoding='utf-8') as f:
                # indent=4 美化输出，ensure_ascii=False 保证中文正常显示
                json.dump(final_list, f, ensure_ascii=False, indent=4)
            if new_words_count > 0:
                print(f"\n[成功] 已将 {new_words_count} 个新单词写入 {os.path.basename(JSON_PATH)}")
            else:
                print(f"\n[成功] 已清理同日重复记录并更新 {os.path.basename(JSON_PATH)}")
        except Exception as e:
            print(f"\n[错误] 写入 JSON 文件失败: {e}")
    else:
        print("\n[完成] 没有发现需要添加的新单词。")

    # 8. 拆分 markdown 文件（保留最近 N 天，其余按月存档）
    print()
    print("-" * 30)
    print("      拆分 Markdown 文件      ")
    print("-" * 30)
    split_markdown_file(MD_PATH, ARCHIVE_DIR, RECENT_DAYS)


if __name__ == "__main__":
    main()