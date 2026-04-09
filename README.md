# Refine Dashboard

基于 Refine + Next.js + shadcn/ui 的管理面板

## 技术栈

- **Next.js 16** - App Router, TypeScript
- **Refine v5** - 数据管理框架
- **shadcn/ui** - UI 组件库 (Tailwind CSS v4)
- **Recharts** - 图表库
- **Lucide React** - 图标库

## 功能

- 📊 **概览页** - KPI 卡片、收入趋势图、订单量柱状图、最近订单
- 👥 **用户管理** - 用户列表、角色、状态管理
- 🛒 **订单管理** - 订单列表、状态跟踪
- 📦 **产品管理** - 产品列表、库存状态

## 开始使用

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 启动生产服务
npm start
```

## Mock 数据

当前使用 mock 数据，数据定义在 `src/data/mock-data.ts`。

要接入后端 API，只需替换 `src/data/data-provider.ts` 中的 `mockDataProvider`，例如使用 Refine 官方提供的 REST 或 GraphQL data provider。

## 项目结构

```
src/
├── app/
│   ├── dashboard/          # Dashboard 路由
│   │   ├── layout.tsx      # Dashboard 布局（侧边栏）
│   │   ├── page.tsx        # 概览页
│   │   ├── users/page.tsx  # 用户管理
│   │   ├── orders/page.tsx # 订单管理
│   │   └── products/page.tsx # 产品管理
│   ├── globals.css         # 全局样式（shadcn 主题变量）
│   ├── layout.tsx          # 根布局
│   └── page.tsx            # 根页面（重定向到 /dashboard）
├── components/
│   ├── ui/                 # shadcn/ui 组件
│   └── dashboard-sidebar.tsx # 侧边栏导航
├── data/
│   ├── mock-data.ts        # Mock 数据定义
│   └── data-provider.ts    # Refine DataProvider
├── lib/
│   └── utils.ts            # 工具函数
└── providers/
    └── refine-provider.tsx  # Refine 配置
```
