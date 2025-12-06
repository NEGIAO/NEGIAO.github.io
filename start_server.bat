@echo off
:: 设置控制台编码为 UTF-8，解决中文乱码问题
chcp 65001 >nul

:: 切换到当前脚本所在的目录
cd /d "%~dp0"

echo ========================================================
echo   正在启动本地预览服务器...
echo   项目路径: %CD%
echo   访问地址: http://localhost:8080
echo ========================================================

:: 自动在默认浏览器打开网页
start http://localhost:8080/Pages/Note/word-learning-record.html

:: 启动 Python 服务器
python -m http.server 8080

pause