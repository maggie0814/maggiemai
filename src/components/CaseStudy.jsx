import React from 'react'

function PhoneCase({ item, onOpen }) {
  return <button className="phone-case" type="button" onClick={() => onOpen(item)} aria-haspopup="dialog" aria-label={`打开案例详情：${item.title}`}>
    <span className="case-phone-frame"><span className="case-phone-speaker"/><span className={`case-phone-screen-content ${item.cover ? '' : 'case-cover-empty'}`}>
      {item.cover ? <img src={item.cover} alt={`${item.title}笔记封面`} loading="lazy"/> : <span><i aria-hidden="true">＋</i><b>笔记封面 / 截图</b><small>待补充真实素材</small></span>}
    </span><span className="case-phone-home"/></span>
    <span className="phone-case-copy"><strong>{item.title}</strong><small>{item.contentType || '小红书笔记案例'}</small><span>{item.idea || '补充真实笔记标题、创意说明与封面素材。'}</span></span>
    <span className="phone-case-open">点击查看案例 <b aria-hidden="true">→</b></span>
  </button>
}

function StoryDetailHero({ kicker, headline, title, intro, url }) {
  return <section className="story-detail-hero">
    <p className="episode-kicker">{kicker}</p><h1>{headline}</h1>{title && title !== headline && <h2>{title}</h2>}<p className="episode-intro">{intro}</p>
    {url && <a className="episode-source-link" href={url} target="_blank" rel="noreferrer">打开小红书原笔记 <span aria-hidden="true">↗</span></a>}
    <span className="episode-scroll-cue">SCROLL TO EXPLORE <b>↓</b></span>
  </section>
}

function ContentEcho({ data, originalImage }) {
  const [activeCase, setActiveCase] = React.useState(null)
  const dialogRef = React.useRef(null)
  const closeRef = React.useRef(null)
  const triggerRef = React.useRef(null)
  const scrollTopRef = React.useRef(0)

  const restoreCasePosition = React.useCallback(() => {
    requestAnimationFrame(() => {
      const caseDialog = document.querySelector('.case-detail-dialog')
      if (caseDialog) {
        caseDialog.style.scrollBehavior = 'auto'
        caseDialog.scrollTop = scrollTopRef.current
        requestAnimationFrame(() => { caseDialog.style.scrollBehavior = '' })
      }
      triggerRef.current?.focus({ preventScroll: true })
    })
  }, [])

  const closeComparison = React.useCallback(() => {
    if (dialogRef.current?.open) dialogRef.current.close()
    setActiveCase(null)
    restoreCasePosition()
  }, [restoreCasePosition])

  React.useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (activeCase && !dialog.open) {
      const caseDialog = document.querySelector('.case-detail-dialog')
      scrollTopRef.current = caseDialog?.scrollTop || 0
      dialog.showModal()
      closeRef.current?.focus()
    }
    if (!activeCase && dialog.open) dialog.close()
  }, [activeCase])

  const handleDialogClose = () => {
    setActiveCase(null)
    restoreCasePosition()
  }
  const cases = Array.from({ length: Math.max(6, data.cases.length) }, (_, index) => data.cases[index] || null)
  return <section className="content-echo" aria-labelledby="content-echo-title">
    <div className="content-echo-heading" id="content-echo-title"><div><span className="echo-kicker">来自竞品的模仿</span></div><p>6 篇案例对照</p></div>
    <div className="echo-followups"><div className="echo-connector"><span>6 篇相似内容案例</span></div><div className="echo-case-grid">{cases.map((item, index) => item ? <button className="echo-case" type="button" key={item.image} onClick={(event) => { triggerRef.current = event.currentTarget; setActiveCase(item) }} aria-label={`查看${item.account}发布的相似内容案例`}>
        <img src={item.image} alt={`${item.account}发布的笔记截图`} loading="lazy"/><span className="echo-case-copy"><strong>{item.account}</strong><small>发布时间 · {item.date}</small><span>{item.feature}</span></span>
      </button> : <div className="echo-case echo-case-placeholder" key={`pending-${index}`}><span>案例素材待补</span></div>)}</div></div>
    <dialog className="echo-dialog" ref={dialogRef} aria-labelledby="echo-dialog-title" onClose={handleDialogClose} onClick={(event) => { if (event.target === dialogRef.current) closeComparison() }}>
      {activeCase && <><button className="case-detail-close" type="button" ref={closeRef} aria-label="关闭对照详情" onClick={closeComparison}>关闭 <span aria-hidden="true">×</span></button><h2 id="echo-dialog-title" className="echo-dialog-title">原创笔记与相似内容对照</h2><div className="echo-dialog-pair"><figure><img src={originalImage} alt="案例详情左侧展示的原创笔记封面"/><figcaption><strong>原创笔记</strong><span>{data.original.account} · {data.original.date}</span></figcaption></figure><figure><img src={activeCase.image} alt={`${activeCase.account}笔记截图`}/><figcaption><strong>{activeCase.account}</strong><span>发布时间 · {activeCase.date}</span></figcaption></figure></div><div className="echo-dialog-note"><span className="echo-kicker">相似内容形式</span><h3>{activeCase.title}</h3><p>{activeCase.feature}</p></div></>}
    </dialog>
  </section>
}

