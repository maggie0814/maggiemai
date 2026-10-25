import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import CaseStudy from './components/CaseStudy'
import { editorialCases } from './data/editorialCases'
import { iceMirrorCases } from './data/iceMirrorCases'
import { creatorCollabCases } from './data/creatorCollabCases'

const xhsProjectUrl = 'https://www.xiaohongshu.com/user/profile/6039aa410000000001002cad?xhsshare=CopyLink&appuid=5ad49c2511be104c527cb1c5&apptime=1725431619&share_id=48d928a4126045f2a7027950eeb4c2af'
const colorkeyXhsUrl = ''
const facebookLinks = {
  profile: '',
  yangchengHealth: 'https://www.facebook.com/zhangzhongde',
  chaoOpera: 'https://www.facebook.com/profile.php?id=100095144603067',
  jinchengArt: 'https://www.facebook.com/profile.php?id=61558212601742'
}

const works = [
  {
    id: 'water-mist', title: '珂拉琪水雾唇露 2.0', category: '珂拉琪项目', label: '品牌 S+ 项目', year: '项目期：2025.06—至今', image: '/images/lip-look.png', imageAlt: '水雾唇露内容创意页面截图',
    intro: '负责品牌 S+ 重点项目，统筹达人资源、内容策略与项目执行。围绕「水雾唇露」持续优化内容方向，建立古风、跨界与情绪表达等内容路径。',
    role: '项目负责人：制定达人与内容方向，推动合作内容共创、落地和复盘。',
    outcomes: ['品牌搜索峰值同比增长 104%', '活动后搜索底盘稳定在 6–9 万'],
    source: '来源：《个人简历麦家恩(2026）》；项目策略亦见《米花.pptx》第 11 页。具体项目周期、搜索峰值统计口径及搜索底盘统计周期待确认。',
    links: []
  },
  {
    id: 'top-note', title: '年度 Top 笔记', category: '珂拉琪项目', label: '内容创意 / 小红书', year: '年度作品', image: '/images/creator-notes.png', imageAlt: '美妆笔记创意截图',
    intro: '以节庆自嘲和群体情绪为切口，原创内容创意并与达人共创，把较低单篇预算转化为高互动笔记。',
    role: '负责创意方向与达人共创；年度总结称 Idea 为个人原创。',
    outcomes: ['单篇预算 200 元', 'CPE 0.31', '近 3 万互动'],
    source: '来源：《个人简历麦家恩(2026）》及《米花.pptx》第 7 页。年度统计窗口、互动定义与平台归因范围未注明，待确认。',
    links: []
  },
  {
    id: 'lucky-purple', title: '三八节「开运紫唇露」', category: '珂拉琪项目', label: '节日内容 / 女性表达', year: '三八节内容案例', image: '/images/beauty-content.png', imageAlt: '节日美妆内容截图',
    intro: '借鱼玄机的女性力量重新诠释「开运」，把节日话题、品牌东方气质与女性表达放进同一内容策略。',
    role: '围绕历史女性力量提炼洞察，参与古风叙事、情绪共鸣与达人内容共创。',
    outcomes: ['前端互动 3 万+', '年度总结记载：CPTI 曝光开运紫唇露品类最高'],
    source: '来源：《米花.pptx》第 8 页。活动年份、CPTI 指标定义与比较范围待确认。',
    links: []
  },
  {
    id: 'ice-mirror', title: '小冰块唇镜', category: '珂拉琪项目', label: '618 品效项目', year: '618 内容案例', image: '/images/creator-collab.png', imageAlt: '达人试色内容合作画面',
    intro: '围绕干瘪唇、唇纹等用户痛点，测试封面与表达方式，并把「痛点 + 解决方案」沉淀为后续可复用的内容结构。',
    role: '参与内容策略、封面优化、多角度测试、投放节奏与指标跟进。',
    outcomes: ['围绕 CPUV、CTR、CPC 等投放表现持续调整内容与封面方向。'],
    source: '来源：《米花.pptx》第 13 页。材料未注明指标周期、对照范围和数值。',
    links: []
  },
  {
    id: 'live', title: '达人直播业务增长', category: '创作者运营', label: '达人直播 / GMV & ROI', year: '2024 下半年 → 2025 下半年', image: '/images/creator-collab.png', imageAlt: '达人合作内容截图',
    intro: '跟进达人合作与直播项目，根据流量、转化表现协同优化合作和执行节奏。年度总结描述通过达人规模扩张、内容优化和投放策略迭代实现增长。',
    role: '参与达人直播业务的合作跟进与项目执行，并结合流量、转化表现参与复盘。',
    outcomes: ['GMV：11.9 万元（2024 下半年）→ 33.3 万元（2025 下半年）', 'ROI：3.54（2024 下半年）→ 6.07（2025 下半年）'],
    source: '基期与增长期来自《米花.pptx》第 14 页；GMV 与 ROI 数值来自《个人简历麦家恩(2026）》。统计期为 2024 下半年与 2025 下半年；业务归属、个人/团队贡献及前后统计范围待核。',
    links: []
  },
  {
    id: 'creator-pool', title: '置换达人资源池', category: '小红书运营', label: '创作者合作 / 资源建设', year: '2025 年度', image: '/images/creator-collab.png', imageAlt: '创作者合作画面',
    intro: '从零开始扩展小红书置换达人资源，持续挖掘、筛选、建联和维护创作者，并推动部分达人转为品牌买手。',
    role: '负责达人拓展与沟通、合作推进、内容 Brief、产出跟进、效果反馈和部分买手转化。',
    outcomes: ['资源池：130+ → 230+', '2025 年度投放 651 篇', '2026 年 4 月单月四品投放 167 篇'],
    source: '来源：《个人简历麦家恩(2026）》；《米花.pptx》第 4、5、16 页。651 篇是 2025 年度总量，167 篇是 2026 年 4 月单月四品峰值，两者时期不同。651 篇具体统计区间与团队均值计算方式待确认。',
    links: [{ label: '查看小红书运营项目账号 kepelon2021', href: xhsProjectUrl }]
  },
  {
    id: 'bilibili', title: 'B 站游戏内容账号「婠锶er鸭」', category: 'B站个人账号运营', label: '樱花校园模拟器 / 个人创作', year: '持续运营一年', image: '/images/bilibili-creator-center.jpg', imageAlt: '婠锶er鸭 B 站创作中心数据截图', contain: true,
    intro: '从 0 到 1 搭建游戏内容账号，持续运营一年，累计 600+ 粉丝、40 万+播放。',
    approach: '以游戏视频和混剪为主要内容形式，根据平台生态与用户反馈调整选题。',
    content: '持续运营一年，账号累计 600+ 粉丝、40 万+播放量；通过评论互动与选题调整维护粉丝黏性。',
    role: '负责内容选题、视频策划及粉丝互动，根据用户反馈设计受众感兴趣的内容并维护账号社群氛围。',
    outcomes: ['600+ 粉丝', '40 万+ 播放量'],
    links: [{ label: '访问婠锶er鸭的 B 站主页', href: 'https://space.bilibili.com/439759492' }]
  },
  {
    id: 'gdtv-article-1', title: '《顺德地道农家美食，一起笑哈哈品美味～》', category: '广东广播电视台', label: '《全民叹世界》 / 顺德美食', year: '公众号作品', image: '/images/source-tv-shunde.png', imageAlt: '《全民叹世界》顺德餐厅探店节目画面',
    intro: '为《全民叹世界》珠江频道节目进行新媒体预热，本期探访顺德大笑饭堂。以全民品鉴官的探店体验为主线，呈现顺德特色菜品与传统饮食文化，为电视节目引流。',
    content: '完成顺德美食探店推文，围绕特色菜品、食材做法与品鉴体验展开内容呈现。结合节目播出时间、频道及餐厅地址，形成从美食种草到节目导流的传播链路。',
    role: '负责微信公众号推文的图文编辑与内容包装。梳理探店素材，提炼招牌菜品和主理人介绍，完成文章结构、菜品文案及节目播出信息编排。',
    outcomes: [],
    links: [{ label: '查看原文', href: 'https://mp.weixin.qq.com/s/468A7zAZPloaYu0Yw2a7MQ' }]
  },
  {
    id: 'gdtv-article-2', title: '《垂涎三尺！绝对不容错过的地道海南风味》', category: '广东广播电视台', label: '《全民叹世界》 / 海南风味', year: '公众号作品', image: '/images/source-tv-food-room.png', imageAlt: '《全民叹世界》海南风味探店节目画面',
    intro: '为《全民叹世界》“大湾区美食地图”专题进行新媒体预热，本期探访广州椰风海宴，聚焦海南风味与特色菜品。以主持人探店体验为线索，呈现海南饮食文化并为珠江频道节目引流。',
    content: '完成海南美食探店推文，通过菜品介绍、烹饪特色与主持人体验，营造地道海南风味的内容记忆点。文末整合餐厅地址及节目播出信息，承接美食种草与节目宣传。',
    role: '负责微信公众号推文的图文编辑与内容包装。梳理探店素材及主理人、行政总厨介绍，提炼刺龟鱼老鸭汤、文昌鸡、糟粕醋火锅等菜品特色，完成文章结构与文案编排。',
    outcomes: [],
    links: [{ label: '查看原文', href: 'https://mp.weixin.qq.com/s/HEljGf8GG8cn5knWbfsb_A' }]
  },
  {
    id: 'yangcheng-article-1', title: '这个冬日吃点紫苏，不仅美味还能驱寒', category: '羊城晚报', label: '羊城晚报 / 冬季食疗', year: '公众号作品', image: '/images/source-yangcheng-logo.png', imageAlt: '羊城晚报标识', coverText: '羊城晚报', coverKicker: 'YANGCHENG EVENING NEWS',
    intro: '围绕冬季养生主题，结合广东省中医院主任医师的专业建议，策划紫苏食疗内容。通过介绍紫苏特性与紫苏焖鸭做法，为读者提供兼具季节性和实用性的健康科普。',
    content: '完成冬季养生科普推文，将中医知识与家常食谱结合，形成“专家解读—食材功效—食疗方推荐”的内容结构。',
    role: '参与羊城晚报微信公众号内容编辑，协助整理专家观点与食疗信息，编排文章结构，并完成紫苏焖鸭材料、做法及功效点评等内容呈现。',
    outcomes: [],
    links: [{ label: '查看原文', href: 'https://mp.weixin.qq.com/s/xJcso0BL0s07KTmBLK4ioQ' }]
  },
  {
    id: 'yangcheng-article-2', title: '抓住养生关键期，中医推荐两款养生汤', category: '羊城晚报', label: '羊城晚报 / 大雪节气', year: '公众号作品', image: '/images/source-yangcheng-logo.png', imageAlt: '羊城晚报标识', coverText: '羊城晚报', coverKicker: 'YANGCHENG EVENING NEWS',
    intro: '结合大雪节气与冬季进补需求，邀请中山大学附属第一医院中医科副主任医师提供养生建议，并推荐适合时令的食疗方。内容涵盖起居保暖、饮食调理及汤品制作，服务节气养生科普。',
    content: '完成大雪节气养生推文，以节气知识和专家建议为基础，呈现两款汤品的制作方法与食疗特点，增强文章的生活指导性。',
    role: '参与推文编辑与内容整理，梳理专家关于冬季起居和饮食的建议，编排乌鸡汤、雪梨银耳汤的材料、步骤及功效点评。',
    outcomes: [],
    links: [{ label: '查看原文', href: 'https://mp.weixin.qq.com/s/qXyfLFeCwhdsxBJIc35IDQ' }]
  },
  {
    id: 'wechat-product', title: '凯佩龙｜冰岛草莓系列玩偶', category: '产品推文', label: '新品宣传 / 凯佩龙', year: '产品推文', image: '/images/work-wechat-product.jpg', imageAlt: '凯佩龙冰岛草莓系列玩偶宣传画面',
    intro: '冰岛草莓系列新品宣传，以草莓园、粉色梦境和夏日气息营造甜美浪漫的感官氛围，并传递“做不被定义的她”的态度。',
    approach: '围绕新品上线构建草莓意象与感官描写，让玩偶造型、粉色视觉和品牌态度形成统一表达。',
    content: '完成冰岛草莓系列玩偶宣传推文，以草莓园、粉色梦境与夏日气息呈现新品，并传递“做不被定义的她”的品牌态度。',
    role: '负责产品推文文案与图文内容编排，将产品信息与浪漫氛围、品牌表达结合。',
    outcomes: [],
    links: [{ label: '查看原文', href: 'https://mp.weixin.qq.com/s/pFDjoP5bUANHx3IFiRh7Bw' }]
  },
  {
    id: 'yuanzheng-dragon', title: '元正窑｜龙主题作品', category: '产品推文', label: '品牌故事 / 陶瓷工艺', year: '产品推文', image: '/images/culture-object.jpg', imageAlt: '元正窑龙纹陶瓷器物',
    intro: '围绕元正窑龙纹作品展开品牌表达，将传统龙文化、陶瓷工艺与东方意境结合，以诗性文字呈现作品的文化气韵。',
    approach: '以龙纹意象与器物细节为线索，连接传统文化、制瓷工艺和品牌审美。',
    content: '完成龙主题作品推文，以诗性文字描绘龙文化与陶瓷工艺，呈现元正窑作品的东方意境。',
    role: '负责品牌内容文案与推文表达，将作品特征转化为文化叙事。',
    outcomes: [],
    links: [{ label: '查看原文', href: 'https://mp.weixin.qq.com/s/UA44asGzZY1e7k3cBXtm0w' }]
  },
  {
    id: 'superstar-camp', title: '超级新星 A+｜训练营招募计划', category: '产品推文', label: '项目招募 / 少儿艺术', year: '项目招募', image: '/images/superstar-camp-reception.png', imageAlt: '嘉行传媒 A+ 训练营现场', coverText: '超级新星 A+', coverKicker: 'TRAINING CAMP',
    intro: '介绍少儿艺术训练营的课程、师资资源和选拔信息，以梦想成长为叙事主线，面向儿童及家长传达项目特色与报名信息。',
    approach: '以训练营体验与成长目标组织信息，清楚呈现课程、师资、选拔安排与报名路径。',
    content: '完成训练营招募推文，围绕课程体系、师资资源、舞台实践与报名信息展开，服务项目宣传与报名转化。',
    role: '负责招募内容结构与文案表达，整合训练营特色和报名信息。',
    outcomes: [],
    links: [{ label: '查看原文', href: 'https://mp.weixin.qq.com/s/UA44asGzZY1e7k3cBXtm0w' }]
  },
  {
    id: 'wechat-biography', title: '郭勇教练人物专题', category: '人物传记', label: '公众号文案 / 人物', year: '公众号作品', image: '/images/work-wechat-biography.jpg', imageAlt: '郭勇教练人物专题公众号文章截图',
    intro: '借东京奥运会热度，华恒体育推出教练人物专题，介绍北京体育大学健身健美教练郭勇的成长经历、执教成果与专业理念。内容以人物故事传递体育精神，同时展示品牌在健身健美领域的专业资源，并承接教学及商务合作咨询。',
    approach: '以“成长经历—专业创新—执教成果—体育推广”为内容主线，兼顾人物传播与业务线索承接。',
    role: '参与人物专题内容的采访整理与图文编辑，围绕郭勇的成长、执教、训练方法和公益推广经历梳理内容脉络。提炼人物亮点与专业信息，配合图片内容完成文章编排及合作咨询信息呈现。',
    content: '完成郭勇教练人物专题推文，以“成长经历—专业创新—执教成果—体育推广”为主线，呈现人物故事与行业经验。文末加入教学及商务合作咨询入口，兼顾人物传播与业务线索承接。',
    outcomes: [],
    links: [{ label: '查看原文', href: 'https://mp.weixin.qq.com/s/NJm9Tf0ar80RAcgopFNhNQ' }]
  },
  {
    id: 'tv-edit', title: '电视节目编导与剪辑', category: '抖音运营与脚本', label: '电视节目内容', year: '视频作品', image: '/images/work-tv-edit.jpg', imageAlt: '电视节目大湾区避暑视频截图', cardNumber: '01',
    intro: '在广东广播电视台《全民叹世界》栏目组担任编导实习生，参与电视节目从前期策划到后期制作的内容生产。工作涵盖脚本、现场拍摄、素材整理与节目粗剪，并配合制作抖音预热视频。',
    approach: '按节目选题准备拍摄内容，完成现场及补充镜头拍摄，整理素材后参与粗剪，并制作适配短视频平台的预热内容。',
    content: '参与完成可供电视播出的节目内容粗剪，并制作约一分钟的抖音预热视频，配合节目上线前传播。',
    role: '根据节目选题撰写拍摄脚本，协助组织嘉宾拍摄，使用摄像设备完成现场及补充镜头拍摄；整理影像素材、参与节目粗剪并制作抖音预热视频。',
    outcomes: [],
    links: [
      { label: '海南美食探店短视频', href: 'https://v.douyin.com/eavj3Sj9W5s/' },
      { label: '大湾区避暑主题短视频', href: 'https://v.douyin.com/fWqy2Eor0kg/' }
    ]
  },
  {
    id: 'douyin-script', title: '丁朗小宇宙抖音账号运营与编导', category: '抖音运营与脚本', label: '账号内容项目', year: '视频作品', image: '/images/work-douyin-script.jpg', imageAlt: '抖音账号内容项目画面', cardNumber: '02',
    intro: '围绕账号定位与受众需求参与抖音内容策划和编导，覆盖留学移民知识、申请常识及粤港澳生活话题。通过持续的选题与脚本协作，让内容兼顾信息传达、用户兴趣与账号获客目标。',
    approach: '先梳理账号受众与选题方向，再把专业信息拆解为短视频脚本，并结合平台表达习惯调整开场、节奏与重点。',
    content: '参与账号日常内容策划与脚本创作，围绕留学移民知识、申请常识和粤港澳生活话题形成系列内容。',
    role: '负责选题策划、脚本撰写与编导协作，结合账号定位和用户反馈持续调整内容表达。',
    outcomes: [],
    links: [{ label: '播放作品', href: 'https://v.douyin.com/i8V1YBPq/' }, { label: '账号作品', href: 'https://v.douyin.com/NdfysZPTNAA/' }]
  },
  {
    id: 'hk-account-2', title: 'Hatem 港趣事抖音运营与编导', category: '抖音运营与脚本', label: '账号孵化 / 粤港澳生活', year: '抖音账号内容', image: '/images/hatem-douyin-profile.jpg', imageAlt: 'Hatem 港趣事抖音主页截图', coverText: '香港 · 粤港澳', coverKicker: 'DÒUYĪN CONTENT', cardNumber: '04',
    intro: '参与另一香港移民留学类抖音账号孵化，通过知识内容与粤港澳生活话题服务账号获客方向。',
    approach: '以留学移民知识、申请常识和粤港澳趣事为内容范围，按平台短视频形式组织脚本。',
    content: '为账号日常发布持续提供知识科普及生活话题脚本，兼顾信息传递与用户兴趣。',
    role: '负责内容选题与脚本撰写，并结合账号定位和受众反馈调整表达方式。',
    outcomes: [],
    links: [{ label: '打开账号作品', href: 'https://v.douyin.com/KmnP_w8qfKw/' }]
  },
  {
    id: 'kepelon-account', title: '凯佩珑小红书账号', category: '小红书运营', label: '账号运营 / kepelon2021', year: '账号运营案例', image: '/images/kepelon-xhs-profile.jpg', imageAlt: '凯佩珑 kepelon 小红书主页截图',
    intro: '从 0 到 1 搭建凯佩珑小红书账号，围绕品牌产品和平台内容特点探索账号方向与视觉表达。',
    approach: '以原创拍摄、达人合作、UGC 素人征集和节日主题联动，丰富品牌内容形式。',
    content: '持续产出品牌图文笔记，并通过用户共创和活动内容拓展账号表达。',
    role: '负责内容策划与日常运营，独立拍摄图片并制作笔记；对接达人合作及 UGC、素人内容征集，策划节日采访与品牌联动。',
    outcomes: [],
    links: [{ label: '打开 kepelon2021 主页', href: xhsProjectUrl }]
  },
  {
    id: 'colorkey-xhs', title: '珂拉琪小红书运营', category: '小红书运营', label: '成熟品牌账号 / 阶段运营', year: '连续运营近三个月', image: '/images/source-colorkey-xhs.jpg', imageAlt: '珂拉琪小红书品牌账号主页截图',
    intro: '参与成熟美妆品牌珂拉琪的小红书账号运营近三个月，以提升账号关注与内容触达为目标，配合品牌内容传播及营销活动执行。期间与品牌部协同发布代言人官宣、线下商场联动等内容。',
    approach: '围绕品牌传播节点参与笔记选题与内容策划，协同品牌部完成发布；配合抽奖活动和富力海珠城线下联动，跟进平台呈现与用户互动。',
    content: '运营期间，账号内容表现呈上升趋势：笔记曝光量环比增长 201%，观看量环比增长 274%；封面点击率提升 14%。阶段性后台数据显示，账号观看数达 4.0 万、互动数 2,585，内容触达与用户互动均有增长。',
    role: '参与账号选题与笔记内容策划，协同品牌部完成内容发布；配合抽奖活动和富力海珠城线下联动，跟进平台内容呈现与用户互动。根据后台数据关注笔记曝光、观看和封面点击表现，为后续内容调整提供参考。',
    outcomes: ['笔记曝光量环比增长 201%', '观看量环比增长 274%', '封面点击率提升 14%', '阶段性观看数 4.0 万、互动数 2,585'],
    links: colorkeyXhsUrl ? [{ label: '访问珂拉琪小红书主页', href: colorkeyXhsUrl }] : []
  },
  {
    id: 'overseas-doctor', title: '中医德叔', category: '海外社媒运营', label: '中医文化内容', year: '海外社媒案例', image: '/images/facebook-zhongyi-desh.jpg', imageAlt: '德叔 Facebook 页面截图',
    intro: '以小记者身份参与羊城晚报中医健康资讯传播，将中医人物与健康资讯整理为适合 Facebook 海外受众阅读的内容。',
    approach: '围绕广东汤品和健康养生主题进行内容整理与图文编辑。',
    content: '制作广东健康汤品与中医健康资讯内容，以图文形式向海外受众分享广东养生文化。',
    role: '负责健康选题、文案整理及视觉设计，并参与 Facebook 账号运营与内容发布，将既有健康资讯整理为适合海外受众阅读的图文内容。',
    outcomes: [],
    links: [{ label: facebookLinks.yangchengHealth, href: facebookLinks.yangchengHealth }]
  },
  {
    id: 'overseas-opera', title: '潮剧张怡凰', category: '海外社媒运营', label: '潮剧文化内容', year: '海外社媒案例', image: '/images/facebook-chao-opera.png', imageAlt: '张怡凰 Facebook 页面截图',
    intro: '围绕潮剧资讯及張怡凰相关内容，面向海外受众传播潮剧文化与剧目知识。',
    approach: '根据潮剧网等已有资讯整理内容，并结合海外读者的阅读习惯进行编辑。',
    content: '制作潮剧资讯、剧目介绍与文化解读内容，帮助海外受众了解潮剧及其艺术特色。',
    role: '负责内容整理、解读编辑与 Facebook 图文发布。',
    outcomes: [],
    links: [{ label: facebookLinks.chaoOpera, href: facebookLinks.chaoOpera }]
  },
  {
    id: 'overseas-comic', title: '金城漫与画', category: '海外社媒运营', label: '漫画创作者内容', year: '海外社媒案例', image: '/images/facebook-jincheng-comic.png', imageAlt: '金城 Facebook 页面截图',
    intro: '协助作家「金城漫與畫」运营 Facebook 页面，整理日常美学分享与作品内容，面向平台读者持续传播。',
    approach: '将作家的日常分享与作品内容适配 Facebook 阅读版式后发布。',
    content: '持续更新美学主题分享与作品介绍，维护 Facebook 页面的日常内容呈现。',
    role: '负责内容筛选、整理和编辑，并适配平台版式进行发布。',
    outcomes: [],
    links: [{ label: facebookLinks.jinchengArt, href: facebookLinks.jinchengArt }]
  },
  {
    id: 'fan-design', title: '明星小团运营与文创设计', category: '明星小团运营与文创设计', label: '设计 / 社群 / 销售交付', year: '个人项目', image: '/images/fan-design-banner.png', imageAlt: '明星应援手幅设计作品', banner: true,
    intro: '独立运营近 50 人的明星周边小团，负责周边创意与设计，通过小程序开团售卖，并跟进订单与发货统筹。',
    approach: '从周边创意和视觉设计开始，经小程序开团售卖，继续跟进订单整理与发货交付。',
    role: '独立负责小团运营、周边设计、开团售卖、订单跟进和发货统筹。',
    outcomes: ['透扇', '手幅', '小卡'],
    source: '来源：作品集第 13–15 页。',
    links: []
  }
]

