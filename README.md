# Visual Protocol

**交互式汽车协议学习平台** — 通过可视化动画和交互式演示，按推荐学习路径自底向上掌握汽车通信协议。

---

## 推荐学习路径

按协议栈层级自底向上排列，先理解基础传输层，再掌握上层应用协议：

| 顺序 | 协议 | 标准号 | 层级 | 状态 |
|------|------|--------|------|------|
| 1 | CAN | ISO 11898 | 数据链路层 | 已上线 |
| 2 | Ethernet | IEEE 802.3 | 物理/网络层 | 已上线 |
| 3 | DoIP | ISO 13400 | 传输层 | 已上线 |
| 4 | UDS | ISO 14229 | 应用层 | 已上线 |
| 5 | SOME/IP | AUTOSAR | 中间件层 | 已上线 |
| 6 | DDS | OMG DDS | 中间件层 | 开发中 |

## 为什么做这个项目

传统的协议文档晦涩难懂，学习曲线陡峭。Visual Protocol 通过可视化、交互式的方式降低学习门槛：

- **推荐学习路径** — 按协议栈依赖关系自底向上，循序渐进
- **可视化动画** — 协议通信流程一目了然
- **交互式演示** — 实时查看协议栈各层交互
- **实用工具集** — 协议分析、报文构造等专业工具
- **知识测试** — 即时评估学习效果

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
    ├── can/index.html       # CAN 协议学习页
    ├── ethernet/index.html  # Ethernet 协议学习页
    ├── doip/index.html      # DoIP 协议学习页
    ├── uds/index.html       # UDS 协议学习页
    ├── someip/index.html    # SOME/IP 协议学习页
    └── dds/index.html       # DDS 协议学习页（开发中）
```

## 开发路线

**Phase 1 — MVP** ✅
- [x] 平台框架搭建
- [x] UDS 协议完整实现
- [x] 响应式设计 + 深色模式
- [x] GitHub Pages 部署

**Phase 2 — 扩展** ✅
- [x] CAN 协议支持
- [x] Ethernet 协议支持
- [x] DoIP 协议支持
- [x] SOME/IP 协议支持

**Phase 3 — 高级功能**
- [ ] DDS 协议支持
- [ ] 学习进度跟踪
- [ ] 离线学习模式（PWA）

## 许可证

[Apache 2.0](LICENSE)
