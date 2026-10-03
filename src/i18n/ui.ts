/**
 * UI 文案字典（界面上的按钮、导航、标题等）。
 * 与内容集合不同——这里存放的是「界面语言」，而非数据内容。
 */
export type Lang = 'zh' | 'en';

export const languages: Lang[] = ['zh', 'en'];

export const langNames: Record<Lang, string> = {
  zh: '中文',
  en: 'English',
};

/** 实验室全局信息（双语） */
export const lab = {
  name_zh: 'AI作物养分智慧管控实验室',
  name_en: 'AI-Based Intelligent Crop Nutrient Management Lab',
  short_zh: 'AI作物养分智慧管控实验室',
  short_en: 'AICNM Lab Lab',
  org_zh: '中国农业大学 · 资源与环境学院',
  org_en: 'China Agricultural University · College of Resources and Environmental Sciences',
  address_zh: '北京市海淀区圆明园西路2号',
  address_en: 'No. 2 Yuanmingyuan West Road, Haidian District, Beijing.',
  email: '*******',
};

export interface NavItem {
  key: string;
  href: string;
  label_zh: string;
  label_en: string;
}

export const navItems: NavItem[] = [
  { key: 'home', href: '/', label_zh: '首页', label_en: 'Home' },
  { key: 'people', href: '/people', label_zh: '团队成员', label_en: 'People' },
  { key: 'research', href: '/research', label_zh: '研究方向', label_en: 'Research' },
  { key: 'publications', href: '/publications', label_zh: '论文成果', label_en: 'Publications' },
  { key: 'equipment', href: '/equipment', label_zh: '仪器设备', label_en: 'Equipment' },
  { key: 'partners', href: '/partners', label_zh: '合作单位', label_en: 'Partners' },
  { key: 'news', href: '/news', label_zh: '新闻动态', label_en: 'News' },
];

