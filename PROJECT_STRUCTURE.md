# Visual Protocol - 项目结构说明

## 📁 当前项目结构

```
visual-protocol/
├── build.js                # 构建脚本
├── package.json            # NPM包配置
├── README.md               # 项目说明文档
├── LICENSE                 # Apache 2.0许可证
├── .gitignore              # Git忽略文件
├── src/                    # 源代码目录
│   ├── index.html          # 主页面
│   ├── assets/            # 静态资源
│   │   ├── css/           # 样式文件
│   │   │   └── main.css   # 主样式表
│   │   └── js/            # JavaScript文件
│   │       └── main.js    # 主JavaScript文件
│   ├── protocols/         # 协议特定内容
│   │   ├── uds/           # UDS协议
│   │   │   └── index.html # UDS协议主页面
│   │   ├── doip/          # DoIP协议
│   │   │   └── index.html # DoIP协议占位页面
│   │   ├── someip/        # SOME/IP协议
│   │   │   └── index.html # SOME/IP协议占位页面
│   │   └── can/           # CAN协议
│   │       └── index.html # CAN协议占位页面
│   └── components/         # 可复用组件 (预留)
└── docs/                  # GitHub Pages部署目录
    ├── index.html         # 主页面 (复制自src)
    ├── assets/            # 静态资源 (复制自src)
    │   ├── css/
    │   │   └── main.css
    │   └── js/
    │       └── main.js
    └── protocols/         # 协议内容 (复制自src)
        ├── uds/
        │   └── index.html
        ├── doip/
        │   └── index.html
        ├── someip/
        │   └── index.html
        └── can/
            └── index.html
```

## 🚀 部署说明

1. **开发模式**: 
   ```bash
   # 启动本地开发服务器
   python -m http.server 8000
   
   # 或使用其他静态文件服务器
   npx serve src
   ```

2. **构建部署**:
   ```bash
   # 运行构建脚本
   node build.js
   
   # 构建结果将复制到docs目录
   # 可直接推送到GitHub Pages
   ```

3. **GitHub Pages配置**:
   - 源码分支: main
   - 发布目录: `/docs`
   - 自定义域名: (可选)

## 📦 技术栈

### 前端技术
- **HTML5**: 语义化结构，支持PWA和可访问性
- **CSS3**: 现代化设计风格，渐变背景、毛玻璃效果、响应式布局
- **JavaScript**: 零外部依赖，实现所有交互逻辑

### 设计原则
- **零框架依赖**: 纯原生技术实现
- **响应式设计**: 适配各种设备尺寸
- **可访问性**: 支持键盘导航和屏幕阅读器
- **性能优化**: 静态文件，快速加载

## 🎯 开发规范

### 代码风格
- 使用语义化的HTML结构
- CSS变量管理主题和样式
- JavaScript模块化组织
- 注释清晰，易于维护

### 文件命名
- 使用kebab-case命名法
- HTML文件使用index.html
- CSS/JS文件使用功能描述命名
- 图片资源使用描述性命名

### 版本控制
```bash
# 提交规范
feat: 新功能开发
fix: 问题修复
docs: 文档更新
style: 代码样式调整
refactor: 代码重构
test: 测试相关
chore: 构建过程或辅助工具的变动
```

## 🔧 开发流程

1. **功能开发**:
   ```bash
   # 在src目录开发新功能
   # 使用本地服务器预览
   python -m http.server 8000
   ```

2. **构建部署**:
   ```bash
   # 构建项目
   node build.js
   
   # 提交到Git
   git add .
   git commit -m "feat: 添加新功能描述"
   git push origin main
   ```

3. **持续集成**:
   - GitHub Actions自动构建
   - GitHub Pages自动部署
   - 代码质量检查

## 📚 协议支持规划

### 已实现
- [x] UDS协议 (统一诊断服务, ISO 14229)

### 待开发
- [ ] DoIP协议 (基于IP的诊断, ISO 13400)
- [ ] SOME/IP协议 (面向服务的中间件)
- [ ] CAN协议 (控制器局域网络, ISO 11898)

## 🤝 贡献指南

1. Fork项目
2. 创建功能分支
3. 开发并测试功能
4. 提交Pull Request

## 📄 许可证

本项目采用 Apache 2.0 许可证