function Arrow() { return <span className="arrow" aria-hidden="true">→</span> }
function FacebookMark() {
  return <svg className="facebook-mark" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="currentColor"/><path fill="#fff" d="M13.45 20v-7.28h2.44l.37-2.84h-2.81V8.07c0-.82.23-1.38 1.4-1.38h1.5V4.15c-.26-.04-1.14-.11-2.16-.11-2.14 0-3.6 1.3-3.6 3.69v2.15H8.17v2.84h2.42V20h2.86Z"/></svg>
}

function ProjectDialog({ work, onClose }) {
  const dialogRef = React.useRef(null)
  const closeRef = React.useRef(null)
  React.useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || !work) return
    if (!dialog.open) dialog.showModal()
    closeRef.current?.focus()
    const handleCancel = (event) => { event.preventDefault(); dialog.close() }
    dialog.addEventListener('cancel', handleCancel)
    return () => {
      dialog.removeEventListener('cancel', handleCancel)
      if (dialog.open) dialog.close()
    }
  }, [work])
  if (!work) return null
  return (
    <dialog className="work-dialog" ref={dialogRef} aria-labelledby="dialog-title" onClose={onClose} onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current.close() }}>
      <button className="dialog-close" type="button" ref={closeRef} aria-label="关闭详情" onClick={() => dialogRef.current?.close()}>关闭 <span aria-hidden="true">×</span></button>
      <div className="dialog-layout">
        <div className={`dialog-visual ${work.image ? '' : 'dialog-visual-empty'} ${work.avatar ? 'dialog-visual-avatar' : ''} ${work.contain ? 'dialog-visual-contain' : ''} ${work.id === 'colorkey-xhs' ? 'dialog-visual-xhs' : ''} ${work.id === 'kepelon-account' ? 'dialog-visual-kepelon' : ''} ${work.id === 'hk-account-2' ? 'dialog-visual-hatem' : ''} ${work.banner ? 'dialog-visual-banner' : ''} ${work.category === '羊城晚报' ? 'dialog-visual-yangcheng' : ''}`}>
          {work.image ? <img src={work.image} alt={work.imageAlt} /> : <div className="dialog-monogram" aria-hidden="true"><small>{work.coverKicker || 'SELECTED WORK'}</small><strong>{work.coverText || work.title}</strong></div>}
          {work.image && <span className="dialog-visual-caption">{work.label}</span>}
        </div>
        <div className="dialog-copy">
          <div className="dialog-meta"><span>{work.category}</span><span>{work.year}</span></div>
          <h2 id="dialog-title">{work.title}</h2>
          <section><h3>项目背景</h3><p>{work.intro}</p></section>
          <section><h3>我的职责</h3><p>{work.role}</p></section>
          {work.approach && <section><h3>内容形成</h3><p>{work.approach}</p></section>}
          {work.content && <section><h3>内容产出</h3><p>{work.content}</p></section>}
          {work.outcomes?.length > 0 && <section><h3>结果与作品</h3><ul>{work.outcomes.map((item) => <li key={item}>{item}</li>)}</ul></section>}
          {work.links.length > 0 && <section className="case-links"><h3>作品链接</h3>{work.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <Arrow/></a>)}</section>}
        </div>
      </div>
    </dialog>
  )
}

