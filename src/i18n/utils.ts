import type { Lang } from './ui';

/** 站点 base 路径：本地与自定义域名时为 '/'，免费网址子路径部署时为 '/lab-website/' */
export const BASE = import.meta.env.BASE_URL;

/** 是否为合法语言 */
export function isLang(v: string): v is Lang {
  return v === 'zh' || v === 'en';
}

/** 去掉 base 前缀，得到以 '/' 开头的站内相对路径 */
function stripBase(pathname: string): string {
  if (BASE && BASE !== '/' && pathname.startsWith(BASE)) {
    return pathname.slice(BASE.length - 1);
  }
  return pathname;
}

/**
 * 根据当前页面 pathname 生成指定语言的对应 URL。
 * 例：/lab-website/zh/people/ -> /lab-website/en/people/
 */
export function localizedPath(pathname: string, lang: Lang): string {
  const p = stripBase(pathname);
  const parts = p.split('/').filter(Boolean);
  if (parts.length > 0 && isLang(parts[0])) {
    parts[0] = lang;
  } else {
    parts.unshift(lang);
  }
  const joined = parts.join('/');
  return BASE + joined + (joined.length ? '/' : '');
}

/** 生成某个导航项的带语言前缀链接 */
export function navHref(lang: Lang, path: string): string {
  const tail = path === '/' ? '' : path;
  return `${BASE}${lang}${tail}/`;
}

/** 生成静态资源（图片/文件）的完整路径，自动带 base 前缀 */
export function asset(src: string | undefined): string {
  if (!src) return '';
  if (src.startsWith('http')) return src;
  if (src.startsWith('/')) return BASE + src.slice(1);
  return src;
}
