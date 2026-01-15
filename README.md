<h1 align="center">Image Api for Pages</h1>

一个可以部署到函数或者Page的随机图床 API。支持多种部署环境

## 功能

- `GET /api/random`：直接返回随机图片（图片内容）

  - `GET /api/random?json=1`：返回随机图片信息（JSON）
  - `GET /api/random?id=xxx`：返回指定 id 的图片（图片内容）
- `GET /r`：302 重定向到随机图片（跳转到 `/images/*.webp` 路径）
- `GET /health`：健康检查（返回 JSON）
- `GET /`：展示页（静态页面）

## 配置项

- Cloudflare
  - `IMAGE_URLS`：自定义图片 URL 列表，逗号分隔
  - `CORS_ALLOW_ORIGIN`：设置 CORS 允许的来源，默认不设置
- Vercel
  - `IMAGE_URLS`：自定义图片 URL 列表，逗号分隔
  - `CORS_ALLOW_ORIGIN`：设置 CORS 允许的来源，默认
  [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/znc15/image-edge-esa&project-name=image-edge-esa&repository-name=image-edge-esa&env=IMAGE_URLS,CORS_ALLOW_ORIGIN)
- GitHub Pages
  - GitHub Pages 仅支持静态站点，不支持 `/api/*` 等函数接口。本项目在构建时会生成 `public/image-urls.json`，展示页会自动回退到静态模式随机图片。
- EdgeOne Pages
  - `IMAGE_URLS`：自定义图片 URL 列表，逗号分隔
  - `CORS_ALLOW_ORIGIN`：设置 CORS 允许的来源，默认不设置

- AliYunESA：
  - `IMAGE_URLS`：自定义图片 URL 列表，逗号分隔
  - `CORS_ALLOW_ORIGIN`：设置 CORS 允许的来源，默认不设置

## 本地开发

1. `npm i` — 安装依赖
2. `npm run dev:workers` — Workers 模式
3. `npm run dev:pages` — Pages Functions 模式
4. `npm run esa:dev` — ESA 模式 [需要安装 ESA CLI]

## 部署

- Workers：`npm run deploy:workers`
- Pages：`npm run deploy:pages`
- ESA：`npm run esa:deploy`
- EdgeOne Pages：在控制台导入仓库并按“EdgeOne Pages”小节配置构建/输出
- Vercel：一键部署按钮或在 Vercel 控制台导入仓库
- GitHub Pages：启用 Pages 并使用 `/.github/workflows/deploy-gh-pages.yml`

## 许可证

MIT License
Power By LittleSheepQwQ