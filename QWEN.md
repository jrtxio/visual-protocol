# Visual Protocol - 交互式汽车协议学习平台

## 项目概述

**Visual Protocol** 是一个交互式汽车协议学习平台，旨在通过可视化动画和演示帮助工程师和技术人员学习各种汽车通信协议。该项目通过将复杂的汽车通信协议以直观的方式展现，降低学习门槛。

### 主要特点
- **交互式演示**：通过动画演示协议通信流程
- **实时可视化**：协议栈各层交互的实时演示
- **多协议支持**：支持 UDS、DoIP、SOME/IP、CAN 等多种汽车协议
- **响应式设计**：适配桌面、平板、手机等多设备访问
- **深色/浅色主题**：提供护眼的深色模式
- **PWA支持**：支持离线访问和安装为本地应用
- **零框架依赖**：使用纯 HTML5/CSS3/JavaScript，无外部框架依赖

### 当前支持的协议
- **UDS协议** (统一诊断服务, ISO 14229) - 已完整实现

### 计划支持的协议
- **DoIP协议** (基于IP的诊断, ISO 13400)
- **SOME/IP协议** (面向服务的中间件)
- **CAN协议** (控制器局域网络, ISO 11898)

## 技术架构

### 前端技术
- **纯HTML5/CSS3/JavaScript**：零外部框架依赖
- **现代化CSS**：Flexbox/Grid, 自定义属性, 响应式设计
- **ES6+特性**：模块化、箭头函数、模板字符串
- **无障碍访问**：ARIA标签, 键盘导航支持

### 部署方式
- **GitHub Pages**：静态托管部署
- **GitHub Actions**：自动化构建和部署
- **零服务器依赖**：纯静态文件部署

## 项目结构

```
visual-protocol/
├── src/                    # 源代码目录
│   ├── index.html         # 主页面
│   ├── assets/            # 静态资源
│   │   ├── css/          # 样式文件
│   │   ├── js/           # JavaScript文件
│   │   └── images/       # 图像资源
│   ├── protocols/         # 协议特定内容
│   │   ├── uds/          # UDS协议页面
│   │   ├── doip/         # DoIP协议页面 (待开发)
│   │   ├── someip/       # SOME/IP协议页面 (待开发)
│   │   └── can/          # CAN协议页面 (待开发)
│   └── components/        # 可复用组件
├── docs/                  # GitHub Pages部署目录 (构建后)
├── .github/               # GitHub Actions配置
│   └── workflows/
│       └── deploy.yml     # 自动部署工作流
├── package.json           # Node.js配置文件
├── build.js               # 构建脚本
├── README.md              # 项目说明文档
├── LICENSE                # Apache 2.0许可证
└── .gitignore             # Git忽略文件
```

## 构建和运行

### 开发环境设置
```bash
# 克隆项目
git clone https://github.com/jrtxio/visual-protocol.git

# 进入项目目录
cd visual-protocol

# 安装依赖
npm install
```

### 开发服务器
```bash
# 启动开发服务器
npm start
```
或者使用 Python:
```bash
python -m http.server 8000
```

### 构建项目
```bash
# 构建部署文件到 docs 目录
npm run build
```

### 部署
项目使用 GitHub Actions 自动部署到 GitHub Pages：
1. 当代码推送到 main 分支时，GitHub Actions 会自动运行
2. 构建脚本会将 src 目录复制到 docs 目录
3. GitHub Pages 从 docs 目录提供服务

## 开发约定

### 代码风格
- 所有用户界面文字使用中文
- CSS动画优先使用 `transform` 和 `opacity` 属性以确保性能
- 响应式设计采用移动优先策略，最小支持320px宽度
- 代码中服务ID使用十六进制格式（如"0x10"）

### 文件组织
- `src/`：源代码，开发时编辑此目录
- `docs/`：部署目录，由构建脚本自动生成
- `src/protocols/`：协议特定页面

### 可访问性
- 支持屏幕阅读器，包含ARIA标签
- 键盘导航支持
- 语义化HTML结构

## 样式指南

### 色彩方案
- **主色调**：蓝紫渐变 (#667eea → #764ba2)
- **客户端颜色**：#4CAF50
- **服务器颜色**：#2196F3
- **成功状态**：#4CAF50
- **错误状态**：#f44336
- **警告状态**：#ff9800
- **信息状态**：#2196F3

### UI组件
- 卡片式设计，圆角边框，阴影效果
- 渐变背景，毛玻璃效果
- 平滑过渡，微交互，悬停效果

## 贡献指南

欢迎任何形式的贡献！

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

在提交代码前，请确保：
- 代码符合项目风格指南
- 组件在多种设备上正确显示
- 交互逻辑运行正常
- 变更已正确构建并可部署

## 部署配置

### GitHub Pages
- 源：`main` 分支，`/docs` 文件夹
- 访问地址：https://jrtxio.github.io/visual-protocol

### GitHub Actions
- 自动构建和部署工作流
- 权限设置：允许 GitHub Actions 具有读/写权限
- 监听 main 分支的推送事件

## 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge（最新版本）

## 维护者信息

- 项目负责人：Visual Protocol Team
- 项目网站：https://jrtxio.github.io/visual-protocol
- GitHub：@jrtxio

## 许可证

本项目采用 Apache 2.0 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

---
*项目目标：让汽车通信协议学习变得更简单*