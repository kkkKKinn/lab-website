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
  name_zh: 'AI作物感知与精准管控课题组',
  name_en: 'AI Crop Sensing and Precision Management Group',
  short_zh: 'AI作物感知与精准管控课题组',
  short_en: 'AICSPM  Group',
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
      postdoc: '博士后',
      phd: '博士',
      student: '研究生',
      undergrad: '本科生',
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
    home_gallery_title: '实验室掠影',
    home_gallery_desc: '记录田间试验、仪器设备与日常科研的瞬间。',
    home_partners_title: '合作伙伴',
    home_equipment_title: '仪器设备',
    home_people_title: '团队成员',
    // 成员页
    people_title: '团队成员',
    people_desc: '实验室的教师、研究人员与学生。',
    people_back: '返回团队成员',
    person_bio: '个人简介',
    person_contact: '联系方式',
    person_homepage: '个人主页',
    person_view: '查看详情',
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
      phd: 'Ph.D. Student',
      student: 'Graduate Student',
      undergrad: 'Undergraduate',
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
    home_gallery_title: 'Lab Gallery',
    home_gallery_desc: 'Moments from field trials, equipment and daily research.',
    home_partners_title: 'Partners',
    home_equipment_title: 'Equipment',
    home_people_title: 'People',
    people_title: 'People',
    people_desc: 'Faculty, researchers and students of the lab.',
    people_back: 'Back to people',
    person_bio: 'Biography',
    person_contact: 'Contact',
    person_homepage: 'Homepage',
    person_view: 'View profile',
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
  '/images/zhuYe1.jpg',
  '/images/ZhuYe2.jpg',
];

/**
 * 首页「实验室掠影」图集。
 *
 * 怎么加照片：
 *   1. 把图片文件放到 public/images/gallery/ 目录下（文件名建议用英文/数字，不要有空格）；
 *   2. 在下面的数组里加一行，src 写 '/images/gallery/文件名.jpg'；
 *   3. caption_zh / caption_en 是照片说明（鼠标悬停时显示，点击照片可放大看图）。
 *   数组留空 [] 时，首页会自动隐藏这个板块。
 */
export const galleryImages: { src: string; caption_zh: string; caption_en: string }[] = [
  { src: '/images/zhuYe1.jpg', caption_zh: '小麦田间试验', caption_en: 'Wheat field trial' },
  { src: '/images/ZhuYe2.jpg', caption_zh: '作物长势监测', caption_en: 'Crop growth monitoring' },
  {
    src: '/images/gallery/raspberry-pi.jpg',
    caption_zh: '树莓派边缘计算节点',
    caption_en: 'Raspberry Pi edge computing node',
  },
];

/**
 * 首页主体文案（Hero 标语、实验室简介正文、研究理念、实验室愿景）。
 * 全部中英成对存放；改这里就能更新首页文案，不必动页面结构。
 */
export const homeCopy = {
  heroTagline: {
    zh: '感知农田状态，理解作物需求，驱动精准管理',
    en: 'Sensing field status, understanding crop demand, driving precision management',
  },
  heroDesc: {
    zh: '融合遥感、近地感知、计算机视觉与人工智能，研究农田环境与作物状态的多尺度感知、动态理解和精准管理方法，服务作物高产、资源高效与农业绿色发展。',
    en: 'Integrating remote sensing, proximal sensing, computer vision and artificial intelligence, we study multi-scale perception, dynamic understanding and precision management of field environments and crop status, serving high yields, resource efficiency and green agricultural development.',
  },
  // 实验室简介正文（按数组顺序逐段渲染）
  intro: [
    {
      zh: 'AI作物感知与精准管控课题组 依托中国农业大学资源与环境学院和河北曲周农业绿色发展国家野外科学观测研究站，面向农业绿色发展与大面积单产提升需求，开展农田多源感知、作物状态诊断、资源需求解析与精准管理研究。',
      en: 'The AI Crop Sensing and Precision Management Group is affiliated with the College of Resources and Environmental Sciences of China Agricultural University and the Quzhou National Field Scientific Observation and Research Station for Agricultural Green Development in Hebei. Addressing the needs of agricultural green development and large-area yield improvement, we conduct research on multi-source field sensing, crop status diagnosis, resource demand analysis and precision management.',
    },
    {
      zh: '课题组融合卫星遥感、无人机遥感、近地传感、计算机视觉、多模态学习与人工智能等技术，获取并解析农田环境、作物群体结构、生长状态、水肥状况及管理信息，研究作物状态形成与动态变化规律。',
      en: 'The group integrates satellite remote sensing, UAV remote sensing, proximal sensing, computer vision, multimodal learning and artificial intelligence to acquire and interpret information on field environments, crop canopy structure, growth status, water and nutrient conditions, and management practices, and to investigate how crop status forms and evolves.',
    },
    {
      zh: '研究重点从传统的“指标反演”进一步拓展到状态理解、需求解析、管理响应与智能决策，探索从农田感知、作物诊断、需求预测到精准施肥、精准灌溉和变量作业的完整技术链。',
      en: 'Our research focus extends from conventional index retrieval to status understanding, demand analysis, management response and intelligent decision-making, spanning the full technical chain from field sensing, crop diagnosis and demand prediction to precision fertilization, precision irrigation and variable-rate operations.',
    },
  ],
  philosophyTitle: { zh: '研究理念', en: 'Research Philosophy' },
  philosophyDesc: {
    zh: '我们如何看待数据、模型与田间行动之间的关系。',
    en: 'How we think about data, models and action in the field.',
  },
  philosophy: [
    {
      title_zh: '从“获取数据”到“理解状态”',
      title_en: 'From “acquiring data” to “understanding status”',
      text_zh: '不仅追求更多传感器和更多数据，更关注数据能否真实表征作物与农田状态。',
      text_en: 'Beyond collecting more data with more sensors, we care whether the data truly represent crop and field status.',
    },
    {
      title_zh: '从“预测指标”到“解析需求”',
      title_en: 'From “predicting indices” to “analyzing demand”',
      text_zh: '不仅预测LAI、SPAD或氮含量，更关注这些指标背后的作物状态与管理需求。',
      text_en: 'Beyond predicting LAI, SPAD or nitrogen content, we care about the crop status and management needs behind these indices.',
    },
    {
      title_zh: '从“静态诊断”到“动态推断”',
      title_en: 'From “static diagnosis” to “dynamic inference”',
      text_zh: '利用多时期观测理解作物状态如何演化，以及管理措施如何改变其生长轨迹。',
      text_en: 'We use multi-temporal observations to understand how crop status evolves and how management practices reshape its growth trajectory.',
    },
    {
      title_zh: '从“模型结果”到“田间行动”',
      title_en: 'From “model outputs” to “field action”',
      text_zh: '最终让算法服务于施肥、灌溉、变量作业和农田管理，而不仅停留在模型精度。',
      text_en: 'Algorithms should ultimately serve fertilization, irrigation, variable-rate operations and field management — not stop at model accuracy.',
    },
  ],
  visionTitle: { zh: '实验室愿景', en: 'Our Vision' },
  vision: {
    zh: '构建农田状态感知、作物需求认知与精准管理的新范式，推动农业生产向智能化、精准化和绿色化演进。',
    en: 'We aim to establish a new paradigm for field status sensing, crop demand cognition and precision management, advancing agriculture toward intelligent, precise and green production.',
  },
};