const workTypes = ['全部作品', '海外社媒运营', '广东广播电视台', '羊城晚报', '产品推文', '人物传记', '抖音运营与脚本', '小红书运营', 'B站个人账号运营', '明星小团运营与文创设计']
const workTypeById = {
  'gdtv-article-1': '广东广播电视台', 'gdtv-article-2': '广东广播电视台',
  'yangcheng-article-1': '羊城晚报', 'yangcheng-article-2': '羊城晚报',
  'wechat-product': '产品推文', 'yuanzheng-dragon': '产品推文', 'superstar-camp': '产品推文', 'wechat-biography': '人物传记',
  'tv-edit': '抖音运营与脚本', 'douyin-script': '抖音运营与脚本', 'hk-account-2': '抖音运营与脚本', 'kepelon-account': '小红书运营', 'colorkey-xhs': '小红书运营', 'water-mist': '小红书运营', 'top-note': '小红书运营',
  'lucky-purple': '小红书运营', 'ice-mirror': '小红书运营', bilibili: 'B站个人账号运营',
  'overseas-doctor': '海外社媒运营', 'overseas-opera': '海外社媒运营', 'overseas-comic': '海外社媒运营',
  'fan-design': '明星小团运营与文创设计', live: '业务增长', 'creator-pool': '小红书运营'
}
const workOriginById = {
  'water-mist': '品牌工作项目', 'top-note': '品牌工作项目', 'lucky-purple': '品牌工作项目', 'ice-mirror': '品牌工作项目',
  'creator-pool': '品牌工作项目', live: '达人直播业务', bilibili: '个人创作',
  'gdtv-article-1': '公众号作品', 'gdtv-article-2': '公众号作品',
  'yangcheng-article-1': '公众号作品', 'yangcheng-article-2': '公众号作品', 'wechat-product': '个人内容作品', 'yuanzheng-dragon': '产品推文', 'superstar-camp': '项目招募文案', 'wechat-biography': '公众号作品',
  'tv-edit': '电视栏目作品', 'douyin-script': '账号内容项目', 'hk-account-2': '账号内容项目', 'kepelon-account': '工作项目 · 凯佩珑', 'colorkey-xhs': '品牌工作项目 · 珂拉琪',
  'overseas-doctor': '海外社媒内容', 'overseas-opera': '海外社媒内容', 'overseas-comic': '海外社媒内容', 'fan-design': '个人项目'
}

