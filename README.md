# LibTale 小说阅读器

一个基于 React + TypeScript + Electron 的跨平台小说阅读器，支持本地和云端存储。

## 🚀 技术栈

- **前端框架**: React 19 + TypeScript
- **构建工具**: Vite
- **桌面应用**: Electron
- **样式框架**: Tailwind CSS
- **状态管理**: Zustand
- **路由**: React Router DOM
- **数据库**: SQLite + IndexedDB
- **包管理**: pnpm

## 📁 项目结构

```
libTale-novel/
├── src/                          # 源代码目录
│   ├── main/                     # Electron 主进程代码
│   │   ├── index.ts             # 主进程入口
│   │   ├── database.ts          # 数据库管理
│   │   ├── fileManager.ts       # 文件管理
│   │   └── ipc.ts               # IPC 通信
│   ├── renderer/                # Electron 渲染进程代码 (React 应用)
│   │   ├── components/          # React 组件
│   │   │   ├── ui/             # 基础 UI 组件
│   │   │   │   ├── Button.tsx  # 按钮组件
│   │   │   │   ├── Input.tsx   # 输入框组件
│   │   │   └── Modal.tsx       # 模态框组件
│   │   │   ├── reader/         # 阅读器相关组件
│   │   │   │   ├── Reader.tsx  # 主阅读器
│   │   │   │   ├── PageView.tsx # 页面视图
│   │   │   │   └── BookmarkList.tsx # 书签列表
│   │   │   └── library/        # 书库相关组件
│   │   │       ├── BookList.tsx # 书籍列表
│   │   │       ├── BookCard.tsx # 书籍卡片
│   │   │       └── UploadModal.tsx # 上传模态框
│   │   ├── hooks/              # 自定义 React Hooks
│   │   │   ├── useBooks.ts    # 书籍相关逻辑
│   │   │   ├── useReader.ts   # 阅读器逻辑
│   │   │   └── useDatabase.ts # 数据库操作
│   │   ├── stores/             # Zustand 状态管理
│   │   │   ├── bookStore.ts   # 书籍状态
│   │   │   ├── readerStore.ts # 阅读器状态
│   │   │   └── uiStore.ts     # UI 状态
│   │   ├── utils/              # 工具函数
│   │   │   ├── database.ts    # 数据库工具
│   │   │   ├── fileUtils.ts   # 文件处理工具
│   │   │   └── formatUtils.ts # 格式化工具
│   │   ├── pages/              # 页面组件
│   │   │   ├── Home.tsx       # 首页
│   │   │   ├── Library.tsx    # 书库页面
│   │   │   └── Reader.tsx     # 阅读页面
│   │   ├── App.tsx            # React 根组件
│   │   ├── main.tsx           # React 入口
│   │   └── index.css          # 样式文件
│   └── shared/                 # 主进程和渲染进程共享的代码
│       ├── types/              # 类型定义
│       ├── constants/          # 常量
│       └── utils/              # 共享工具函数
├── public/                      # 静态资源
├── dist/                        # 构建输出目录
├── package.json                 # 项目配置
├── tailwind.config.js           # Tailwind CSS 配置
├── vite.config.ts               # Vite 配置
├── tsconfig.json                # TypeScript 配置
├── .eslintrc.cjs                # ESLint 配置
├── .prettierrc                  # Prettier 配置
└── README.md                    # 项目说明
```

## 🗂️ 目录详细说明

### `/src/main/` - Electron 主进程

- **`index.ts`**: 主进程入口文件
- **`database.ts`**: 数据库管理（SQLite）
- **`fileManager.ts`**: 文件系统操作
- **`ipc.ts`**: IPC 通信处理

### `/src/renderer/` - React 渲染进程

- **`components/`**: React 组件
  - **`ui/`**: 可复用的基础 UI 组件
  - **`reader/`**: 阅读器相关组件
  - **`library/`**: 书库管理组件
- **`hooks/`**: 自定义 React Hooks
- **`stores/`**: Zustand 状态管理
- **`utils/`**: 工具函数
- **`pages/`**: 页面组件

### `/src/shared/` - 共享代码

- **`types/`**: TypeScript 类型定义
- **`constants/`**: 常量定义
- **`utils/`**: 共享工具函数

## 🛠️ 开发指南

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
# Web 版本
pnpm dev

# Electron 版本
pnpm electron:dev
```

### 构建应用

```bash
# Web 版本
pnpm build

# Electron 版本
pnpm electron:build
```

### 代码质量

```bash
# 代码检查
pnpm lint

# 自动修复
pnpm lint:fix

# 代码格式化
pnpm format

# 类型检查
pnpm type-check
```

## 📚 功能特性

### 已实现功能

- ✅ 项目基础架构
- ✅ 代码质量工具配置
- ✅ 基础 UI 框架

### 计划实现功能

- 📖 支持 PDF、TXT、EPUB 格式
- 💾 本地 SQLite 数据库存储
- ☁️ 云端同步功能
- 🎨 主题切换
- 🔍 全文搜索
- 📱 响应式设计
- ⌨️ 键盘快捷键
- 🔖 书签和笔记
- 📊 阅读统计

## 🗄️ 数据库设计

### SQLite 表结构

- `books`: 书籍信息表
- `reading_progress`: 阅读进度表
- `bookmarks`: 书签表
- `notes`: 笔记表

### IndexedDB 存储

- `bookContent`: 书籍内容缓存
- `chapterCache`: 章节缓存
- `imageCache`: 图片缓存

## 🎯 开发规范

### 代码风格

- 使用 TypeScript 严格模式
- 遵循 ESLint 规则
- 使用 Prettier 格式化
- 组件使用函数式组件 + Hooks

### 命名规范

- 组件文件使用 PascalCase
- 工具函数使用 camelCase
- 常量使用 UPPER_SNAKE_CASE
- 类型定义使用 PascalCase

### Git 提交规范

- feat: 新功能
- fix: 修复问题
- docs: 文档更新
- style: 代码格式调整
- refactor: 代码重构
- test: 测试相关
- chore: 构建过程或辅助工具的变动

## 📄 许可证

MIT License

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📞 联系方式

如有问题或建议，请提交 Issue 或联系开发者。

## 🚀 Electron 快速启动

### 开发模式（推荐）

```bash
# 启动Electron开发模式（自动启动React服务器）
pnpm electron:dev
```

### 分步启动

```bash
# 终端1：启动React开发服务器
pnpm dev

# 终端2：编译并启动Electron
pnpm electron:compile && pnpm electron:start
```

### 构建生产版本

```bash
# 构建Electron应用
pnpm electron:build
```

### 常用命令

- `pnpm dev` - 启动React开发服务器
- `pnpm electron:dev` - 启动Electron开发模式
- `pnpm electron:compile` - 编译主进程代码
- `pnpm electron:start` - 启动Electron应用
- `pnpm electron:build` - 构建生产版本
- `pnpm lint` - 代码检查
- `pnpm format` - 代码格式化

### 通过cnpm下载Electron

npm install -g cnpm --registry=https://registry.npmmirror.com
cnpm install -D electron
