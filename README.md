# 实验室主页（中英双语 · 内容可后台管理）

一个基于 **Astro + GitHub Pages + Sveltia/Decap CMS** 的实验室主页，满足：

- ✅ 实验室主页（成员、论文、项目、设备、合作单位、新闻）
- ✅ 中英双语**一键切换**（路由 `/zh/` 与 `/en/`，绝不中英混排）
- ✅ 自定义域名（GitHub Pages CNAME）
- ✅ 管理员后台：浏览器登录 `你的域名/admin/` 即可增删改内容，无需懂代码
- ✅ 首页封面流（Coverflow）图集：中间大图清晰、两侧虚化露出，可点击 / 箭头 / 圆点切换，点击放大

---

## 这份文档给谁看（先看这里）

| 你想做的事 | 看哪一节 |
|---|---|
| 改文字、加论文/成员/新闻、传图片（**不懂代码也能做**） | 第四节：管理员后台 |
| 改实验室名称、邮箱、界面文案 | 第五节：全局信息 |
| 换首页背景图、换"实验室掠影"图集 | **第七节 · 2 / 3** |
| 改主题配色、间距、字体 | **第七节 · 4** |
| 自己加页面 / 加板块 / 改布局 | **第七节 · 5 / 6** |
| 把代码跑起来在本地预览 | **第一节** |
| 把网站部署 / 更新到线上 | 第二节 + **第八节** |

> 原则：**内容**（文章、成员、图片说明）尽量走后台；**结构与外观**（页面布局、配色、图集逻辑）才改代码。

---

## 技术栈

| 组件 | 说明 |
|------|------|
| Astro | 静态站点生成，SEO 友好、加载快 |
| 内容集合（Content Collections） | Markdown + YAML frontmatter，每篇内容中英字段并存 |
| Sveltia CMS（兼容 Decap） | 可视化后台，登录后编辑 → 自动 commit 回 GitHub |
| GitHub Pages | 免费托管 + 自定义域名，配合 GitHub Actions 自动构建 |

---

## 目录结构（改之前先认路）

```
lab-website/
├── astro.config.mjs          # ★ 站点配置（域名 site、base 子路径）
├── package.json              # 依赖与脚本（dev / build / preview）
├── public/                   # 原样拷贝到网站根目录的静态资源
│   ├── CNAME                 #   自定义域名
│   ├── admin/                #   管理后台入口 + 配置（config.yml）
│   ├── images/               #   ★ 网站用到的图片（首页背景、图集）
│   │   └── gallery/          #      "实验室掠影"图集专门放这里
│   └── favicon.svg
├── src/
│   ├── content/              # ★ 网站全部"内容"数据（后台就是编辑这里）
│   │   ├── config.ts         #   每个内容集合的字段定义（schema）
│   │   ├── people/           #   团队成员（.md）
│   │   ├── papers/           #   论文（.md）
│   │   ├── projects/         #   项目（.md）
│   │   ├── equipment/        #   设备（.md）
│   │   ├── partners/         #   合作单位（.md）
│   │   └── news/             #   新闻（.md）
│   ├── i18n/
│   │   ├── ui.ts             #   ★ 全局中枢：实验室信息、所有界面文案、
│   │   │                     #     首页背景图、图集图片都在这里
│   │   └── utils.ts          #   语言切换、资源路径等工具函数
│   ├── components/           # ★ 页面上的"积木"（每个 .astro 一个组件）
│   │   ├── Header.astro / Footer.astro
│   │   ├── PageHero.astro     #   各内页顶部标题区
│   │   ├── PeopleCard / PaperItem / ProjectCard /
│   │   │   EquipmentCard / PartnerCard / NewsCard.astro
│   │   └── PhotoGallery.astro #   ★ 首页"实验室掠影"封面流图集
│   ├── layouts/
│   │   └── Layout.astro       #   整页骨架（head、Header、Footer、动画）
│   ├── pages/
│   │   ├── index.astro        #   重定向到 /zh/
│   │   └── [lang]/            #   ★ 真正的中英双语页面
│   │       ├── index.astro    #     首页（含 Hero 背景轮播 + 图集）
│   │       ├── people.astro / publications.astro / research.astro
│   │       ├── equipment.astro / partners.astro
│   │       └── news/          #     新闻列表 + 详情
│   └── styles/
│       └── global.css         #   ★ 全局样式与主题变量（配色、间距、字体）
└── .github/workflows/         # 自动部署（push 到 main 即构建并发布）
```

**记住三个"中枢"文件**，绝大多数改动都从它们入手：
1. `src/i18n/ui.ts` —— 文案、实验室信息、首页背景图、图集图片
2. `src/styles/global.css` —— 配色、间距、字体等视觉规范
3. `src/content/*` 或后台 —— 具体的文章内容

