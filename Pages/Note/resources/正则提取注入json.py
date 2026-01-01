import json
import re
import os
import random
import sys
import io

# ================= 1. 参数配置区域 =================
# 建议：如果路径包含反斜杠，请保持 r"..." 格式
# 如果文件和脚本在同一目录，可以使用相对路径，例如 "word-learning-record.html"
HTML_PATH = r"D:\Dev\GitHub\NEGIAO.github.io\Pages\Note\word-learning-record.html"
JSON_PATH = r"D:\Dev\GitHub\NEGIAO.github.io\Pages\Note\word-list.json"


# ================= 2. 功能函数区域 =================

def extract_markdown_from_html(html_path):
    """从 HTML 文件中提取 Markdown 脚本块的内容"""
    if not os.path.exists(html_path):
        print(f"[错误] 找不到文件: {html_path}")
        return ""

    try:
        with open(html_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # 匹配 <script type="text/markdown" id="note-markdown">...</script>
        # 使用 re.DOTALL 让 . 也能匹配换行符
        pattern = r'<script type="text/markdown" id="note-markdown">\s*(.*?)\s*</script>'
        match = re.search(pattern, content, re.DOTALL)
        if match:
            return match.group(1)
        else:
            print("[警告] 在 HTML 中未找到 id 为 'note-markdown' 的 script 标签。")
            return ""
    except Exception as e:
        print(f"[错误] 读取 HTML 文件时发生异常: {e}")
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

    # 1. 获取 Markdown 内容
    markdown_content = extract_markdown_from_html(HTML_PATH)
    if not markdown_content:
        print("[终止] 无法获取 Markdown 内容。")
        return

    # 2. 解析 HTML 中的单词
    extracted_words = parse_markdown_words(markdown_content)
    print(f"-> 从 HTML 中解析出 {len(extracted_words)} 条记录")

    # 3. 读取现有 JSON
    existing_words_list = load_json_words(JSON_PATH)
    print(f"-> 现有 JSON 中包含 {len(existing_words_list)} 条记录")

    # 创建查找表 (key: 小写单词)，用于快速去重
    existing_words_map = {w['word'].lower(): True for w in existing_words_list}

    # 4. 准备干扰项池
    # 收集所有出现的释义（现有的 + 新提取的），用于生成更好的干扰项
    all_meanings = [w['meaning'] for w in existing_words_list] + [w['meaning'] for w in extracted_words]
    # 简单的去重
    all_meanings = list(set(all_meanings))

    new_words_count = 0
    final_list = list(existing_words_list)

    # 5. 合并数据
    for item in extracted_words:
        word_key = item['word'].lower()

        # 只有当单词不在 JSON 中时才添加
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

            # 标记为已存在，防止本次运行中 Markdown 里有重复单词导致重复添加
            existing_words_map[word_key] = True
            new_words_count += 1
            print(f"   [新增] {item['word']} ({item['meaning']})")

    # 6. 保存结果
    if new_words_count > 0:
        try:
            with open(JSON_PATH, 'w', encoding='utf-8') as f:
                # indent=4 美化输出，ensure_ascii=False 保证中文正常显示
                json.dump(final_list, f, ensure_ascii=False, indent=4)
            print(f"\n[成功] 已将 {new_words_count} 个新单词写入 {os.path.basename(JSON_PATH)}")
        except Exception as e:
            print(f"\n[错误] 写入 JSON 文件失败: {e}")
    else:
        print("\n[完成] 没有发现需要添加的新单词。")


if __name__ == "__main__":
    main()