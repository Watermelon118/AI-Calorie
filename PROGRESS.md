# AI-Calorie 进度跟踪

最后更新：2026-04-28（Pacific/Auckland）

## 项目定位

AI-Calorie 是一个记录一日三餐和热量目标的中文应用。当前开发策略是先完成前端页面与交互逻辑，再固定请求路径和接口契约，最后开发 C# ASP.NET 后端。

## 技术选型

| 层级 | 技术 | 状态 |
| --- | --- | --- |
| 前端 | React + Ant Design Mobile | 已确定 |
| 后端 | C# + ASP.NET Web API | 已确定，暂缓开发 |
| 数据 | 待定 | 后端阶段确认 |
| 文档 | Markdown 进度跟踪 | 已建立 |
| 代理上下文 | AGENTS.md | 已建立 |
| CI | GitHub Actions 前端检查 | 已建立 |

## 当前阶段

当前阶段：前端优先。

| 阶段 | 内容 | 状态 |
| --- | --- | --- |
| 1 | 建立项目进度跟踪和代理上下文文件 | 完成 |
| 2 | 初始化前端工程 | 完成 |
| 3 | 实现前端页面结构与路由 | 进行中 |
| 4 | 实现餐食记录、统计、目标等前端逻辑 | 进行中 |
| 5 | 整理前端请求路径与接口契约 | 未开始 |
| 6 | 开发 ASP.NET 后端接口 | 未开始 |
| 7 | 前后端联调与验收 | 未开始 |

## 工程化

| 项目 | 内容 | 状态 |
| --- | --- | --- |
| 前端 CI | push 到 `main`、`feature` 或向 `main` 发起 PR 时运行 `npm ci`、`npm run lint`、`npm run build` | 已配置 |

## 前端功能范围

| 功能 | 说明 | 状态 |
| --- | --- | --- |
| 今日总览 | 展示今日摄入热量、目标热量、剩余额度和三餐概览 | 静态页视觉精修完成 |
| 餐食记录 | 支持拍照、相册和文字输入的食物识别入口，后续补充餐次、热量、时间和备注 | 识别入口静态页完成 |
| 每日统计 | 按日期查看总热量、各餐占比和目标完成情况 | 未开始 |
| 目标设置 | 设置每日热量目标，可预留体重、身高、活动量等扩展字段 | 未开始 |
| 历史记录 | 查看过往日期的餐食记录与统计 | 未开始 |

## 初步页面规划

| 页面 | 路由建议 | 主要职责 | 状态 |
| --- | --- | --- | --- |
| 今日 | `/today` | 今日热量摘要、营养摄入和今日记录列表 | 静态页视觉精修完成 |
| 新增/编辑餐食 | `/records`（识别入口）、`/meals/new`、`/meals/:id/edit` | 拍照/相册/文字识别入口，后续扩展表单录入与编辑餐食记录 | 识别入口静态页完成 |
| 历史 | `/history` | 日期列表、历史统计入口 | 未开始 |
| 统计 | `/stats` | 日维度热量统计和趋势展示 | 未开始 |
| 目标 | `/goals` | 每日目标设置与展示 | 未开始 |

## 前端布局决策

- 移动端主框架采用“上方内容区 + 底部 TabBar”的结构。
- Ant Design Mobile 不使用桌面版 antd 的 `Layout.Header/Content/Footer` 思路，底部导航优先使用 `TabBar` 组件，页面容器用 CSS 控制高度、滚动和底部安全区。
- 底部 TabBar 初步承载：首页、记录、统计、目标四个主入口。

## 数据模型草案

后续以前端实现时的实际状态管理为准，接口契约固定前允许调整字段。

```ts
type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snack';

interface MealRecord {
  id: string;
  date: string;
  mealType: MealType;
  foodName: string;
  calories: number;
  eatenAt: string;
  note?: string;
}

interface DailySummary {
  date: string;
  targetCalories: number;
  totalCalories: number;
  remainingCalories: number;
  meals: MealRecord[];
}

interface GoalSettings {
  dailyCalories: number;
}
```

## API 契约草案

这些路径先作为前端请求封装的目标，后端开发前再根据页面逻辑统一校准。

| 方法 | 路径 | 用途 | 状态 |
| --- | --- | --- | --- |
| GET | `/api/daily-summary?date=YYYY-MM-DD` | 获取某天统计和餐食列表 | 草案 |
| GET | `/api/meal-records?date=YYYY-MM-DD` | 获取某天餐食记录 | 草案 |
| POST | `/api/meal-records` | 新增餐食记录 | 草案 |
| PUT | `/api/meal-records/{id}` | 更新餐食记录 | 草案 |
| DELETE | `/api/meal-records/{id}` | 删除餐食记录 | 草案 |
| GET | `/api/goals/current` | 获取当前热量目标 | 草案 |
| PUT | `/api/goals/current` | 更新当前热量目标 | 草案 |

## 更新规则

- 本文件是项目进度的唯一跟踪入口，后续只更新状态、补充决策和修正内容，不重复新增同类章节。
- `AGENTS.md` 是新会话的仓库级说明文件，负责引导代理先读取本文件恢复上下文。
- 每完成一个实际开发动作，需要同步更新“当前阶段”和相关功能状态。
- 读取和写入中文文件时使用 UTF-8 编码。
- 前端完成前，后端只保留接口草案，不提前实现业务代码。
