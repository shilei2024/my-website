@echo off
echo ========================================
echo 网站部署助手
echo ========================================
echo.
echo 请选择部署方式：
echo 1. 使用Vercel部署（推荐新手）
echo 2. 使用Netlify部署
echo 3. 使用GitHub Pages部署
echo 4. 查看部署指南
echo.
set /p choice="请输入选择 (1-4): "

if "%choice%"=="1" (
    echo.
    echo 请按照以下步骤操作：
    echo 1. 访问 https://vercel.com/signup 注册账号
    echo 2. 登录后点击"Add New..." -> "Project"
    echo 3. 将本文件夹拖入上传区域
    echo 4. 按照提示完成部署
    echo.
    echo 详细指南请查看：Vercel部署指南.md
    pause
) else if "%choice%"=="2" (
    echo.
    echo 请按照以下步骤操作：
    echo 1. 访问 https://app.netlify.com/signup 注册账号
    echo 2. 登录后点击"Add new site" -> "Deploy manually"
    echo 3. 将本文件夹拖入上传区域
    echo 4. 按照提示完成部署
    echo.
    echo 详细指南请查看：其他部署方案.md
    pause
) else if "%choice%"=="3" (
    echo.
    echo GitHub Pages部署需要Git知识
    echo 请按照以下步骤操作：
    echo 1. 创建GitHub仓库
    echo 2. 上传文件到GitHub
    echo 3. 启用GitHub Pages功能
    echo.
    echo 详细步骤请查看：其他部署方案.md
    echo 或运行：github-deploy.bat
    pause
) else if "%choice%"=="4" (
    echo.
    echo 可用的部署指南：
    echo 1. Vercel部署指南.md - Vercel详细部署步骤
    echo 2. 其他部署方案.md - Netlify、GitHub Pages等
    echo 3. 部署准备清单.md - 部署前检查清单
    echo 4. 响应式测试指南.md - 网站测试指南
    echo.
    pause
) else (
    echo 无效的选择，请重新运行脚本
    pause
)
