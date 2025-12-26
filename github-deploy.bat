@echo off
echo ========================================
echo GitHub Pages 部署助手
echo ========================================
echo.
echo 前提条件：
echo 1. 已安装Git（下载：https://git-scm.com）
echo 2. 已有GitHub账号
echo 3. 已创建GitHub仓库
echo.
echo 如果没有Git，请先安装Git
echo 如果没有GitHub仓库，请先创建：
echo 访问 https://github.com/new 创建新仓库
echo.
set /p continue="是否已满足前提条件？(y/n): "

if /i "%continue%" neq "y" (
    echo 请先完成前提条件，然后重新运行此脚本
    pause
    exit /b
)

echo.
echo 步骤1：初始化Git仓库
echo 正在执行：git init
git init
if errorlevel 1 (
    echo 错误：Git未安装或未在PATH中
    echo 请安装Git并确保git命令可用
    pause
    exit /b
)

echo.
echo 步骤2：添加所有文件
echo 正在执行：git add .
git add .

echo.
echo 步骤3：提交更改
set /p commit_msg="请输入提交信息（例如：初始提交）: "
if "%commit_msg%"=="" set commit_msg="Initial commit"
echo 正在执行：git commit -m "%commit_msg%"
git commit -m "%commit_msg%"

echo.
echo 步骤4：连接到GitHub远程仓库
set /p repo_url="请输入GitHub仓库URL（例如：https://github.com/用户名/仓库名.git）: "
if "%repo_url%"=="" (
    echo 错误：必须提供仓库URL
    pause
    exit /b
)

echo 正在执行：git remote add origin "%repo_url%"
git remote add origin "%repo_url%"

echo.
echo 步骤5：推送到GitHub
echo 正在执行：git branch -M main
git branch -M main
echo 正在执行：git push -u origin main
git push -u origin main

if errorlevel 1 (
    echo.
    echo 推送失败，可能原因：
    echo 1. 网络连接问题
    echo 2. 认证失败（需要输入用户名密码）
    echo 3. 仓库URL错误
    echo.
    echo 建议使用GitHub Desktop或网页上传
    pause
    exit /b
)

echo.
echo ========================================
echo 恭喜！代码已推送到GitHub
echo ========================================
echo.
echo 下一步：启用GitHub Pages
echo 1. 访问您的GitHub仓库：%repo_url%
echo 2. 点击"Settings" -> "Pages"
echo 3. 分支选择：main
echo 4. 文件夹选择：/(root)
echo 5. 点击"Save"
echo.
echo 等待几分钟后，您的网站将在：
echo https://用户名.github.io/仓库名
echo.
echo 详细指南请查看：其他部署方案.md
echo.
pause
