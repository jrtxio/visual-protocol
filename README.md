# Visual Protocol

**交互式汽车协议学习平台** — 通过可视化动画和交互式演示，帮助工程师和技术人员快速掌握汽车通信协议。

---

## 支持的协议

| 协议 | 标准号 | 状态 |
|------|--------|------|
| UDS  | ISO 14229 | 已上线 |
| DoIP | ISO 13400 | 开发中 |
| SOME/IP | AUTOSAR | 开发中 |
| CAN  | ISO 11898 | 开发中 |

## 为什么做这个项目

传统的协议文档晦涩难懂，学习曲线陡峭。Visual Protocol 通过可视化、交互式的方式降低学习门槛：

- **可视化动画** — 协议通信流程一目了然
- **交互式演示** — 实时查看协议栈各层交互
- **实用工具集** — 协议分析、报文构造等专业工具
- **循序渐进** — 从基础概念到高级应用的完整学习路径

## 技术实现

- 纯 HTML / CSS / JavaScript，零外部框架依赖
- 响应式设计，支持深色模式
- GitHub Pages 静态部署，GitHub Actions 自动构建
- 无障碍访问：ARIA 标签、键盘导航

## 快速开始

```bash
git clone https://github.com/jrtxio/visual-protocol.git
cd visual-protocol
npm install
npm start          # 启动开发服务器
```

或直接用 Python：

```bash
python -m http.server 8000 -d src
```

## 项目结构

```
src/
├── index.html              # 主页
├── assets/
│   ├── css/main.css        # 全局样式
│   └── js/main.js          # 公共脚本
└── protocols/
    ├── uds/index.html      # UDS 协议学习页
    ├── doip/index.html     # DoIP（开发中）
    ├── someip/index.html   # SOME/IP（开发中）
    └── can/index.html      # CAN（开发中）
```

## 开发路线

**Phase 1 — MVP**
- [x] 平台框架搭建
- [x] UDS 协议完整实现
- [x] 响应式设计 + 深色模式
- [x] GitHub Pages 部署

**Phase 2 — 扩展**
- [ ] DoIP 协议支持
- [ ] CAN 协议基础
- [ ] 学习进度跟踪

**Phase 3 — 高级功能**
- [ ] SOME/IP 协议支持
- [ ] 离线学习模式（PWA）

## 许可证

[Apache 2.0](LICENSE)
