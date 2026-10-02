// @ts-check
import { defineConfig } from 'astro/config';

// 免费网址部署：https://kkkkkinn.github.io/lab-website/
// base 必须是 '/lab-website/'（子路径部署）。
// 以后绑定自定义域名时：把 base 改回 '/'，site 改成你的域名。
const site = 'https://kkkkkinn.github.io/lab-website';
const base = '/lab-website/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
});