function EpisodeDetail({ item }) {
  return <div className="episode-detail story-detail">
    <aside className="story-cover-column"><p className="episode-kicker">NOTE COVER / ORIGINAL CONTENT</p><div className="story-cover-carousel">{item.cover ? <img src={item.cover} alt="《爆款口红》AI 剧情植入笔记封面"/> : <div className="case-detail-placeholder"><span>案例封面素材</span><small>请补充对应小红书笔记首图</small></div>}</div></aside>
    <div className="story-content-column">
    <StoryDetailHero kicker="COLORKEY / AI STORY PLACEMENT" headline={<>让产品走进剧情，<br/>而不是插进剧情</>} title="《爆款口红》｜AI 剧情植入案例" intro={<>借势 AI 剧情内容趋势，将唇露打造为双胞胎姐妹，让产品从被动露出转变为剧情参与者。<br/>用角色关系制造冲突，用抓马反转推动故事，让品牌自然融入内容。</>} url={item.url}/>

    <section className="episode-section episode-results">
      <span className="episode-kicker">02 / PERFORMANCE</span><h2>内容有戏，<br/>数据有结果</h2>
      <div className="episode-metrics">
        <div><small>自然流量</small><strong>2W<sup>+</sup></strong></div>
        <div><small>灵犀榜单</small><strong className="episode-rank">当月第一</strong></div>
        <div><small>CTR</small><strong>14.47<sup>%</sup></strong></div>
        <div><small>CPUV</small><strong>1.83</strong></div>
      </div>
      <p className="episode-result-note">以角色化植入承载产品信息，以剧情冲突提升内容吸引力。项目取得阶段性传播表现，为 AI 剧情与品牌植入的结合提供了实践案例。</p>
    </section>

    <section className="episode-section episode-contribution">
      <span className="episode-kicker">03 / MY CONTRIBUTION</span><h2>My contribution</h2><p className="episode-lead">从内容判断到品牌表达，完成产品角色化的创意设计。</p>
      <div className="episode-contribution-list">
        <article><span>判断</span><div><h3>内容方向判断</h3><p>选择 AI 抓马剧情作为产品植入载体，建立内容吸引力与品牌传播之间的连接。</p></div></article>
        <article><span>设计</span><div><h3>剧情结构设计</h3><p>围绕双胞胎登场、误会升级、真相反转与关系和解，搭建完整的剧情链路。</p></div></article>
        <article><span>转化</span><div><h3>品牌植入转化</h3><p>将产品卖点转译为人物设定，让品牌成为剧情的一部分，而非独立的广告信息。</p></div></article>
      </div>
    </section>

    <section className="episode-section episode-strategy">
      <span className="episode-kicker">04 / WHY IT WORKED</span><h2>Why it worked</h2>
      <div className="episode-insight-cards">
        <article><span>01</span><h3>踩中内容风口</h3><p>选择 AI 抓马剧情承载产品植入，用故事吸引用户，而不是依赖传统广告式展示。</p></article>
        <article><span>02</span><h3>产品变成角色</h3><p>将唇露设计为双胞胎姐妹，让人物身份与产品卖点形成对应关系。</p></article>
        <article><span>03</span><h3>冲突制造记忆点</h3><p>通过误会、对峙、反转与和解，建立清晰的剧情节奏，让品牌参与故事推进。</p></article>
      </div>
    </section>

    <section className="episode-section episode-characters">
      <span className="episode-kicker">05 / PRODUCT STORYTELLING</span><h2>Product storytelling</h2><p className="episode-lead">让角色承载卖点，让卖点融入剧情。</p>
      <div className="episode-character-grid">
        <article className="episode-character character-lilac"><span>01 / 透明盖姐姐</span><strong>水润力</strong><p>对应 85% 水精华卖点，结合高级雾面、水润不拔干的产品沟通方向。</p><i aria-hidden="true">A</i></article>
        <article className="episode-character character-yellow"><span>02 / 白盖妹妹</span><strong>轻松卸</strong><p>突出易卸、不染唇的产品特点，以独立角色强化产品差异。</p><i aria-hidden="true">B</i></article>
        <article className="episode-character character-sand"><span>03 / 盖妹</span><strong>角色成长</strong><p>承接原有爆款角色的成长主线，通过新旧角色的相遇制造剧情张力。</p><i aria-hidden="true">C</i></article>
      </div>
      <p className="episode-asset-note">角色视觉素材待补充｜此处以色块和文字建立版式，不以非项目图片代替真实剧情素材。</p>
    </section>

    <section className="episode-section episode-ending">
      <span className="episode-kicker">06 / TAKEAWAY</span><h2>让产品成为<br/>内容本身</h2>
      <div className="episode-manifesto"><p>让产品成为剧情角色。</p><p>让卖点成为人物设定。</p><p>让品牌传播发生在故事里。</p></div>
      <p className="episode-next">本次项目探索了 AI 剧情与产品植入的结合方式。下一步将结合留存、互动和转化数据，持续验证内容结构与产品记忆之间的关系，并沉淀可复用的创意方法论。</p>
      <button className="episode-back-top" type="button" onClick={() => document.querySelector('.case-detail-dialog')?.scrollTo({top:0,behavior:'smooth'})}>返回顶部 ↑</button>
    </section>
    </div>
  </div>
}

