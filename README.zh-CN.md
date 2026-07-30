# Visual Protocol

交互式汽车协议学习平台。通过可视化动画和交互式演示，按推荐学习路径自底向上掌握汽车通信协议。

![HTML](https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white) [![License](https://img.shields.io/badge/license-Apache--2.0-blue)](LICENSE)

[English](README.md) · **中文**

## 支持的协议

协议按协议栈层级排列，从数据链路层到中间件层：

| 顺序 | 协议 | 标准号 | 层级 | 状态 |
|------|------|--------|------|------|
| 1 | CAN | ISO 11898 | 数据链路层 | 已上线 |
| 2 | Ethernet | IEEE 802.3 | 物理/网络层 | 已上线 |
| 3 | DoIP | ISO 13400 | 传输层 | 已上线 |
| 4 | UDS | ISO 14229 | 应用层 | 已上线 |
| 5 | SOME/IP | AUTOSAR | 中间件层 | 已上线 |
| 6 | DDS | OMG DDS | 中间件层 | 已上线 |

此外还包含 LIN、MQTT、TCP、UDP 等协议页面。

## 功能特点

每个协议学习页包含以下模块：

- **基础概念** — 协议核心概念、架构层次、与其他协议的关系
- **报文详解** — 帧/消息格式、字段说明、交互式字段卡片
- **交互演示** — 可控的动画演示，实时展示协议通信流程
- **实用工具** — 报文解析器、端口映射、代码示例等专业工具
- **知识测试** — 即时评估学习效果的在线测试

## 技术实现

- 纯 HTML / CSS / JavaScript，零外部框架依赖
- 响应式设计，支持深色模式
- GitHub Pages 静态部署
- 无障碍访问：ARIA 标签、键盘导航

## 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/turinglambdaai/visual-protocol.git
cd visual-protocol
```

### 2. 安装并运行

```bash
npm install
npm start          # 启动开发服务器（带热重载）
```

或使用 Python 内置 HTTP 服务器：

```bash
python -m http.server 8000 -d src
```

## 构建部署

```bash
npm run build      # 将 src/ 复制到 docs/ 用于 GitHub Pages 部署
```

## 项目结构

```
src/
├── index.html              # 主页
├── assets/
│   ├── css/main.css        # 全局样式
│   └── js/main.js          # 公共脚本
└── protocols/
    ├── can/index.html      # CAN 协议
    ├── ethernet/index.html # Ethernet 协议
    ├── doip/index.html     # DoIP 协议
    ├── uds/index.html      # UDS 协议
    ├── someip/index.html   # SOME/IP 协议
    └── dds/index.html      # DDS 协议
```

## 许可证

基于 [Apache License 2.0](LICENSE) 开源。