export const ui = {
  zh: {
    lang: '中文',
    langLabel: '语言',
    // 通用
    readMore: '了解更多',
    viewAll: '查看全部',
    learnMore: '详细了解',
    contact: '联系我们',
    email: '电子邮箱',
    researchInterests: '研究方向',
    roleLabel: '角色',
    // 角色名称
    roles: {
      director: '实验室负责人',
      faculty: '教师 / 研究员',
      postdoc: '博士',
      student: '研究生/本科生',
      collaborator: '合作专家',
    },
    // 首页
    home_hero_title: '以智能感知与 AI，推动现代农业发展',
    home_hero_sub:
      '我们聚焦作物表型、无人机遥感与人工智能交叉方向，构建从田间数据采集到模型决策的完整技术链条。',
    home_hero_cta: '了解研究方向',
    home_hero_cta2: '认识团队',
    home_stats_people: '团队成员',
    home_stats_papers: '发表论文',
    home_stats_projects: '在研项目',
    home_stats_equipment: '仪器设备',
    home_welcome_title: '实验室简介',
    home_welcome_body:
      '本实验室面向国家智慧农业重大需求，围绕……开展系统研究。',
    home_research_title: '研究方向',
    home_research_desc: '围绕智能农业的核心科学问题，开展多学科交叉研究。',
    home_news_title: '新闻动态',
    home_news_desc: '实验室最新进展与活动。',
    home_partners_title: '合作伙伴',
    home_equipment_title: '仪器设备',
    home_people_title: '团队成员',
    // 成员页
    people_title: '团队成员',
    people_desc: '实验室的教师、研究人员与学生。',
    // 研究页
    research_title: '研究方向',
    research_desc: '我们关注的核心科学问题与技术攻关方向。',
    research_ongoing: '在研项目',
    research_completed: '已结题项目',
    project_fund: '资助来源',
    // 论文页
    publications_title: '论文成果',
    publications_desc: '代表性论文、专利与会议成果。',
    pub_featured: '代表成果',
    pub_all: '全部成果',
    pub_abstract: '摘要',
    pub_pdf: 'PDF',
    pub_doi: 'DOI',
    pub_filter_all: '全部',
    pub_filter_journal: '期刊论文',
    pub_filter_conference: '会议论文',
    pub_filter_patent: '专利',
    pub_filter_other: '其他',
    // 设备页
    equipment_title: '仪器设备',
    equipment_desc: '支撑研究的仪器平台与计算资源。',
    equipment_model: '型号',
    // 合作页
    partners_title: '合作单位',
    partners_desc: '与国内外高校、科研机构与企业的合作。',
    // 新闻页
    news_title: '新闻动态',
    news_desc: '实验室的最新消息与活动公告。',
    news_back: '返回新闻列表',
    news_pinned: '置顶',
    // 页脚
    footer_desc: '以智能感知与人工智能服务现代农业。',
    footer_nav: '导航',
    footer_contact: '联系方式',
    footer_copyright: '版权所有',
    // 语言
    switchTo: 'English',
  },
  en: {
    lang: 'English',
    langLabel: 'Language',
    readMore: 'Read more',
    viewAll: 'View all',
    learnMore: 'Learn more',
    contact: 'Contact',
    email: 'Email',
    researchInterests: 'Research Interests',
    roleLabel: 'Role',
    roles: {
      director: 'Principal Investigator',
      faculty: 'Faculty / Researcher',
      postdoc: 'Postdoctoral Fellow',
      student: 'Graduate Student',
      collaborator: 'Collaborating Expert',
    },
    home_hero_title: 'Advancing Modern Agriculture with Intelligent Sensing & AI',
    home_hero_sub:
      'We work at the intersection of crop phenotyping, UAV remote sensing, and artificial intelligence, building a full pipeline from field data acquisition to model-driven decision making.',
    home_hero_cta: 'Our Research',
    home_hero_cta2: 'Meet the Team',
    home_stats_people: 'Members',
    home_stats_papers: 'Publications',
    home_stats_projects: 'Active Projects',
    home_stats_equipment: 'Instruments',
    home_welcome_title: 'About the Lab',
    home_welcome_body:
      'Our lab addresses the major demands of smart agriculture through systematic research on ...',
    home_research_title: 'Research Directions',
    home_research_desc: 'Multidisciplinary research on core scientific questions of intelligent agriculture.',
    home_news_title: 'News',
    home_news_desc: 'Latest updates and activities of the lab.',
    home_partners_title: 'Partners',
    home_equipment_title: 'Equipment',
    home_people_title: 'People',
    people_title: 'People',
    people_desc: 'Faculty, researchers and students of the lab.',
    research_title: 'Research',
    research_desc: 'Core scientific questions and technical directions we focus on.',
    research_ongoing: 'Ongoing Projects',
    research_completed: 'Completed Projects',
    project_fund: 'Funding',
    publications_title: 'Publications',
    publications_desc: 'Selected papers, patents and conference proceedings.',
    pub_featured: 'Selected Works',
    pub_all: 'All Publications',
    pub_abstract: 'Abstract',
    pub_pdf: 'PDF',
    pub_doi: 'DOI',
    pub_filter_all: 'All',
    pub_filter_journal: 'Journal',
    pub_filter_conference: 'Conference',
    pub_filter_patent: 'Patent',
    pub_filter_other: 'Other',
    equipment_title: 'Equipment',
    equipment_desc: 'Instrument platform and computing resources.',
    equipment_model: 'Model',
    partners_title: 'Partners',
    partners_desc: 'Collaboration with universities, institutes and industry.',
    news_title: 'News',
    news_desc: 'Latest news and announcements.',
    news_back: 'Back to news',
    news_pinned: 'Pinned',
    footer_desc: 'Serving modern agriculture with intelligent sensing and AI.',
    footer_nav: 'Navigation',
    footer_contact: 'Contact',
    footer_copyright: 'All rights reserved.',
    switchTo: '中文',
  },
} as const;

export type UIKey = keyof typeof ui.zh;

/** 取某语言的 UI 文案对象 */
export function t(lang: Lang) {
  return ui[lang];
}


/**
 * 首页顶部背景轮播图（每 10 秒自动切换一张）。
 * 在下面数组里加一行，写 '/images/图片文件名'，文件名必须与上传的完全一致。
 * 不想放图就保持空数组 []。
 */
export const heroImages: string[] = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
];
