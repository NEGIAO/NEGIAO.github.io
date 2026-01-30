# 📱 二维码生成器

基于面向对象设计的二维码生成器，支持自定义样式、图标和数据URL编码。

> **[👉 点击这里立即在线使用工具](https://negiao-qrcode.share.connect.posit.cloud/)**

## 🚀 快速开始

```bash
# 安装依赖
pip install -r requirements.txt

# 运行应用
streamlit run app.py
```

## ✨ 核心功能

### 1. 多种内容类型
- **网址**：二维码直接包含URL，扫描后访问
- **文本**：数据编码到URL参数，扫描后访问 `https://negiao-pages.share.connect.posit.cloud/Others/decoder.html/?参数`
- **联系方式/名片**：VCard数据编码到URL，扫描后网页显示
- **批量网址**：批量生成多个二维码

### 2. 样式自定义
- 7种预设样式：经典黑白、商务蓝、活力橙、自然绿、浪漫粉、科技紫、自定义
- 自定义前景色和背景色
- 可调节像素块大小、边框宽度
- 多种DPI选项：72/150/300/600
- **文字说明**：支持在二维码顶部和底部添加说明文字
  - 自定义字体大小、颜色
  - 支持文字加粗
  - 智能字体选择（中英文优化）
  - 支持上传自定义字体文件
  - 可调节文字垂直边距

### 3. 高级功能
- 添加中心图标（默认图标或上传自定义）
- 四级容错：L/M/Q/H
- URL数据编码
- 批量生成

## 🎯 工作原理

**所有二维码都生成URL：**

1. **网址类型**：
   ```
   用户输入: https://github.com
   二维码内容: https://github.com
   ```

2. **文本类型**：
   ```
   用户输入: Hello World
   二维码内容: https://negiao-pages.share.connect.posit.cloud/Others/decoder.html?content=Hello%20World&type=文本&...
   ```

3. **联系方式**：
   ```
   用户输入: 姓名、电话、邮箱等
   二维码内容: https://negiao-pages.share.connect.posit.cloud/Others/decoder.html?vcard={"name":"张三",...}&type=名片&...
   ```

扫描二维码后，访问带参数的URL，部署的网页（decoder.html）会自动解析并展示内容。

## 📦 部署

### 1. Streamlit App（生成器）
上传到 Posit Connect：
- `app.py`
- `requirements.txt`
- `icon.jpg`（可选）

### 2. 解码网页（decoder.html）
部署到任何静态网站服务：
- 部署地址：`https://negiao-pages.share.connect.posit.cloud/Others/decoder.html`
- **全新UI设计**：
  - 典雅高级的视觉风格（深蓝灰 + 香槟金配色）
  - 纯文本模式支持垂直居中和信纸背景
  - 自动识别并转换网址链接（Linkify）
  - 移动端完美适配
  - 优化字体排版（衬线体标题 + 清晰正文）
- 用户扫描二维码后自动跳转到此URL并解析参数

## 🏗️ 技术架构

```python
# 核心类
QRCodeConfig     # 配置数据管理
QRCodeStyle      # 样式管理
QRCodeGenerator  # 二维码生成
VCardBuilder     # 名片构建

# 关键方法
generator.generate_qr_content()  # 生成二维码URL内容
```

## 📝 许可证

MIT License

## 👤 作者

NEGIAO - [GitHub 源码](https://github.com/NEGIAO/posit_Connect)
