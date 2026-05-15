# Visual Protocol - 交互式汽车协议学习平台

## 项目概述

**Visual Protocol** 是一个交互式汽车协议学习平台，按推荐学习路径（自底向上）帮助工程师和技术人员系统掌握汽车通信协议。通过可视化动画和演示降低学习门槛。

### 主要特点
- **推荐学习路径**：按协议栈依赖关系自底向上排列（CAN → Ethernet → DoIP → UDS → SOME/IP → DDS）
- **交互式演示**：通过动画演示协议通信流程
- **实时可视化**：协议栈各层交互的实时演示
- **多协议支持**：支持 CAN、Ethernet、DoIP、UDS、SOME/IP、DDS 等汽车协议
- **响应式设计**：适配桌面、平板、手机等多设备访问
- **深色/浅色主题**：提供护眼的深色模式
- **零框架依赖**：使用纯 HTML5/CSS3/JavaScript，无外部框架依赖

### 已实现的协议
- **CAN 协议** (控制器局域网络, ISO 11898) — Step 1, 数据链路层
- **Ethernet 协议** (车载以太网, IEEE 802.3) — Step 2, 物理/网络层
- **DoIP 协议** (基于IP的诊断, ISO 13400) — Step 3, 传输层
- **UDS 协议** (统一诊断服务, ISO 14229) — Step 4, 应用层
- **SOME/IP 协议** (面向服务的中间件, AUTOSAR) — Step 5, 中间件层

### 开发中的协议
- **DDS 协议** (数据分发服务, OMG DDS) — Step 6, 中间件层

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
│   │   └── js/           # JavaScript文件
│   └── protocols/         # 协议特定内容（按学习路径排列）
│       ├── can/          # CAN 协议 (Step 1)
│       ├── ethernet/     # Ethernet 协议 (Step 2)
│       ├── doip/         # DoIP 协议 (Step 3)
│       ├── uds/          # UDS 协议 (Step 4)
│       ├── someip/       # SOME/IP 协议 (Step 5)
│       └── dds/          # DDS 协议 (Step 6, 开发中)
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
git clone https://github.com/jrtxio/visual-protocol.git
cd visual-protocol
npm install
```

### 开发服务器
```bash
npm start
```
或者使用 Python:
```bash
python -m http.server 8000
```

### 构建项目
```bash
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
- **Anthropic 暖色调**：#D97757 (accent), #F9F7F4 (bg)
- **成功状态**：#4CAF50
- **错误状态**：#f44336
- **警告状态**：#ff9800

### UI组件
- 卡片式设计，圆角边框，阴影效果
- 平滑过渡，微交互，悬停效果

## 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 开启 Pull Request

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

## 许可证

本项目采用 Apache 2.0 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情
