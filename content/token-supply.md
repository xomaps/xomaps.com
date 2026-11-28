---
title: "开放接口与生态接入 | OpenAPI · MCP · 云市场 - 信朴科技"
description: "信朴科技开放接口与生态接入：标准 OpenAPI 与 MCP 协议接入，可对接财务、OA、ERP 与自建中台；产品上架云市场与企业微信应用市场，模型用量统一管理，并可按企业内网规范调整接口与鉴权方式。"
keywords: "OpenAPI,MCP,云市场,企业微信应用,系统集成,软件授权,信朴科技"
nav: "services"
date: 2026-11-18
draft: false
------

<style>
:root{
--brand:#1d4ed8;
--brand-text:#0f2c5e;
--accent:#d9480f;
--text:#0a0e1a;
--text-2:#5a6577;
--text-3:#9aa4b8;
--bg:#ffffff;
--bg-soft:#f4f6fa;
--bg-section:#f4f6fa;
--border:#ebedf3;
--border-2:#d9e2f0;
--radius:12px;
--radius-lg:18px;
--shadow-sm:0 1px 2px rgba(10,14,26,.03);
--shadow:0 8px 32px rgba(10,14,26,.06);
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
font-family:"PingFang SC","HarmonyOS Sans SC","Microsoft YaHei",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
color:var(--text);background:var(--bg);line-height:1.7;font-size:15px;
-webkit-font-smoothing:antialiased;overflow-x:hidden;
}
a{color:inherit;text-decoration:none}
.wrap{max-width:1200px;margin:0 auto;padding:0 24px}

