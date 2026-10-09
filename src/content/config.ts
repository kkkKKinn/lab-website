import { defineCollection, z } from 'astro:content';

/**
 * 内容集合定义。
 * 所有条目都使用「双语字段」——中文与英文内容成对存放（xxx_zh / xxx_en），
 * 页面根据当前语言只渲染对应字段，从而做到一键切换、绝不中英混排。
 */

const people = defineCollection({
  type: 'content',
  schema: z.object({
    name_zh: z.string(),
    name_en: z.string(),
    title_zh: z.string(), // 职称/头衔
    title_en: z.string(),
    // 角色：负责人 / 教师 / 博士后 / 博士 / 研究生 / 本科生 / 合作专家
    role: z.enum(['director', 'faculty', 'postdoc', 'phd', 'student', 'undergrad', 'collaborator']),
    bio_zh: z.string(),
    bio_en: z.string(),
    research_zh: z.string(),
    research_en: z.string(),
    email: z.string().optional(),
    avatar: z.string().optional(),
    homepage: z.string().optional(),
    order: z.number().default(0),
    // 勾选后出现在首页「团队成员」板块（最多 4 位）；不勾选则只出现在成员页
    featured: z.boolean().default(false),
  }),
});

const papers = defineCollection({
  type: 'content',
  schema: z.object({
    title_zh: z.string(),
    title_en: z.string(),
    authors: z.string(),
    year: z.number(),
    venue: z.string(), // 期刊/会议名
    type: z.enum(['journal', 'conference', 'patent', 'other']),
    doi: z.string().optional(),
    pdf: z.string().optional(),
    abstract_zh: z.string().optional(),
    abstract_en: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title_zh: z.string(),
    title_en: z.string(),
    summary_zh: z.string(),
    summary_en: z.string(),
    fund_zh: z.string().optional(), // 资助来源
    fund_en: z.string().optional(),
    image: z.string().optional(),
    status: z.enum(['ongoing', 'completed']).default('ongoing'),
    order: z.number().default(0),
  }),
});

const directions = defineCollection({
  type: 'content',
  schema: z.object({
    name_zh: z.string(), // 方向名称（中文）
    name_en: z.string(),
    desc_zh: z.string(), // 方向简介第一段（中文）
    desc_en: z.string(),
    detail_zh: z.string().optional(), // 方向简介第二段（中文，选填）
    detail_en: z.string().optional(),
    // 该方向的「重点内容」关键词列表，卡片上以小标签展示
    points_zh: z.array(z.string()).default([]),
    points_en: z.array(z.string()).default([]),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

const equipment = defineCollection({
  type: 'content',
  schema: z.object({
    name_zh: z.string(),
    name_en: z.string(),
    model: z.string(),
    category_zh: z.string(), // 分类：田间 / 室内 / 计算
    category_en: z.string(),
    desc_zh: z.string(),
    desc_en: z.string(),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

const partners = defineCollection({
  type: 'content',
  schema: z.object({
    name_zh: z.string(),
    name_en: z.string(),
    logo: z.string().optional(),
    url: z.string().optional(),
    desc_zh: z.string().optional(),
    desc_en: z.string().optional(),
    order: z.number().default(0),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title_zh: z.string(),
    title_en: z.string(),
    date: z.coerce.date(),
    summary_zh: z.string().optional(),
    summary_en: z.string().optional(),
    body_zh: z.string().optional(),
    body_en: z.string().optional(),
    cover: z.string().optional(),
    pinned: z.boolean().default(false),
  }),
});

export const collections = {
  people,
  papers,
  projects,
  directions,
  equipment,
  partners,
  news,
};
