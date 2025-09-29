# 🚗 Visual Protocol - 汽车协议学习平台

**Visual Protocol** 是一个交互式汽车协议学习平台，旨在通过可视化动画和演示帮助工程师和技术人员学习各种汽车通信协议。

## 🎯 项目目标

传统汽车通信协议文档晦涩难懂，学习曲线陡峭。Visual Protocol 通过以下方式解决这些问题：

- **可视化学习**: 通过动画演示协议通信流程
- **交互式演示**: 实时查看协议栈各层交互
- **实用工具集**: 提供专业的协议分析工具
- **循序渐进**: 从基础概念到高级应用的完整学习路径

## 📚 支持的协议

### 🎯 当前支持
- **UDS协议** (统一诊断服务, ISO 14229) - 完整实现

### 🚀 即将支持
- **DoIP协议** (基于IP的诊断, ISO 13400)
- **SOME/IP协议** (面向服务的中间件)
- **CAN协议** (控制器局域网络, ISO 11898)

## 🎨 设计特色

### 现代化界面
- **渐变背景**: 蓝紫渐变主色调 (#667eea → #764ba2)
- **毛玻璃效果**: 半透明卡片设计
- **响应式布局**: 适配各种设备尺寸
- **深色主题**: 护眼的深色模式

### 交互体验
- **平滑动画**: 60fps流畅动画效果
- **微交互**: 悬停、点击反馈
- **实时演示**: 协议栈联动动画
- **可视化**: 协议消息流向图

## 🛠️ 技术架构

### 前端技术
- **纯HTML5/CSS3/JavaScript**: 零外部框架依赖
- **现代化CSS**: Flexbox/Grid, 自定义属性, 响应式设计
- **ES6+特性**: 模块化、箭头函数、模板字符串
- **无障碍访问**: ARIA标签, 键盘导航支持

### 部署方式
- **GitHub Pages**: 静态托管部署
- **GitHub Actions**: 自动化构建和部署
- **PWA支持**: 离线访问和安装支持
- **零服务器依赖**: 纯静态文件部署

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/jrtxio/visual-protocol.git

# 进入项目目录
cd visual-protocol

# 安装依赖
npm install

# 启动开发服务器
npm start

# 或者直接使用Python启动
python -m http.server 8000
```

## 📁 项目结构

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
│   └── components/       # 可复用组件
├── docs/                  # GitHub Pages部署目录 (构建后)
├── .github/               # GitHub Actions配置
│   └── workflows/
│       └── deploy.yml     # 自动部署工作流
├── package.json           # Node.js配置文件
├── build.js               # 构建脚本
├── README.md             # 项目说明文档
├── LICENSE               # Apache 2.0许可证
└── .gitignore            # Git忽略文件
```

## 🎯 开发路线图

### Phase 1: MVP (Minimum Viable Product)
- [x] 基础平台框架
- [x] UDS协议完整实现
- [x] 响应式设计和主题切换
- [x] GitHub Pages部署

### Phase 2: 功能扩展
- [ ] DoIP协议支持
- [ ] CAN协议基础
- [ ] 学习进度跟踪
- [ ] 用户个性化设置

### Phase 3: 高级功能
- [ ] SOME/IP协议支持
- [ ] LIN/FlexRay协议
- [ ] 离线学习模式
- [ ] 社区功能集成

## 🤝 贡献指南

欢迎任何形式的贡献！

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 Apache 2.0 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 👥 作者

**Visual Protocol Team**

- 项目网站: [https://jrtxio.github.io/visual-protocol](https://jrtxio.github.io/visual-protocol)
- GitHub: [@jrtxio](https://github.com/jrtxio)

## 🙏 致谢

- 感谢所有开源社区的贡献者
- 感谢汽车电子行业的所有标准制定者

---
*"让汽车通信协议学习变得更简单"*