/* ============ intelliland · 智能体数据 ============ */
/* 单一数据源：首页轮播、商店列表、详情页全部从这里读取 */

const MLA_DEFAULT = [
  { ico: "share", t: "可分享", d: "一键分享给家人好友，一起感受温暖。" },
  { ico: "book", t: "可回顾", d: "随时回顾精彩内容，重温美好时光。" },
  { ico: "wallet", t: "可付费", d: "精品内容持续更新，支持创作者。" },
];

const AGENTS = [
  {
    id: "bedtime",
    title: "睡前小故事",
    icon: "🌙",
    scene: "scene-night",
    moon: true, stars: true,
    category: "陪伴",
    keywords: "睡前 故事 助眠 亲子 放松 晚安",
    rank: 1, featured: true,
    img: "assets/cards/bedtime.png",
    subtitle: "温柔的故事，陪你进入梦乡。",
    hero: {
      sub: "温柔的故事，陪你慢慢进入梦乡。",
      desc: "精选温暖治愈的原创故事，为你营造安心的睡前时光。记住你的喜好、延续你喜欢的角色，陪你一起把故事讲到入睡。",
      cta1: "立即体验", cta2: "分享给家人",
    },
    features: [
      { ico: "leaf", t: "睡前放松", d: "舒缓的节奏与温柔的语言，帮助你放松身心，轻松入睡。" },
      { ico: "people", t: "亲子陪伴", d: "与孩子一起进入想象世界，建立专属的晚安仪式。" },
      { ico: "heart", t: "记住你的偏好", d: "记住你喜欢的故事、角色与细节，下次继续讲到你爱听的地方。" },
    ],
    scenarios: {
      heading: "适合这样的夜晚",
      items: [
        { t: "想要放松身心，准备入睡", d: "在忙碌一天后，听一个温柔的故事，让思绪慢慢平静下来。" },
        { t: "和孩子一起享受亲子时光", d: "陪孩子进入奇妙的故事世界，建立专属的温暖回忆。" },
        { t: "想回到上次的故事继续听", d: "自动延续上次的故事情节，接着你喜欢的地方继续。" },
      ],
    },
    why: {
      heading: "为什么「睡前小故事」与众不同",
      items: [
        { t: "记住你喜欢的角色", d: "自动记住你偏好的角色与设定，打造专属的故事世界。",
          extra: `<div class="chip"><div class="av"></div><div><b>小兔团团</b><small>勇敢又善良的小兔子，最喜欢胡萝卜和月亮。</small></div><div class="ok">✓</div></div>` },
        { t: "延续上次的故事线", d: "自动回到上次的剧情节点，无缝继续，不用重复说明。",
          extra: `<div class="msg"><div class="mi">🌙</div><div><small>上次听到</small>团团找到了月亮森林的入口…</div></div><div class="msg"><div class="mi">✦</div><div><small>今天继续</small>入口后面藏着怎样的秘密呢？</div></div>` },
        { t: "根据心情调整语气", d: "可根据你的心情与需求，调整故事的风格与语气。",
          extra: `<div class="opt sel">😌 温柔舒缓 <span class="tick">✓</span></div><div class="opt">✨ 奇幻冒险</div><div class="opt">🙂 轻松幽默</div>` },
      ],
    },
    mla: [
      { ico: "share", t: "可分享", d: "一键分享给家人，一起感受温暖。" },
      { ico: "book", t: "可回顾", d: "随时回顾精彩故事，重温美好时光。" },
      { ico: "wallet", t: "可付费", d: "精品内容持续更新，支持创作者。" },
    ],
    closing: { t: "今晚就听一个小故事", sub: "让温柔的故事，陪你慢慢进入梦乡。" },
  },

  {
    id: "turtlesoup",
    title: "海龟汤推理游戏",
    icon: "🐢",
    scene: "scene-game",
    stars: true,
    category: "推理",
    keywords: "推理 海龟汤 烧脑 聚会 游戏 朋友",
    rank: 2, featured: true,
    img: "assets/cards/turtlesoup.png",
    subtitle: "烧脑推理，激发想象，逻辑狂喜。",
    hero: {
      sub: "烧脑推理，激发想象，逻辑狂喜。",
      desc: "经典海龟汤情景推理，一人主持、众人竞猜。它会给出恰到好处的提示，让每一次聚会都充满悬念与笑声。",
      cta1: "立即体验", cta2: "邀请朋友",
    },
    features: [
      { ico: "leaf", t: "无限题库", d: "从轻松到烧脑，持续更新的原创谜题，永远有新汤可喝。" },
      { ico: "people", t: "多人同乐", d: "适合朋友聚会、家庭游戏，气氛瞬间被点燃。" },
      { ico: "heart", t: "智能提示", d: "卡住时给出不剧透的线索，让推理保持爽感。" },
    ],
    scenarios: {
      heading: "适合这样的时刻",
      items: [
        { t: "朋友聚会想热场", d: "一道好汤，瞬间打开话匣子，全场一起烧脑。" },
        { t: "想锻炼逻辑思维", d: "在抽丝剥茧中享受推理的快感，越想越上头。" },
        { t: "一个人也想玩", d: "随时来一局，主持人为你出题、给提示、揭真相。" },
      ],
    },
    why: {
      heading: "为什么「海龟汤」与众不同",
      items: [
        { t: "恰到好处的提示", d: "既不剧透，也不让你卡死，节奏拿捏得刚刚好。" },
        { t: "难度自由调节", d: "新手友好到地狱难度，按你的状态自由选择。" },
        { t: "记录你的战绩", d: "回顾你解开过的谜题，见证推理力的成长。" },
      ],
    },
    mla: MLA_DEFAULT,
    closing: { t: "来喝一碗海龟汤吧", sub: "和朋友一起，享受抽丝剥茧的逻辑狂喜。" },
  },

  {
    id: "memory",
    title: "记忆档案馆",
    icon: "🗂️",
    scene: "scene-mem",
    category: "记忆",
    keywords: "记忆 照片 回忆 档案 家庭 记录",
    rank: 3, featured: true,
    img: "assets/cards/memory.png",
    subtitle: "记录你的人生故事，珍藏回忆。",
    hero: {
      sub: "把重要的人和事，好好收进记忆里。",
      desc: "珍藏生活中值得铭记的瞬间，让照片、故事与情感，在时间里安放，从此不再遗忘。",
      cta1: "立即体验", cta2: "开始记录",
    },
    features: [
      { ico: "image", t: "记录回忆", d: "珍藏照片与故事，留住珍贵瞬间。" },
      { ico: "clock", t: "随时回顾", d: "按时间整理，随时重温过往。" },
      { ico: "layers", t: "持续沉淀", d: "越记越多，回忆越有温度。" },
    ],
    scenarios: {
      heading: "适合记录这些时刻",
      items: [
        { t: "家庭照片与日常回忆", d: "孩子的成长、家庭的日常，重要的相聚时刻。" },
        { t: "旅行见闻与旧日故事", d: "每一次出发，都是一段值得记住的故事。" },
        { t: "人生阶段与重要里程碑", d: "毕业、结婚、乔迁、生日…每一步都值得纪念。" },
      ],
    },
    why: {
      heading: "为什么记忆档案馆与众不同",
      items: [
        { t: "照片 + 故事", d: "为每一张照片，写下当时的心情与故事，让回忆更完整。" },
        { t: "按时间整理", d: "智能按时间轴归档，清晰有序，帮你轻松找到每一段回忆。" },
        { t: "家庭共同回顾", d: "邀请家人一起记录与回顾，共同守护家族的记忆。" },
      ],
    },
    mla: [
      { ico: "share", t: "可分享", d: "邀请家人好友一起记录与查看。" },
      { ico: "book", t: "可回顾", d: "按时间、标签、人物多维回顾。" },
      { ico: "wallet", t: "可付费", d: "高品质存储，长期安全保存。" },
    ],
    closing: { t: "把回忆好好存下来", sub: "让珍贵的回忆，有处安放，且历久弥新。" },
  },

  {
    id: "pet",
    title: "虚拟宠物",
    icon: "🐶",
    scene: "scene-pet",
    category: "宠物",
    keywords: "宠物 陪伴 治愈 日常 萌宠",
    img: "assets/cards/pet.png",
    subtitle: "陪伴日常，治愈每一天。",
    hero: {
      sub: "陪伴日常，治愈每一天。",
      desc: "一只懂你的小家伙，会撒娇、会想你、会陪你聊天。它在你需要的时候出现，把平凡的日子变得柔软。",
      cta1: "立即体验", cta2: "领养它",
    },
    features: [
      { ico: "heart", t: "情感陪伴", d: "会记得你的喜怒哀乐，在你需要时温柔回应。" },
      { ico: "leaf", t: "日常互动", d: "喂养、玩耍、散步，一起度过有仪式感的每一天。" },
      { ico: "people", t: "成长养成", d: "陪伴越久，它越懂你，关系越亲密。" },
    ],
    scenarios: {
      heading: "适合这样的日常",
      items: [
        { t: "一个人也想被陪伴", d: "下班回家，有个小家伙在等你、想你。" },
        { t: "想要被治愈的时刻", d: "心情低落时，它的撒娇能融化一整天的疲惫。" },
        { t: "养成属于你的关系", d: "在日复一日的互动里，建立独一无二的羁绊。" },
      ],
    },
    why: {
      heading: "为什么「虚拟宠物」与众不同",
      items: [
        { t: "真的会记得你", d: "记住你说过的话、在意的事，不只是程序化回应。" },
        { t: "有自己的小情绪", d: "会开心、会想你、偶尔也会闹小脾气，鲜活又真实。" },
        { t: "陪伴值得回顾", d: "记录你们的点滴，回看一起走过的温暖时光。" },
      ],
    },
    mla: MLA_DEFAULT,
    closing: { t: "领养一只懂你的小家伙", sub: "让它陪你，把平凡的日子过得柔软。" },
  },

  {
    id: "familytree",
    title: "家族树",
    icon: "🌳",
    scene: "scene-tree",
    stars: true,
    category: "记忆",
    keywords: "家族 家谱 亲情 传承 记录 世代",
    img: "assets/cards/familytree.png",
    subtitle: "梳理家族脉络，连接世代故事。",
    hero: {
      sub: "梳理家族脉络，连接世代故事。",
      desc: "把散落的家族记忆连成一棵树。记录每一位亲人的故事，让血脉与温情在世代之间传递下去。",
      cta1: "立即体验", cta2: "创建家族",
    },
    features: [
      { ico: "people", t: "家族图谱", d: "清晰梳理成员关系，一目了然的家族脉络。" },
      { ico: "image", t: "人物故事", d: "为每位亲人记录照片、生平与难忘的故事。" },
      { ico: "layers", t: "世代传承", d: "把家族记忆留给下一代，让温情延续。" },
    ],
    scenarios: {
      heading: "适合这样的时刻",
      items: [
        { t: "想梳理家族关系", d: "理清亲人之间的脉络，再复杂也清清楚楚。" },
        { t: "想留住长辈的故事", d: "趁还来得及，记录下他们的人生与智慧。" },
        { t: "想让孩子了解根脉", d: "让下一代知道，自己从哪里来。" },
      ],
    },
    why: {
      heading: "为什么「家族树」与众不同",
      items: [
        { t: "不止关系，更有故事", d: "每个节点都能承载照片与生平，家谱也有温度。" },
        { t: "全家一起共建", d: "邀请亲人共同补充，记忆不再只靠一个人。" },
        { t: "世代安全保存", d: "珍贵的家族记忆，长期妥善地保存下来。" },
      ],
    },
    mla: [
      { ico: "share", t: "可分享", d: "邀请全家共同记录与查看。" },
      { ico: "book", t: "可回顾", d: "按人物、世代多维回顾家族故事。" },
      { ico: "wallet", t: "可付费", d: "高品质存储，世代安全保存。" },
    ],
    closing: { t: "种下一棵家族树", sub: "让血脉与温情，在世代之间继续生长。" },
  },

  {
    id: "treehole",
    title: "树洞倾诉",
    icon: "🫧",
    scene: "scene-warm",
    category: "治愈",
    keywords: "倾诉 树洞 情绪 治愈 陪伴 倾听",
    img: "assets/cards/treehole.png",
    subtitle: "随时倾诉，温柔接住你的情绪。",
    hero: {
      sub: "随时倾诉，温柔接住你的每一种情绪。",
      desc: "一个永远在线、不评判的树洞。把心里的话说出来，它会认真倾听、温柔回应，陪你慢慢把情绪安放好。",
      cta1: "立即体验", cta2: "了解更多",
    },
    features: [
      { ico: "heart", t: "不评判的倾听", d: "无论你说什么，它都温柔接住，不评判、不说教。" },
      { ico: "leaf", t: "情绪梳理", d: "陪你把混乱的感受一点点理清，找回平静。" },
      { ico: "book", t: "私密安心", d: "你的心事只属于你，随时倾诉，无需顾虑。" },
    ],
    scenarios: {
      heading: "适合这样的时刻",
      items: [
        { t: "心里有事想说说", d: "深夜难眠、情绪上头，有个地方让你好好倾诉。" },
        { t: "想被认真倾听", d: "不需要建议，只想要一个温柔的回应。" },
        { t: "想梳理纷乱的心绪", d: "把感受说出口，它陪你慢慢理清头绪。" },
      ],
    },
    why: {
      heading: "为什么「树洞倾诉」与众不同",
      items: [
        { t: "先共情，再回应", d: "不急着给答案，先认真接住你的情绪。" },
        { t: "记得你的状态", d: "记住你最近的心情，回应更贴心、更连贯。" },
        { t: "回看你的成长", d: "回顾走过的情绪起伏，看见自己慢慢变好。" },
      ],
    },
    mla: MLA_DEFAULT,
    closing: { t: "有心事，就来树洞说说", sub: "让温柔的倾听，接住你的每一种情绪。" },
  },

  {
    id: "scheduler",
    title: "日程管家",
    icon: "⏰",
    scene: "scene-ink",
    category: "效率",
    keywords: "日程 效率 提醒 安排 时间 管家",
    img: "assets/cards/scheduler.png",
    subtitle: "贴心安排每一天，省心又高效。",
    hero: {
      sub: "贴心安排每一天，让生活省心又高效。",
      desc: "用一句话安排好你的日程。它帮你规划时间、提醒待办、复盘一天，让忙碌也变得井井有条。",
      cta1: "立即体验", cta2: "了解更多",
    },
    features: [
      { ico: "clock", t: "智能排期", d: "一句话创建日程，自动规划合理的时间安排。" },
      { ico: "leaf", t: "贴心提醒", d: "在恰当的时间提醒你，重要的事不再遗漏。" },
      { ico: "layers", t: "每日复盘", d: "一天结束帮你回顾，明天更从容。" },
    ],
    scenarios: {
      heading: "适合这样的时刻",
      items: [
        { t: "事情多到记不过来", d: "把待办交给它，大脑只负责专注当下。" },
        { t: "想规划好一整天", d: "早上一句话，帮你排好今天的节奏。" },
        { t: "想坚持好习惯", d: "定时提醒、温柔督促，习惯慢慢养成。" },
      ],
    },
    why: {
      heading: "为什么「日程管家」与众不同",
      items: [
        { t: "懂自然语言", d: "像和朋友说话一样安排日程，不用学复杂操作。" },
        { t: "主动而不打扰", d: "在你需要时提醒，分寸拿捏得刚刚好。" },
        { t: "复盘可回顾", d: "记录你的每一天，回看时间都去了哪里。" },
      ],
    },
    mla: MLA_DEFAULT,
    closing: { t: "把日程交给管家", sub: "让每一天都井井有条，省心又高效。" },
  },

  {
    id: "inkwriting",
    title: "灵感写作",
    icon: "✏️",
    scene: "scene-leaf",
    category: "创作",
    keywords: "写作 创作 灵感 文案 表达 文字",
    img: "assets/cards/inkwriting.png",
    subtitle: "陪你把想法，写成好文字。",
    hero: {
      sub: "陪你把脑海里的想法，写成动人的文字。",
      desc: "从一个念头到一篇成稿，它陪你构思、打磨、润色。无论日记、文案还是故事，让表达变得轻松。",
      cta1: "立即体验", cta2: "了解更多",
    },
    features: [
      { ico: "leaf", t: "灵感激发", d: "卡壳时给你方向，让想法源源不断地涌现。" },
      { ico: "image", t: "风格打磨", d: "按你的语气与场景，润色出最合适的文字。" },
      { ico: "book", t: "成稿沉淀", d: "把每一篇作品好好留存，见证你的表达成长。" },
    ],
    scenarios: {
      heading: "适合这样的时刻",
      items: [
        { t: "有想法却写不出", d: "把零碎的念头交给它，陪你理出清晰的脉络。" },
        { t: "想让文字更动人", d: "润色语句、调整语气，让表达更有感染力。" },
        { t: "想坚持记录与创作", d: "日记、随笔、故事，陪你把灵感持续写下去。" },
      ],
    },
    why: {
      heading: "为什么「灵感写作」与众不同",
      items: [
        { t: "懂你的语气", d: "学习你的表达习惯，写出来仍然是你的声音。" },
        { t: "陪伴式创作", d: "不替你写，而是陪你写，灵感由你主导。" },
        { t: "作品可回顾", d: "沉淀你的每一篇创作，回看成长的轨迹。" },
      ],
    },
    mla: MLA_DEFAULT,
    closing: { t: "把想法，写成好文字", sub: "让表达更轻松，让灵感持续生长。" },
  },

  {
    id: "artisan",
    title: "知识世界匠人",
    icon: "🌍",
    scene: "scene-warm",
    category: "亲子",
    keywords: "知识 探索 科普 启蒙 世界 亲子 好奇 STEM",
    rank: 4, featured: true,
    img: "assets/cards/artisan.png",
    subtitle: "亲手搭建，探索广阔世界。",
    hero: {
      sub: "把好奇心，变成亲手搭建的小世界。",
      desc: "像匠人一样，一点点拼出属于自己的知识世界。从地理到历史，从科学到人文，它把抽象的知识，变成可以动手探索的奇妙旅程。",
      cta1: "立即体验", cta2: "开始探索",
    },
    features: [
      { ico: "leaf", t: "动手探索", d: "在搭建与拼装中理解知识，越玩越懂。" },
      { ico: "book", t: "广博知识", d: "地理、历史、科学、人文，一座可以漫游的知识世界。" },
      { ico: "heart", t: "激发好奇", d: "顺着你的疑问继续延展，让好奇心不断生长。" },
    ],
    scenarios: {
      heading: "适合这样的时刻",
      items: [
        { t: "孩子总爱问为什么", d: "用可触摸的方式回答好奇，让答案变得生动有趣。" },
        { t: "想做有意义的亲子陪伴", d: "和孩子一起搭建知识世界，在玩中学、在做中懂。" },
        { t: "想系统地认识世界", d: "由点及面，把零散的知识，连成完整的版图。" },
      ],
    },
    why: {
      heading: "为什么「知识世界匠人」与众不同",
      items: [
        { t: "把知识变成手作", d: "抽象概念变成可搭建的模型，理解更深刻。" },
        { t: "顺着好奇延展", d: "围绕你的兴趣不断延伸，学习由你主导。" },
        { t: "成长看得见", d: "你搭建的世界会一点点变大，见证认知的成长。" },
      ],
    },
    mla: MLA_DEFAULT,
    closing: { t: "亲手搭一座知识世界", sub: "让每一次探索，都成为成长的印记。" },
  },

  {
    id: "picturebook",
    title: "AI 绘本工坊",
    icon: "🎨",
    scene: "scene-leaf",
    category: "创作",
    keywords: "绘本 创作 故事 插画 亲子 想象 工坊 AI",
    rank: 5, featured: true,
    img: "assets/cards/picturebook.png",
    subtitle: "想象成画，故事成书。",
    hero: {
      sub: "把天马行空的想象，变成一本属于你的绘本。",
      desc: "你说故事，它来作画。从角色设定到画面分镜，陪你一页页创作专属绘本，让每个奇思妙想都有了模样。",
      cta1: "立即体验", cta2: "创作绘本",
    },
    features: [
      { ico: "image", t: "想象成画", d: "把脑海里的画面，变成温暖细腻的绘本插画。" },
      { ico: "book", t: "故事成书", d: "从构思到成册，陪你完成一本完整的绘本。" },
      { ico: "people", t: "亲子共创", d: "和孩子一起编故事、画画面，共同完成一本作品。" },
    ],
    scenarios: {
      heading: "适合这样的时刻",
      items: [
        { t: "孩子有了奇妙的点子", d: "把孩子的想象画下来，做成只属于他的绘本。" },
        { t: "想给孩子定制故事", d: "以孩子为主角，创作一本独一无二的睡前绘本。" },
        { t: "想留下创作的回忆", d: "把一起创作的绘本珍藏起来，成为温暖的纪念。" },
      ],
    },
    why: {
      heading: "为什么「AI 绘本工坊」与众不同",
      items: [
        { t: "画风温暖统一", d: "整本绘本风格一致，像真正的出版作品。" },
        { t: "你主导创作", d: "故事走向由你决定，它负责把画面实现。" },
        { t: "作品可珍藏", d: "成册的绘本可回看、可分享，留住每一次创作。" },
      ],
    },
    mla: MLA_DEFAULT,
    closing: { t: "把想象，做成一本绘本", sub: "让每个奇思妙想，都有被珍藏的模样。" },
  },
];