// 编辑个人信息时只需补充这些字段；空值不对外展示，不会显示“ N+ ”。
const editableSiteFields = {
  newsletterCopyCount: '',
  email: '2216509326@QQ.com',
  phone: '13352878850'
}

function App() {
  const [page, setPage] = React.useState('home')
  const [activeFilter, setActiveFilter] = React.useState('全部作品')
  const [activeWork, setActiveWork] = React.useState(null)
  const enterPage = (nextPage) => {
    setActiveWork(null)
    setPage(nextPage)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const goHome = () => enterPage('home')
  const openWork = (work) => setActiveWork(work)
  const workProjectIds = new Set(['water-mist', 'top-note', 'lucky-purple', 'ice-mirror', 'live', 'creator-pool'])
  const categoryPriority = { '海外社媒运营': 0, '小红书运营': 1, '抖音运营与脚本': 2 }
  const archiveWorks = works
    .filter((work) => !workProjectIds.has(work.id))
    .map((work, sourceIndex) => ({ work, sourceIndex }))
    .sort((a, b) => (categoryPriority[workTypeById[a.work.id]] ?? 3) - (categoryPriority[workTypeById[b.work.id]] ?? 3) || a.sourceIndex - b.sourceIndex)
    .map(({ work }) => work)
  const visibleWorks = activeFilter === '全部作品'
    ? archiveWorks
    : archiveWorks.filter((work) => workTypeById[work.id] === activeFilter)

  return (
    <>
      {page === 'home' && <HomePage onOpen={enterPage} />}
      {page === 'project' && <ProjectPage onHome={goHome} onOpenWork={openWork} />}
      {page === 'about' && <AboutPage onHome={goHome} />}
      {page === 'works' && <WorksPage onHome={goHome} activeFilter={activeFilter} setActiveFilter={setActiveFilter} works={visibleWorks} onOpenWork={openWork} />}
      {page === 'contact' && <ContactPage onHome={goHome} />}
      <ProjectDialog work={activeWork} onClose={() => setActiveWork(null)} />
    </>
  )
}

function HomePage({ onOpen }) {
  return (
    <main className="home-screen" aria-label="麦家恩个人主页">
      <div className="home-grid">
        <section className="home-tile tile-name" aria-label="个人字标">
          <span className="tile-index">01 / NAME</span>
          <div><p className="name-en">MAGGIE MAI</p><h1>麦家恩</h1></div>
          <span className="name-caption">个人作品集 <span>2026</span></span>
        </section>

        <button className="home-tile tile-project" type="button" onClick={() => onOpen('project')} aria-label="进入珂拉琪美妆 S+ 项目">
          <img className="project-brand-mark" src="/images/colorkey-logo.png" alt="COLORKEY 珂拉琪" />
          <span className="tile-index">02 / CORE PROJECT / 重点项目</span>
          <span className="tile-bottom"><span><strong>珂拉琪美妆 S+ 项目</strong><small>水雾唇露 2.0｜内容种草 × 达人共创 × 生意增长</small></span><span className="tile-arrow" aria-hidden="true">↗</span></span>
        </button>

        <section className="home-tile tile-position" aria-label="个人优势摘要">
          <span className="tile-index">03 / WHAT I DO</span>
          <div className="position-copy"><h2><span>品牌内容 <i>×</i></span><br/><span>KOL 营销 <i>×</i></span><br/><span>社媒运营</span></h2><p>连接内容创意与达人协作，让项目执行和数据复盘共同服务品牌增长。</p></div>
          <span className="position-foot">内容策略 · 创作者运营 · 生意结果</span>
        </section>

        <button className="home-tile tile-about" type="button" onClick={() => onOpen('about')} aria-label="打开关于我">
          <img className="tile-image portrait-image" src="/images/portrait.jpg" alt="麦家恩本人照片" />
          <span className="portrait-shade" aria-hidden="true" />
          <span className="tile-index">04 / ABOUT ME</span>
          <span className="photo-label"><strong>关于我</strong><small>内容写作者，也做品牌项目。</small></span>
          <span className="tile-arrow photo-arrow" aria-hidden="true">↗</span>
        </button>

        <button className="home-tile tile-works" type="button" onClick={() => onOpen('works')} aria-label="浏览过往作品">
          <span className="tile-index">05 / SELECTED WORKS</span>
          <span className="tile-bottom"><span><strong>过往作品</strong><small>文案 · 视频 · 小红书 · 社媒</small></span><span className="tile-arrow" aria-hidden="true">↗</span></span>
        </button>

        <button className="home-tile tile-contact" type="button" onClick={() => onOpen('contact')} aria-label="打开合作联系">
          <span className="tile-index">06 / CONTACT</span>
          <span className="contact-mark" aria-hidden="true">✳</span>
          <span className="tile-bottom"><span><strong>合作联系</strong><small>一起做好内容与增长</small></span><span className="tile-arrow" aria-hidden="true">↗</span></span>
        </button>
      </div>
    </main>
  )
}

function PageHeader({ eyebrow, onHome }) {
  return <header className="page-header"><button className="back-home" type="button" onClick={onHome}><span aria-hidden="true">←</span> 返回首页</button><span>{eyebrow}</span><span className="page-header-wordmark">MAGGIE MAI</span></header>
}

function WaterMistResults() {
  return <>
    <section className="live-results business-result competitor-business-result embedded-business-result" aria-label="珂拉琪水雾唇露竞品对比业务结果">
      <div className="live-results-heading"><span className="detail-kicker">BUSINESS RESULTS / 01</span><h2>珂拉琪水雾唇露竞品对比业务结果</h2><p>珂拉琪水雾唇露 × INTOYOU 水雾唇釉｜上下游搜索表现与 26+ 用户结构对比。</p></div>
      <div className="competitor-result-facts"><div><span>珂拉琪 26+ 用户占比</span><strong>约 69.5%</strong></div><div><span>INTOYOU 26+ 用户占比</span><strong>约 48%</strong></div><p>珂拉琪高出 21.5 个百分点</p></div>
      <div className="competitor-search-facts" aria-label="上下游搜索表现数据">
        <div><strong>上下游搜索指数</strong><span>珂拉琪水雾唇露 <b>18.74 万</b></span><span>INTOYOU 水雾唇釉 <b>1.18 万</b></span></div>
        <div><strong>关联阅读量</strong><span>珂拉琪 <b>3,733.69 万</b></span><span>INTOYOU <b>1,620.71 万</b></span></div>
        <div><strong>关联内容量</strong><span>珂拉琪 <b>5,172</b></span><span>INTOYOU <b>1,745</b></span></div>
      </div>
      <div className="competitor-chart-grid">
        <figure className="business-result-figure"><div className="mosaic-image-wrap search-index-chart"><img src="/images/colorkey-intoyou-search-index.jpeg" alt="珂拉琪水雾唇露与 INTOYOU 水雾唇釉上下游搜索指数对比柱状图" loading="lazy"/><span className="mosaic-patch" style={{left:'13.1%',top:'75.4%',width:'6.2%',height:'2.8%'}} aria-label="数值已马赛克"/><span className="mosaic-patch" style={{left:'24.2%',top:'50.7%',width:'7.2%',height:'2.8%'}} aria-label="数值已马赛克"/><span className="mosaic-patch" style={{left:'43.8%',top:'14.7%',width:'8.4%',height:'2.8%'}} aria-label="数值已马赛克"/><span className="mosaic-patch" style={{left:'55.1%',top:'7.8%',width:'9.2%',height:'2.8%'}} aria-label="数值已马赛克"/><span className="mosaic-patch" style={{left:'76.8%',top:'89.2%',width:'6.2%',height:'2.8%'}} aria-label="数值已马赛克"/><span className="mosaic-patch" style={{left:'86.7%',top:'80%',width:'6.8%',height:'2.8%'}} aria-label="数值已马赛克"/></div><figcaption>上下游搜索指数领先</figcaption></figure>
        <figure className="business-result-figure"><img src="/images/colorkey-competitor-audience-comparison.png" alt="珂拉琪水雾唇露与 INTOYOU 用户年龄和兴趣结构对比" loading="lazy"/><figcaption>优先抢占水雾唇釉 26+ 用户市场</figcaption></figure>
      </div>
    </section>
    <section className="live-results business-result search-business-result embedded-business-result" aria-label="水雾唇露内容搜索业务结果">
      <div className="live-results-heading"><span className="detail-kicker">BUSINESS RESULTS / 02</span><h2>水雾唇露内容搜索业务结果</h2><p>以下为 2024 年上半年与水雾唇露上线后的对照数据，仅呈现珂拉琪水雾唇露内容的站内搜索表现。</p></div>
      <div className="search-result-facts"><div><span>站内搜索峰值</span><strong>138,719</strong><small>约为上线节点的 5.1 倍</small></div><p>较图示 2024 年最高值高约 104%（图示区间对比，非同比）。</p></div>
      <figure className="business-result-figure search-trend-figure"><a href="/images/colorkey-search-trend-comparison.jpg" target="_blank" rel="noreferrer"><img src="/images/colorkey-search-trend-comparison.jpg" alt="2024 年与 2025 年水雾唇露搜索趋势对比图" loading="lazy"/></a><figcaption>水雾唇露站内搜索趋势｜点击查看原图</figcaption></figure>
    </section>
  </>
}

function ProjectPage({ onHome, onOpenWork }) {
  const waterMistCases = [
    { id: 'water-episode-8', title: '《爆款口红》｜AI 剧情植入', contentType: 'AI 剧情 / 小红书视频', idea: '双胞胎角色承载唇露卖点，用剧情反转推动品牌自然进入故事。', detail: 'episode-8', cover: '/images/water-mist-ai-story-cover.png', url: 'https://www.xiaohongshu.com/explore/6a9a866300000000260302da?app_platform=android&ignoreEngage=true&app_version=9.50.0&share_from_user_hidden=true&xsec_source=app_share&type=video&xsec_token=CBvOCxaFJE37h-uLVdbtY60W1DUzigALL_nUdDDY--m9k=&author_share=1&xhsshare=WeixinSession&shareRedId=N0dGNDxINj43OEdHOjg0STs1QEpGNkk-&apptime=1792246340&share_id=1da8752aa6c84d45b5381dbcbbf88b84&share_channel=wechat&track_code=5lNNcEWu77R&wechatWid=17427a76039727867590e1a4ae940745&wechatOrigin=menu' },
    ...editorialCases.map((item) => ({ ...item, detail: 'editorial-story' }))
  ]
  const projectCases = [
    {
      id: 'water-mist', kicker: 'PRODUCT GROWTH', title: '0-1打造爆品：水雾唇露2.0', summary: '把产品差异、人群观察与达人内容连接起来，并结合搜索表现复盘。',
      steps: [
        { label: 'BUSINESS OBJECTIVE', title: '建立新品认知', text: '项目围绕水雾唇露 2.0 的产品传播与持续上新展开。' },
        { label: 'USER & MARKET INSIGHT', title: '关注 26+ 人群', text: '投放中观察到 26+ 用户特征，并探索通勤、成熟妆容、精致妈妈等内容方向。' },
        { label: 'CONTENT STRATEGY', title: '把差异变成场景', text: '围绕唇露妆效与使用场景组织内容表达，让达人内容对应具体人群需求。' },
        { label: 'EXECUTION', title: '协同内容与投放', text: '参与达人方向筛选、内容共创与投放执行跟进，并结合内容反馈和商销协同信息参与复盘。' },
        { label: 'PERFORMANCE', title: '看搜索与后续动作', text: '已有材料记录搜索峰值同比增长 104%、搜索基线约 6—9 万；可用于观察内容传播与品牌搜索的阶段性关联。' }
      ],
      metrics: [
        { label: '品牌搜索峰值', value: '同比 +104%' },
        { label: '搜索基线', value: '约 6—9 万' },
        { label: '投放观察', value: '26+ 人群' }
      ],
      launchNote: '水雾 2.0 上线：2025.08.17｜上线节点搜索量：27,179', cases: waterMistCases
    },
    {
      id: 'ice-mirror', sectionNumber: '02', kicker: 'PRODUCT CAMPAIGN', title: '声量品项目：小冰块唇镜', summary: '围绕新品声量、内容测试与投放效率，保留数据口径后再做阶段对比。', caseWallDescription: '点击卡片查看对应案例详情。',
      steps: [
        { label: 'BUSINESS OBJECTIVE', title: '提升新品声量', text: '现有项目资料将其列为 618 内容案例。' },
        { label: 'USER & MARKET INSIGHT', title: '从唇部痛点切入', text: '既有项目描述提到干瘪唇、唇纹等用户痛点，作为内容测试的观察方向。' },
        { label: 'CONTENT STRATEGY', title: '测试表达与封面', text: '围绕痛点与解决方案组织表达，并通过不同封面和内容角度做测试。' },
        { label: 'EXECUTION', title: '跟进投放反馈', text: '参与内容策略、封面优化、多角度测试、投放节奏与指标跟进。' },
      ],
      metrics: [
        { label: 'CPUV 记录值 A', value: '27.15', note: '周期、单位、内容版本及投放口径待核实' },
        { label: 'CPUV 记录值 B', value: '4.88', note: '周期、单位、内容版本及投放口径待核实' },
        { label: 'CPUV 记录值 C', value: '3.15', note: '周期、单位、内容版本及投放口径待核实' }
      ],
      hideTakeaway: true, hideMetrics: true,
      takeaway: '拿到每个数值对应的投放阶段、素材、预算口径和 UV 定义后，才能比较内容选择与投放效率；目前不据此推导下降趋势。',
      cases: iceMirrorCases
    },
    {
      id: 'creator-collab', sectionNumber: '04', kicker: 'CREATOR COLLABORATION', title: '内容共创：高转化案例', summary: '用真实达人笔记拆解风格适配、创意切入、产品植入与结果。', caseWallDescription: '点击卡片查看对应案例详情。',
      steps: [
        { label: 'BUSINESS OBJECTIVE', title: '回答具体传播问题', text: '每则案例补充对应产品、内容任务和预期解决的问题。' },
        { label: 'USER & MARKET INSIGHT', title: '匹配达人与痛点', text: '结合达人表达风格、目标用户关注点与产品特点判断内容机会；具体判断需对应原始合作 brief 或复盘。' },
        { label: 'CONTENT STRATEGY', title: '共同设计内容入口', text: '记录创意切入点、内容形式与产品卖点植入位置，说明为什么适合该达人及用户。' },
        { label: 'EXECUTION', title: '脚本共创与形式落地', text: '五篇案例覆盖原创节庆脚本、跨垂类合作、综艺娱评、剧情植入与审美型种草。' },
        { label: 'PERFORMANCE', title: '结合笔记结果复盘', text: '按各篇记录呈现自然流量、曝光、阅读、互动、点击率与内容成本等指标。' }
      ],
      hideTakeaway: true,
      cases: creatorCollabCases.map((item) => ({ ...item, detail: 'editorial-story' }))
    }
  ]
  const waterMistResults = <WaterMistResults />
  return (
    <main className="detail-page project-page page-enter">
      <PageHeader eyebrow="BRAND PROJECT / COLORKEY" onHome={onHome} />
      <section className="detail-hero project-hero">
        <div className="detail-hero-copy"><span className="detail-kicker">CORE PROJECT / COLORKEY BEAUTY</span><span className="project-number">02</span><h1>珂拉琪美妆<br/>S+ 项目负责人</h1><p>负责重点爆品珂拉琪水雾唇露 2.0 等多个项目。项目持续迭代多个版本，成为公司全渠道销量表现最好的项目；相关产品年销量达 200 万支以上，并获评珂拉琪 2025 年度高光产品。持续上新与节点传播，建立了稳定的爆品延续能力。</p><div className="project-role-block"><div className="hero-role project-role"><strong>S+ 项目负责人</strong><span>世纪美尚｜珂拉琪 <i aria-label="小红书" className="social-glyph xhs">红</i></span></div><div className="project-skill-tags"><span>产品定位</span><span>内容策略</span><span>KOL 运营</span><span>过程执行</span><span>内容把控</span><span>共创</span><span>KFS 数据复盘</span><span>投流管理</span><span>商销闭环协作</span><span>小红书官号运营</span><span>小红书达播</span></div></div></div>
        <div className="detail-hero-visual project-sales-visual"><img src="/images/colorkey-sales-visual.jpg" alt="珂拉琪水雾唇露年销量 200 万支以上宣传主视觉"/></div>
      </section>
      <section className="about-skills-section project-skills-section"><div className="skills-section-heading"><span className="detail-kicker">RELATED SKILLS / 小红书</span><h2>小红书内容与投放能力</h2><p className="skills-promise">从内容策略、达人种草到投放复盘，覆盖小红书运营全链路。</p><div className="skill-tags"><span>投放规划</span><span>内容策略</span><span>种草 Brief</span><span>复盘总结</span><span>多维数据分析</span></div></div><div className="skills-image-grid">
        <figure className="skills-image-card skills-image-card-radar"><a href="/images/xhs-skill-radar.png" target="_blank" rel="noreferrer"><img src="/images/xhs-skill-radar-display.png" alt="能力雷达图：内容策划与媒介投放能力" loading="lazy"/></a><figcaption>能力雷达图</figcaption></figure>
        <figure className="skills-image-card skills-image-card-plan"><a href="/images/colorkey-xhs-nov-dec-plan.png" target="_blank" rel="noreferrer"><img src="/images/colorkey-xhs-nov-dec-plan.png" alt="产品矩阵与人群策略" loading="lazy"/></a><figcaption>产品矩阵与人群策略</figcaption></figure>
        <figure className="skills-image-card skills-image-card-sop"><a href="/images/xhs-promotion-sop.png" target="_blank" rel="noreferrer"><img src="/images/xhs-promotion-sop.png" alt="小红书推广 SOP：达人种草与投放执行" loading="lazy"/></a><figcaption>小红书推广 SOP｜达人种草与投放执行</figcaption></figure>
        <figure className="skills-image-card skills-image-card-roi"><a href="/images/xhs-cny-roi-analysis.png" target="_blank" rel="noreferrer"><img src="/images/xhs-cny-roi-analysis.png" alt="投放数据复盘与 ROI 分析" loading="lazy"/></a><figcaption>投放数据复盘与 ROI 分析</figcaption></figure>
      </div></section>
      <section className="live-results business-result" aria-label="达播业务结果"><div className="live-results-heading"><span className="detail-kicker">BUSINESS RESULTS / 03</span><h2>达播业务结果</h2><p>以下为 2024 下半年与 2025 下半年的对照数据，单独呈现达人直播业务表现。</p></div><div className="live-results-values"><div><strong>11.9 → 33.3 万</strong><span>GMV · 2024 H2 → 2025 H2</span></div><div><strong>3.54 → 6.07</strong><span>ROI · 2024 H2 → 2025 H2</span></div></div></section>
      <CaseStudy projects={projectCases.slice(0, 1)} featuredCases={waterMistCases} projectAppendix={waterMistResults} chapterTitle="珂拉琪重点项目" chapterKicker="PERSONAL PROJECTS / COLORKEY S+" chapterDescription=""/>
      <CaseStudy projects={projectCases.slice(1)} chapterTitle="其他个人项目" sectionId="other-projects"/>
      <PageFooter onHome={onHome} />
    </main>
  )
}

function AboutPage({ onHome }) {
  const timeline = [
    { date: '2025.06 — 至今', company: '世纪美尚集团 / 珂拉琪', role: '投放专员 · S+ 项目负责人', note: '负责美妆 S+ 项目内容策略及相关达人投放协同。围绕品牌需求与平台特点参与达人内容策划，推进合作与投放执行。结合内容表现和业务反馈参与项目复盘。' },
    { date: '2025.01 — 04', company: '威莱集团 / 威露士组', role: '达播实习生', note: '拓展头部达人 15 位、垂类 8 位及中腰部 20+，推动资源池扩大 40%，并以纯佣模式签约肩部达人；参与黄子韬、郭萌萌头部专场全流程运营，跟进流量转化、协同调整货品讲解节奏。所负责品类月均 GMV 约 5 万元。' },
    { date: '2024.09 — 12', company: '羊城晚报', role: '海外社媒运营实习生', note: '面向 Facebook 海外受众策划中医、潮剧和漫画创作者等文化内容。参与资料整理、选题、文案撰写、视觉素材制作与发布。根据平台阅读习惯调整内容呈现。' },
    { date: '2024.01 — 04', company: '阳狮集团 · 宝洁组（OLAY）', role: '媒介实习生', note: '筛选抖音、小红书达人，参与投放策略与数据分析，独立执行 20+ 位达人广告合作。' },
    { date: '2023.07 — 09', company: '广东广播电视台', role: '新媒体实习生（编导方向）', note: '独立撰写节目新闻稿、负责推文排版并依据用户反馈调整发布时间；编写拍摄脚本、协助梳理节目流程与关键情节，剪辑节目素材并制作短视频内容；协助策划和执行直播，根据现场反馈调整节奏与话题。' },
    { date: '2022.12 — 2023.06', company: '广州凯佩珑文化创意有限公司', role: '媒介实习生', note: '从 0 到 1 拓展文创垂类 KOL，制定达人组合、撰写 Brief 并参与共创；以零费用 BD 合作曾产出百万级爆文的达人，并与其共创小红书内容。' },
    { date: '2021.06 — 12', company: '个人项目', role: '文案写手', note: '为百万+粉丝抖音创作者撰写视频文案，并创作公众号、海报与小红书文案；累计服务客户 50+，部分文案浏览量 10w+。' },
    { date: '2020.02 — 2021.02', company: 'B 站个人账号「婠锶er鸭」', role: '个人创作 / 内容运营', note: '独立完成选题、内容制作与账号运营；账号已有 600+ 粉丝、40 万+播放量。' }
  ]
  return (
    <main className="detail-page about-page page-enter">
      <PageHeader eyebrow="ABOUT ME / 麦家恩" onHome={onHome} />
      <section className="about-overview-grid" aria-label="个人介绍与内容经验">
        <div className="about-overview-left">
          <div className="about-photo"><img src="/images/portrait.jpg" alt="麦家恩本人照片"/><span>MAGGIE MAI / GUANGZHOU</span></div>
          <article className="about-platform-panel">
            <div className="about-platform-heading"><h2>内容平台与文案经验</h2><div className="writing-tenure"><strong>6 年</strong><span>文案撰写经验</span></div></div>
            <div className="platform-social-row">
              <span className="social-platform"><i aria-hidden="true" className="social-glyph douyin">抖</i>抖音</span><span className="social-platform"><i aria-hidden="true" className="social-glyph xhs">红</i>小红书</span><span className="social-platform"><i aria-hidden="true" className="social-glyph wechat">公</i>公众号</span><span className="social-platform"><i aria-hidden="true" className="social-glyph bilibili">B</i>B 站</span>
              <div className="facebook-contact">{facebookLinks.profile ? <a href={facebookLinks.profile} target="_blank" rel="noreferrer"><FacebookMark/>Facebook</a> : <span><FacebookMark/>Facebook</span>}</div>
            </div>
            <p className="about-positioning">美妆品牌内容运营 × 海外社媒传播</p>
            <div className="about-capability-tags" aria-label="核心能力"><span>产品定位</span><span>内容策略</span><span>KOL 运营</span><span>过程执行</span><span>内容把控</span><span>共创</span><span>KFS 数据复盘</span><span>投流管理</span><span>商销闭环协作</span><span>小红书官号运营</span><span>小红书达播</span></div>
          </article>
        </div>
        <div className="about-overview-right">
          <div className="about-copy"><span className="detail-kicker">CONTENT × PEOPLE × GROWTH</span><h1>把文字的温度，<br/>带进真实项目。</h1><p>我从自己的内容创作和文案项目开始，逐步走进新媒体、报业与海外社媒，再到广告媒介和品牌项目。熟悉不同平台的表达，也理解创作者如何把想法做成作品。</p><p>现在，我以内容策划和达人运营为抓手，连接品牌表达、用户心智与生意增长；从创意共创到项目执行和数据复盘，持续关注内容带来的业务结果。</p><blockquote>“我一直坚信，文字是有灵魂和温度的。”</blockquote></div>
          <article className="about-growth-panel"><span className="panel-kicker">CONTENT → BUSINESS</span><h2>让内容效率<br/>走向生意结果</h2><p>通过用户洞察与脚本迭代，结合进店、成交和 GMV 数据复盘，让内容效率连接实际销售转化。</p>
            <div className="brand-search-result">
              <div className="brand-search-peak"><strong>13.87 万</strong><span>水雾唇露站内搜索峰值</span></div>
              <div className="brand-search-comparisons">
                <div><strong>5.1×</strong><span>较水雾 2.0 上线节点</span></div>
                <div><strong>+104%</strong><span>较图示 2024 年最高值</span><small>区间对比，非同比</small></div>
              </div>
            </div>
            <div className="growth-metrics"><span><strong>11.9 → 33.3 万</strong><small>达播 GMV · 2024 下半年 → 2025 下半年</small></span><span><strong>3.54 → 6.07</strong><small>达播 ROI · 同期对照</small></span></div>
          </article>
        </div>
      </section>
      <section className="about-timeline"><div><span className="detail-kicker">A SHORT TIMELINE</span><h2>从内容创作，<br/>走到项目负责。</h2></div><div className="timeline-list">{timeline.map((item) => <article key={item.date}><span>{item.date}</span><div><h3>{item.company}</h3><p>{item.role}</p><small>{item.note}</small></div></article>)}</div></section>
      <PageFooter onHome={onHome} />
    </main>
  )
}

function WorksPage({ onHome, activeFilter, setActiveFilter, works: visibleWorks, onOpenWork }) {
  const categoryTitles = { '海外社媒运营':'海外社媒运营', '广东广播电视台':'广东广播电视台｜《全民叹世界》公众号运营', '羊城晚报':'羊城晚报公众号运营', '产品推文':'产品推文', '人物传记':'人物传记', '抖音运营与脚本':'抖音运营与脚本', '小红书运营':'小红书运营', 'B站个人账号运营':'B站个人账号运营', '明星小团运营与文创设计':'明星小团运营与文创设计' }
  const archiveTitle = categoryTitles[activeFilter] || '过往作品'
  const archiveDescription = activeFilter === '抖音运营与脚本' ? '点击查看作品详情与原文链接' : '点击文章卡片查看详情与原文链接'
  const markedHeader = ['广东广播电视台','羊城晚报'].includes(activeFilter)
  return (
    <main className="detail-page works-page page-enter">
      <PageHeader eyebrow="SELECTED WORKS / 过往作品" onHome={onHome} />
      <section className={`works-intro ${markedHeader ? 'works-intro-with-mark' : ''}`}>
        {activeFilter === '广东广播电视台' && <div className="archive-brand-stack"><img className="archive-brand-logo pearl-logo" src="/images/guangdong-pearl-logo.jpg" alt="广东珠江频道标识"/><img className="archive-brand-logo program-logo" src="/images/program-show-logo.jpg" alt="全民叹世界节目标识"/></div>}
        {activeFilter === '羊城晚报' && <img className="archive-brand-logo yangcheng-logo" src="/images/source-yangcheng-logo.png" alt="羊城晚报"/>}
        <span className="detail-kicker">CONTENT ARCHIVE / {activeFilter === '全部作品' ? '个人作品与创作项目' : activeFilter}</span><h1>{activeFilter === '全部作品' ? '过往作品' : archiveTitle}</h1><p>{activeFilter === '全部作品' ? '点击作品卡片查看详情与原文链接' : archiveDescription}</p>
      </section>
      <section className="content-section"><div className="filter-bar" role="group" aria-label="按作品类型筛选">{workTypes.map((filter) => <button key={filter} type="button" className={activeFilter === filter ? 'filter-button active' : 'filter-button'} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}{activeFilter !== '全部作品' && <button className="filter-reset" type="button" onClick={() => setActiveFilter('全部作品')}>清除筛选 ×</button>}</div><p className="filter-count" aria-live="polite">{activeFilter === '全部作品' ? `全部 ${visibleWorks.length} 项` : `${activeFilter} · ${visibleWorks.length} 项`}</p><div className="case-grid archive-grid" aria-label="筛选后的作品列表">{visibleWorks.map((work, index) => <WorkCard key={work.id} work={work} index={index} onOpen={onOpenWork} />)}</div></section>
      <PageFooter onHome={onHome} />
    </main>
  )
}

function ContactPage({ onHome }) {
  const fields = [
    { label: '邮箱', value: editableSiteFields.email, href: `mailto:${editableSiteFields.email}` },
    { label: '手机', value: editableSiteFields.phone, href: `tel:${editableSiteFields.phone}` }
  ]
  return (
    <main className="detail-page contact-page page-enter">
      <PageHeader eyebrow="CONTACT / 合作联系" onHome={onHome} />
      <section className="contact-content"><span className="detail-kicker">LET’S MAKE SOMETHING MEANINGFUL</span><h1>让内容与增长，<br/>彼此推动。</h1><p>以内容与达人运营连接品牌声量、用户心智与生意增长，关注从内容种草到搜索、转化和 GMV 的完整链路。</p><dl className="contact-fields">{fields.map(({ label, value, href }) => <div key={label}><dt>{label}</dt><dd><a href={href} target={href.startsWith('https:') ? '_blank' : undefined} rel={href.startsWith('https:') ? 'noreferrer' : undefined}>{value}</a></dd></div>)}</dl></section>
      <PageFooter onHome={onHome} />
    </main>
  )
}

function PageFooter({ onHome }) {
  return <footer className="detail-footer"><span>© 2026 MAGGIE MAI</span><button type="button" onClick={onHome}>返回首页 ↑</button></footer>
}

function WorkCard({ work, index, onOpen }) {
  const originalIndex = work.cardNumber || String(index + 1).padStart(2, '0')
  return (
    <button className={`work-card ${work.id === 'kepelon-account' ? 'work-card-kepelon' : ''}`} type="button" onClick={() => onOpen(work)} aria-haspopup="dialog" aria-label={`查看作品：${work.title}`}>
      <span className={`work-card-image ${work.avatar ? 'work-card-avatar' : ''} ${work.contain ? 'work-card-contain' : ''} ${work.id === 'colorkey-xhs' ? 'work-card-xhs' : ''} ${work.id === 'kepelon-account' ? 'work-card-kepelon-image' : ''} ${work.id === 'hatem-douyin-profile' || work.id === 'hk-account-2' ? 'work-card-hatem' : ''} ${work.banner ? 'work-card-banner' : ''} ${work.category === '羊城晚报' ? 'work-card-yangcheng' : ''}`}>{work.image ? <img src={work.image} alt={work.imageAlt} loading="lazy"/> : <span className="archive-monogram" aria-hidden="true"><small>{work.coverKicker || 'SELECTED WORK'}</small><strong>{work.coverText || work.title}</strong></span>}<span className="work-card-number">{originalIndex}</span><span className="work-origin">{workOriginById[work.id]}</span></span>
      <span className="work-card-copy"><span className="work-card-meta"><span>{workTypes[workTypes.indexOf(workTypeById[work.id])] || work.category}</span><span>{work.year}</span></span><strong>{work.title}</strong><span className="work-card-summary">{work.intro}</span>{work.category === '海外社媒运营' && work.links[0] && <span className="work-card-social-url">Facebook：{work.links[0].href}</span>}<span className="card-link">查看详情 <Arrow /></span></span>
    </button>
  )
}

createRoot(document.getElementById('root')).render(<App />)

