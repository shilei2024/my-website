# Vercel部署详细指南

## 什么是Vercel？

Vercel是一个现代化的网站部署平台，特别适合静态网站。它提供：
- 🆓 完全免费的个人套餐
- ⚡ 全球CDN加速
- 🔒 自动SSL证书（HTTPS）
- 🔄 自动部署更新
- 📱 友好的图形界面

## 部署前准备

### 1. 注册Vercel账号
访问：https://vercel.com/signup
- 可以使用GitHub、GitLab或邮箱注册
- 推荐使用GitHub账号（如果有）

### 2. 准备网站文件
确保您的网站文件在 `D:\Company` 文件夹中

## 部署步骤（图形界面方式）

### 步骤1：访问Vercel控制台
1. 登录 https://vercel.com
2. 点击"Add New..." → "Project"

### 步骤2：导入项目
1. 点击"Import Git Repository"（如果您使用Git）
2. 或者点击"Drag & Drop"区域
3. 将整个`Company`文件夹拖入上传区域

### 步骤3：配置项目
1. **项目名称**：输入您的项目名，如 `my-company-website`
2. **框架预设**：选择"Other"或"Static"
3. **构建命令**：留空（静态网站不需要构建）
4. **输出目录**：留空（根目录就是网站根目录）
5. **根目录**：留空

### 步骤4：部署
1. 点击"Deploy"按钮
2. 等待部署完成（约1-2分钟）
3. 部署成功后，会显示您的网站URL

### 步骤5：访问网站
部署完成后，您会获得一个类似这样的URL：
```
https://my-company-website.vercel.app
```
点击即可访问您的网站！

## 部署步骤（命令行方式 - 可选）

如果您熟悉命令行，可以使用Vercel CLI：

### 1. 安装Vercel CLI
```bash
npm install -g vercel
```

### 2. 登录Vercel
```bash
vercel login
```

### 3. 部署项目
```bash
cd D:\Company
vercel
```

### 4. 按照提示操作
- 选择默认设置
- 确认部署
- 等待完成

## 自定义域名（可选）

如果您有自己的域名：

### 步骤1：添加域名
1. 在Vercel控制台选择您的项目
2. 点击"Settings" → "Domains"
3. 点击"Add Domain"
4. 输入您的域名，如 `www.yourcompany.com`

### 步骤2：配置DNS
Vercel会显示需要添加的DNS记录：
1. 登录您的域名注册商控制台
2. 添加CNAME记录：
   - 类型：CNAME
   - 主机：www
   - 值：cname.vercel-dns.com
3. 等待DNS生效（最多24小时）

### 步骤3：验证域名
DNS生效后，Vercel会自动配置SSL证书

## 自动部署（Git集成）

如果您使用Git，可以设置自动部署：

### 步骤1：连接Git仓库
1. 在Vercel导入时选择Git提供商
2. 授权Vercel访问您的仓库
3. 选择要部署的仓库

### 步骤2：配置自动部署
1. 每次推送到Git仓库时自动部署
2. 可以设置部署分支（如main/master）
3. 可以预览Pull Request的更改

## 环境变量配置（高级）

如果您的网站需要API密钥等敏感信息：

### 步骤1：添加环境变量
1. 项目设置 → "Environment Variables"
2. 添加变量名和值
3. 选择部署环境（Production/Preview）

### 步骤2：在代码中使用
在JavaScript中通过`process.env.VARIABLE_NAME`访问

## 性能优化

### 1. 启用缓存
Vercel自动缓存静态资源，无需额外配置

### 2. 图片优化
- 使用Vercel的图片优化服务
- 或使用第三方CDN如Cloudinary

### 3. 代码分割
对于大型网站，可以考虑代码分割优化

## 监控和分析

### 1. 访问统计
Vercel提供基本的访问统计

### 2. 错误监控
- 使用Sentry等第三方服务
- 或Vercel的日志功能

### 3. 性能监控
- Google Analytics
- Vercel Analytics（付费功能）

## 常见问题解决

### 问题1：部署失败
**可能原因**：
- 文件路径错误
- 缺少必要文件
- 构建配置错误

**解决方法**：
1. 检查部署日志
2. 确保`index.html`在根目录
3. 检查文件权限

### 问题2：网站显示空白
**可能原因**：
- JavaScript错误
- CSS路径错误
- 资源加载失败

**解决方法**：
1. 浏览器开发者工具查看错误
2. 检查控制台输出
3. 验证资源路径

### 问题3：HTTPS证书问题
**可能原因**：
- DNS未完全生效
- 证书配置错误

**解决方法**：
1. 等待DNS完全生效
2. 在Vercel重新颁发证书
3. 检查域名配置

### 问题4：自定义域名不工作
**可能原因**：
- DNS配置错误
- 域名未验证

**解决方法**：
1. 检查DNS记录
2. 等待DNS传播
3. 联系域名注册商

## 维护和更新

### 1. 更新网站内容
- 直接修改本地文件
- 重新部署到Vercel
- 或通过Git推送自动部署

### 2. 备份策略
- 定期备份本地文件
- 使用Git进行版本控制
- 导出Vercel项目配置

### 3. 监控网站状态
- 定期访问检查功能
- 设置uptime监控
- 监控加载速度

## 安全建议

### 1. 保护敏感信息
- 不要将API密钥提交到Git
- 使用环境变量存储敏感数据
- 定期轮换密钥

### 2. 防止滥用
- 设置速率限制
- 使用验证码防止机器人
- 监控异常访问

### 3. 数据备份
- 定期备份用户数据（如果有）
- 测试恢复流程
- 多地点备份

## 成本估算

### 免费套餐包含：
- 100GB带宽/月
- 无限网站数量
- 自动SSL证书
- 全球CDN

### 可能需要付费的情况：
- 流量超过100GB/月
- 需要团队协作功能
- 需要高级分析功能

## 下一步行动

1. ✅ 注册Vercel账号
2. ✅ 准备网站文件
3. ✅ 部署到Vercel
4. ✅ 测试网站功能
5. ⏳ 考虑自定义域名
6. ⏳ 设置自动部署（如果需要）
7. ⏳ 配置监控和分析

## 获取帮助

### 官方资源：
- Vercel文档：https://vercel.com/docs
- Vercel社区：https://vercel.com/community
- GitHub Issues：https://github.com/vercel/vercel

### 常见问题：
- 查看Vercel知识库
- 搜索社区讨论
- 联系技术支持

恭喜！您的网站即将上线！
