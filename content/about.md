---
title: "关于信朴科技 | 自研软件产品与企业 AI 落地服务商"
description: "信朴科技以自研底座为支撑，自研业务系统与 Agent 在真实业务中每日生产运行；软件产权自有、按授权交付，支持 SaaS 订阅与私有化部署，并提供企业 AI 落地、Agent 定制、AI 原生研发与云与托管 IT 服务。"
keywords: "自研软件,软件产权,企业AI落地,Agent定制,AI原生研发,私有化部署,信朴科技"
nav: "about"
date: 2026-11-18
draft: false
------

<style>
:root{
--brand:#1d4ed8;
--brand-text:#0f2c5e;
--accent:#f97316;
--text:#1f2937;
--text-2:#6b7280;
--text-3:#9ca3af;
--bg:#ffffff;
--bg-soft:#f9fafb;
--bg-section:#fafbfc;
--border:#e5e7eb;
--border-2:#d1d5db;
--radius:8px;
--radius-lg:12px;
--shadow-sm:0 1px 2px rgba(0,0,0,.04);
--shadow:0 2px 8px rgba(0,0,0,.06);
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
font-family:"PingFang SC","Microsoft YaHei",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
color:var(--text);background:var(--bg);line-height:1.7;font-size:15px;
-webkit-font-smoothing:antialiased;overflow-x:hidden;
}
a{color:inherit;text-decoration:none}
.wrap{max-width:1200px;margin:0 auto;padding:0 24px}

.btn{display:inline-flex;align-items:center;gap:6px;padding:10px 24px;border-radius:6px;font-size:14px;font-weight:500;cursor:pointer;transition:all .2s;border:1px solid transparent;font-family:inherit}
.btn-primary{background:var(--brand);color:#fff;border-color:var(--brand)}
.btn-primary:hover{background:#1e40af;border-color:#1e40af}
.btn-accent{background:var(--accent);color:#fff;border-color:var(--accent)}
.btn-accent:hover{background:#ea580c;border-color:#ea580c}
.btn-ghost{background:#fff;color:var(--text);border-color:var(--border-2)}
.btn-ghost:hover{border-color:var(--text);color:var(--text)}
.btn-lg{padding:12px 32px;font-size:15px}

.hero{
position:relative;
margin-top:50px;
min-height:520px;
padding:100px 0 56px;
background:#eaf2fc url(/assets/img/20260814/ban1.png) center/cover no-repeat;
overflow:hidden;
}
.hero::after{
content:"";position:absolute;inset:0;
background:linear-gradient(90deg,rgba(255,255,255,.85) 0%,rgba(255,255,255,.55) 45%,rgba(255,255,255,0) 75%);
pointer-events:none;
}
.hero .wrap{position:relative;z-index:2}
#fluid-wrap{
position:fixed;inset:0;z-index:1;pointer-events:none;overflow:hidden;
mix-blend-mode:multiply;
}
#fluid-wrap canvas{display:block;width:100%;height:100%;}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--text-2);font-weight:500;margin-bottom:20px;letter-spacing:.02em}
.hero-eyebrow::before{content:"";width:24px;height:1px;background:var(--accent)}
.hero h1{font-size:46px;line-height:1.22;font-weight:800;letter-spacing:-.01em;margin-bottom:20px;max-width:640px}
.hero h1 .line1{display:block;color:var(--text)}
.hero h1 .line2{display:block;color:var(--brand)}
.hero .sub{font-size:15.5px;line-height:1.75;color:var(--text-2);max-width:540px;margin-bottom:22px}
.hero-chips{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px}
.hero-chips span{padding:5px 12px;font-size:12.5px;color:var(--text);background:rgba(255,255,255,.85);border:1px solid var(--border);border-radius:4px;backdrop-filter:blur(4px)}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap}

section{padding:72px 0}
.sec-head{text-align:center;max-width:760px;margin:0 auto 48px}
.sec-eyebrow{font-size:12.5px;font-weight:600;color:var(--brand);letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}
.sec-title{font-size:30px;font-weight:700;letter-spacing:-.01em;line-height:1.35;margin-bottom:14px;color:var(--text)}
.sec-title .em{color:var(--brand-text)}
.sec-desc{font-size:15px;color:var(--text-2);line-height:1.75}
.bg-soft{background:var(--bg-soft)}

.audience{padding:24px 0;background:var(--bg-soft);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.audience .wrap{display:flex;align-items:center;gap:24px;flex-wrap:wrap;justify-content:center}
.audience-label{font-size:13px;color:var(--text-2);font-weight:500;flex-shrink:0}
.audience-tags{display:flex;gap:8px;flex-wrap:wrap;justify-content:center}
.audience-tags span{padding:6px 14px;font-size:13px;color:var(--text-2);font-weight:500;border-right:1px solid var(--border)}
.audience-tags span:last-child{border-right:none}

/* 公司简介：左文右数据 */
.intro{display:grid;grid-template-columns:1.4fr 1fr;gap:48px;align-items:center}
.intro-text p{font-size:15.5px;color:var(--text-2);line-height:1.85;margin-bottom:16px}
.intro-text p strong{color:var(--text);font-weight:600}
.intro-text .lead{font-size:17px;color:var(--text);font-weight:500;line-height:1.75;margin-bottom:20px;padding-left:16px;border-left:3px solid var(--brand)}
.intro-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);padding:32px;box-shadow:var(--shadow)}
.intro-card h4{font-size:14px;font-weight:600;color:var(--brand);letter-spacing:.08em;margin-bottom:20px;padding-bottom:14px;border-bottom:1px solid var(--border)}
.intro-card .row{display:flex;justify-content:space-between;align-items:baseline;padding:11px 0;border-bottom:1px dashed var(--border)}
.intro-card .row:last-child{border-bottom:none}
.intro-card .k{font-size:13.5px;color:var(--text-2)}
.intro-card .v{font-size:14px;color:var(--text);font-weight:600;text-align:right}

/* 关键数据 */
.stats-section{background:var(--bg-soft)}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;background:#fff}
.stat-card{padding:36px 24px;text-align:center;border-right:1px solid var(--border);transition:all .2s}
.stat-card:last-child{border-right:none}
.stat-card:hover{background:var(--bg-soft)}
.stat-num{font-size:38px;font-weight:700;color:var(--text);line-height:1;margin-bottom:10px;font-family:Georgia,serif;letter-spacing:-.02em}
.stat-num .accent{color:var(--accent)}
.stat-num .unit{font-size:18px;color:var(--text-2);font-weight:600;margin-left:2px}
.stat-label{font-size:13px;color:var(--text-2);font-weight:500}

/* 发展历程：时间轴 */
.timeline{position:relative;max-width0px;margin:0 auto;padding-left:32px}
.timeline::before{content:"";position:absolute;left:7px;top:8px;bottom:8px;width:2px;background:linear-gradient(to bottom,var(--brand),var(--border))}
.tl-item{position:relative;padding-bottom:40px}
.tl-item:last-child{padding-bottom:0}
.tl-item::before{content:"";position:absolute;left:-32px;top:6px;width:16px;height:16px;border-radius:50%;background:#fff;border:3px solid var(--brand);box-shadow:0 0 0 4px rgba(29,78,216,.12)}
.tl-stage{font-size:12.5px;font-weight:600;color:var(--brand);letter-spacing:.05em;margin-bottom:6px}
.tl-item h4{font-size:17px;font-weight:700;color:var(--text);margin-bottom:8px}
.tl-item p{font-size:14px;color:var(--text-2);line-height:1.75}

/* 四大服务方向 */
.prod-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.prod-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);padding:24px 22px;transition:all .2s;display:flex;flex-direction:column}
.prod-card:hover{border-color:var(--brand);box-shadow:var(--shadow)}
.prod-stage{font-size:11.5px;font-weight:600;color:var(--brand);letter-spacing:.08em;margin-bottom:14px}
.prod-icon{width:40px;height:40px;border-radius:6px;background:var(--bg-soft);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;margin-bottom:16px}
.prod-icon svg{width:22px;height:22px;color:var(--brand)}
.prod-card h4{font-size:16px;font-weight:600;color:var(--text);margin-bottom:8px}
.prod-scene{font-size:12.5px;color:var(--accent);font-weight:500;margin-bottom:14px;line-height:1.5}
.prod-features{list-style:none;margin-bottom:18px;flex:1}
.prod-features li{font-size:13px;color:var(--text-2);padding:4px 0;line-height:1.6;border-bottom:1px dashed var(--border)}
.prod-features li:last-child{border-bottom:none}

/* 团队构成：三栏 */
.team-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.team-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);padding:32px 28px;text-align:center;transition:all .2s}
.team-card:hover{border-color:var(--brand);box-shadow:var(--shadow)}
.team-icon{width:52px;height:52px;border-radius:50%;background:var(--bg-soft);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;margin:0 auto 18px}
.team-icon svg{width:26px;height:26px;color:var(--brand)}
.team-card h4{font-size:17px;font-weight:700;color:var(--text);margin-bottom:6px}
.team-tag{font-size:12.5px;color:var(--accent);font-weight:500;margin-bottom:12px}
.team-card p{font-size:13.5px;color:var(--text-2);line-height:1.7}