.btn{display:inline-flex;align-items:center;gap:6px;padding:10px 24px;border-radius:6px;font-size:14px;font-weight:500;cursor:pointer;transition:all .2s;border:1px solid transparent;font-family:inherit}
.btn-primary{background:var(--brand);color:#fff;border-color:var(--brand)}
.btn-primary:hover{background:#1e40af;border-color:#1e40af}
.btn-accent{background:var(--accent);color:#fff;border-color:var(--accent)}
.btn-accent:hover{background:#c2410c;border-color:#c2410c}
.btn-ghost{background:#fff;color:var(--text);border-color:var(--border-2)}
.btn-ghost:hover{border-color:var(--text);color:var(--text)}
.btn-lg{padding:12px 32px;font-size:15px}

/* ───────── Hero：banner 整页背景 + 文字浮于左下 ───────── */
.hero{
position:relative;
margin-top:50px;
min-height:520px;
padding:100px 0 56px;
background:#eaf2fc url(/assets/img/20260814/ban2.png) center/cover no-repeat;
overflow:hidden;
}
.hero::after{
content:"";position:absolute;inset:0;
background:linear-gradient(90deg,rgba(255,255,255,.85) 0%,rgba(255,255,255,.55) 45%,rgba(255,255,255,0) 75%);
pointer-events:none;
}
.hero .wrap{position:relative;z-index:2}
.hero-eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--text-2);font-weight:500;margin-bottom:20px;letter-spacing:.02em}
.hero-eyebrow::before{content:"";width:24px;height:1px;background:var(--accent)}
.hero h1{font-size:46px;line-height:1.22;font-weight:800;letter-spacing:-.01em;margin-bottom:20px;max-width:640px}
.hero h1 .line1{display:block;color:var(--text)}
.hero h1 .line2{display:block;color:var(--brand)}
.hero .sub{font-size:15.5px;line-height:1.75;color:var(--text-2);max-width:520px;margin-bottom:22px}
.hero-chips{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:28px}
.hero-chips span{padding:5px 12px;font-size:12.5px;color:var(--text);background:rgba(255,255,255,.85);border:1px solid var(--border);border-radius:4px;backdrop-filter:blur(4px)}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap}

/* ───────── 通用区块 ───────── */
section{padding:72px 0}
.sec-head{text-align:center;max-width:760px;margin:0 auto 48px}
.sec-eyebrow{font-size:12.5px;font-weight:600;color:var(--brand);letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}
.sec-title{font-size:30px;font-weight:700;letter-spacing:-.01em;line-height:1.35;margin-bottom:14px;color:var(--text)}
.sec-title .em{color:var(--brand-text)}
.sec-desc{font-size:15px;color:var(--text-2);line-height:1.75}
.bg-soft{background:var(--bg-soft)}

/* ───────── 服务对象：扁平标签条 ───────── */
.audience{padding:24px 0;background:var(--bg-soft);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.audience .wrap{display:flex;align-items:center;gap:24px;flex-wrap:wrap;justify-content:center}
.audience-label{font-size:13px;color:var(--text-2);font-weight:500;flex-shrink:0}
.audience-tags{display:flex;gap:8px;flex-wrap:wrap;justify-content:center}
.audience-tags span{padding:6px 14px;font-size:13px;color:var(--text-2);font-weight:500;border-right:1px solid var(--border)}
.audience-tags span:last-child{border-right:none}

/* ───────── 痛点：极简编号卡片 ───────── */
.pain-layer{margin-bottom:40px}
.pain-layer-head{display:flex;align-items:baseline;gap:12px;margin-bottom:18px;padding-bottom:12px;border-bottom:1px solid var(--border)}
.pain-layer-tag{font-size:14px;font-weight:600;color:var(--brand)}
.pain-layer-sub{font-size:13px;color:var(--text-3)}
.pain-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.pain-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:22px 24px;transition:all .2s;display:flex;gap:16px}
.pain-card:hover{border-color:var(--brand);box-shadow:var(--shadow)}
.pain-icon{width:36px;height:36px;border-radius:6px;background:var(--bg-soft);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.pain-icon svg{width:20px;height:20px;color:var(--brand)}
.pain-body h4{font-size:15.5px;font-weight:600;color:var(--text);margin-bottom:6px}
.pain-body p{font-size:13.5px;color:var(--text-2);line-height:1.65;margin-bottom:8px}
.pain-solve{font-size:12.5px;color:var(--accent);font-weight:500}

/* ───────── 闭环流程：极简水平流程 ───────── */
.flow{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}
.flow-step{background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:22px 18px;text-align:center;transition:all .2s}
.flow-step:hover{border-color:var(--brand);box-shadow:var(--shadow)}
.flow-num{font-size:24px;font-weight:700;color:var(--brand);font-family:Georgia,serif;line-height:1;margin-bottom:12px;letter-spacing:.05em}
.flow-step h4{font-size:15px;font-weight:600;color:var(--text);margin-bottom:6px}
.flow-step p{font-size:12.5px;color:var(--text-2);line-height:1.6}

/* ───────── 产品矩阵：极简四卡 ───────── */
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
.prod-link{font-size:13px;font-weight:500;color:var(--brand);transition:all .2s;align-self:flex-start}
.prod-link:hover{color:var(--accent)}

/* ───────── 主流模型：5 卡 ───────── */
.model-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px}
.model-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:22px 18px;text-align:center;transition:all .2s}
.model-card:hover{border-color:var(--brand);box-shadow:var(--shadow);transform:translateY(-2px)}
.model-badge{width:48px;height:48px;border-radius:10px;background:var(--bg-soft);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:18px;font-weight:700;color:var(--brand);font-family:Georgia,serif}
.model-card h4{font-size:15px;font-weight:600;color:var(--text);margin-bottom:6px}
.model-card p{font-size:12.5px;color:var(--text-2);line-height:1.6}

/* ───────── 交付方案对比：极简双卡 ───────── */
.plan-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.plan-card{border-radius:var(--radius-lg);padding:28px 30px;transition:all .2s;background:#fff;border:1px solid var(--border)}
.plan-card:hover{box-shadow:var(--shadow)}
.plan-a{border-color:var(--brand);position:relative}
.plan-a::before{content:"推荐";position:absolute;top:0px;left:24px;background:var(--brand);color:#fff;font-size:11px;font-weight:500;padding:3px 10px;border-radius:4px}
.plan-badge{display:inline-block;font-size:12px;font-weight:500;color:var(--brand);margin-bottom:12px;letter-spacing:.04em}
.plan-card h4{font-size:19px;font-weight:600;color:var(--text);margin-bottom:8px}
.plan-tagline{font-size:13.5px;color:var(--text-2);line-height:1.6;margin-bottom:20px}
.plan-rows{margin-bottom:20px}
.plan-row{display:flex;gap:14px;padding:10px 0;border-top:1px solid var(--border);font-size:13.5px;line-height:1.6}
.plan-row:last-child{border-bottom:1px solid var(--border)}
.plan-row .k{flex-shrink:0;width:76px;color:var(--text-2)}
.plan-row .v{flex:1;color:var(--text)}

/* ───────── 用量管理四要素 ───────── */
.layer-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.layer-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);padding:24px 22px;position:relative;transition:all .2s}
.layer-card:hover{border-color:var(--brand);box-shadow:var(--shadow)}
.layer-num{font-size:32px;font-weight:700;color:var(--bg-soft);font-family:Georgia,serif;line-height:1;margin-bottom:12px;display:inline-block}
.layer-icon{width:36px;height:36px;border-radius:6px;background:var(--bg-soft);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;margin-bottom:14px}
.layer-icon svg{width:20px;height:20px;color:var(--brand)}
.layer-card h4{font-size:15.5px;font-weight:600;color:var(--text);margin-bottom:6px;position:relative}
.layer-stage{font-size:12px;color:var(--accent);font-weight:500;margin-bottom:10px}
.layer-card p{font-size:13px;color:var(--text-2);line-height:1.65}

/* ───────── 成果数据 ───────── */
.stats-section{background:var(--bg-soft)}
.stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;background:#fff}
.stat-card{padding:32px 28px;text-align:center;border-right:1px solid var(--border);transition:all .2s}
.stat-card:last-child{border-right:none}
.stat-card:hover{background:var(--bg-soft)}
.stat-num{font-size:36px;font-weight:700;color:var(--text);line-height:1;margin-bottom:8px;font-family:Georgia,serif;letter-spacing:-.02em}
.stat-num .accent{color:var(--accent)}
.stat-num .unit{font-size:18px;color:var(--text-2);font-weight:600;margin-left:2px}
.stat-label{font-size:13px;color:var(--text-2);font-weight:500}

/* ───────── 为什么选信朴科技 ───────── */
.why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.why-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);padding:28px 22px;text-align:center;transition:all .2s}
.why-card:hover{border-color:var(--brand);box-shadow:var(--shadow)}
.why-icon{width:44px;height:44px;border-radius:50%;background:var(--bg-soft);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;margin:0 auto 16px}
.why-icon svg{width:22px;height:22px;color:var(--brand)}
.why-card h4{font-size:15.5px;font-weight:600;color:var(--text);margin-bottom:8px}
.why-card p{font-size:13px;color:var(--text-2);line-height:1.65}

