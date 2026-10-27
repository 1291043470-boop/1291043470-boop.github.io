// 新作品：复制一项，使用唯一 slug，放入素材并调整 order；页面和首页入口会自动生成。
// type 支持原创关卡、游戏 Demo、游戏拆解；sections 可按作品自由增减。
export const projects = [
  {
    slug: 'jinhuo', order: 1, title: '晋火', type: '原创关卡', engine: 'Unreal Engine 5', engineShort: 'UE5', role: '独立作品',
    subtitle: '第三人称箱庭关卡白盒', tags: ['探索', '解谜', '战斗'],
    cover: '/assets/images/jin-cover.webp?v=portfolio-20261027', poster: '/assets/images/jin-scene.webp',
    intro: '战乱中的山间祠庙。围绕火把与燃烧规则，在多层大殿及外围通路中组织探索、解谜与环境交互。',
    video: '/assets/media/jinhuo/index.m3u8', videoLabel: '关卡流程录屏', duration: '13:18',
    facts: [['制作方式','独立作品'], ['开发引擎','Unreal Engine 5'], ['关卡结构','三层建筑空间'], ['设计游玩时长','约 15 分钟']],
    sections: [
      { id:'overview', title:'项目概览', eyebrow:'PROJECT OVERVIEW', paragraphs:[
        '《晋火》是独立设计与制作的第三人称箱庭关卡白盒，重点展示空间组织、玩家动线、机制教学与蓝图交互。关卡以晋祠建筑意象为基础，设置在战乱中被强盗占据和改造的山间祠庙群。祭祀空间与临时防御设施交错，构成玩家探索的山地箱庭。',
        '核心区域约 120 m × 120 m。大殿位于抬升的平台上，高塔与后山烽火台作为远处可辨认的目标；建筑内部保留柱列与回廊，同时加入监牢、军械库和封锁装置。'
      ], images:[{src:'/assets/images/jin-slide-02.webp?v=portfolio-20261027',alt:'晋火项目概览：世界观、环境设定与白盒场景',caption:'项目概览 / 战乱中的山间祠庙'}]},
      { id:'space', title:'场景总览与空间层级', eyebrow:'SPACE & HIERARCHY', paragraphs:[
        '空间围绕中央大殿组织，通过楼层、屋檐和外侧通路形成不同高度的观察与探索关系。远处的高塔和后山目标帮助玩家建立方向感。'
      ], images:[{src:'/assets/images/jin-slide-03.webp?v=portfolio-20261027',alt:'晋火场景总览与空间层级图',caption:'场景总览与空间层级'}]},
      { id:'flow', title:'玩家动线与三层推进', eyebrow:'PLAYER FLOW', paragraphs:[
        '利用一处核心火堆作为探索的收束点，通过跨层楼梯与单向门捷径组织推进和回访。借用古建筑深远重檐的特点，以屋檐作为第三层探索路径。'
      ], route:[['1F','入口 → 中央火堆 → 西侧楼梯'],['2F','西侧楼梯 → 东北大厅 → 三层'],['3F','东北大厅 → 西侧机关门 → 后山']],
        images:[{src:'/assets/images/jin-slide-04.webp?v=portfolio-20261027',alt:'晋火三层推进总图，包括两条主要路线、捷径、敌人与机关布点',caption:'三层玩家动线 / 点击图片放大查看'}],
        gallery:[{src:'/assets/images/jin-map-1f.webp',label:'1F · 两条主要路线'},{src:'/assets/images/jin-map-2f.webp',label:'2F · 军械库与单向门'},{src:'/assets/images/jin-map-3f.webp',label:'3F · 屋檐绕行与出口'},{src:'/assets/images/jin-map-total.webp',label:'整体空间原型'}]
      },
      { id:'torch', title:'核心机制——火把与燃烧', eyebrow:'CORE MECHANIC', paragraphs:[
        '同一套火焰规则连接开路、开门、环境击杀与最终目标。火把有未持有、持有但未点燃、已点燃三种状态；水帘会使火把熄灭，玩家需要返回火源重新取火。',
        '燃烧规则应用于绳索、藤蔓、配重装置和环境落体。单向门与宝箱采用普通 E 键交互，不要求点燃火把。'
      ],images:[{src:'/assets/images/jin-slide-05.webp?v=portfolio-20261027',alt:'火把状态转换以及火把与绳索、藤蔓、配重门、环境落体和烽火台的关系',caption:'让多种场景交互共享一套能力条件'}]},
      { id:'teaching', title:'机制教学', eyebrow:'TEACHING', paragraphs:[
        '先观察环境，再执行操作：获取并点燃火把，观察不同材质的藤蔓，点燃并等待约 3 秒，障碍清除后继续前进。第一次规则闭环之后，将相同的可燃线索迁移到木桥、配重门与吊物固定绳。'
      ],images:[{src:'/assets/images/jin-slide-06.webp?v=portfolio-20261027',alt:'机制教学四个步骤：获取并点燃、观察藤蔓、点燃藤蔓、通过障碍',caption:'观察 → 关联 → 操作 → 通行反馈'}]},
      { id:'combination', title:'机制组合', eyebrow:'MECHANIC COMBINATIONS', paragraphs:[
        '水帘改变火焰状态，配重改变通路，高差改变处理敌人的位置。规则保持一致，空间条件与机关结果逐步变化。',
        '配重绳索燃烧后，石块下降 2.5 m、门上升 2.5 m；玩家也可以登上房梁，烧断固定绳，使屋顶下降 4.5 m，形成环境击杀。'
      ],images:[{src:'/assets/images/jin-slide-07.webp?v=portfolio-20261027',alt:'火把与水帘、配重、高差三种机制组合及结果',caption:'同一规则在不同空间条件下的应用'}]},
      { id:'guidance', title:'探索引导与路径选择', eyebrow:'GUIDANCE & CHOICE', paragraphs:[
        '入口断桥阻断正面道路，残栏、短屋檐与外挑木梁共同提示旧栈道；转折后再揭示烧绳平台与木桥，让每次移动都有下一处可停留位置。大殿前庭的高处点位吸引注意，围栏缺口揭示二层侧翼入口。',
        '主入口与东侧绕行带来不同的进入顺序、观察信息与接近方向，两路最终汇合于中央大厅火堆。主线推进与可开启捷径、支线在地图中分别标记，呈现关键节点的路径选择。'
      ],images:[{src:'/assets/images/jin-slide-08.webp?v=portfolio-20261027',alt:'晋火探索引导设计说明与场景',caption:'探索引导'},{src:'/assets/images/jin-slide-09.webp?v=portfolio-20261027',alt:'晋火路径选择与路线设计说明',caption:'路径选择'}]},
      { id:'encounters', title:'敌人布点与 Boss 场景解法', eyebrow:'ENCOUNTER DESIGN', paragraphs:[
        '当前 Demo 用环境机关表达处理方式：近战点位控制正面接近，高处与东侧远程点位表达立体和侧翼威胁，房梁与坠落屋顶提供环境解法。',
        'Boss 为设计方案，尚未作为完整 Boss 战实现：以重盾强盗首领为设想，延续火焰与落物的既有认知，通过场景落物限制行动、创造反击机会。'
      ],note:'当前 Demo 与 Boss 设计方案的完成范围分别标注。',images:[{src:'/assets/images/jin-slide-10.webp?v=portfolio-20261027',alt:'当前Demo敌人布点与仅为设计方案的Boss场景解法',caption:'左：当前 Demo / 右：Boss 设计方案'}]},
      { id:'loop', title:'奖励、支线与回环', eyebrow:'LOOPS & REWARDS', paragraphs:[
        '单向门把探索成果转化为连通关系，减少之后的折返。开启前，水帘使火把熄灭，玩家无法直接把火带到西侧；开启后形成直接连通，让火把能力可以带入后续区域。',
        '支线与物资探索分布在西侧监牢、军械库、临空挑台和屋顶宝箱处。宝箱变色表示已拾取。'
      ],images:[{src:'/assets/images/jin-slide-11.webp?v=portfolio-20261027',alt:'单向门开启前后的通路比较、人质支线与物资探索',caption:'将探索成果转化为可用的捷径'}]},
      { id:'implementation', title:'技术实现与验证', eyebrow:'IMPLEMENTATION', paragraphs:[
        '技术实现以 UE5 蓝图为主。角色移动、动画与倒地表现基于 Game Animation Sample 模板复用；交互请求统一由玩家发出，各个目标处理自己的状态、条件与反馈。',
        '火把状态与 Niagara、点光源表现同步；单向门通过玩家所在侧判断交互资格；屋顶运动与敌人范围判定分别控制。功能检查围绕状态、交互条件、完成反馈与通行结果展开。'
      ],disclosures:[{title:'完成范围与后续验证',text:'当前内容为灰盒原型与流程演示。重点验证火把拾取、取火与熄火、机关动作、单向门方向判断、重复触发限制、完成后的碰撞，以及环境落体与敌人判定。完整 Boss 战仍属于设计方案。'},{title:'模板、素材与辅助工具说明',text:'角色模板来自 Epic Games Game Animation Sample；部分模型来自 Fab，持握动画来自 Mixamo。ChatGPT／Codex 用于需求拆解、空间示意、蓝图思路、故障诊断与火焰序列图辅助制作。火把燃烧蓝图参考视频教程。具体来源与实现边界见技术概览文档。'}]
      }
    ],
    documents:[{label:'关卡设计演示文档',detail:'完整设计说明 · PDF',href:'/assets/documents/jinhuo-level-design.pdf?v=portfolio-20261027'},{label:'技术概览文档',detail:'蓝图实现、验证与素材来源 · PDF',href:'/assets/documents/jinhuo-technical-overview.pdf'}]
  },
  {
    slug:'re-university', order:2, title:'Re：University', type:'游戏 Demo', engine:'Godot', engineShort:'Godot', role:'独立作品',
    subtitle:'生存冒险 RPG', tags:['生存','冒险','探索'],
    cover:'/assets/images/re-map.webp',poster:'/assets/images/re-map.webp',coverFit:'contain',
    intro:'以研究所为探索场景的生存冒险 RPG Demo，通过门禁、关键物品、文件线索与资源分布组织探索过程。',
    video:'/assets/media/re-university/index.m3u8', videoLabel:'Demo 演示视频', duration:'09:52',
    facts:[['制作方式','独立作品'],['开发引擎','Godot'],['关卡规模','26 个房间场景'],['制作时间','2026.06 — 2026.07']],
    sections:[
      {id:'overview',title:'项目概览',eyebrow:'PROJECT OVERVIEW',paragraphs:['本项目为使用 Godot 引擎独立制作的生存冒险 RPG Demo。围绕「安全屋 → 主枢纽 → 分区探索 → 目标回收 → 死亡结局」组织研究所关卡，完成 26 个房间场景的白盒与核心功能。','使用「单房间单场景」结构，实现门交互、场景切换、固定／跟随视角、HUD、背包、敌人与 Boss 结局，使纸面动线落地为可实机游玩的 Demo。'],images:[{src:'/assets/images/re-frame-1.webp',alt:'Re University演示中的研究所探索画面，左上角显示区域地图',caption:'研究所内的实际探索画面'}]},
      {id:'map',title:'研究所地图与空间连接',eyebrow:'LEVEL LAYOUT',paragraphs:['将大厅与长走廊作为主枢纽，通过门禁卡、单向反锁门、捷径与永久堵塞门控制探索动线，构建往返探索回路。线索与可选调查为玩家理解目标提供方向。','地图包含一层研究所空间与二层走廊、小会议室，并区分敌人、交互物品与物资。将空间连接与交互条件放在同一张图中，可以同时查看可探索区域、关键物品位置，以及后续开通的通路。'],images:[{src:'/assets/images/re-map.webp',alt:'Re University研究所一层及二层地图，完整标注房间、敌人、资源、交互物和门的状态',caption:'研究所 1F / 2F 地图 · 点击放大，拖动查看细节'}]},
      {id:'interaction',title:'门禁、关键物品与文件线索',eyebrow:'EXPLORATION & INTERACTION',paragraphs:['地图中的门禁卡、保险丝、配电箱与报告厅音箱形成多种交互节点。演示展示了关键物品与文件查看界面，文件内容为设备与场景交互提供线索。','报告厅音箱使用指南中说明：恢复电力、确认音源，再通过主控设备打开音箱。空间探索与文件阅读由具体的场景目标连接起来。'],images:[{src:'/assets/images/re-frame-2.webp',alt:'文件界面中的报告厅音箱使用指南及设备启用流程',caption:'以可阅读文件承载交互线索'}]},
      {id:'resources',title:'敌人与物资分布',eyebrow:'ENEMIES & RESOURCES',paragraphs:['将敌人按应对方式分为「必杀、可选击杀、不鼓励击杀、机制规避」四类，围绕手枪随机伤害设计 3—4 枪击杀模型。根据强制战斗和可选探索配置子弹数量区间，目标是形成「资源够用但不宽裕」的生存压力。','地图用不同符号标出丧尸、交互物品与物资。弹药和急救包分布在走廊及各个房间；演示中的剩余子弹与身体状态反馈，可与地图中的敌人和补给位置对照查看。'],images:[{src:'/assets/images/re-frame-3.webp',alt:'研究所探索过程中的角色、地图与剩余子弹信息',caption:'通过地图与实际流程对照查看资源分布'}]}
    ], documents:[]
  }
];