/* 分类（与商店一致） */
const CATEGORIES = [
  { img: "assets/cats/companion.png",  name: "陪伴" },
  { img: "assets/cats/reasoning.png",  name: "推理" },
  { img: "assets/cats/memory.png",     name: "记忆" },
  { img: "assets/cats/kids.png",       name: "亲子" },
  { img: "assets/cats/pet.png",        name: "宠物" },
  { img: "assets/cats/efficiency.png", name: "效率" },
  { img: "assets/cats/creation.png",   name: "创作" },
  { img: "assets/cats/healing.png",    name: "治愈" },
];

/* 小图标库（detail / mla 用） */
const ICONS = {
  share: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>',
  book: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"/></svg>',
  wallet: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M16 12h3M3 9h13a2 2 0 0 1 0 4"/></svg>',
  leaf: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 1 9-2.5 13a6.9 6.9 0 0 1-5.5 5z"/><path d="M2 22c0-5 4-8 9-9"/></svg>',
  people: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M17.5 14.2A6.5 6.5 0 0 1 21.5 20"/></svg>',
  heart: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 20s-7-4.6-9.3-9A5 5 0 0 1 12 6a5 5 0 0 1 9.3 5c-2.3 4.4-9.3 9-9.3 9z"/></svg>',
  image: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="4" width="18" height="16" rx="2.5"/><circle cx="8.5" cy="9.5" r="1.7"/><path d="m4 18 5-5 4 3 3-2.5 4 4.5"/></svg>',
  clock: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  layers: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m12 3 9 5-9 5-9-5 9-5z"/><path d="m3 13 9 5 9-5M3 16.5l9 5 9-5"/></svg>',
};

function getAgent(id){ return AGENTS.find(a => a.id === id); }