function EditorialStoryDetail({ item }) {
  const images = item.gallery || (item.cover ? [item.cover] : [])
  const [activeImage, setActiveImage] = React.useState(0)
  const blocks = (items) => <div className="story-detail-cards">{items.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
  const chapterOrder = item.chapterOrder || ['performance', 'strategy', 'product', 'contribution', 'takeaway']
  const chapterNumber = Object.fromEntries(chapterOrder.map((chapter, index) => [chapter, String(index + (item.chapterStart ?? 2)).padStart(2, '0')]))
  const chapterLabels = { performance: 'RESULT SCREEN', strategy: 'WHY IT WORKED', product: 'PRODUCT STORYTELLING', contribution: 'MY CONTRIBUTION', takeaway: 'TAKEAWAY', ...item.chapterLabels }
  const chapters = {
    performance: <section className="story-detail-section" key="performance"><p className="episode-kicker">{chapterNumber.performance} / {chapterLabels.performance}</p><h2>{item.performanceTitle}</h2><div className={`story-metrics${item.metricColumns ? ` story-metrics-${item.metricColumns}` : ''}`}>{item.metrics.map(([label, value]) => <div key={label}><small>{label}</small><strong className={String(value).length > 12 ? 'is-text' : ''}>{value}</strong></div>)}</div>{item.performance && <p>{item.performance}</p>}{item.contentEcho && <ContentEcho data={item.contentEcho} originalImage={images[0]} />}{item.performanceCallout && <p className="story-performance-callout">{item.performanceCalloutLabel && <strong>{item.performanceCalloutLabel}</strong>}{item.performanceCalloutLabel && ' '}{item.performanceCallout}</p>}</section>,
    strategy: item.strategy && <section className="story-detail-section" key="strategy"><p className="episode-kicker">{chapterNumber.strategy} / {chapterLabels.strategy}</p><h2>Why it worked</h2>{blocks(item.strategy)}</section>,
    product: item.product && <section className="story-detail-section" key="product"><p className="episode-kicker">{chapterNumber.product} / PRODUCT STORYTELLING</p><h2>{item.productTitle}</h2><p>{item.productLead}</p>{blocks(item.product)}</section>,
    contribution: item.contribution && <section className="story-detail-section" key="contribution"><p className="episode-kicker">{chapterNumber.contribution} / {chapterLabels.contribution}</p><h2>My contribution</h2><p>{item.contributionLead}</p>{blocks(item.contribution)}</section>,
    takeaway: item.takeaway && <section className="story-detail-section story-takeaway" key="takeaway"><p className="episode-kicker">{chapterNumber.takeaway} / {chapterLabels.takeaway}</p><h2>{item.takeawayTitle}</h2><p>{item.takeaway}</p>{item.footnote && <small>{item.footnote}</small>}<button className="episode-back-top" type="button" onClick={() => document.querySelector('.case-detail-dialog')?.scrollTo({top:0,behavior:'smooth'})}>返回顶部 ↑</button></section>
  }
  return <div className="episode-detail story-detail">
    <aside className="story-cover-column"><p className="episode-kicker">NOTE COVER / ORIGINAL CONTENT</p><div className="story-cover-carousel">{images.length ? <><img src={images[activeImage]} alt={`${item.title}笔记图片 ${activeImage + 1}`} />{images.length > 1 && <div className="story-cover-controls"><button type="button" aria-label="上一张笔记图片" onClick={() => setActiveImage((activeImage + images.length - 1) % images.length)}>←</button><span>{activeImage + 1} / {images.length}</span><button type="button" aria-label="下一张笔记图片" onClick={() => setActiveImage((activeImage + 1) % images.length)}>→</button></div>}</> : <div className="case-detail-placeholder"><span>案例封面素材</span><small>请补充对应小红书笔记首图</small></div>}</div>{item.note && <p className="story-cover-note">{item.note}</p>}</aside>
    <div className="story-content-column">
      <StoryDetailHero kicker={item.kicker} headline={item.headline} title={item.title} intro={item.intro} url={item.url}/>
      {chapterOrder.map((chapter) => chapters[chapter])}
      {item.closingSummary && <section className="story-detail-section story-takeaway story-closing-takeaway"><p className="episode-kicker">04 / TAKEAWAY</p><h2>{item.closingSummaryTitle}</h2><p className="story-summary-copy">{item.closingSummary}</p><button className="episode-back-top" type="button" onClick={() => document.querySelector('.case-detail-dialog')?.scrollTo({top:0,behavior:'smooth'})}>返回顶部 ↑</button></section>}
    </div>
  </div>
}

function CaseDetail({ item }) {
  if (item.detail === 'episode-8') return <EpisodeDetail item={item}/>
  if (item.detail === 'editorial-story') return <EditorialStoryDetail item={item}/>
  return <div className="episode-detail case-placeholder-detail">
    <section className="episode-section episode-hero"><span className="episode-dot"/><p className="episode-kicker">{item.projectTitle || 'COLORKEY / CASE STUDY'}</p><h2>{item.title}</h2><p className="episode-subtitle">{item.contentType || '小红书笔记案例'}</p><p className="episode-intro">{item.idea || '本案例的真实笔记内容与创意说明待补充。'}</p><div className="case-detail-placeholder">笔记封面 / 截图<br/><small>待补充真实素材</small></div>{item.url && <a className="episode-source-link" href={item.url} target="_blank" rel="noreferrer">打开小红书原笔记 ↗</a>}</section>
  </div>
}

export default function CaseStudy({ projects = [], featuredCases = [], projectAppendix = null, chapterTitle = null, chapterKicker = 'PERSONAL PROJECTS / COLORKEY S+', chapterDescription = '从产品问题到用户内容，再到投放反馈与下一步判断。', sectionId = 'personal-projects' }) {
  const [activeCase, setActiveCase] = React.useState(null)
  const dialogRef = React.useRef(null)
  React.useEffect(() => {
    const dialog = dialogRef.current
    if (activeCase && dialog) {
      if (!dialog.open) dialog.showModal()
      dialog.scrollTop = 0
    }
  }, [activeCase])
  return <section className="case-study-system case-phone-system" id={sectionId}>
    <div className="personal-project-chapter">{chapterTitle && <div className="section-heading"><div><span className="detail-kicker">{chapterKicker}</span><h2>{chapterTitle}</h2></div>{chapterDescription && <p>{chapterDescription}</p>}</div>}
    <div className="business-project-list">{projects.map((project, index) => <article className="business-project" key={project.id}>
      <header className="business-project-heading"><span>{project.sectionNumber || `0${index + 1}`} / {project.kicker}</span><h3>{project.title}</h3><p>{project.summary}</p></header>
      <div className="case-analysis"><div className={`case-flow case-flow-count-${project.steps.length}`}>{project.steps.map((step) => <article className="case-flow-step" key={step.label}><small>{step.label}</small><strong>{step.title}</strong>{step.text && <p>{step.text}</p>}</article>)}</div>{!project.hideTakeaway && project.takeaway && <p className="case-takeaway"><span>复盘判断</span>{project.takeaway}</p>}</div>
      {!project.hideMetrics && project.metrics?.length > 0 && <div className="case-metrics">{project.metrics.map((metric) => <div className="case-metric" key={metric.label}><span>{metric.label}</span><strong>{metric.value}</strong>{metric.note && <small>{metric.note}</small>}</div>)}</div>}
      {project.id !== 'water-mist' && <><div className="case-wall-heading"><div><small>REAL CONTENT / CASE WALL</small><h4>真实笔记案例</h4></div><p>{project.caseWallDescription || '点击卡片查看对应案例详情；缺少素材时明确标记待补充。'}</p></div><div className="phone-case-grid">{project.cases.map((item) => <PhoneCase key={item.id} item={{...item,projectTitle:project.title}} onOpen={setActiveCase}/>)}</div></>}
      {project.launchNote && <p className="case-source-note water-launch-note">{project.launchNote}</p>}
      {project.sourceNote && <p className="case-source-note">资料口径：{project.sourceNote}</p>}
      {featuredCases.length > 0 && <><div className="case-wall-heading featured-case-heading"><div><small>REAL CONTENT / CASE WALL</small><h4>真实笔记案例</h4></div><p>点击查看水雾唇露相关的真实内容与对应案例详情。</p></div><div className="featured-case-grid">{featuredCases.map((item) => <PhoneCase key={item.id} item={item} onOpen={setActiveCase}/>)}</div></>}
      {projectAppendix}
    </article>)}</div></div>
    <dialog className="case-detail-dialog" ref={dialogRef} aria-label={activeCase?.title || '案例详情'} onClose={() => setActiveCase(null)} onClick={(event) => { if (event.target === dialogRef.current) dialogRef.current.close() }}>
      <button className="case-detail-close" type="button" aria-label="返回案例列表" onClick={() => dialogRef.current?.close()}>返回案例列表 <span aria-hidden="true">×</span></button>
      {activeCase && <CaseDetail item={activeCase}/>}
    </dialog>
  </section>
}