---

## 一、本地运行（改代码前必看）

需要 **Node.js ≥ 18**。

```bash
npm install        # 安装依赖（首次 / 拉取新代码后）
npm run dev        # 本地预览，打开 http://localhost:4321/lab-website/zh/
npm run build      # 构建到 dist/（上线前用它验证能否通过）
npm run preview    # 预览构建产物
```

> 本地地址带 `/lab-website/` 子路径是正常的（与线上 `github.io/lab-website/` 一致）。
> 改完想看效果：保持 `npm run dev` 运行，文件一保存浏览器会自动刷新。

---

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

---

## 三、自定义域名

1. 在 `public/CNAME` 里填入你的域名（例如 `lab.example.edu.cn`，一行一个域名，不要带 `https://`）。
2. 到你的域名 DNS 服务商，添加一条记录指向 GitHub Pages：
   - **CNAME 记录**：`lab` → `你的用户名.github.io`
   - （或使用 A 记录指向 GitHub Pages 的 IP，见 GitHub 官方文档）
3. 仓库 Settings → Pages → Custom domain 里填同一域名，等 DNS 生效（几分钟到几小时）。

> 提示：域名解析走境外/Cloudflare 无需备案；若解析到国内服务器才需要 ICP 备案。

---

## 四、管理员后台使用（不懂代码也能改内容）

1. 访问 `https://你的域名/admin/`。
2. 首次登录点击 **Log in**，用有仓库写权限的 **GitHub 账号**授权。
3. 左侧选择栏目（团队成员 / 论文 / 项目 / 设备 / 合作单位 / 新闻），点 **新建** 填写表单。
4. 每个条目都要填**中文和英文两栏**（这样才能双语切换不混排）。
5. 点 **保存 / 发布** 后，CMS 会自动 commit 到 GitHub，1~2 分钟后网站自动更新。
6. **控制首页「团队成员」板块显示谁**：编辑成员条目时勾选「首页展示」，被勾选的人才会出现在首页（最多 4 位）；一个都没勾选时，首页自动退回按「排序」显示前 4 位。「排序」数字越小越靠前，成员页始终显示全部成员。

> 一个信息只要在 `src/content/` 里改，所有引用它的地方（首页板块、内页、站内搜索索引）都会一起变，**不需要分别改**。

> 管理员 = 拥有该 GitHub 仓库写权限的账号。想给别人管理权限，在仓库 Settings → Collaborators 里添加即可（这就是"设立管理员"）。

---

## 五、修改实验室名称 / 简介等全局信息

打开 `src/i18n/ui.ts`：

- `lab` 对象：实验室名称、所属单位、地址、邮箱
- `ui.zh` / `ui.en`：界面所有文案（首页标题、栏目名、按钮等）

改完重新 push 即可生效（详见第八节）。

---

## 六、内容字段约定（双语不混排的秘诀）

所有内容都遵循 **中英成对字段** 的写法，例如：

```yaml
title_zh: 小麦养分智慧管控
title_en: Intelligent Wheat Nutrient Management
```

页面会按当前语言只渲染对应字段，所以**增删内容时务必把 `_zh` 和 `_en` 两栏都填上**。
各栏目的具体字段定义在 `src/content/config.ts`，加新字段时在这里补 schema。

> 后台新闻列表、成员、论文等的搜索功能（首页搜索框）会**自动**从这些内容构建索引，无需手动维护。

---

## 七、改代码 / 改外观（给会改代码的同学）

> 任何改动都先在本地 `npm run dev` 看效果，再按第八节提交上线。

### 1. 改某个页面的布局 / 文案位置

页面都在 `src/pages/[lang]/` 下，例如：
- 首页整体：`index.astro`
- 成员页：`people.astro`，论文页：`publications.astro`，研究/项目：`research.astro` ……
- 卡片样式在 `src/components/` 对应的 `XxxCard.astro`

想改某块长什么样：先找到对应 `.astro` 文件，HTML 结构在文件上半部分（`<template>` 区），样式在底部 `<style>` 区，逻辑/数据在顶部 `---` 代码块。

### 2. 换首页背景轮播图（Hero）

1. 把图片放到 `public/images/`（文件名建议英文/数字，不要空格）。
2. 打开 `src/i18n/ui.ts`，找到 `heroImages` 数组，加一行绝对路径：
   ```ts
   export const heroImages: string[] = [
     '/images/zhuYe1.jpg',
     '/images/ZhuYe2.jpg',
     '/images/你的新图.jpg',   // ← 新增
   ];
   ```
   数组留空 `[]` 则不显示背景图。每 10 秒自动切换一张。