/* 价值观：四句话 */
.value-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.value-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);padding:28px 30px;display:flex;gap:20px;align-items:flex-start;transition:all .2s}
.value-card:hover{border-color:var(--brand);box-shadow:var(--shadow)}
.value-num{font-size:36px;font-weight:700;color:var(--bg-soft);font-family:Georgia,serif;line-height:1;flex-shrink:0;-webkit-text-stroke:1px var(--brand)}
.value-body h4{font-size:16px;font-weight:700;color:var(--text);margin-bottom:6px}
.value-body p{font-size:13.5px;color:var(--text-2);line-height:1.7}

/* 为什么选信朴科技 */
.why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.why-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);padding:28px 22px;text-align:center;transition:all .2s}
.why-card:hover{border-color:var(--brand);box-shadow:var(--shadow)}
.why-icon{width:44px;height:44px;border-radius:50%;background:var(--bg-soft);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;margin:0 auto 16px}
.why-icon svg{width:22px;height:22px;color:var(--brand)}
.why-card h4{font-size:15.5px;font-weight:600;color:var(--text);margin-bottom:8px}
.why-card p{font-size:13px;color:var(--text-2);line-height:1.65}

/* 行业覆盖 */
.industry-cloud{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;max-width0px;margin:0 auto}
.industry-cloud span{padding:7px 16px;font-size:13.5px;color:var(--text-2);font-weight:500;background:#fff;border:1px solid var(--border);border-radius:4px;transition:all .2s;cursor:default}
.industry-cloud span:hover{border-color:var(--brand);color:var(--brand)}
.industry-cloud span.hot{color:var(--brand);border-color:var(--brand);font-weight:600}

/* 客户 Logo 墙 */
.client-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-top:36px}
.client-card{background:#fff;border:1px solid var(--border);border-radius:6px;padding:20px 12px;text-align:center;transition:all .2s}
.client-card:hover{border-color:var(--brand);box-shadow:var(--shadow);transform:translateY(-2px)}
.client-name{font-size:14px;font-weight:600;color:var(--text);margin-bottom:4px}
.client-ind{font-size:11.5px;color:var(--text-3)}

/* 荣誉 */
.honor-list{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:900px;margin:0 auto}
.honor-item{display:flex;align-items:center;gap:14px;padding:14px 20px;background:#fff;border:1px solid var(--border);border-radius:6px;transition:all .2s}
.honor-item:hover{border-color:var(--brand)}
.honor-medal{width:24px;height:24px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.honor-medal svg{width:12px;height:12px;color:#fff}
.honor-item p{font-size:13.5px;color:var(--text);line-height:1.6;font-weight:500}

/* 底部 CTA */
.cta-final{padding:60px 0;background:var(--bg-soft);border-top:1px solid var(--border);text-align:center}
.cta-final h2{font-size:26px;font-weight:700;color:var(--text);margin-bottom:12px}
.cta-final p{font-size:15px;color:var(--text-2);margin-bottom:28px;max-width:540px;margin-left:auto;margin-right:auto}
.cta-final .hero-cta{justify-content:center}
.cta-contact{margin-top:36px;padding-top:24px;border-top:1px solid var(--border);display:flex;gap:32px;justify-content:center;flex-wrap:wrap;font-size:13px;color:var(--text-2)}
.cta-contact .item{display:flex;align-items:center;gap:6px}
.cta-contact svg{width:15px;height:15px;color:var(--brand)}

footer{padding:24px 0;border-top:1px solid var(--border);color:var(--text-3);font-size:12.5px;text-align:center;background:#fff}

@media (max-width:1024px){
.hero{min-height:460px;padding:80px 0 48px}
.hero h1{font-size:36px}
.prod-grid,.why-grid{grid-template-columns:repeat(2,1fr)}
.team-grid{grid-template-columns:1fr}
.client-grid{grid-template-columns:repeat(4,1fr)}
.stats-grid{grid-template-columns:repeat(2,1fr)}
.stat-card:nth-child(2){border-right:none}
.stat-card:nth-child(1),.stat-card:nth-child(2){border-bottom:1px solid var(--border)}
}
@media (max-width:680px){
section{padding:48px 0}
.sec-title{font-size:24px}
.hero{min-height:380px;padding:60px 0 40px}
.hero h1{font-size:26px}
.hero .sub{font-size:14.5px}
.intro{grid-template-columns:1fr;gap:32px}
.prod-grid,.why-grid,.value-grid,.honor-list,.client-grid{grid-template-columns:1fr}
.stats-grid{grid-template-columns:1fr}
.stat-card{border-right:none;border-bottom:1px solid var(--border)}
.stat-card:last-child{border-bottom:none}
.stat-num{font-size:30px}
.cta-final h2{font-size:22px}
.btn-lg{padding:11px 24px;font-size:14px}
}

section,.prod-card,.why-card,.team-card,.value-card,.case-card,.honor-item,.stat-card,.client-card,.tl-item,.industry-cloud span,.audience-tags span{
opacity:0;transform:translateY(28px);
transition:opacity .7s cubic-bezier(.22,.61,.36,1),transform .7s cubic-bezier(.22,.61,.36,1);
}
.reveal-in{opacity:1 !important;transform:none !important}
.prod-grid>:nth-child(2),.why-grid>:nth-child(2),.team-grid>:nth-child(2),.value-grid>:nth-child(2),.honor-list>:nth-child(2),.stats-grid>:nth-child(2),.client-grid>:nth-child(2){transition-delay:.08s}
.prod-grid>:nth-child(3),.why-grid>:nth-child(3),.team-grid>:nth-child(3),.value-grid>:nth-child(3),.honor-list>:nth-child(3),.stats-grid>:nth-child(3),.client-grid>:nth-child(3){transition-delay:.16s}
.prod-grid>:nth-child(4),.why-grid>:nth-child(4),.value-grid>:nth-child(4),.honor-list>:nth-child(4),.stats-grid>:nth-child(4),.client-grid>:nth-child(4){transition-delay:.24s}
.client-grid>:nth-child(5){transition-delay:.32s}
.hero-eyebrow,.hero h1,.hero .sub,.hero-chips,.hero-cta{animation:heroIn .8s both}
.hero h1{animation-delay:.1s}
.hero .sub{animation-delay:.22s}
.hero-chips{animation-delay:.34s}
.hero-cta{animation-delay:.46s}
@keyframes heroIn{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
.prod-card:hover,.why-card:hover,.team-card:hover,.value-card:hover,.client-card:hover{transform:translateY(-4px)}
.industry-cloud span:hover{transform:translateY(-2px)}
.stat-num .accent{display:inline-block;animation:numPulse 3s ease-in-out infinite}
@keyframes numPulse{0%,100%{opacity:1}50%{opacity:.65}}
.sec-title{position:relative}
.sec-title::after{content:"";display:block;width:0;height:3px;margin:14px auto 0;background:var(--accent);transition:width .8s .2s cubic-bezier(.22,.61,.36,1)}
.reveal-in .sec-title::after,.sec-head.reveal-in .sec-title::after{width:54px}
body{
background:linear-gradient(135deg,#eaf2fc 0%,#ffffff 25%,#f0f6fc 50%,#ffffff 75%,#eaf2fc 100%);
background-size:400% 400%;
animation:bgFlow 22s ease-in-out infinite;
}
@keyframes bgFlow{
0%{background-position:0% 50%}
50%{background-position:100% 50%}
100%{background-position:0% 50%}
}
.glow-host{position:relative}
.glow-host:not(section){overflow:hidden}
.glow-follow{
position:absolute;inset:0;
background:radial-gradient(300px circle at var(--mx,50%) var(--my,50%), rgba(29,78,216,.13), rgba(255,255,255,.07) 35%, transparent 70%);
opacity:0;transition:opacity .35s ease;pointer-events:none;z-index:0;border-radius:inherit;
}
.glow-host:hover .glow-follow{opacity:1}
@media (prefers-reduced-motion:reduce){
*{animation:none !important;transition:none !important}
section,.prod-card,.why-card,.team-card,.value-card,.honor-item,.stat-card,.client-card,.tl-item,.industry-cloud span,.audience-tags span{opacity:1 !important;transform:none !important}
}
</style>


<div id="fluid-wrap"></div>

<!-- ══════════ Hero ══════════ -->
<header class="hero">
<div class="wrap">
<div class="hero-eyebrow">企业 AI 能力建设与应用落地服务商 · 自研软件产品产权自有</div>
<h1>
<span class="line1">认识信朴科技</span>
<span class="line2">让 AI 真正走进企业业务流程</span>
</h1>
<p class="sub">以自研软件产品为底座，围绕企业 AI 落地提供咨询、培训、工具模型、Agent 定制与内化建设的一体化支持。</p>
<div class="hero-chips">
<span>自研软件产品产权自有</span>
<span>SaaS 订阅与私有化部署</span>
<span>企业微信应用上架</span>
<span>云市场入驻服务商</span>
</div>
<div class="hero-cta">
<a href="/contact.html#form" class="btn btn-accent btn-lg">联系信朴科技</a>
<a href="#intro" class="btn btn-ghost btn-lg">了解信朴科技</a>
</div>
</div>
</header>

<!-- ══════════ 服务对象 ══════════ -->
<section class="audience">
<div class="wrap">
<div class="audience-label">已服务覆盖</div>
<div class="audience-tags">
<span>国有企业</span><span>民营集团</span><span>新能源汽车</span><span>智慧出行</span>
<span>装备制造</span><span>半导体芯片</span><span>邮政物流</span><span>建材家居</span>
<span>知识产权</span><span>金融科技</span><span>游戏文娱</span><span>企业管理</span>
</div>
</div>
</section>

<!-- ══════════ 1. 公司简介 ══════════ -->
<section id="intro">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">ABOUT US</div>
<h2 class="sec-title">企业 AI 能力建设，<span class="em">与应用落地服务商</span></h2>
<p class="sec-desc">信朴科技不把企业 AI 简单理解为采购一套工具或完成一次培训，而是回答四个连续的问题：从哪里开始、团队是否掌握方法、工具能否进入工作流、有效做法能否沉淀为长期能力。</p>
</div>

<div class="intro">
<div class="intro-text">
<p class="lead">广州信朴科技有限公司以自研软件产品为底座，是企业 AI 能力建设与应用落地服务商。</p>
<p>围绕企业 AI 落地，信朴科技提供从前期<strong>咨询、能力培训、工具与模型服务</strong>，到<strong>知识库、Agent 定制和组织内化建设</strong>的一体化支持。我们相信，真正有效的 AI 建设，需要让员工不仅「听懂 AI」，更能在岗位中用起来，并把有效做法沉淀为企业长期能力。</p>
<p>信朴科技支持从一个课程、一个部门或一个 Agent 开始，也可以协助企业规划从能力普及到应用落地的完整建设项目——以咨询定方向，以实操培育人，以工具承载场景，以应用实现价值。</p>
</div>
<div class="intro-card">
<h4>公司概况</h4>
<div class="row"><span class="k">公司全称</span><span class="v">广州信朴科技有限公司</span></div>
<div class="row"><span class="k">公司定位</span><span class="v">企业 AI 能力建设与应用落地服务商</span></div>
<div class="row"><span class="k">产品形态</span><span class="v">SaaS 订阅与私有化部署双形态</span></div>
<div class="row"><span class="k">交付能力</span><span class="v">云市场与企业微信应用上架</span></div>
<div class="row"><span class="k">公司地址</span><span class="v">广州市天河区金穗路1号邦华广场</span></div>
<div class="row"><span class="k">商务联系</span><span class="v">冯小姐 18926108189</span></div>
</div>
</div>
</div>
</section>

<!-- ══════════ 2. 关键数据 ══════════ -->
<section class="stats-section">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">CAPABILITIES</div>
<h2 class="sec-title">自研底座支撑，<span class="em">按授权交付</span></h2>
<p class="sec-desc">从产品形态到交付方式，每一项能力都围绕企业 AI 真实落地构建。</p>
</div>

<div class="stats-grid">
<div class="stat-card">
<div class="stat-num"><span class="accent">自研</span></div>
<div class="stat-label">软件产品产权自有</div>
</div>
<div class="stat-card">
<div class="stat-num"><span class="accent">双形态</span></div>
<div class="stat-label">SaaS 订阅与私有化部署</div>
</div>
<div class="stat-card">
<div class="stat-num"><span class="accent">全包</span></div>
<div class="stat-label">域名、服务器、证书与解析一站式</div>
</div>
<div class="stat-card">
<div class="stat-num"><span class="accent">企微</span></div>
<div class="stat-label">企业微信应用上架</div>
</div>
<div class="stat-card">
<div class="stat-num"><span class="accent">云市场</span></div>
<div class="stat-label">云市场服务商入驻</div>
</div>
<div class="stat-card">
<div class="stat-num"><span class="accent">开放</span></div>
<div class="stat-label">开放接口与生态接入</div>
</div>
<div class="stat-card">
<div class="stat-num"><span class="accent">闭环</span></div>
<div class="stat-label">学 · 用 · 建 · 管方法论</div>
</div>
<div class="stat-card">
<div class="stat-num"><span class="accent">长期</span></div>
<div class="stat-label">版本持续迭代与本地支持</div>
</div>
</div>
</div>
</section>

<!-- ══════════ 3. 发展历程 ══════════ -->
<section>
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">OUR JOURNEY</div>
<h2 class="sec-title">从软件研发到 AI 落地，<span class="em">一路跑通真实业务</span></h2>
<p class="sec-desc">信朴科技从软件产品研发起步，随着企业需求演进，逐步把能力延伸到 AI 能力建设与应用落地全链路。</p>
</div>

<div class="timeline">
<div class="tl-item">
<div class="tl-stage">PHASE 01 · 产品起步</div>
<h4>自研软件产品立项研发</h4>
<p>以自研 SaaS 产品研发为起点，打磨软件底座、开放接口与部署体系，形成自主可控的产品能力。</p>
</div>
<div class="tl-item">
<div class="tl-stage">PHASE 02 · 双形态交付</div>
<h4>SaaS 订阅与私有化部署</h4>
<p>产品支持 SaaS 订阅与私有化部署双形态交付，软件产权自有、按授权交付，可按客户环境完成全包交付与运维托管。</p>
</div>
<div class="tl-item">
<div class="tl-stage">PHASE 03 · 服务延伸</div>
<h4>从云服务走向企业 AI 建设</h4>
<p>随着大模型与企业 AI 需求兴起，把云服务积累的行业理解与交付能力，延伸到企业 AI 培训、工具导入、模型用量与场景落地。</p>
</div>
<div class="tl-item">
<div class="tl-stage">PHASE 04 · 能力闭环</div>
<h4>咨询 + 培训 + 工具 + 定制一体化</h4>
<p>形成「企业 AI 培训、模型用量与 Token 成本服务、Agent 定制与 FDE 现场协助、企业 AI 咨询」四大服务方向，构建从诊断到内化的完整落地闭环。</p>
</div>
<div class="tl-item">
<div class="tl-stage">PHASE 05 · 行业验证</div>
<h4>跨行业验证，落地进真实业务</h4>
<p>合作实践覆盖制造、出行、装备、半导体、金融科技等行业，把 AI 真正落进企业的真实业务流程。</p>
</div>
</div>
</div>
</section>

<!-- ══════════ 4. 四大服务方向 ══════════ -->
<section id="service" class="bg-soft">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">SERVICE DIRECTIONS</div>
<h2 class="sec-title">四大服务方向，<span class="em">可独立采购，也可组合</span></h2>
<p class="sec-desc">企业所处阶段不同，需要的服务也不同。信朴科技的服务可以独立采购，也可以组合为完整的企业 AI 建设项目。</p>
</div>

<div class="prod-grid">
<div class="prod-card">
<div class="prod-stage">DIRECTION 01</div>
<div class="prod-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
</div>
<h4>企业 AI 培训</h4>
<div class="prod-scene">建立认知 · 普及能力 · 培养骨干</div>
<ul class="prod-features">
<li>线上培训：WorkBuddy 使用 / Prompt 工程</li>
<li>线下七大模块：通识 / 思维 / Cost Opt</li>
<li>Vibe Coding / 场景训练营 / 知识库</li>
<li>方案 A 诊断定制 · 方案 B 标准课程包</li>
</ul>
</div>

<div class="prod-card">
<div class="prod-stage">DIRECTION 02</div>
<div class="prod-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/></svg>
</div>
<h4>模型用量与成本服务</h4>
<div class="prod-scene">GPT · Gemini 等主流模型</div>
<ul class="prod-features">
<li>模型用量稳定供给与资源管理</li>
<li>Token 成本规划与使用优化</li>
<li>50 席以上赠 2000 元兑换券</li>
<li>后续用量约官网 45 折</li>
</ul>
</div>

<div class="prod-card">
<div class="prod-stage">DIRECTION 03</div>
<div class="prod-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
</div>
<h4>Agent 定制与 FDE</h4>
<div class="prod-scene">现场共创 · 真实材料验证</div>
<ul class="prod-features">
<li>FDE 现场解决方案工程共创</li>
<li>五步法：场景→知识→原型→试点→交接</li>
<li>知识 / 客服 / 销售 / 运营 / 报告</li>
<li>流程协同 / 研发辅助七大类型</li>
</ul>
</div>

<div class="prod-card">
<div class="prod-stage">DIRECTION 04</div>
<div class="prod-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
</div>
<h4>企业 AI 咨询</h4>
<div class="prod-scene">战略 · 知识库 · 内化体系</div>
<ul class="prod-features">
<li>战略与场景咨询：路径与优先级</li>
<li>知识库建设咨询：盘点到运营</li>
<li>内化体系建设：能力沉淀为资产</li>
<li>从局部尝试走向体系化建设</li>
</ul>
</div>
</div>
</div>
</section>

<!-- ══════════ 5. 团队构成 ══════════ -->
<section id="team">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">OUR TEAM</div>
<h2 class="sec-title">研发驱动的团队，<span class="em">既懂技术也懂业务</span></h2>
<p class="sec-desc">以研发与专业技术人员为主体——既懂技术，也愿意走进客户现场。</p>
</div>

<div class="team-grid">
<div class="team-card">
<div class="team-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
</div>
<h4>研发与技术人员</h4>
<div class="team-tag">研发为主体</div>
<p>覆盖云服务、模型应用、Agent 开发、知识库建设与 FDE 现场工程，是把方案落进真实业务的核心力量。</p>
</div>
<div class="team-card">
<div class="team-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>
</div>
<h4>咨询与培训专家</h4>
<div class="team-tag">懂行业 · 懂场景</div>
<p>来自云计算、企业服务与教育培训背景，负责场景诊断、课程设计与企业 AI 内化体系建设咨询。</p>
</div>
<div class="team-card">
<div class="team-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
</div>
<h4>商务与客户成功</h4>
<div class="team-tag">长期陪伴</div>
<p>负责需求沟通、方案对接与项目交付后的持续支持，确保客户从启动到落地再到运营都有专人跟进。</p>
</div>
</div>
</div>
</section>

<!-- ══════════ 6. 价值观 ══════════ -->
<section class="bg-soft">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">OUR VALUES</div>
<h2 class="sec-title">信朴科技的四个坚持，<span class="em">也是落地的方法</span></h2>
<p class="sec-desc">这四句话不是口号，而是信朴科技在企业 AI 落地中真正遵循的工作方式——从方向到人，从工具到价值。</p>
</div>

<div class="value-grid">
<div class="value-card">
<div class="value-num">01</div>
<div class="value-body">
<h4>以咨询定方向</h4>
<p>让企业在投入之前看清方向——先识别 AI 机会、梳理场景、设计路径，避免盲目采购和零散试用。</p>
</div>
</div>
<div class="value-card">
<div class="value-num">02</div>
<div class="value-body">
<h4>以实操培育人</h4>
<p>让员工不仅「听懂 AI」，更能在岗位中用起来——通过真实任务训练，把方法变成可复用的能力。</p>
</div>
</div>
<div class="value-card">
<div class="value-num">03</div>
<div class="value-body">
<h4>以工具承载场景</h4>
<p>为员工提供稳定、统一、便于推广的 AI 使用入口——让工具进入真实工作流，而不是停留在演示里。</p>
</div>
</div>
<div class="value-card">
<div class="value-num">04</div>
<div class="value-body">
<h4>以应用实现价值</h4>
<p>把验证有效的做法固化为知识库、流程、Agent 与组织机制——让 AI 变成可持续的业务能力。</p>
</div>
</div>
</div>
</div>
</section>

<!-- ══════════ 7. 为什么选信朴科技 ══════════ -->
<section id="why">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">WHY XOMAPS<sup></sup></div>
<h2 class="sec-title">既是落地服务商，<span class="em">也是 AI 落地亲历者</span></h2>
<p class="sec-desc">信朴科技不止于做演示——从咨询到应用的一体化能力，让 AI 真正落进业务流程。</p>
</div>

<div class="why-grid">
<div class="why-card">
<div class="why-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
</div>
<h4>一体化能力</h4>
<p>同时具备咨询、培训、工具、模型、知识库和 Agent 服务能力，减少多个供应商之间的沟通与割裂。</p>
</div>
<div class="why-card">
<div class="why-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
</div>
<h4>业务起点</h4>
<p>更关注员工每天在做什么、哪些环节最耗时间，而不是先从某个模型或工具出发设计项目。</p>
</div>
<div class="why-card">
<div class="why-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
</div>
<h4>实操共建</h4>
<p>无论培训还是定制项目，都使用客户真实材料、真实流程和真实任务验证结果，避免交付后无法使用。</p>
</div>
<div class="why-card">
<div class="why-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
</div>
<h4>短期与长期兼顾</h4>
<p>先用培训和试点获得可见成果，再逐步建设知识库、Agent 与内部人才体系，控制投入节奏和实施风险。</p>
</div>
</div>
</div>
</section>

<!-- ══════════ 8. 行业覆盖 ══════════ -->
<section class="bg-soft">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">INDUSTRY COVERAGE</div>
<h2 class="sec-title">跨行业实践，<span class="em">自研底座持续沉淀</span></h2>
<p class="sec-desc">信朴科技的合作实践覆盖企业 AI 咨询、能力培养、工具导入和业务场景应用建设，客户来自制造业、服务业与科技专业服务三大板块。</p>
</div>

<div class="industry-cloud">
<span class="hot">新能源汽车</span>
<span class="hot">智慧出行</span>
<span class="hot">装备制造</span>
<span class="hot">半导体芯片</span>
<span>邮政物流</span>
<span>建材陶瓷</span>
<span>知识产权</span>
<span>金融科技</span>
<span>游戏文娱</span>
<span>企业服务</span>
<span>人力资源</span>
<span>教育科技</span>
<span>工业电子</span>
<span>运动休闲</span>
<span>科技服务</span>
</div>
</div>
</section>

<!-- ══════════ 9. 标杆客户 ══════════ -->
<section>
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">CLIENTS</div>
<h2 class="sec-title">多行业企业的，<span class="em">共同选择</span></h2>
<p class="sec-desc">这些客户在 AI 咨询、能力培养、工具导入和业务场景应用建设中选择了信朴科技。</p>
</div>

<div class="client-grid">
<div class="client-card"><div class="client-name">某新能源汽车企业</div><div class="client-ind">新能源汽车</div></div>
<div class="client-card"><div class="client-name">某智慧出行平台</div><div class="client-ind">出行平台</div></div>
<div class="client-card"><div class="client-name">某装备制造企业</div><div class="client-ind">装备制造</div></div>
<div class="client-card"><div class="client-name">某半导体企业</div><div class="client-ind">半导体</div></div>
<div class="client-card"><div class="client-name">某邮政物流企业</div><div class="client-ind">邮政服务</div></div>
<div class="client-card"><div class="client-name">某科技服务机构</div><div class="client-ind">科技服务</div></div>
<div class="client-card"><div class="client-name">某游戏研发企业</div><div class="client-ind">游戏</div></div>
<div class="client-card"><div class="client-name">某教育科技企业</div><div class="client-ind">教育科技</div></div>
<div class="client-card"><div class="client-name">某工业电子企业</div><div class="client-ind">工业电子</div></div>
<div class="client-card"><div class="client-name">某运动连锁品牌</div><div class="client-ind">运动休闲</div></div>
<div class="client-card"><div class="client-name">某企业服务平台</div><div class="client-ind">企业服务 SaaS</div></div>
<div class="client-card"><div class="client-name">某人力资源机构</div><div class="client-ind">人力资源</div></div>
<div class="client-card"><div class="client-name">某建材陶瓷企业</div><div class="client-ind">建材陶瓷</div></div>
<div class="client-card"><div class="client-name">某知识产权机构</div><div class="client-ind">知识产权</div></div>
<div class="client-card"><div class="client-name">某金融科技企业</div><div class="client-ind">金融科技</div></div>
</div>
</div>
</section>

<!-- ══════════ 10. 荣誉背书 ══════════ -->
<section class="bg-soft">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">HONORS & ENDORSEMENT</div>
<h2 class="sec-title">我们的能力与<span class="em">交付承诺</span></h2>
<p class="sec-desc">自研软件产品产权自有，按授权交付，长期服务行业客户。</p>
</div>

<div class="honor-list">
<div class="honor-item">
<div class="honor-medal"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
<p>自研软件产品，产权自有</p>
</div>
<div class="honor-item">
<div class="honor-medal"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
<p>SaaS 订阅与私有化部署双形态</p>
</div>
<div class="honor-item">
<div class="honor-medal"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
<p>企业 AI 能力建设与应用落地服务商</p>
</div>
<div class="honor-item">
<div class="honor-medal"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
<p>研发与专业技术人员为主体</p>
</div>
<div class="honor-item">
<div class="honor-medal"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
<p>FDE 现场解决方案工程团队，五步法共创落地</p>
</div>
<div class="honor-item">
<div class="honor-medal"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
<p>一站式全包交付：域名、服务器、证书与解析配齐</p>
</div>
</div>
</div>
</section>



<script>
(function(){
var sels='section,.sec-head,.prod-card,.why-card,.team-card,.value-card,.honor-item,.stat-card,.client-card,.tl-item,.industry-cloud span,.audience-tags span';
var els=document.querySelectorAll(sels);
var io=new IntersectionObserver(function(es){
es.forEach(function(e){
if(e.isIntersecting){e.target.classList.add('reveal-in');io.unobserve(e.target);}
});
},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
els.forEach(function(el){io.observe(el);});

var nums=document.querySelectorAll('.stat-num');
var nio=new IntersectionObserver(function(es){
es.forEach(function(e){
if(e.isIntersecting){
var acc=e.target.querySelector('.accent');
if(acc){
var end=parseInt(acc.textContent,10);
if(!isNaN(end)&&end>0){
var st=performance.now(),dur=1400;
(function step(now){
var p=Math.min((now-st)/dur,1);
acc.textContent=Math.floor(p*end);
if(p<1)requestAnimationFrame(step);else acc.textContent=end;
})(st);
}
}
nio.unobserve(e.target);
}
});
},{threshold:.5});
nums.forEach(function(el){nio.observe(el);});

var glowSels='section,.prod-card,.why-card,.team-card,.value-card,.honor-item,.stat-card,.client-card';
document.querySelectorAll(glowSels).forEach(function(el){
el.classList.add('glow-host');
var g=document.createElement('div');
g.className='glow-follow';
el.insertBefore(g,el.firstChild);
el.addEventListener('mousemove',function(e){
var r=el.getBoundingClientRect();
g.style.setProperty('--mx',(e.clientX-r.left)+'px');
g.style.setProperty('--my',(e.clientY-r.top)+'px');
});
});
})();
</script>

<!-- ══════════ WebGL 流体特效（Three.js） ══════════ -->
<script src="/assets/js/vendor/three.min.js"></script>
<script>
(function(){
// 降级检查：移动端 / 减少动画 / 无 WebGL 直接退出
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
if(window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches) return;
if(typeof THREE === 'undefined') return;

var wrap = document.getElementById('fluid-wrap');
if(!wrap) return;

var testCanvas = document.createElement('canvas');
var gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl');
if(!gl) return;

// ─── 配置（品牌蓝色系） ───
var CFG = {
dt: 0.014,
viscous: 30,
pressureIter: 12,
cursorSize: 100,
mouseForce: 20,
simScale: 0.4,
palette: ['#1d4ed8', '#93c5fd'],  // 品牌蓝 → 浅蓝
};

// ─── Shader 源码 ───
var VERT = [
'attribute vec3 position;',
'uniform vec2 px;',
'uniform vec2 boundarySpace;',
'varying vec2 uv;',
'void main(){',
'  vec3 pos = position;',
'  vec2 scale = 1.0 - boundarySpace * 2.0;',
'  pos.xy = pos.xy * scale;',
'  uv = vec2(0.5) + (pos.xy) * 0.5;',
'  gl_Position = vec4(pos, 1.0);',
'}'
].join('\n');

var ADVECT = [
'precision highp float;',
'uniform sampler2D velocity;',
'uniform float dt;',
'uniform vec2 fboSize;',
'uniform vec2 px;',
'varying vec2 uv;',
'void main(){',
'  vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;',
'  vec2 spot_new = uv;',
'  vec2 vel_old = texture2D(velocity, uv).xy;',
'  vec2 spot_old = spot_new - vel_old * dt * ratio;',
'  vec2 vel_new1 = texture2D(velocity, spot_old).xy;',
'  vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;',
'  vec2 error = spot_new2 - spot_new;',
'  vec2 spot_new3 = spot_new - error / 2.0;',
'  vec2 vel_2 = texture2D(velocity, spot_new3).xy;',
'  vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;',
'  gl_FragColor = vec4(texture2D(velocity, spot_old2).xy, 0.0, 1.0);',
'}'
].join('\n');

var MOUSE_V = [
'precision highp float;',
'attribute vec3 position;',
'attribute vec2 uv;',
'uniform vec2 center, scale, px;',
'varying vec2 vUv;',
'void main(){',
'  vec2 pos = position.xy * scale * 2.0 * px + center;',
'  vUv = uv;',
'  gl_Position = vec4(pos, 0.0, 1.0);',
'}'
].join('\n');

var MOUSE_F = [
'precision highp float;',
'uniform vec2 force;',
'varying vec2 vUv;',
'void main(){',
'  vec2 circle = (vUv - 0.5) * 2.0;',
'  float d = 1.0 - min(length(circle), 1.0);',
'  d *= d;',
'  gl_FragColor = vec4(force * d, 0.0, 1.0);',
'}'
].join('\n');

var VISCOUS = [
'precision highp float;',
'uniform sampler2D velocity;',
'uniform sampler2D velocity_new;',
'uniform float v, dt;',
'uniform vec2 px;',
'varying vec2 uv;',
'void main(){',
'  vec2 old = texture2D(velocity, uv).xy;',
'  vec2 n0 = texture2D(velocity_new, uv + vec2(px.x*2.0, 0.0)).xy;',
'  vec2 n1 = texture2D(velocity_new, uv - vec2(px.x*2.0, 0.0)).xy;',
'  vec2 n2 = texture2D(velocity_new, uv + vec2(0.0, px.y*2.0)).xy;',
'  vec2 n3 = texture2D(velocity_new, uv - vec2(0.0, px.y*2.0)).xy;',
'  vec2 newv = (4.0 * old + v * dt * (n0 + n1 + n2 + n3)) / (4.0 * (1.0 + v * dt));',
'  gl_FragColor = vec4(newv, 0.0, 1.0);',
'}'
].join('\n');

var DIVERGENCE = [
'precision highp float;',
'uniform sampler2D velocity;',
'uniform float dt;',
'uniform vec2 px;',
'varying vec2 uv;',
'void main(){',
'  float x0 = texture2D(velocity, uv - vec2(px.x, 0.0)).x;',
'  float x1 = texture2D(velocity, uv + vec2(px.x, 0.0)).x;',
'  float y0 = texture2D(velocity, uv - vec2(0.0, px.y)).y;',
'  float y1 = texture2D(velocity, uv + vec2(0.0, px.y)).y;',
'  gl_FragColor = vec4((x1 - x0 + y1 - y0) / 2.0 / dt, 0.0, 0.0, 1.0);',
'}'
].join('\n');

var PRESSURE = [
'precision highp float;',
'uniform sampler2D pressure;',
'uniform sampler2D divergence;',
'uniform vec2 px;',
'varying vec2 uv;',
'void main(){',
'  float p0 = texture2D(pressure, uv + vec2(px.x*2.0, 0.0)).r;',
'  float p1 = texture2D(pressure, uv - vec2(px.x*2.0, 0.0)).r;',
'  float p2 = texture2D(pressure, uv + vec2(0.0, px.y*2.0)).r;',
'  float p3 = texture2D(pressure, uv - vec2(0.0, px.y*2.0)).r;',
'  float div = texture2D(divergence, uv).r;',
'  gl_FragColor = vec4((p0 + p1 + p2 + p3) / 4.0 - div, 0.0, 0.0, 1.0);',
'}'
].join('\n');

var GRAD_SUB = [
'precision highp float;',
'uniform sampler2D pressure;',
'uniform sampler2D velocity;',
'uniform vec2 px;',
'uniform float dt;',
'varying vec2 uv;',
'void main(){',
'  float p0 = texture2D(pressure, uv + vec2(px.x, 0.0)).r;',
'  float p1 = texture2D(pressure, uv - vec2(px.x, 0.0)).r;',
'  float p2 = texture2D(pressure, uv + vec2(0.0, px.y)).r;',
'  float p3 = texture2D(pressure, uv - vec2(0.0, px.y)).r;',
'  vec2 v = texture2D(velocity, uv).xy;',
'  v = v - vec2(p0 - p1, p2 - p3) * 0.5 * dt;',
'  gl_FragColor = vec4(v, 0.0, 1.0);',
'}'
].join('\n');

var DISPLAY = [
'precision highp float;',
'uniform sampler2D velocity;',
'uniform sampler2D palette;',
'uniform vec4 bgColor;',
'varying vec2 uv;',
'void main(){',
'  vec2 vel = texture2D(velocity, uv).xy;',
'  float lenv = clamp(length(vel), 0.0, 1.0) * 0.5;',
'  vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;',
'  gl_FragColor = vec4(mix(bgColor.rgb, c, lenv), mix(bgColor.a, 1.0, lenv));',
'}'
].join('\n');

// ─── 初始化 ───
var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.autoClear = false;
renderer.setClearColor(0xffffff, 1);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
wrap.appendChild(renderer.domElement);

// 调色板
var colors = CFG.palette;
var palData = new Uint8Array(colors.length * 4);
colors.forEach(function(hex, i){
var c = new THREE.Color(hex);
palData[4*i]   = Math.round(255 * c.r);
palData[4*i+1] = Math.round(255 * c.g);
palData[4*i+2] = Math.round(255 * c.b);
palData[4*i+3] = 255;
});
var palette = new THREE.DataTexture(palData, colors.length, 1, THREE.RGBAFormat);
palette.magFilter = THREE.LinearFilter;
palette.minFilter = THREE.LinearFilter;
palette.wrapS = THREE.ClampToEdgeWrapping;
palette.wrapT = THREE.ClampToEdgeWrapping;
palette.needsUpdate = true;

// 状态
var simW = 1, simH = 1;
var cellScale = new THREE.Vector2(1, 1);
var fboSize   = new THREE.Vector2(1, 1);
var boundarySpace = new THREE.Vector2(1, 1);
var mouse = {
coords:     new THREE.Vector2(0, 0),
coords_old: new THREE.Vector2(0, 0),
diff:       new THREE.Vector2(0, 0),
};

// Render Targets
var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
var rtOpts = {
type: isIOS ? THREE.HalfFloatType : THREE.FloatType,
depthBuffer: false, stencilBuffer: false,
minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter,
wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping,
};
var RT = {};
['vel_0','vel_1','vel_visc0','vel_visc1','div','press_0','press_1'].forEach(function(name){
RT[name] = new THREE.WebGLRenderTarget(1, 1, rtOpts);
});

var camera = new THREE.Camera();
var quadGeo = new THREE.PlaneGeometry(2, 2);

function makePass(fragShader, uniforms){
var mat = new THREE.RawShaderMaterial({ vertexShader: VERT, fragmentShader: fragShader, uniforms: uniforms });
var mesh = new THREE.Mesh(quadGeo, mat);
var scene = new THREE.Scene();
scene.add(mesh);
return { scene: scene, mesh: mesh, uniforms: uniforms };
}
function renderPass(pass, output){
pass.mesh.material.uniforms = pass.uniforms;
renderer.setRenderTarget(output || null);
renderer.render(pass.scene, camera);
}

var advect = makePass(ADVECT, {
boundarySpace: { value: cellScale }, px: { value: cellScale }, fboSize: { value: fboSize },
velocity: { value: RT.vel_0.texture }, dt: { value: CFG.dt }
});
var viscous = makePass(VISCOUS, {
boundarySpace: { value: boundarySpace }, px: { value: cellScale },
velocity: { value: RT.vel_1.texture }, velocity_new: { value: RT.vel_visc0.texture },
v: { value: CFG.viscous }, dt: { value: CFG.dt }
});
var divPass = makePass(DIVERGENCE, {
boundarySpace: { value: boundarySpace }, px: { value: cellScale },
velocity: { value: RT.vel_visc0.texture }, dt: { value: CFG.dt }
});
var pressPass = makePass(PRESSURE, {
boundarySpace: { value: boundarySpace }, px: { value: cellScale },
pressure: { value: RT.press_0.texture }, divergence: { value: RT.div.texture }
});
var gradPass = makePass(GRAD_SUB, {
boundarySpace: { value: boundarySpace }, px: { value: cellScale },
pressure: { value: RT.press_0.texture }, velocity: { value: RT.vel_visc0.texture },
dt: { value: CFG.dt }
});

// 鼠标力 Pass
var mouseMat = new THREE.RawShaderMaterial({
vertexShader: MOUSE_V, fragmentShader: MOUSE_F,
blending: THREE.AdditiveBlending, depthWrite: false,
uniforms: {
px: { value: cellScale }, force: { value: new THREE.Vector2(0,0) },
center: { value: new THREE.Vector2(0,0) }, scale: { value: new THREE.Vector2(CFG.cursorSize, CFG.cursorSize) }
}
});
var mouseMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mouseMat);
var mouseScene = new THREE.Scene();
mouseScene.add(mouseMesh);

// 显示 Pass
var displayMat = new THREE.RawShaderMaterial({
vertexShader: VERT, fragmentShader: DISPLAY,
transparent: false, depthWrite: false, depthTest: false,
uniforms: { velocity: { value: RT.vel_0.texture }, palette: { value: palette }, bgColor: { value: new THREE.Vector4(1,1,1,1) } }
});
var displayScene = new THREE.Scene();
displayScene.add(new THREE.Mesh(quadGeo, displayMat));

// ─── Resize（全页 viewport） ───
function resize(){
var w = Math.max(1, window.innerWidth);
var h = Math.max(1, window.innerHeight);
renderer.setSize(w, h, false);
simW = Math.max(1, Math.round(w * CFG.simScale));
simH = Math.max(1, Math.round(h * CFG.simScale));
fboSize.set(simW, simH);
cellScale.set(1/simW, 1/simH);
for(var k in RT) RT[k].setSize(simW, simH);
}
window.addEventListener('resize', resize);
resize();

// ─── 鼠标输入（全页跟踪） ───
function updateMouse(cx, cy){
var nx = cx / window.innerWidth;
var ny = cy / window.innerHeight;
mouse.coords.set(2 * nx - 1, -(2 * ny - 1));
}
window.addEventListener('mousemove', function(e){ updateMouse(e.clientX, e.clientY); });

// ─── 标签页不可见时停帧（省电） ───
var visible = !document.hidden;
document.addEventListener('visibilitychange', function(){
visible = !document.hidden;
if(visible && !rafId) rafId = requestAnimationFrame(frame);
});

// ─── 主循环 ───
var rafId = null;
function frame(){
if(!visible){ rafId = null; return; }

mouse.diff.subVectors(mouse.coords, mouse.coords_old);
mouse.coords_old.copy(mouse.coords);
boundarySpace.copy(cellScale);

// 1. Advection
advect.uniforms.velocity.value = RT.vel_0.texture;
advect.uniforms.fboSize.value = fboSize;
renderPass(advect, RT.vel_1);

// 2. Mouse force
var fx = (mouse.diff.x / 2) * CFG.mouseForce;
var fy = (mouse.diff.y / 2) * CFG.mouseForce;
var cs = CFG.cursorSize * cellScale.x;
var sy = CFG.cursorSize * cellScale.y;
mouseMat.uniforms.force.value.set(fx, fy);
mouseMat.uniforms.center.value.set(
Math.min(Math.max(mouse.coords.x, -1 + cs + 2*cellScale.x), 1 - cs - 2*cellScale.x),
Math.min(Math.max(mouse.coords.y, -1 + sy + 2*cellScale.y), 1 - sy - 2*cellScale.y)
);
mouseMat.uniforms.px.value = cellScale;
renderer.setRenderTarget(RT.vel_1);
renderer.render(mouseScene, camera);

// 3. Viscous
viscous.uniforms.velocity.value = RT.vel_1.texture;
viscous.uniforms.velocity_new.value = RT.vel_1.texture;
renderPass(viscous, RT.vel_visc0);

// 4. Divergence
divPass.uniforms.velocity.value = RT.vel_visc0.texture;
renderPass(divPass, RT.div);

// 5. Pressure (Jacobi ×12)
renderer.setRenderTarget(RT.press_0);
renderer.clear();
var pIn = RT.press_0, pOut = RT.press_1;
for(var i = 0; i < CFG.pressureIter; i++){
pressPass.uniforms.pressure.value = pIn.texture;
renderPass(pressPass, pOut);
var tmp = pIn; pIn = pOut; pOut = tmp;
}

// 6. Gradient subtract
gradPass.uniforms.velocity.value = RT.vel_visc0.texture;
gradPass.uniforms.pressure.value = pIn.texture;
renderPass(gradPass, RT.vel_0);

// 7. Display
displayMat.uniforms.velocity.value = RT.vel_0.texture;
renderer.setRenderTarget(null);
renderer.clear();
renderer.render(displayScene, camera);

rafId = requestAnimationFrame(frame);
}
rafId = requestAnimationFrame(frame);
})();
</script>


<style>
:root{
--brand:#2563eb;
--brand-2:#3b82f6;
--brand-text:#0f2c5e;
--text:#1f2937;
--text-2:#4b5563;
--bg:#ffffff;
--border:#e2e8f0;

/* 底部导航条专属（淡蓝白浅色版） */
--ft-bg:#ffffff;
--ft-bg-2:#e0f2fe;
--ft-text:#1f2937;
--ft-text-2:#4b5563;
--ft-text-3:#6b7280;
--ft-line:#dbe7f5;
--ft-hover:#2563eb;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
font-family:"PingFang SC","Microsoft YaHei",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
color:var(--text);background:#f8fafc;line-height:1.7;font-size:15px;
-webkit-font-smoothing:antialiased;
}
a{color:inherit;text-decoration:none}
ul{list-style:none}

/* ===== 占位内容，用于演示 ===== */
.demo-page{min-height:120vh;background:linear-gradient(180deg,#f0f9ff 0%,#ffffff 40%,#f1f5f9 100%);padding:80px 24px 120px}
.demo-section{max-width:1200px;margin:0 auto}
.demo-section h1{font-size:34px;font-weight:800;color:var(--brand-text);margin-bottom:14px}
.demo-section p{font-size:16px;color:var(--text-2);max-width:640px;line-height:1.8}

/* ══════════════════════════════════════
底部导航条 Footer
══════════════════════════════════════ */
.footer{
background:linear-gradient(135deg,#ffffff 0%,#eff6ff 40%,#e0f2fe 75%,#ffffff 100%);
color:var(--ft-text-2);
position:relative;
overflow:hidden;
border-top:1px solid var(--ft-line);
}
/* 顶部品牌光带 */
.footer::before{
content:"";
position:absolute;top:0;left:0;right:0;height:3px;
background:linear-gradient(90deg,#2563eb 0%,#3b82f6 30%,#7fb0ff 60%,#2563eb 100%);
}
/* 背景装饰光晕 */
.footer::after{
content:"";
position:absolute;top:-180px;right:-120px;width:480px;height:480px;border-radius:50%;
background:radial-gradient(circle,rgba(37,99,235,0.07) 0%,transparent 65%);
pointer-events:none;
}

.footer-inner{
max-width:1200px;margin:0 auto;padding:56px 24px 0;
position:relative;z-index:1;text-align: left;
}

/* ===== 主体四栏 ===== */
.footer-grid{
display:grid;
grid-template-columns:1.35fr 0.85fr 1.05fr 1.15fr;
gap:48px 40px;
padding-bottom:44px;
}

.ft-title{
font-size:15px;font-weight:700;color:var(--brand-text);
letter-spacing:.05em;margin-bottom:18px;
display:flex;align-items:center;gap:8px;
}
.ft-title::before{
content:"";width:3px;height:14px;border-radius:2px;
background:linear-gradient(180deg,var(--brand-2),#7fb0ff);
}

/* —— 第 1 栏：品牌 + 简介 —— */
.ft-brand .logo-row{display:flex;align-items:center;gap:10px;margin-bottom:16px}
.ft-brand .logo-row img{height:34px}
.ft-brand .logo-name{font-size:18px;font-weight:800;color:var(--brand-text);letter-spacing:.02em}
.ft-brand p{font-size:13.5px;line-height:1.9;color:var(--ft-text-2)}
.ft-badges{display:flex;flex-wrap:wrap;gap:8px;margin-top:16px}
.ft-badges span{
font-size:12px;color:var(--ft-text-2);
border:1px solid var(--ft-line);border-radius:999px;
padding:3px 12px;background:rgba(37,99,235,0.05);
}

/* —— 第 2 栏：服务项目（7 项） —— */
.ft-links li{margin-bottom:4px}
.ft-links a{
display:inline-flex;align-items:center;gap:8px;
font-size:13.5px;color:var(--ft-text-2);padding:5px 0;
transition:color .2s,transform .2s;
}
.ft-links a::before{
content:"";width:5px;height:5px;border-radius:50%;
background:var(--ft-text-3);transition:background .2s;
}
.ft-links a:hover{color:var(--brand);transform:translateX(3px)}
.ft-links a:hover::before{background:var(--ft-hover)}

/* —— 第 3 栏：联系方式 —— */
.ft-contact li{
display:flex;gap:10px;margin-bottom:14px;
font-size:13.5px;line-height:1.7;
}
.ft-contact svg{width:16px;height:16px;flex:none;margin-top:4px;color:var(--ft-hover)}
.ft-contact .k{color:var(--ft-text-3);font-size:12px;display:block}
.ft-contact .v{color:var(--ft-text)}
.ft-contact a.v:hover{color:var(--ft-hover)}
.ft-contact .v-strong{
font-size:19px;font-weight:800;color:var(--brand-text);letter-spacing:.02em;
font-variant-numeric:tabular-nums;
}

/* —— 第 4 栏：二维码 + 公众号 + 留言入口 —— */
.ft-qrcode{
display:flex;gap:16px;align-items:flex-start;
}
.qr-box{
width:104px;height:104px;flex:none;
background:#fff;border-radius:10px;padding:8px;
border:1px solid var(--ft-line);
box-shadow:0 4px 14px rgba(30,58,138,0.10);
}
.qr-box svg{width:100%;height:100%;display:block}
.qr-info{padding-top:4px}
.qr-info .gzh-name{
font-size:14px;font-weight:700;color:var(--brand-text);margin-bottom:6px;
display:flex;align-items:center;gap:6px;
}
.qr-info .gzh-name svg{width:15px;height:15px;color:#6bdb8b}
.qr-info p{font-size:12.5px;color:var(--ft-text-3);line-height:1.8}

/* 留言入口按钮 */
.ft-message{
margin-top:18px;display:flex;flex-direction:column;gap:10px;
}
.ft-msg-btn{
display:flex;align-items:center;justify-content:center;gap:8px;
padding:11px 18px;border-radius:10px;
font-size:14px;font-weight:600;
transition:all .25s;
}
.ft-msg-btn svg{width:16px;height:16px}
.ft-msg-primary{
background:linear-gradient(135deg,var(--brand) 0%,var(--brand-2) 100%);
color:#fff;box-shadow:0 4px 16px rgba(37,99,235,0.4);
}
.ft-msg-primary:hover{transform:translateY(-2px);box-shadow:0 8px 22px rgba(37,99,235,0.5)}
.ft-msg-ghost{
border:1px solid var(--ft-line);color:var(--ft-text);
background:rgba(255,255,255,0.65);
}
.ft-msg-ghost:hover{border-color:var(--brand);color:var(--brand);background:#fff}

/* ===== 分隔线 + 底部信息栏（备案号） ===== */
.footer-bottom{
border-top:1px solid var(--ft-line);
padding:20px 0 24px;
display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;
}
.fb-left{font-size:12.5px;color:var(--ft-text-3)}
.fb-left a:hover{color:var(--ft-hover)}
.fb-right{display:flex;align-items:center;gap:20px;flex-wrap:wrap}
.fb-right a,.fb-right span{
font-size:12.5px;color:var(--ft-text-3);transition:color .2s;
display:inline-flex;align-items:center;gap:6px;
}
.fb-right a:hover{color:var(--ft-hover)}
.fb-right svg{width:13px;height:13px;opacity:.7}

/* ===== 响应式 ===== */
@media (max-width:1024px){
.footer-grid{grid-template-columns:1fr 1fr;gap:40px 32px}
}
@media (max-width:640px){
.footer-inner{padding:44px 20px 0}
.footer-grid{grid-template-columns:1fr;gap:36px}
.footer-bottom{flex-direction:column;text-align:center}
.fb-right{justify-content:center}
}
</style>

<style>
/* ===== 配色变量（改这里即可整体换肤） ===== */
.side-tools{
--st-brand:#2563eb;       /* ★ 品牌主色 */
--st-brand-2:#3b82f6;     /* ★ 品牌辅色（渐变末端） */
--st-brand-text:#0f2c5e;  /* 标题/二维码说明文字色 */
--st-text:#1f2937;        /* 气泡文字色 */
--st-text-3:#6b7280;      /* 次要文字色 */
--st-line:#dbe7f5;        /* 边框色 */
--st-white:#ffffff;
}

/* ===== 工具栏容器 ===== */
.side-tools{
position:fixed;right:18px;top:50%;transform:translateY(-50%);
z-index:9999;display:flex;flex-direction:column;gap:10px;
font-family:"PingFang SC","Microsoft YaHei",system-ui,-apple-system,sans-serif;
}
.side-tool{
position:relative;width:48px;height:48px;border-radius:13px;
background:var(--st-white);border:1px solid var(--st-line);
box-shadow:0 4px 14px rgba(30,58,138,0.10);
display:flex;align-items:center;justify-content:center;
cursor:pointer;transition:all .25s;color:var(--st-brand);
text-decoration:none;
}
.side-tool:hover{
background:linear-gradient(135deg,var(--st-brand) 0%,var(--st-brand-2) 100%);
color:#fff;border-color:transparent;
transform:translateX(-4px);box-shadow:0 8px 20px rgba(37,99,235,0.35);
}
.side-tool svg{width:22px;height:22px}

/* ===== 文字提示气泡 ===== */
.side-tool .tip{
position:absolute;right:58px;top:50%;
transform:translateY(-50%) translateX(8px);
white-space:nowrap;background:#fff;color:var(--st-text);
font-size:13px;padding:7px 13px;border-radius:9px;
border:1px solid var(--st-line);box-shadow:0 4px 14px rgba(30,58,138,0.12);
opacity:0;visibility:hidden;pointer-events:none;transition:all .25s;
}
.side-tool .tip::after{
content:"";position:absolute;right:-6px;top:50%;transform:translateY(-50%);
border:6px solid transparent;border-left-color:#fff;
}
.side-tool:hover .tip{opacity:1;visibility:visible;transform:translateY(-50%) translateX(0)}

/* ===== 微信二维码弹窗 ===== */
.side-tool .qr-popup{
position:absolute;right:58px;top:50%;
transform:translateY(-50%) translateX(8px) scale(.92);
background:#fff;border:1px solid var(--st-line);border-radius:14px;padding:12px;
box-shadow:0 8px 28px rgba(30,58,138,0.18);
opacity:0;visibility:hidden;pointer-events:none;
transition:all .3s;text-align:center;width:168px;
}
.side-tool .qr-popup .qr-img{
width:144px;height:144px;border:1px solid var(--st-line);border-radius:8px;
overflow:hidden;background:#fff;margin:0 auto;
}
.side-tool .qr-popup .qr-img img{width:100%;height:100%;display:block;object-fit:cover}
.side-tool .qr-popup .qr-label{
font-size:12.5px;color:var(--st-brand-text);font-weight:600;margin-top:8px;
}
.side-tool .qr-popup .qr-sub{font-size:11.5px;color:var(--st-text-3);margin-top:2px}
.side-tool:hover .qr-popup{opacity:1;visibility:visible;transform:translateY(-50%) translateX(0) scale(1)}
.side-tool.qr-open .qr-popup{opacity:1;visibility:visible;transform:translateY(-50%) translateX(0) scale(1)}

/* ===== 在线咨询按钮：主行动召唤，常驻品牌色 + 脉冲提示 ===== */
.side-tool.consult-btn{
background:linear-gradient(135deg,var(--st-brand) 0%,var(--st-brand-2) 100%);
color:#fff;border-color:transparent;
box-shadow:0 6px 18px rgba(37,99,235,0.40);
}
.side-tool.consult-btn:hover{
transform:translateX(-4px) scale(1.05);box-shadow:0 10px 26px rgba(37,99,235,0.55);
}
.side-tool.consult-btn .tip{background:var(--st-brand);color:#fff;border-color:transparent}
.side-tool.consult-btn .tip::after{border-left-color:var(--st-brand)}
.side-tool.consult-btn .ring{
position:absolute;inset:0;border-radius:13px;border:2px solid var(--st-brand-2);
pointer-events:none;animation:sidePulse 2.2s ease-out infinite;
}
@keyframes sidePulse{
0%{transform:scale(1);opacity:.6}
70%{transform:scale(1.4);opacity:0}
100%{transform:scale(1.4);opacity:0}
}

/* ===== 回到顶部按钮：默认隐藏，滚动后出现 ===== */
.side-tool.top-btn{opacity:0;visibility:hidden;transform:translateX(20px);transition:all .3s}
.side-tool.top-btn.show{opacity:1;visibility:visible;transform:translateX(0)}

/* ===== 移动端适配 ===== */
@media (max-width:640px){
.side-tools{right:10px;gap:8px}
.side-tool{width:42px;height:42px;border-radius:11px}
.side-tool svg{width:19px;height:19px}
.side-tool .tip{display:none}
}
</style>