/* ───────── 行业覆盖 ───────── */
.industry-cloud{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;max-width0px;margin:0 auto}
.industry-cloud span{padding:7px 16px;font-size:13.5px;color:var(--text-2);font-weight:500;background:#fff;border:1px solid var(--border);border-radius:4px;transition:all .2s;cursor:default}
.industry-cloud span:hover{border-color:var(--brand);color:var(--brand)}
.industry-cloud span.hot{color:var(--brand);border-color:var(--brand);font-weight:600}

/* ───────── 荣誉 ───────── */
.honor-list{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:900px;margin:0 auto}
.honor-item{display:flex;align-items:center;gap:14px;padding:14px 20px;background:#fff;border:1px solid var(--border);border-radius:6px;transition:all .2s}
.honor-item:hover{border-color:var(--brand)}
.honor-medal{width:24px;height:24px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.honor-medal svg{width:12px;height:12px;color:#fff}
.honor-item p{font-size:13.5px;color:var(--text);line-height:1.6;font-weight:500}

/* ───────── 底部 CTA ───────── */
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
.prod-grid,.layer-grid,.why-grid{grid-template-columns:repeat(2,1fr)}
.model-grid{grid-template-columns:repeat(3,1fr)}
.stats-grid{grid-template-columns:repeat(3,1fr)}
}
@media (max-width:680px){
section{padding:48px 0}
.sec-title{font-size:24px}
.hero{min-height:380px;padding:60px 0 40px}
.hero h1{font-size:26px}
.hero .sub{font-size:14.5px}
.pain-grid,.prod-grid,.layer-grid,.why-grid,.plan-grid,.case-grid,.stats-grid,.honor-list,.model-grid{grid-template-columns:1fr}
.stat-card{border-right:none;border-bottom:1px solid var(--border)}
.stat-card:last-child{border-bottom:none}
.stat-num{font-size:30px}
.cta-final h2{font-size:22px}
.btn-lg{padding:11px 24px;font-size:14px}
}

/* ───────── 动态样式：滚动显现 + 交互增强 ───────── */
section,.pain-card,.prod-card,.layer-card,.why-card,.flow-step,.model-card,.case-card,.honor-item,.stat-card,.plan-card,.industry-cloud span,.audience-tags span{
opacity:0;transform:translateY(28px);
transition:opacity .7s cubic-bezier(.22,.61,.36,1),transform .7s cubic-bezier(.22,.61,.36,1);
}
.reveal-in{opacity:1 !important;transform:none !important}
/* 网格内错峰延迟 */
.prod-grid>:nth-child(2),.layer-grid>:nth-child(2),.why-grid>:nth-child(2),.flow>:nth-child(2),.model-grid>:nth-child(2),.pain-grid>:nth-child(2),.case-grid>:nth-child(2),.honor-list>:nth-child(2),.stats-grid>:nth-child(2){transition-delay:.08s}
.prod-grid>:nth-child(3),.layer-grid>:nth-child(3),.why-grid>:nth-child(3),.flow>:nth-child(3),.model-grid>:nth-child(3),.pain-grid>:nth-child(3),.case-grid>:nth-child(3),.honor-list>:nth-child(3),.stats-grid>:nth-child(3){transition-delay:.16s}
.prod-grid>:nth-child(4),.layer-grid>:nth-child(4),.why-grid>:nth-child(4),.flow>:nth-child(4),.model-grid>:nth-child(4),.pain-grid>:nth-child(4),.case-grid>:nth-child(4),.honor-list>:nth-child(4),.stats-grid>:nth-child(4){transition-delay:.24s}
.prod-grid>:nth-child(5),.flow>:nth-child(5),.model-grid>:nth-child(5),.honor-list>:nth-child(5),.stats-grid>:nth-child(5){transition-delay:.32s}
.flow>:nth-child(6),.honor-list>:nth-child(6),.stats-grid>:nth-child(6){transition-delay:.4s}
/* Hero 加载入场 */
.hero-eyebrow,.hero h1,.hero .sub,.hero-chips,.hero-cta{animation:heroIn .8s both}
.hero h1{animation-delay:.1s}
.hero .sub{animation-delay:.22s}
.hero-chips{animation-delay:.34s}
.hero-cta{animation-delay:.46s}
@keyframes heroIn{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
/* hover 增强 */
.pain-card:hover,.prod-card:hover,.layer-card:hover,.why-card:hover,.model-card:hover,.case-card:hover{transform:translateY(-4px)}
.flow-step:hover{transform:translateY(-4px) scale(1.02)}
.industry-cloud span:hover{transform:translateY(-2px)}
/* 数字强调色脉动 */
.stat-num .accent{display:inline-block;animation:numPulse 3s ease-in-out infinite}
@keyframes numPulse{0%,100%{opacity:1}50%{opacity:.65}}
/* 标题装饰下划线生长 */
.sec-title{position:relative}
.sec-title::after{content:"";display:block;width:0;height:3px;margin:14px auto 0;background:var(--accent);transition:width .8s .2s cubic-bezier(.22,.61,.36,1)}
.reveal-in .sec-title::after,.sec-head.reveal-in .sec-title::after{width:54px}
/* 区块头随父级 reveal 触发 */
.sec-head{position:relative}
/* 页面背景自动淡蓝白渐变流动 */
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
/* 鼠标跟随淡蓝白光影 */
.glow-host{position:relative}
.glow-host:not(section){overflow:hidden}
.glow-follow{
position:absolute;inset:0;
background:radial-gradient(300px circle at var(--mx,50%) var(--my,50%), rgba(29,78,216,.13), rgba(255,255,255,.07) 35%, transparent 70%);
opacity:0;transition:opacity .35s ease;pointer-events:none;z-index:0;border-radius:inherit;
}
.glow-host:hover .glow-follow{opacity:1}
/* 尊重减少动效偏好 */
@media (prefers-reduced-motion:reduce){
*{animation:none !important;transition:none !important}
section,.pain-card,.prod-card,.layer-card,.why-card,.flow-step,.model-card,.case-card,.honor-item,.stat-card,.plan-card,.industry-cloud span,.audience-tags span{opacity:1 !important;transform:none !important}
}
/* WebGL 流体画布：全页 fixed，multiply 混合，鼠标到哪里蓝到哪里 */
#fluid-wrap{
position:fixed;inset:0;z-index:1;pointer-events:none;overflow:hidden;
mix-blend-mode:multiply;
}
#fluid-wrap canvas{display:block;width:100%;height:100%;}
</style>


<!-- ══════════ 全页 WebGL 流体特效 ══════════ -->
<div id="fluid-wrap"></div>

<!-- ══════════ Hero ══════════ -->
<header class="hero">
<div class="wrap">
<div class="hero-eyebrow">企业级 AI 能力建设服务商 · 自研软件产品产权自有</div>
<h1>
<span class="line1">主流模型统一供应</span>
<span class="line2">让 AI 成本用得起 管得住</span>
</h1>
<p class="sub">以「主流模型供应 + 成本优化 + 用量管理」一体化服务，GPT、Gemini 等用量约官网 45 折，WorkBuddy 50 席以上赠 2000 元兑换券——让企业 AI 成本可控、用量可视。</p>
<div class="hero-chips">
<span>用量约官网 45 折</span>
<span>GPT · Gemini 主流模型</span>
<span>用量管理 + 预警</span>
<span>企业对公结算</span>
</div>
<div class="hero-cta">
<a href="/contact.html#form" class="btn btn-accent btn-lg">预约供应咨询</a>
<a href="#product" class="btn btn-ghost btn-lg">查看服务产品</a>
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

<!-- ══════════ 1. 用量痛点 ══════════ -->
<section id="pain">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">PAIN POINTS</div>
<h2 class="sec-title">模型用量失控？<span class="em">6 大核心卡点</span>一站式破解</h2>
<p class="sec-desc">从成本、管理到采购，我们把企业 AI 用量落地初期最高频的痛点拆给你看——供应、折扣、报表、预警四件事一起做，才能让成本可控。</p>
</div>

<!-- 成本层 -->
<div class="pain-layer">
<div class="pain-layer-head">
<span class="pain-layer-tag">成本层</span>
<span class="pain-layer-sub">关心价格、折扣与预算可控</span>
</div>
<div class="pain-grid">
<div class="pain-card">
<div class="pain-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
</div>
<div class="pain-body">
<h4>用量成本偏高</h4>
<p>单点采购价格高，月度用量上去后成本压力陡增。</p>
<span class="pain-solve">✓ 用量约官网 45 折长期优惠</span>
</div>
</div>
<div class="pain-card">
<div class="pain-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
</div>
<div class="pain-body">
<h4>月底账单惊吓</h4>
<p>用多少没数，月底账单才见分晓，预算常被突袭。</p>
<span class="pain-solve">✓ 实时监控 + 费用预警阈值</span>
</div>
</div>
</div>
</div>

<!-- 管理层 -->
<div class="pain-layer">
<div class="pain-layer-head">
<span class="pain-layer-tag">管理层</span>
<span class="pain-layer-sub">关心用量可视、模型选型与成本分摊</span>
</div>
<div class="pain-grid">
<div class="pain-card">
<div class="pain-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/></svg>
</div>
<div class="pain-body">
<h4>用量黑盒失控</h4>
<p>不知道哪个部门、哪个项目用得多，成本无法分摊复盘。</p>
<span class="pain-solve">✓ 配额分配 + 用量报表明细</span>
</div>
</div>
<div class="pain-card">
<div class="pain-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
</div>
<div class="pain-body">
<h4>不会模型选型</h4>
<p>不同任务该用哪个模型不清楚，常「一律用最贵」。</p>
<span class="pain-solve">✓ 按业务场景给选型建议</span>
</div>
</div>
</div>
</div>

<!-- 采购层 -->
<div class="pain-layer">
<div class="pain-layer-head">
<span class="pain-layer-tag">采购层</span>
<span class="pain-layer-sub">关心渠道、开通、结算与发票</span>
</div>
<div class="pain-grid">
<div class="pain-card">
<div class="pain-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
</div>
<div class="pain-body">
<h4>渠道分散复杂</h4>
<p>不同模型不同渠道，开通流程繁琐，权限分散难统一。</p>
<span class="pain-solve">✓ 主流模型统一接入开通</span>
</div>
</div>
<div class="pain-card">
<div class="pain-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>
</div>
<div class="pain-body">
<h4>缺企业级服务</h4>
<p>个人采购无法对公开票、月结，财务流程不合规。</p>
<span class="pain-solve">✓ 对公结算 + 月结 + 发票</span>
</div>
</div>
</div>
</div>
</div>
</section>

<!-- ══════════ 2. 服务能力闭环 ══════════ -->
<section id="flow" class="bg-soft">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">SERVICE LOOP</div>
<h2 class="sec-title">从供应到结算，<span class="em">一张图跑通用量管理闭环</span></h2>
<p class="sec-desc">围绕「统一供应、成本优化、用量监控、费用预警、报表结算」，把每个环节的抓手讲清楚——让 AI 成本从「月底惊吓」变成「可控预算」。</p>
</div>

<div class="flow">
<div class="flow-step">
<div class="flow-num">01</div>
<h4>统一供应</h4>
<p>GPT、Gemini 等主流模型统一接入与开通</p>
</div>
<div class="flow-step">
<div class="flow-num">02</div>
<h4>成本优化</h4>
<p>用量约官网 45 折 + 兑换券抵扣</p>
</div>
<div class="flow-step">
<div class="flow-num">03</div>
<h4>用量监控</h4>
<p>实时看用量与费用趋势，异常及时感知</p>
</div>
<div class="flow-step">
<div class="flow-num">04</div>
<h4>费用预警</h4>
<p>设定阈值，超出前先通知，不做惊吓</p>
</div>
<div class="flow-step">
<div class="flow-num">05</div>
<h4>报表结算</h4>
<p>周期汇总、成本分摊、对公报账</p>
</div>
</div>

<div style="text-align:center;margin-top:36px">
<a href="/contact.html#form" class="btn btn-primary btn-lg">预约供应咨询</a>
</div>
</div>
</section>

<!-- ══════════ 3. 四大服务产品 ══════════ -->
<section id="product">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">SERVICE PRODUCTS</div>
<h2 class="sec-title">四大服务方向，<span class="em">环环相扣的用量管理闭环</span></h2>
<p class="sec-desc">主流模型供应 → 成本优化 → 用量管理 → 企业级服务，一套服务支撑企业 AI 用量从开通到结算的全周期需求。</p>
</div>

<div class="prod-grid">
<div class="prod-card">
<div class="prod-stage">STAGE 01 · 模型供应</div>
<div class="prod-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
</div>
<h4>主流模型供应</h4>
<div class="prod-scene">场景：统一接入 GPT、Gemini 等主流模型</div>
<ul class="prod-features">
<li>GPT / Gemini / Claude 系列</li>
<li>DeepSeek / Qwen 通义</li>
<li>按需开通与切换</li>
<li>统一权限与配额</li>
</ul>
<a href="/contact.html#form" class="prod-link">立即咨询 →</a>
</div>

<div class="prod-card">
<div class="prod-stage">STAGE 02 · 成本优化</div>
<div class="prod-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
</div>
<h4>成本优化</h4>
<div class="prod-scene">场景：用量约官网 45 折 + 兑换券抵扣</div>
<ul class="prod-features">
<li>用量约官网 45 折</li>
<li>WorkBuddy 50 席赠 2000 元券</li>
<li>按量计费、随用随付</li>
<li>长期合作阶梯优惠</li>
</ul>
<a href="/contact.html#form" class="prod-link">立即咨询 →</a>
</div>

<div class="prod-card">
<div class="prod-stage">STAGE 03 · 用量管理</div>
<div class="prod-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/></svg>
</div>
<h4>用量管理</h4>
<div class="prod-scene">场景：配额 · 监控 · 预警 · 报表</div>
<ul class="prod-features">
<li>按部门 / 项目配额分配</li>
<li>实时监控用量与费用</li>
<li>费用预警阈值</li>
<li>周期报表与成本分摊</li>
</ul>
<a href="/contact.html#form" class="prod-link">立即咨询 →</a>
</div>

<div class="prod-card">
<div class="prod-stage">STAGE 04 · 企业服务</div>
<div class="prod-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/></svg>
</div>
<h4>企业级服务</h4>
<div class="prod-scene">场景：开通 · 结算 · 开票 · 响应</div>
<ul class="prod-features">
<li>企业化开通与配置</li>
<li>对公结算、月结、发票</li>
<li>专属客服与响应</li>
<li>选型建议与持续优化</li>
</ul>
<a href="/contact.html#form" class="prod-link">立即咨询 →</a>
</div>
</div>
</div>
</section>

<!-- ══════════ 4. 支持的主流模型 ══════════ -->
<section class="bg-soft">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">SUPPORTED MODELS</div>
<h2 class="sec-title">主流模型统一接入，<span class="em">按需选择与切换</span></h2>
<p class="sec-desc">不同任务适合不同模型——信朴科技可结合业务场景给出选型建议，避免「一律用最贵」。</p>
</div>

<div class="model-grid">
<div class="model-card">
<div class="model-badge">GPT</div>
<h4>GPT 系列</h4>
<p>通用对话、内容生成、分析推理的成熟选择</p>
</div>
<div class="model-card">
<div class="model-badge">Ge</div>
<h4>Gemini 系列</h4>
<p>多模态理解与处理强，适合图文视频场景</p>
</div>
<div class="model-card">
<div class="model-badge">Cl</div>
<h4>Claude 系列</h4>
<p>长上下文与代码、文档处理能力突出</p>
</div>
<div class="model-card">
<div class="model-badge">DS</div>
<h4>DeepSeek</h4>
<p>性价比选项，国产化部署友好</p>
</div>
<div class="model-card">
<div class="model-badge">Qw</div>
<h4>Qwen 通义</h4>
<p>国产化选项，中文场景表现优秀</p>
</div>
</div>
<p style="text-align:center;margin-top:20px;font-size:13px;color:var(--text-3)">其他主流模型可按企业需要接入与切换</p>
</div>
</section>

<!-- ══════════ 5. 成本优势对比 ══════════ -->
<section id="plan">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">COST ADVANTAGE</div>
<h2 class="sec-title">两种采购方式，<span class="em">按企业用量规模选择</span></h2>
<p class="sec-desc">方案 A 套餐采购适合有稳定用量、希望享 45 折优惠的企业；方案 B 按量计费适合用量波动、需要灵活起步的企业。两种方式可独立采购，也可组合使用。</p>
</div>

<div class="plan-grid">
<div class="plan-card plan-a">
<span class="plan-badge">方案 A · 推荐</span>
<h4>套餐采购 + 45 折优惠</h4>
<p class="plan-tagline">预充值享专享折扣，WorkBuddy 50 席以上赠 2000 元兑换券，长期合作更优惠。</p>
<div class="plan-rows">
<div class="plan-row"><span class="k">适用企业</span><span class="v">有稳定用量，希望享 45 折优惠</span></div>
<div class="plan-row"><span class="k">价格优势</span><span class="v">用量约官网 45 折</span></div>
<div class="plan-row"><span class="k">兑换券</span><span class="v">WorkBuddy 50 席以上赠 2000 元</span></div>
<div class="plan-row"><span class="k">计费方式</span><span class="v">预充值 + 余额抵扣</span></div>
<div class="plan-row"><span class="k">适合阶段</span><span class="v">AI 用量稳定期</span></div>
</div>
<a href="/contact.html#form" class="btn btn-accent btn-lg">预约套餐咨询</a>
</div>

<div class="plan-card plan-b">
<span class="plan-badge">方案 B · 灵活</span>
<h4>按量计费 + 标准结算</h4>
<p class="plan-tagline">用多少算多少，无最低用量门槛，适合用量波动或刚起步的企业。</p>
<div class="plan-rows">
<div class="plan-row"><span class="k">适用企业</span><span class="v">用量波动，需要灵活起步</span></div>
<div class="plan-row"><span class="k">价格优势</span><span class="v">标准计费，随用随付</span></div>
<div class="plan-row"><span class="k">兑换券</span><span class="v">按活动政策赠送</span></div>
<div class="plan-row"><span class="k">计费方式</span><span class="v">按量计费，月底结算</span></div>
<div class="plan-row"><span class="k">适合阶段</span><span class="v">AI 启蒙与试用期</span></div>
</div>
<a href="/contact.html#form" class="btn btn-primary btn-lg">预约按量咨询</a>
</div>
</div>
</div>
</section>

<!-- ══════════ 6. 用量管理四要素 ══════════ -->
<section id="layer" class="bg-soft">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">USAGE MANAGEMENT</div>
<h2 class="sec-title">用量管理四要素，<span class="em">让每一笔用量可查可控</span></h2>
<p class="sec-desc">配额、监控、预警、报表四件事一起做——从「用多少没数」到「每笔用量可查」，让 AI 成本成为可控预算。</p>
</div>

<div class="layer-grid">
<div class="layer-card">
<div class="layer-num">01</div>
<div class="layer-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
</div>
<h4>配额分配</h4>
<div class="layer-stage">按部门 · 按项目</div>
<p>按部门、按项目分配用量，防止滥用与超支。</p>
</div>

<div class="layer-card">
<div class="layer-num">02</div>
<div class="layer-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/></svg>
</div>
<h4>实时监控</h4>
<div class="layer-stage">用量 · 费用趋势</div>
<p>用量与费用趋势随时可看，异常波动及时感知。</p>
</div>

<div class="layer-card">
<div class="layer-num">03</div>
<div class="layer-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
</div>
<h4>费用预警</h4>
<div class="layer-stage">阈值 · 提前通知</div>
<p>设定阈值，超出之前先通知，不做「月底惊吓」。</p>
</div>

<div class="layer-card">
<div class="layer-num">04</div>
<div class="layer-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
</div>
<h4>用量报表</h4>
<div class="layer-stage">汇总 · 分摊 · 复盘</div>
<p>周期汇总、成本分摊，支撑内部结算与复盘。</p>
</div>
</div>
</div>
</section>

<!-- ══════════ 7. 成果数据 ══════════ -->
<section class="stats-section">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">SERVICE OUTCOMES</div>
<h2 class="sec-title">不止供应，<span class="em">更有跑通的真实成果</span></h2>
<p class="sec-desc">信朴科技以自研软件产品为底座，让企业 AI 用量成本可控、用量可视。</p>
</div>

<div class="stats-grid">
<div class="stat-card">
<div class="stat-num"><span class="accent">45</span><span class="unit">折</span></div>
<div class="stat-label">用量约官网折扣</div>
</div>
<div class="stat-card">
<div class="stat-num"><span class="accent">2000</span><span class="unit">元</span></div>
<div class="stat-label">WorkBuddy 50 席赠兑换券</div>
</div>
<div class="stat-card">
<div class="stat-num"><span class="accent">5</span><span class="unit">类</span></div>
<div class="stat-label">主流模型统一接入</div>
</div>
<div class="stat-card">
<div class="stat-num"><span class="accent">自研</span></div>
<div class="stat-label">软件产品产权自有</div>
</div>
<div class="stat-card">
<div class="stat-num"><span class="accent">双形态</span></div>
<div class="stat-label">SaaS 订阅与私有化部署</div>
</div>
<div class="stat-card">
<div class="stat-num"><span class="accent">5</span><span class="unit">步</span></div>
<div class="stat-label">服务流程闭环</div>
</div>
</div>
</div>
</section>

<!-- ══════════ 8. 为什么选信朴科技 ══════════ -->
<section id="why">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">WHY XOMAPS<sup></sup></div>
<h2 class="sec-title">既是供应商，<span class="em">也是 AI 落地亲历者</span></h2>
<p class="sec-desc">信朴科技不止于卖用量——价格优势、模型全面、企业服务、省心管理，让 AI 成本真正可控。</p>
</div>

<div class="why-grid">
<div class="why-card">
<div class="why-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
</div>
<h4>价格优势</h4>
<p>用量约官网 45 折，长期合作更优惠，效果与成本可平衡。</p>
</div>
<div class="why-card">
<div class="why-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
</div>
<h4>模型全面</h4>
<p>GPT、Gemini 等主流模型统一接入，按需选择与切换。</p>
</div>
<div class="why-card">
<div class="why-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4"/></svg>
</div>
<h4>企业服务</h4>
<p>开通、结算、开票一体，专属客服与响应，财务流程合规省心。</p>
</div>
<div class="why-card">
<div class="why-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/></svg>
</div>
<h4>省心管理</h4>
<p>报表、预警、配额齐备，成本可控不失控。</p>
</div>
</div>
</div>
</section>

<!-- ══════════ 9. 行业覆盖 ══════════ -->
<section class="bg-soft">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">INDUSTRY COVERAGE</div>
<h2 class="sec-title">跨行业实践，<span class="em">自研底座持续沉淀</span></h2>
<p class="sec-desc">信朴科技的模型用量与 AI 服务实践覆盖新能源汽车、出行、装备制造、半导体、邮政、建材、知识产权、金融科技等行业。</p>
</div>

<div class="industry-cloud">
<span class="hot">新能源汽车</span>
<span class="hot">智慧出行</span>
<span class="hot">装备制造</span>
<span class="hot">半导体芯片</span>
<span>邮政物流</span>
<span>建材家居</span>
<span>知识产权</span>
<span>金融科技</span>
<span>游戏文娱</span>
<span>企业管理</span>
<span>电梯装备</span>
<span>支付服务</span>
<span>联合专利</span>
<span>陶瓷卫浴</span>
<span>攀岩运动</span>
<span>知识服务平台</span>
</div>

<div style="text-align:center;margin-top:36px">
<a href="/contact.html#form" class="btn btn-primary btn-lg">预约供应咨询</a>
</div>
</div>
</section>

<!-- ══════════ 10. 荣誉背书 ══════════ -->
<section>
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">HONORS & ENDORSEMENT</div>
<h2 class="sec-title">权威认可与<span class="em">资质背书</span></h2>
<p class="sec-desc">自研软件产品产权自有，按需求交付，长期服务行业客户。</p>
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
<p>云与 AI 一体化的服务能力</p>
</div>
<div class="honor-item">
<div class="honor-medal"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
<p>FDE 现场解决方案工程团队支撑</p>
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
// 滚动显现：元素进入视口加 reveal-in
var sels='section,.sec-head,.pain-card,.prod-card,.layer-card,.why-card,.flow-step,.model-card,.case-card,.honor-item,.stat-card,.plan-card,.industry-cloud span,.audience-tags span';
var els=document.querySelectorAll(sels);
var io=new IntersectionObserver(function(es){
es.forEach(function(e){
if(e.isIntersecting){e.target.classList.add('reveal-in');io.unobserve(e.target);}
});
},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
els.forEach(function(el){io.observe(el);});

// 数字计数动画：进入视口时从 0 滚到目标值
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

// 鼠标跟随淡蓝白光影
var glowSels='section,.pain-card,.prod-card,.layer-card,.why-card,.flow-step,.model-card,.case-card,.plan-card,.honor-item,.stat-card';
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
--text:#0a0e1a;
--text-2:#4b5563;
--bg:#ffffff;
--border:#ebedf3;

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