### 3. 改"实验室掠影"图集（封面流）

图集数据在 `src/i18n/ui.ts` 的 `galleryImages`：

```ts
export const galleryImages: { src: string; caption_zh: string; caption_en: string }[] = [
  { src: '/images/zhuYe1.jpg', caption_zh: '小麦田间试验', caption_en: 'Wheat field trial' },
  // 想加照片：把文件放到 public/images/gallery/，然后加一行：
  // { src: '/images/gallery/新照片.jpg', caption_zh: '中文说明', caption_en: 'English caption' },
];
```

- `src`：图片路径，文件实际放在 `public/images/`（或 `public/images/gallery/`）下。
- `caption_zh / caption_en`：鼠标悬停显示、点击放大后展示的说明。
- **数组留空 `[]` 时，首页会自动隐藏整个图集板块。**

**交互逻辑（封面流效果）** 都在 `src/components/PhotoGallery.astro`：
- 中间大图清晰、左右两侧露出并虚化，靠点击左右图 / 箭头 / 圆点手动切换；
- 想调整大小比例：改该文件 `<style>` 里的 `.coverflow__stage`（舞台尺寸）和 `.cf-item { width }`（主图占比）；
- 想调整两侧虚化/缩放：改 JS 里的 `scale`（缩放）、`blur`（模糊度）、`tx`（左右偏移）三个变量。

### 4. 改主题配色 / 字体 / 间距

全部集中在 `src/styles/global.css` 顶部的 `:root` 变量，改一处全局生效：

```css
:root {
  --color-primary: #14532d;        /* 主色（深绿） */
  --color-accent:  #ca8a04;        /* 点缀色（琥珀金） */
  --color-bg:      #fbfaf7;        /* 页面底色 */
  --color-text:    #1f2937;        /* 正文文字 */
  --font-sans: "Inter", "PingFang SC", ...;  /* 字体 */
  --radius: 14px;                  /* 圆角 */
  --space-3: 24px;                 /* 间距梯度（4/8 倍数） */
  --container: 1160px;             /* 正文最大宽度 */
}
```

> 建议只改这两类值，不要随手写死颜色，保证全站风格统一。

### 5. 新增一个内容板块（如"获奖"）

1. 在 `src/content/config.ts` 增加一个新的 collection（定义字段 schema）；
2. 在 `src/content/新栏目/` 下用 `.md` 写内容；
3. 需要后台可编辑的话，在 `public/admin/config.yml` 增加对应集合与字段；
4. 在 `src/components/` 写（或复用）一个卡片组件；
5. 在对应的 `src/pages/[lang]/xxx.astro` 里用 `getCollection('新栏目')` 取数据并渲染。

### 6. 新增一个页面

1. 在 `src/pages/[lang]/` 下新建 `xxx.astro`（复制某个现有页面改最省事）；
2. 页面顶部用 `getStaticPaths` 产出 `/zh/xxx/` 与 `/en/xxx/` 两套路由；
3. 别忘了在 `Header.astro` 的导航里加上入口链接。

---

## 八、提交与上线流程（代码改动怎么生效）

1. 在本地 `npm run build` 确认能构建通过（有报错先修掉）。
2. 提交并推送到 `main` 分支：
   ```bash
   git add -A
   git commit -m "简述这次改了什么"
   git push origin main
   ```
3. 仓库的 **Actions** 会自动构建并部署；等绿色对勾出现后，强刷浏览器（`Ctrl + F5`）即可看到更新。

> 后台（CMS）保存的内容也是一次 Git 提交，同样走这个自动部署流程。
> 改坏了随时可在 GitHub 仓库的提交历史里回滚。

---

## 九、常见问题

- **图片怎么传？** 后台的图片字段点"上传"即可，会自动存到 `public/media/`（CMS 内容图）；首页背景图、图集图则按第七节 2/3 手动放到 `public/images/` 并在 `ui.ts` 登记。
- **改坏了怎么办？** 每次保存/提交都是一次 Git 提交，可在 GitHub 上回滚；本地也可 `git checkout -- 文件名` 丢弃未提交的改动。
- **想换域名 base 路径？** 若用 `https://用户名.github.io/仓库名/` 形式（非自定义域名），把 `astro.config.mjs` 里的 `base` 改为 `'/仓库名/'`。
- **本地预览空白 / 样式不对？** 确认 `npm install` 已执行，且访问地址带 `/lab-website/` 子路径。
- **搜索框搜不到内容？** 搜索索引在构建时从 `src/content/` 自动生成，新增内容后重新 `build` / 部署即可。
