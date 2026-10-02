# 实验室主页（中英双语 · 内容可后台管理）

一个基于 **Astro + GitHub Pages + Sveltia/Decap CMS** 的实验室主页，满足：

- ✅ 实验室主页（成员、论文、项目、设备、合作单位、新闻）
- ✅ 中英双语**一键切换**（路由 `/zh/` 与 `/en/`，绝不中英混排）
- ✅ 自定义域名（GitHub Pages CNAME）
- ✅ 管理员后台：浏览器登录 `你的域名/admin/` 即可增删改内容，无需懂代码

## 技术栈

| 组件 | 说明 |
|------|------|
| Astro | 静态站点生成，SEO 友好、加载快 |
| 内容集合 | Markdown + YAML frontmatter，每篇内容中英字段并存 |
| Sveltia CMS（兼容 Decap） | 可视化后台，登录后编辑 → 自动 commit 回 GitHub |
| GitHub Pages | 免费托管 + 自定义域名 |

## 目录结构

```
├── astro.config.mjs        # 站点配置（域名、base 路径）
├── public/
│   ├── CNAME               # 自定义域名（改成你的域名）
│   ├── admin/              # 管理后台入口 + 配置
│   └── media/              # 后台传图/传文件存储处
├── src/
│   ├── content/            # ★ 网站全部内容（后台就是编辑这里）
│   │   ├── people/         #   团队成员
│   │   ├── papers/         #   论文
│   │   ├── projects/       #   项目
│   │   ├── equipment/      #   设备
│   │   ├── partners/       #   合作单位
│   │   └── news/           #   新闻
│   ├── i18n/ui.ts          # ★ 界面文案 + 实验室名称等全局信息
│   ├── pages/[lang]/       # 双语页面
│   └── styles/global.css   # 全局样式
└── .github/workflows/      # 自动部署
```

## 一、本地运行（可选）

需要 Node.js ≥ 18。

```bash
npm install
npm run dev        # 本地预览 http://localhost:4321
npm run build      # 构建到 dist/
```

## 二、部署到 GitHub（核心步骤）

1. **建仓库**：在 GitHub 新建一个仓库（建议 Public，免费）。建议命名 `lab-website`。
2. **推代码**：把本项目文件夹推到该仓库的 `main` 分支：
   ```bash
   git init
   git add .
   git commit -m "init lab website"
   git branch -M main
   git remote add origin https://github.com/你的用户名/仓库名.git
   git push -u origin main
   ```
3. **改站点信息**（部署前必改）：
   - `astro.config.mjs` 里的 `site` 改为你的域名或 `https://用户名.github.io/仓库名`
   - `public/admin/config.yml` 里的 `repo` 改为 `你的用户名/仓库名`，`site_url`/`display_url` 改为你的域名
4. **开启 Pages**：仓库 → Settings → Pages → Source 选 **GitHub Actions**。
5. 推上去后，Actions 会自动构建部署，几分钟后访问 `https://用户名.github.io/仓库名/` 即可看到网站。

## 三、自定义域名

1. 在 `public/CNAME` 里填入你的域名（例如 `lab.example.edu.cn`，一行一个域名，不要带 `https://`）。
2. 到你的域名 DNS 服务商，添加一条记录指向 GitHub Pages：
   - **CNAME 记录**：`lab` → `你的用户名.github.io`
   - （或使用 A 记录指向 GitHub Pages 的 IP，见 GitHub 官方文档）
3. 仓库 Settings → Pages → Custom domain 里填同一域名，等 DNS 生效（几分钟到几小时）。

> 提示：域名解析走境外/Cloudflare 无需备案；若解析到国内服务器才需要 ICP 备案。

## 四、管理员后台使用

1. 访问 `https://你的域名/admin/`。
2. 首次登录点击 **Log in**，用有仓库写权限的 **GitHub 账号**授权。
3. 左侧选择栏目（团队成员 / 论文 / 项目 / 设备 / 合作单位 / 新闻），点 **新建** 填写表单。
4. 每个条目都要填**中文和英文两栏**（这样才能双语切换不混排）。
5. 点 **保存 / 发布** 后，CMS 会自动 commit 到 GitHub，1~2 分钟后网站自动更新。

> 管理员 = 拥有该 GitHub 仓库写权限的账号。想给别人管理权限，在仓库 Settings → Collaborators 里添加即可（这就是"设立管理员"）。

## 五、修改实验室名称 / 简介等全局信息

打开 `src/i18n/ui.ts`：

- `lab` 对象：实验室名称、所属单位、地址、邮箱
- `ui.zh` / `ui.en`：界面所有文案（首页标题、栏目名、按钮等）

改完重新 push 即可生效。

## 六、常见问题

- **图片怎么传？** 后台的图片字段点"上传"即可，会自动存到 `public/media/`。
- **改坏了怎么办？** 每次后台保存都是一次 Git 提交，可随时在 GitHub 上回滚。
- **想换域名 base 路径？** 若用 `https://用户名.github.io/仓库名/` 形式（非自定义域名），把 `astro.config.mjs` 里的 `base` 改为 `'/仓库名/'`。
