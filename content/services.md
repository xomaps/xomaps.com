---
title: "产品与服务中心 | 自研软件与交付能力 - 信朴科技"
description: "信朴科技产品与服务：自研业务系统、私有化部署与一站式托管、场景落地、AI 原生研发与培训、Agent 定制、开放接口与生态接入、软件授权与订阅，可独立采购，也可组合为完整的交付项目。"
keywords: "自研软件,软件授权,私有化部署,一站式交付,企业微信应用,Agent定制,AI原生研发,信朴科技"
nav: "services"
date: 2026-11-18
draft: false
------

<style>
:root{
/* 精炼色彩体系 */
--ink:#0a0e1a;
--ink-2:#1a2236;
--brand:#1d4ed8;
--brand-2:#1e4ca8;
--brand-glow:rgba(30,76,168,.12);
--accent:#d9480f;
--accent-soft:rgba(217,72,15,.08);
--text:#0a0e1a;
--text-2:#5a6577;
--text-3:#9aa4b8;
--bg:#fafbfd;
--bg-card:#ffffff;
--bg-soft:#f4f6fa;
--bg-deep:#0a0e1a;
--bg-deep-2:#141a2e;
--border:#ebedf3;
--border-soft:#f0f2f7;
--radius:12px;
--radius-lg:18px;
--radius-xl:24px;
--shadow-xs:0 1px 2px rgba(10,14,26,.03);
--shadow-sm:0 2px 8px rgba(10,14,26,.04);
--shadow:0 8px 32px rgba(10,14,26,.06);
--shadow-lg:0 24px 64px rgba(10,14,26,.08);
--shadow-xl:0 32px 80px rgba(10,14,26,.12);
--maxw:1280px;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
font-family:"PingFang SC","HarmonyOS Sans SC","Microsoft YaHei",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
color:var(--text);background:linear-gradient(135deg,#eaf2fc 0%,#ffffff 25%,#f0f6fc 50%,#ffffff 75%,#eaf2fc 100%);background-size:400% 400%;animation:bgFlow 22s ease-in-out infinite;line-height:1.7;font-size:15px;
-webkit-font-smoothing:antialiased;overflow-x:hidden;letter-spacing:.005em;
}
a{color:inherit;text-decoration:none}

/* ===== WebGL 流体背景 ===== */
#fluid-wrap{position:fixed;inset:0;z-index:1;pointer-events:none;overflow:hidden;mix-blend-mode:multiply;opacity:.7}
#fluid-wrap canvas{display:block;width:100%;height:100%}

/* ===== 容器 ===== */
.wrap{max-width:var(--maxw);margin:0 auto;padding:0 32px;position:relative;z-index:2}

/* ===== Hero ===== */
.hero{position:relative;padding:100px 0 56px;min-height:520px;overflow:hidden;background:#eaf2fc url(/assets/img/20260814/ban1.png) center/cover no-repeat}
.hero-inner{max-width:960px}
.hero-eyebrow{display:inline-flex;align-items:center;gap:14px;font-size:11.5px;color:var(--brand);font-weight:600;margin-bottom:32px;letter-spacing:.18em;text-transform:uppercase}
.hero-eyebrow .line{width:40px;height:1px;background:linear-gradient(90deg,var(--brand),transparent)}
.hero h1{font-size:clamp(38px,5.5vw,46px);line-height:1.12;font-weight:800;letter-spacing:-.03em;margin-bottom:28px;color:var(--ink)}
.hero h1 .em{
color:var(--brand);
background:#2563eb;
-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.hero .sub{font-size:clamp(15px,1.2vw,17px);line-height:1.9;color:var(--text-2);max-width:580px;margin-bottom:40px;font-weight:400}

/* Hero 指标条 — 精简为3组，内联排列 */
.hero-metrics{display:flex;align-items:center;gap:0;margin-bottom:44px;flex-wrap:wrap}
.hero-metric{padding:0 36px 0 0;margin-right:36px;border-right:1px solid var(--border)}
.hero-metric:last-child{border-right:none;margin-right:0;padding-right:0}
.hero-metric .num{font-size:32px;font-weight:800;color:var(--ink);letter-spacing:-.03em;line-height:1;font-variant-numeric:tabular-nums}
.hero-metric .num .unit{font-size:15px;font-weight:600;color:var(--text-2);margin-left:2px}
.hero-metric .label{font-size:12px;color:var(--text-3);margin-top:8px;letter-spacing:.04em}

/* Hero CTA */
.hero-cta{display:flex;gap:14px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:8px;padding:14px 30px;border-radius:10px;font-size:14.5px;font-weight:500;cursor:pointer;transition:all .3s cubic-bezier(.22,1,.36,1);border:1px solid transparent;font-family:inherit;white-space:nowrap;letter-spacing:.01em}
.btn svg{width:16px;height:16px;transition:transform .3s}
.btn-primary{background:var(--accent);color:#fff;box-shadow:0 4px 24px rgba(217,72,15,.3)}
.btn-primary:hover{background:#c2410c;transform:translateY(-2px);box-shadow:0 8px 32px rgba(217,72,15,.4)}
.btn-primary:hover svg{transform:translateY(2px)}
.btn-ghost{background:transparent;color:var(--ink);border-color:var(--border)}
.btn-ghost:hover{border-color:var(--accent);background:var(--accent);color:#fff;transform:translateY(-2px)}

/* ===== 区块标题通用 ===== */
.sec-head{margin-bottom:56px}
.sec-eyebrow{font-size:11.5px;font-weight:600;color:var(--brand);letter-spacing:.18em;text-transform:uppercase;margin-bottom:16px;display:flex;align-items:center;gap:12px}
.sec-eyebrow .dot{width:6px;height:6px;border-radius:50%;background:var(--brand)}
.sec-title{font-size:clamp(28px,3.2vw,40px);font-weight:800;color:var(--ink);letter-spacing:-.025em;line-height:1.25}
.sec-title .em{color:var(--brand)}
.sec-sub{font-size:15px;color:var(--text-2);max-width:520px;margin-top:16px;line-height:1.85}

/* ===== 产品目录 ===== */
.catalog{padding:80px 0 120px;position:relative}
.cat-head{display:flex;align-items:flex-end;justify-content:space-between;gap:32px;margin-bottom:56px;flex-wrap:wrap}
.cat-filter{display:flex;gap:6px;flex-wrap:wrap;background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:5px}
.cat-filter button{padding:9px 20px;font-size:13px;color:var(--text-2);background:transparent;border:none;border-radius:8px;cursor:pointer;transition:all .3s cubic-bezier(.22,1,.36,1);font-family:inherit;font-weight:500}
.cat-filter button:hover{color:var(--ink)}
.cat-filter button.active{background:#2563eb;color:#fff;font-weight:600}

/* 产品网格 — 一行4个，高级商品卡 */
.products{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;perspective:1600px}
.product{
position:relative;background:var(--bg-card);border:1px solid var(--border-soft);border-radius:var(--radius-lg);
overflow:hidden;display:flex;flex-direction:column;
transition:transform .4s cubic-bezier(.22,1,.36,1),box-shadow .4s,border-color .3s,opacity .4s;
}
.product:hover{
border-color:transparent;
box-shadow:0 24px 56px -20px rgba(10,14,26,.12),0 8px 24px -12px rgba(10,14,26,.06);
transform:translateY(-8px);
}
/* 顶部色条 — 极细，高级 */
.prod-bar{position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--c),transparent 200%);transform:scaleX(0);transform-origin:left;transition:transform .6s cubic-bezier(.22,1,.36,1);z-index:4}
.product:hover .prod-bar{transform:scaleX(1)}
/* 图片区 */
.prod-img{position:relative;aspect-ratio:16/10;overflow:hidden;background:var(--bg-soft)}
.prod-img img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .8s cubic-bezier(.22,1,.36,1)}
.product:hover .prod-img img{transform:scale(1.06)}
.prod-img::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%,rgba(10,14,26,.12) 100%);pointer-events:none}
/* 序号 — 右下角大号水印 */
.prod-num{position:absolute;bottom:12px;right:16px;font-size:32px;font-weight:800;color:rgba(255,255,255,.9);letter-spacing:-.04em;line-height:1;z-index:2;text-shadow:0 2px 12px rgba(10,14,26,.3);font-variant-numeric:tabular-nums}
/* 分类标签 — 极简 */
.prod-cat{position:absolute;top:14px;left:14px;font-size:10.5px;font-weight:600;padding:5px 12px;border-radius:6px;background:rgba(255,255,255,.88);backdrop-filter:blur(10px);color:var(--ink);letter-spacing:.06em;text-transform:uppercase;border:1px solid rgba(255,255,255,.5);z-index:2;transition:color .3s}
.product:hover .prod-cat{color:var(--c)}
/* 卡片内容 */
.prod-body{padding:24px 24px 28px;display:flex;flex-direction:column;flex:1}
.prod-name{font-size:19px;font-weight:700;color:var(--ink);letter-spacing:-.015em;margin-bottom:4px}
.prod-name-en{font-size:11px;font-weight:600;color:var(--brand);letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px;display:block;transition:color .3s}
.product:hover .prod-name-en{color:var(--c)}
.prod-desc{font-size:13px;color:var(--text-2);line-height:1.75;margin-bottom:18px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:46px}
.prod-tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:22px;flex:1}
.prod-tags span{font-size:11px;color:var(--text-3);padding:4px 10px;background:var(--bg-soft);border-radius:6px;line-height:1.5;transition:all .3s;font-weight:500}
.product:hover .prod-tags span{color:var(--text-2);background:var(--border-soft)}
/* 底部链接 — 精致箭头 */
.prod-link{display:flex;align-items:center;justify-content:space-between;padding-top:18px;border-top:1px solid var(--border-soft);font-size:13px;font-weight:600;color:var(--ink);transition:color .3s}
.prod-link .arrow{display:flex;align-items:center;gap:4px;color:var(--c);transition:gap .3s}
.prod-link .arrow svg{width:15px;height:15px;transition:transform .3s}
.product:hover .prod-link .arrow{gap:8px}
.product:hover .prod-link .arrow svg{transform:translateX(2px)}
.product:hover .prod-link{color:var(--c)}

/* 产品主题色 */
.p-ai-efficiency{--c:#1e4ca8}
.p-cloud-compute{--c:#0891b2}
.p-ai-landing{--c:#059669}
.p-ai-transformation{--c:#6d28d9}
.p-agent-custom{--c:#d9480f}
.p-token-supply{--c:#16a34a}
.p-workbuddy-training{--c:#dc2626}

/* 筛选隐藏动画 */
.product.hide{opacity:0;transform:scale(.94) translateY(12px);pointer-events:none}

/* ===== 服务闭环 ===== */
.loop-section{position:relative;padding:120px 0;background:var(--bg-card);border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
.loop-head{margin-bottom:72px}
.loop{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;max-width:1040px;margin:0 auto}
.loop::before{content:"";position:absolute;top:52px;left:13%;right:13%;height:1px;background:repeating-linear-gradient(90deg,var(--border) 0 6px,transparent 6px 14px)}
.loop-step{text-align:center;position:relative;z-index:1;padding:0 20px}
.loop-circle{
width:104px;height:104px;border-radius:50%;background:var(--bg-card);
border:1px solid var(--border);display:flex;flex-direction:column;align-items:center;justify-content:center;
margin:0 auto 24px;transition:all .4s cubic-bezier(.22,1,.36,1);
box-shadow:var(--shadow-xs);
}
.loop-step:hover .loop-circle{
transform:translateY(-6px);border-color:var(--brand);
box-shadow:0 16px 40px -12px var(--brand-glow),0 0 0 1px var(--brand);
}
.loop-circle .step-num{font-size:10px;font-weight:700;color:var(--accent);letter-spacing:.12em;margin-bottom:4px}
.loop-circle .step-ico{width:30px;height:30px;color:var(--brand);transition:transform .4s}
.loop-step:hover .loop-circle .step-ico{transform:scale(1.1)}
.loop-step h4{font-size:18px;font-weight:700;color:var(--ink);margin-bottom:10px;letter-spacing:-.01em}
.loop-step p{font-size:13px;color:var(--text-2);line-height:1.75;max-width:200px;margin:0 auto}

/* ===== 产品对比表 ===== */
.compare-section{padding:120px 0}
.compare-head{margin-bottom:56px}
.compare-table-wrap{overflow-x:auto;border-radius:var(--radius-lg);border:1px solid var(--border);box-shadow:var(--shadow-sm);background:var(--bg-card)}
.compare-table{width:100%;border-collapse:collapse;font-size:13.5px;min-width:820px}
.compare-table thead th{
background:var(--ink);color:#fff;font-weight:600;padding:18px 22px;text-align:left;font-size:12.5px;
letter-spacing:.04em;white-space:nowrap;border-bottom:none
}
.compare-table thead th:first-child{border-radius:0}
.compare-table tbody td{padding:16px 22px;border-bottom:1px solid var(--border-soft);color:var(--text-2);vertical-align:middle;font-size:13.5px}
.compare-table tbody tr:last-child td{border-bottom:none}
.compare-table tbody tr{transition:background .2s}
.compare-table tbody tr:hover{background:var(--bg-soft)}
.compare-table td:first-child{font-weight:700;color:var(--ink);white-space:nowrap;font-size:14px}
.compare-table .tag-cell{display:inline-flex;align-items:center;gap:4px;padding:4px 12px;border-radius:6px;font-size:12px;font-weight:600;letter-spacing:.01em}
.compare-table .tag-yes{background:#ecfdf5;color:#047857}
.compare-table .tag-mid{background:#fffbeb;color:#b45309}
.compare-table .tag-no{background:var(--bg-soft);color:var(--text-3)}

/* ===== 客户墙 ===== */
.clients-section{padding:120px 0;background:var(--bg-card);border-top:1px solid var(--border);border-bottom:1px solid var(--border);overflow:hidden}
.clients-head{margin-bottom:56px}
.clients-marquee{display:flex;gap:16px;animation:marquee 45s linear infinite;width:max-content}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.client-chip{
flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;
min-width:180px;padding:28px 24px;background:var(--bg-soft);border:1px solid var(--border-soft);
border-radius:var(--radius);transition:all .3s cubic-bezier(.22,1,.36,1)
}
.client-chip .logo-img{width:48px;height:48px;object-fit:contain;margin-bottom:4px;opacity:.85;transition:opacity .3s}
.client-chip:hover .logo-img{opacity:1}
.client-chip .logo-mono{width:48px;height:48px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:800;color:var(--brand,#2563eb);background:linear-gradient(135deg,rgba(37,99,235,.12),rgba(37,99,235,.03))}
.client-chip:hover{background:var(--bg-card);border-color:var(--border);box-shadow:var(--shadow-sm);transform:translateY(-4px)}
.client-chip .name{font-size:16px;font-weight:700;color:var(--ink);letter-spacing:-.01em}
.client-chip .industry{font-size:11.5px;color:var(--text-3);letter-spacing:.02em}
.marquee-track{display:flex;gap:16px;width:max-content}
.clients-marquee-wrap{overflow:hidden;mask-image:linear-gradient(90deg,transparent 0%,#000 6%,#000 94%,transparent 100%)}

/* ===== CTA ===== */
.cta-section{padding:120px 0}
.cta-band{
position:relative;background:linear-gradient(135deg,#eaf2fc 0%,#f5f8fc 55%,#e0f2fe 100%);border-radius:var(--radius-xl);
padding:72px 64px;overflow:hidden
}
.cta-band::before{
content:"";position:absolute;top:-50%;right:-20%;width:70%;height:200%;
background:radial-gradient(circle,rgba(30,76,168,.35),transparent 60%);pointer-events:none
}
.cta-band::after{
content:"";position:absolute;inset:0;
background-image:
linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);
background-size:48px 48px;pointer-events:none
}
.cta-inner{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:48px;flex-wrap:wrap}
.cta-text h2{font-size:clamp(24px,2.8vw,36px);font-weight:800;color:var(--ink);letter-spacing:-.025em;line-height:1.3;margin-bottom:20px;max-width:560px}
.cta-text p{font-size:14.5px;color:rgba(10,14,26,.6);line-height:1.85;max-width:480px}
.cta-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:32px}
.cta-actions .btn-primary{background:var(--accent);color:#fff;box-shadow:0 4px 24px rgba(217,72,15,.3)}
.cta-actions .btn-primary:hover{background:#c2410c;transform:translateY(-2px);box-shadow:0 8px 32px rgba(217,72,15,.4)}
.cta-actions .btn-accent{background:#fff;color:var(--ink);border:1px solid var(--border)}
.cta-actions .btn-accent:hover{background:var(--bg-soft);transform:translateY(-2px)}
.cta-contact{
background:rgba(255,255,255,.7);border:1px solid rgba(10,14,26,.08);border-radius:var(--radius-lg);
padding:32px;backdrop-filter:blur(12px);display:flex;flex-direction:column;gap:20px;min-width:300px
}
.cta-contact .row{display:flex;align-items:flex-start;gap:14px;color:var(--ink)}
.cta-contact .row svg{width:20px;height:20px;color:var(--text-3);flex-shrink:0;margin-top:2px}
.cta-contact .row .label{color:var(--text-3);font-size:11.5px;display:block;margin-bottom:4px;letter-spacing:.06em;text-transform:uppercase}
.cta-contact .row .val{font-size:14.5px;font-weight:500}

/* ===== 滚动渐入 ===== */
.reveal{opacity:0;transform:translateY(36px);transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .8s cubic-bezier(.22,1,.36,1)}
.reveal.in{opacity:1;transform:none}
.reveal-d1{transition-delay:.1s}
.reveal-d2{transition-delay:.2s}
.reveal-d3{transition-delay:.3s}
.reveal-d4{transition-delay:.4s}
.reveal-d5{transition-delay:.5s}
.reveal-d6{transition-delay:.6s}

@keyframes bgFlow{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}

/* ===== 响应式 ===== */
@media(max-width:1080px){
.products{grid-template-columns:repeat(2,1fr);gap:20px}
}
@media(max-width:860px){
.hero{padding:80px 0 48px;min-height:460px}
.hero-metric{padding:0 24px 0 0;margin-right:24px}
.hero-metric .num{font-size:26px}
.loop{grid-template-columns:repeat(2,1fr);gap:48px 20px}
.loop::before{display:none}
.cta-band{padding:48px 36px}
.catalog{padding:60px 0 80px}
.loop-section,.compare-section,.clients-section,.cta-section{padding:80px 0}
}
@media(max-width:560px){
.hero{min-height:380px;padding:60px 0 40px}
.products{grid-template-columns:1fr;gap:16px}
.cat-head{flex-direction:column;align-items:flex-start}
.cta-inner{flex-direction:column;align-items:flex-start}
.cta-band{padding:40px 24px;border-radius:var(--radius-lg)}
.cta-contact{width:100%}
.hero-metrics{flex-direction:column;align-items:flex-start;gap:24px}
.hero-metric{padding:0;margin-right:0;border-right:none;border-bottom:1px solid var(--border);padding-bottom:20px;margin-right:0}
.hero-metric:last-child{border-bottom:none;padding-bottom:0}
}

/* ===== 无障碍 ===== */
@media (prefers-reduced-motion: reduce){
.reveal{opacity:1;transform:none;transition:none}
.clients-marquee{animation:none}
*{animation-duration:.01ms!important;transition-duration:.01ms!important}
}
</style>

<!-- WebGL 流体背景 -->
<div id="fluid-wrap"></div>

<!-- Hero -->
<header class="hero" id="top">
<div class="wrap">
<div class="hero-inner">
<div class="hero-eyebrow reveal"><span class="line"></span>自研软件产品产权自有 · 企业 AI 能力建设落地</div>
<h1 class="reveal reveal-d1">七大产品，<br>让 <span class="em">AI 真正落地</span> 为生产力</h1>
<p class="sub reveal reveal-d2">从基础设施到战略咨询，从工具供给到人才赋能——信朴科技的产品体系覆盖企业 AI 全生命周期，独立或组合采购，按需匹配。</p>
<div class="hero-metrics reveal reveal-d3">
<div class="hero-metric">
<div class="num">7<span class="unit">款产品</span></div>
<div class="label">独立或组合采购</div>
</div>
<div class="hero-metric">
<div class="num">双形态</div>
<div class="label">SaaS 订阅与私有化部署</div>
</div>
<div class="hero-metric">
<div class="num">全包</div>
<div class="label">域名、服务器、证书与解析</div>
</div>
</div>
<div class="hero-cta reveal reveal-d4">
<a href="#catalog" class="btn btn-primary">浏览全部产品 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg></a>
<a href="#contact" class="btn btn-ghost">预约产品诊断</a>
</div>
</div>
</div>
</header>

<!-- 产品目录 -->
<section class="catalog" id="catalog">
<div class="wrap">
<div class="cat-head reveal">
<div>
<div class="sec-eyebrow"><span class="dot"></span>PRODUCT CATALOG · 产品目录</div>
<h2 class="sec-title">七大产品矩阵</h2>
</div>
<div class="cat-filter">
<button class="active" data-filter="all">全部</button>
<button data-filter="ai">AI 系列</button>
<button data-filter="cloud">云与基建</button>
<button data-filter="training">培训赋能</button>
</div>
</div>

<div class="products" id="products">

<!-- 1. AI提效 -->

<article class="product p-ai-efficiency reveal" data-cat="ai">
<div class="prod-bar"></div>
<div class="prod-img">
<span class="prod-cat">AI · 综合</span>
<span class="prod-num">01</span>
<img src="/assets/img/20260814/ban1.png" alt="AI提效" loading="lazy">
</div>
<div class="prod-body">
<h3 class="prod-name">AI 提效</h3>
<span class="prod-name-en">AI Efficiency</span>
<p class="prod-desc">学·用·建·管一站式闭环，让人会用 AI、让模型用得省、让场景真落地、让投入沉淀为资产。</p>
<div class="prod-tags">
<span>企业 AI 培训</span>
<span>Token 成本优化</span>
<span>Agent 定制</span>
<span>AI 咨询</span>
</div>
<a href="/ai-efficiency.html" class="prod-link">
<span>查看产品详情</span>
<span class="arrow">了解 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
</a>
</div>
</article>


<!-- 2. 云计算服务 -->

<article class="product p-cloud-compute reveal reveal-d1" data-cat="cloud">
<div class="prod-bar"></div>
<div class="prod-img">
<span class="prod-cat">云 · 基础设施</span>
<span class="prod-num">02</span>
<img src="/assets/img/theme/1617443834642507.jpg" alt="私有化部署与托管" loading="lazy">
</div>
<div class="prod-body">
<h3 class="prod-name">私有化部署与托管</h3>
<span class="prod-name-en">Private Deployment</span>
<p class="prod-desc">自研软件产品产权自有，按需求交付。私有化部署、运维托管与全包交付。</p>
<div class="prod-tags">
<span>私有化部署</span>
<span>运维托管</span>
<span>全包交付</span>
<span>软件授权</span>
</div>
<a href="/cloud.html" class="prod-link">
<span>查看产品详情</span>
<span class="arrow">了解 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
</a>
</div>
</article>

<!-- 3. AI落地 -->
<article class="product p-ai-landing reveal reveal-d2" data-cat="ai">
<div class="prod-bar"></div>
<div class="prod-img">
<span class="prod-cat">AI · 落地</span>
<span class="prod-num">03</span>
<img src="/assets/img/20260814/ban3.png" alt="AI落地" loading="lazy">
</div>
<div class="prod-body">
<h3 class="prod-name">AI 落地</h3>
<span class="prod-name-en">AI Implementation</span>
<p class="prod-desc">五步法交付：场景定义 → 知识流程 → 原型 → 测试试点 → 推广交接。让 AI 从概念变成生产力。</p>
<div class="prod-tags">
<span>场景诊断</span>
<span>知识流程</span>
<span>原型开发</span>
<span>试点推广</span>
</div>
<a href="/ai-landing.html" class="prod-link">
<span>查看产品详情</span>
<span class="arrow">了解 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
</a>
</div>
</article>

<!-- 4. AI转型 -->
<article class="product p-ai-transformation reveal reveal-d3" data-cat="ai">
<div class="prod-bar"></div>
<div class="prod-img">
<span class="prod-cat">AI · 战略</span>
<span class="prod-num">04</span>
<img src="/assets/img/theme/1617443834642507.jpg" alt="AI转型" loading="lazy">
</div>
<div class="prod-body">
<h3 class="prod-name">AI 转型</h3>
<span class="prod-name-en">AI Transformation</span>
<p class="prod-desc">战略与场景咨询、知识库建设咨询、AI 内化体系建设咨询。帮助企业构建可持续的 AI 能力。</p>
<div class="prod-tags">
<span>战略咨询</span>
<span>知识库建设</span>
<span>内化体系</span>
<span>组织能力</span>
</div>
<a href="/ai-training.html" class="prod-link">
<span>查看产品详情</span>
<span class="arrow">了解 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
</a>
</div>
</article>

<!-- 5. Agent定制 -->
<article class="product p-agent-custom reveal reveal-d4" data-cat="ai">
<div class="prod-bar"></div>
<div class="prod-img">
<span class="prod-cat">AI · Agent</span>
<span class="prod-num">05</span>
<img src="/assets/img/20260814/ban2.png" alt="Agent定制" loading="lazy">
</div>
<div class="prod-body">
<h3 class="prod-name">Agent 定制</h3>
<span class="prod-name-en">Custom Agent</span>
<p class="prod-desc">FDE 现场解决方案工程共创，七类 Agent：知识问答、客服、销售辅助、运营分析、报告、流程协同、研发辅助。</p>
<div class="prod-tags">
<span>FDE 现场</span>
<span>五步法共创</span>
<span>7 类 Agent</span>
<span>全流程陪跑</span>
</div>
<a href="/agent.html" class="prod-link">
<span>查看产品详情</span>
<span class="arrow">了解 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
</a>
</div>
</article>

<!-- 6. Token供应 -->
<article class="product p-token-supply reveal reveal-d5" data-cat="cloud">
<div class="prod-bar"></div>
<div class="prod-img">
<span class="prod-cat">AI · 资源</span>
<span class="prod-num">06</span>
<img src="/assets/img/20260814/ban1.png" alt="Token供应" loading="lazy">
</div>
<div class="prod-body">
<h3 class="prod-name">Token 供应</h3>
<span class="prod-name-en">Token Supply</span>
<p class="prod-desc">GPT、Gemini 等主流模型用量供应。WorkBuddy 50 席以上赠 2000 元兑换券，用量约官网 45 折。</p>
<div class="prod-tags">
<span>主流模型</span>
<span>45 折成本</span>
<span>用量监控</span>
<span>兑换券</span>
</div>
<a href="/token-supply.html" class="prod-link">
<span>查看产品详情</span>
<span class="arrow">了解 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
</a>
</div>
</article>

<!-- 7. WorkBuddy培训 -->
<article class="product p-workbuddy-training reveal reveal-d6" data-cat="training">
<div class="prod-bar"></div>
<div class="prod-img">
<span class="prod-cat">AI · 培训</span>
<span class="prod-num">07</span>
<img src="/assets/img/20260814/ban2.png" alt="WorkBuddy培训" loading="lazy">
</div>
<div class="prod-body">
<h3 class="prod-name">WorkBuddy 培训</h3>
<span class="prod-name-en">WorkBuddy Training</span>
<p class="prod-desc">企业 AI 培训平台：线上 Prompt 工程 + 线下七大模块。方案 A 诊断式定制训练营、方案 B 标准化课程包。</p>
<div class="prod-tags">
<span>线上+线下</span>
<span>七大模块</span>
<span>定制训练营</span>
<span>50 席起购</span>
</div>
<a href="/workbuddy-training.html" class="prod-link">
<span>查看产品详情</span>
<span class="arrow">了解 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
</a>
</div>
</article>

</div>
</div>
</section>

<!-- 服务闭环 -->
<section class="loop-section" id="loop">
<div class="wrap">
<div class="loop-head reveal sec-head">
<div class="sec-eyebrow"><span class="dot"></span>SERVICE LOOP · 服务闭环</div>
<h2 class="sec-title">学 · 用 · 建 · 管，<span class="em">能力沉淀为资产</span></h2>
<p class="sec-sub">四个阶段循环递进，让每一次投入都转化为企业可复用的 AI 能力。</p>
</div>
<div class="loop">
<div class="loop-step reveal"><div class="loop-circle"><span class="step-num">STEP 01</span><svg class="step-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg></div><h4>学 · 会用 AI</h4><p>WorkBuddy 培训与 Prompt 工程</p></div>
<div class="loop-step reveal reveal-d1"><div class="loop-circle"><span class="step-num">STEP 02</span><svg class="step-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></svg></div><h4>用 · 用得省</h4><p>Token 供应，约官网 45 折</p></div>
<div class="loop-step reveal reveal-d2"><div class="loop-circle"><span class="step-num">STEP 03</span><svg class="step-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/></svg></div><h4>建 · 真落地</h4><p>Agent 定制与 FDE 共创</p></div>
<div class="loop-step reveal reveal-d3"><div class="loop-circle"><span class="step-num">STEP 04</span><svg class="step-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-9-9c2.5 0 4.8 1 6.5 2.6M21 3v6h-6"/></svg></div><h4>管 · 沉淀资产</h4><p>AI 咨询与内化体系</p></div>
</div>
</div>
</section>

<!-- 产品对比表 -->
<section class="compare-section" id="compare">
<div class="wrap">
<div class="compare-head reveal sec-head">
<div class="sec-eyebrow"><span class="dot"></span>PRODUCT COMPARISON · 产品对比</div>
<h2 class="sec-title">一目了然，找到<span class="em">适合您的产品</span></h2>
<p class="sec-sub">对比七大产品的核心定位、适合阶段与采购方式，快速匹配您的需求。</p>
</div>
<div class="compare-table-wrap reveal reveal-d1">
<table class="compare-table">
<thead>
<tr>
<th>产品</th>
<th>核心定位</th>
<th>解决的问题</th>
<th>适合阶段</th>
<th>采购方式</th>
<th>起步门槛</th>
</tr>
</thead>
<tbody>
<tr>
<td>AI 提效</td>
<td>学·用·建·管一站式闭环</td>
<td>不知从何开始，需要整体方案</td>
<td><span class="tag-cell tag-yes">全阶段</span></td>
<td>组合采购</td>
<td>按需确认</td>
</tr>
<tr>
<td>云计算服务</td>
<td>云架构、迁移、运维、成本优化</td>
<td>上云选型难、成本高、运维缺人</td>
<td><span class="tag-cell tag-yes">基建阶段</span></td>
<td>独立采购</td>
<td>按需确认</td>
</tr>
<tr>
<td>AI 落地</td>
<td>五步法场景化交付</td>
<td>有方向但不知如何落地</td>
<td><span class="tag-cell tag-mid">试点阶段</span></td>
<td>独立/组合</td>
<td>按需确认</td>
</tr>
<tr>
<td>AI 转型</td>
<td>战略、知识库、内化体系咨询</td>
<td>缺乏顶层设计与长期机制</td>
<td><span class="tag-cell tag-mid">战略阶段</span></td>
<td>独立采购</td>
<td>按需确认</td>
</tr>
<tr>
<td>Agent 定制</td>
<td>FDE 现场共创，七类 Agent</td>
<td>场景已验证，需固化为应用</td>
<td><span class="tag-cell tag-mid">应用阶段</span></td>
<td>独立/组合</td>
<td>按需确认</td>
</tr>
<tr>
<td>Token 供应</td>
<td>主流模型用量与成本优化</td>
<td>模型用量大、成本高</td>
<td><span class="tag-cell tag-yes">全阶段</span></td>
<td>独立采购</td>
<td>WorkBuddy 50 席</td>
</tr>
<tr>
<td>WorkBuddy 培训</td>
<td>线上+线下 AI 能力培训</td>
<td>员工不会用、用不好 AI</td>
<td><span class="tag-cell tag-yes">启蒙阶段</span></td>
<td>独立采购</td>
<td>50 席起购</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<!-- 客户墙 -->
<section class="clients-section" id="clients">
<div class="wrap">
<div class="clients-head reveal sec-head">
<div class="sec-eyebrow"><span class="dot"></span>TRUSTED BY · 合作客户</div>
<h2 class="sec-title">多行业企业的<span class="em">共同选择</span></h2>
<p class="sec-sub">从新能源汽车到金融科技，信朴科技的合作实践覆盖制造、服务与科技专业服务行业。</p>
</div>
</div>
<div class="clients-marquee-wrap reveal reveal-d1">
<div class="clients-marquee" id="clientsMarquee">
<div class="marquee-track">
<div class="client-chip"><span class="logo-mono">车</span><div class="name">某新能源汽车企业</div><div class="industry">新能源汽车</div></div>
<div class="client-chip"><span class="logo-mono">行</span><div class="name">某智慧出行平台</div><div class="industry">出行平台</div></div>
<div class="client-chip"><span class="logo-mono">装</span><div class="name">某装备制造企业</div><div class="industry">装备制造</div></div>
<div class="client-chip"><span class="logo-mono">芯</span><div class="name">某半导体企业</div><div class="industry">半导体</div></div>
<div class="client-chip"><span class="logo-mono">邮</span><div class="name">某邮政物流企业</div><div class="industry">邮政服务</div></div>
<div class="client-chip"><span class="logo-mono">游</span><div class="name">某游戏研发企业</div><div class="industry">游戏</div></div>
<div class="client-chip"><span class="logo-mono">教</span><div class="name">某教育科技企业</div><div class="industry">教育科技</div></div>
<div class="client-chip"><span class="logo-mono">电</span><div class="name">某工业电子企业</div><div class="industry">工业电子</div></div>
<div class="client-chip"><span class="logo-mono">岩</span><div class="name">某运动连锁品牌</div><div class="industry">运动休闲</div></div>
<div class="client-chip"><span class="logo-mono">服</span><div class="name">某企业服务平台</div><div class="industry">企业服务 SaaS</div></div>
<div class="client-chip"><span class="logo-mono">人</span><div class="name">某人力资源机构</div><div class="industry">人力资源</div></div>
<div class="client-chip"><span class="logo-mono">建</span><div class="name">某建材陶瓷企业</div><div class="industry">建材陶瓷</div></div>
<div class="client-chip"><span class="logo-mono">产</span><div class="name">某知识产权机构</div><div class="industry">知识产权</div></div>
<div class="client-chip"><span class="logo-mono">金</span><div class="name">某金融科技企业</div><div class="industry">金融科技</div></div>
</div>
<div class="marquee-track" aria-hidden="true">
<div class="client-chip"><span class="logo-mono">车</span><div class="name">某新能源汽车企业</div><div class="industry">新能源汽车</div></div>
<div class="client-chip"><span class="logo-mono">行</span><div class="name">某智慧出行平台</div><div class="industry">出行平台</div></div>
<div class="client-chip"><span class="logo-mono">装</span><div class="name">某装备制造企业</div><div class="industry">装备制造</div></div>
<div class="client-chip"><span class="logo-mono">芯</span><div class="name">某半导体企业</div><div class="industry">半导体</div></div>
<div class="client-chip"><span class="logo-mono">邮</span><div class="name">某邮政物流企业</div><div class="industry">邮政服务</div></div>
<div class="client-chip"><span class="logo-mono">游</span><div class="name">某游戏研发企业</div><div class="industry">游戏</div></div>
<div class="client-chip"><span class="logo-mono">教</span><div class="name">某教育科技企业</div><div class="industry">教育科技</div></div>
<div class="client-chip"><span class="logo-mono">电</span><div class="name">某工业电子企业</div><div class="industry">工业电子</div></div>
<div class="client-chip"><span class="logo-mono">岩</span><div class="name">某运动连锁品牌</div><div class="industry">运动休闲</div></div>
<div class="client-chip"><span class="logo-mono">服</span><div class="name">某企业服务平台</div><div class="industry">企业服务 SaaS</div></div>
<div class="client-chip"><span class="logo-mono">人</span><div class="name">某人力资源机构</div><div class="industry">人力资源</div></div>
<div class="client-chip"><span class="logo-mono">建</span><div class="name">某建材陶瓷企业</div><div class="industry">建材陶瓷</div></div>
<div class="client-chip"><span class="logo-mono">产</span><div class="name">某知识产权机构</div><div class="industry">知识产权</div></div>
<div class="client-chip"><span class="logo-mono">金</span><div class="name">某金融科技企业</div><div class="industry">金融科技</div></div>
</div>
</div>
</div>
</section>

<!-- CTA -->
<section class="cta-section" id="contact">
<div class="wrap">
<div class="cta-band reveal">
<div class="cta-inner">
<div class="cta-text">
<h2>不确定哪款产品适合？<br>让我们为您诊断匹配</h2>
<p>无论您处在 AI 落地的哪个阶段，信朴科技都能提供对应的产品组合。一次咨询，帮您厘清路径、估算投入、明确回报。</p>
<div class="cta-actions">
<a href="tel:18926108189" class="btn btn-accent">立即拨打商务电话 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></a>
</div>
</div>
<div class="cta-contact">
<div class="row">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
<div><span class="label">商务咨询</span><div class="val">冯小姐 · 18926108189</div></div>
</div>
<div class="row">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
<div><span class="label">总部地址</span><div class="val">广州市天河区金穗路1号邦华广场5楼</div></div>
</div>
<div class="row">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7l9 6 9-6M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7M3 7l2-2h14l2 2"/></svg>
<div><span class="label">企业邮箱</span><div class="val">sales@xomaps.com</div></div>
</div>
</div>
</div>
</div>
</div>
</section>

<script>
// ===== 滚动渐入 =====
const io = new IntersectionObserver((entries) => {
entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }});
}, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== 目录筛选（带交错过渡动画） =====
const filterBtns = document.querySelectorAll('.cat-filter button');
const products = document.querySelectorAll('.product');
filterBtns.forEach(btn => {
btn.addEventListener('click', () => {
filterBtns.forEach(b => b.classList.remove('active'));
btn.classList.add('active');
const f = btn.dataset.filter;
let shown = 0;
products.forEach(p => {
const show = f === 'all' || p.dataset.cat === f;
if (show) {
p.style.display = '';
const delay = shown * 55;
shown++;
requestAnimationFrame(() => requestAnimationFrame(() => {
p.style.transitionDelay = delay + 'ms';
p.classList.remove('hide');
setTimeout(() => { p.style.transitionDelay = ''; }, delay + 450);
}));
} else {
p.style.transitionDelay = '';
p.style.transform = '';
p.classList.add('hide');
setTimeout(() => { if (p.classList.contains('hide')) p.style.display = 'none'; }, 400);
}
});
});
});
</script>

<!-- ══════════ WebGL 流体特效（Three.js） ══════════ -->
<script src="/assets/js/vendor/three.min.js"></script>
<script>
(function(){
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
if(window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches) return;
if(typeof THREE === 'undefined') return;

var wrap = document.getElementById('fluid-wrap');
if(!wrap) return;

var testCanvas = document.createElement('canvas');
var gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl');
if(!gl) return;

var CFG = {
dt: 0.014, viscous: 30, pressureIter: 12,
cursorSize: 100, mouseForce: 20, simScale: 0.4,
palette: ['#1d4ed8', '#93c5fd'],
};

var VERT = [
'attribute vec3 position;','uniform vec2 px;','uniform vec2 boundarySpace;','varying vec2 uv;',
'void main(){','  vec3 pos = position;','  vec2 scale = 1.0 - boundarySpace * 2.0;','  pos.xy = pos.xy * scale;',
'  uv = vec2(0.5) + (pos.xy) * 0.5;','  gl_Position = vec4(pos, 1.0);','}'
].join('\n');

var ADVECT = [
'precision highp float;','uniform sampler2D velocity;','uniform float dt;','uniform vec2 fboSize;','uniform vec2 px;','varying vec2 uv;',
'void main(){','  vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;','  vec2 spot_new = uv;',
'  vec2 vel_old = texture2D(velocity, uv).xy;','  vec2 spot_old = spot_new - vel_old * dt * ratio;',
'  vec2 vel_new1 = texture2D(velocity, spot_old).xy;','  vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;',
'  vec2 error = spot_new2 - spot_new;','  vec2 spot_new3 = spot_new - error / 2.0;',
'  vec2 vel_2 = texture2D(velocity, spot_new3).xy;','  vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;',
'  gl_FragColor = vec4(texture2D(velocity, spot_old2).xy, 0.0, 1.0);','}'
].join('\n');

var MOUSE_V = [
'precision highp float;','attribute vec3 position;','attribute vec2 uv;','uniform vec2 center, scale, px;','varying vec2 vUv;',
'void main(){','  vec2 pos = position.xy * scale * 2.0 * px + center;','  vUv = uv;','  gl_Position = vec4(pos, 0.0, 1.0);','}'
].join('\n');

var MOUSE_F = [
'precision highp float;','uniform vec2 force;','varying vec2 vUv;',
'void main(){','  vec2 circle = (vUv - 0.5) * 2.0;','  float d = 1.0 - min(length(circle), 1.0);','  d *= d;',
'  gl_FragColor = vec4(force * d, 0.0, 1.0);','}'
].join('\n');

var VISCOUS = [
'precision highp float;','uniform sampler2D velocity;','uniform sampler2D velocity_new;','uniform float v, dt;','uniform vec2 px;','varying vec2 uv;',
'void main(){','  vec2 old = texture2D(velocity, uv).xy;',
'  vec2 n0 = texture2D(velocity_new, uv + vec2(px.x*2.0, 0.0)).xy;',
'  vec2 n1 = texture2D(velocity_new, uv - vec2(px.x*2.0, 0.0)).xy;',
'  vec2 n2 = texture2D(velocity_new, uv + vec2(0.0, px.y*2.0)).xy;',
'  vec2 n3 = texture2D(velocity_new, uv - vec2(0.0, px.y*2.0)).xy;',
'  vec2 newv = (4.0 * old + v * dt * (n0 + n1 + n2 + n3)) / (4.0 * (1.0 + v * dt));',
'  gl_FragColor = vec4(newv, 0.0, 1.0);','}'
].join('\n');

var DIVERGENCE = [
'precision highp float;','uniform sampler2D velocity;','uniform float dt;','uniform vec2 px;','varying vec2 uv;',
'void main(){','  float x0 = texture2D(velocity, uv - vec2(px.x, 0.0)).x;',
'  float x1 = texture2D(velocity, uv + vec2(px.x, 0.0)).x;',
'  float y0 = texture2D(velocity, uv - vec2(0.0, px.y)).y;',
'  float y1 = texture2D(velocity, uv + vec2(0.0, px.y)).y;',
'  gl_FragColor = vec4((x1 - x0 + y1 - y0) / 2.0 / dt, 0.0, 0.0, 1.0);','}'
].join('\n');

var PRESSURE = [
'precision highp float;','uniform sampler2D pressure;','uniform sampler2D divergence;','uniform vec2 px;','varying vec2 uv;',
'void main(){','  float p0 = texture2D(pressure, uv + vec2(px.x*2.0, 0.0)).r;',
'  float p1 = texture2D(pressure, uv - vec2(px.x*2.0, 0.0)).r;',
'  float p2 = texture2D(pressure, uv + vec2(0.0, px.y*2.0)).r;',
'  float p3 = texture2D(pressure, uv - vec2(0.0, px.y*2.0)).r;',
'  float div = texture2D(divergence, uv).r;',
'  gl_FragColor = vec4((p0 + p1 + p2 + p3) / 4.0 - div, 0.0, 0.0, 1.0);','}'
].join('\n');

var GRAD_SUB = [
'precision highp float;','uniform sampler2D pressure;','uniform sampler2D velocity;','uniform vec2 px;','uniform float dt;','varying vec2 uv;',
'void main(){','  float p0 = texture2D(pressure, uv + vec2(px.x, 0.0)).r;',
'  float p1 = texture2D(pressure, uv - vec2(px.x, 0.0)).r;',
'  float p2 = texture2D(pressure, uv + vec2(0.0, px.y)).r;',
'  float p3 = texture2D(pressure, uv - vec2(0.0, px.y)).r;',
'  vec2 v = texture2D(velocity, uv).xy;','  v = v - vec2(p0 - p1, p2 - p3) * 0.5 * dt;',
'  gl_FragColor = vec4(v, 0.0, 1.0);','}'
].join('\n');

var DISPLAY = [
'precision highp float;','uniform sampler2D velocity;','uniform sampler2D palette;','uniform vec4 bgColor;','varying vec2 uv;',
'void main(){','  vec2 vel = texture2D(velocity, uv).xy;','  float lenv = clamp(length(vel), 0.0, 1.0) * 0.5;',
'  vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;',
'  gl_FragColor = vec4(mix(bgColor.rgb, c, lenv), mix(bgColor.a, 1.0, lenv));','}'
].join('\n');

var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.autoClear = false;
renderer.setClearColor(0xffffff, 1);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
wrap.appendChild(renderer.domElement);

var colors = CFG.palette;
var palData = new Uint8Array(colors.length * 4);
colors.forEach(function(hex, i){
var c = new THREE.Color(hex);
palData[4*i] = Math.round(255 * c.r);
palData[4*i+1] = Math.round(255 * c.g);
palData[4*i+2] = Math.round(255 * c.b);
palData[4*i+3] = 255;
});
var palette = new THREE.DataTexture(palData, colors.length, 1, THREE.RGBAFormat);
palette.magFilter = THREE.LinearFilter; palette.minFilter = THREE.LinearFilter;
palette.wrapS = THREE.ClampToEdgeWrapping; palette.wrapT = THREE.ClampToEdgeWrapping;
palette.needsUpdate = true;

var simW = 1, simH = 1;
var cellScale = new THREE.Vector2(1, 1);
var fboSize = new THREE.Vector2(1, 1);
var boundarySpace = new THREE.Vector2(1, 1);
var mouse = { coords: new THREE.Vector2(0, 0), coords_old: new THREE.Vector2(0, 0), diff: new THREE.Vector2(0, 0) };

var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
var rtOpts = { type: isIOS ? THREE.HalfFloatType : THREE.FloatType, depthBuffer: false, stencilBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping };
var RT = {};
['vel_0','vel_1','vel_visc0','vel_visc1','div','press_0','press_1'].forEach(function(name){ RT[name] = new THREE.WebGLRenderTarget(1, 1, rtOpts); });

var camera = new THREE.Camera();
var quadGeo = new THREE.PlaneGeometry(2, 2);

function makePass(fragShader, uniforms){
var mat = new THREE.RawShaderMaterial({ vertexShader: VERT, fragmentShader: fragShader, uniforms: uniforms });
var mesh = new THREE.Mesh(quadGeo, mat);
var scene = new THREE.Scene(); scene.add(mesh);
return { scene: scene, mesh: mesh, uniforms: uniforms };
}
function renderPass(pass, output){
pass.mesh.material.uniforms = pass.uniforms;
renderer.setRenderTarget(output || null);
renderer.render(pass.scene, camera);
}

var advect = makePass(ADVECT, { boundarySpace:{value:cellScale}, px:{value:cellScale}, fboSize:{value:fboSize}, velocity:{value:RT.vel_0.texture}, dt:{value:CFG.dt} });
var viscous = makePass(VISCOUS, { boundarySpace:{value:boundarySpace}, px:{value:cellScale}, velocity:{value:RT.vel_1.texture}, velocity_new:{value:RT.vel_visc0.texture}, v:{value:CFG.viscous}, dt:{value:CFG.dt} });
var divPass = makePass(DIVERGENCE, { boundarySpace:{value:boundarySpace}, px:{value:cellScale}, velocity:{value:RT.vel_visc0.texture}, dt:{value:CFG.dt} });
var pressPass = makePass(PRESSURE, { boundarySpace:{value:boundarySpace}, px:{value:cellScale}, pressure:{value:RT.press_0.texture}, divergence:{value:RT.div.texture} });
var gradPass = makePass(GRAD_SUB, { boundarySpace:{value:boundarySpace}, px:{value:cellScale}, pressure:{value:RT.press_0.texture}, velocity:{value:RT.vel_visc0.texture}, dt:{value:CFG.dt} });

var mouseMat = new THREE.RawShaderMaterial({ vertexShader: MOUSE_V, fragmentShader: MOUSE_F, blending: THREE.AdditiveBlending, depthWrite: false, uniforms: { px:{value:cellScale}, force:{value:new THREE.Vector2(0,0)}, center:{value:new THREE.Vector2(0,0)}, scale:{value:new THREE.Vector2(CFG.cursorSize, CFG.cursorSize)} } });
var mouseMesh = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mouseMat);
var mouseScene = new THREE.Scene(); mouseScene.add(mouseMesh);

var displayMat = new THREE.RawShaderMaterial({ vertexShader: VERT, fragmentShader: DISPLAY, transparent: false, depthWrite: false, depthTest: false, uniforms: { velocity:{value:RT.vel_0.texture}, palette:{value:palette}, bgColor:{value:new THREE.Vector4(1,1,1,1)} } });
var displayScene = new THREE.Scene(); displayScene.add(new THREE.Mesh(quadGeo, displayMat));

function resize(){
var w = Math.max(1, window.innerWidth); var h = Math.max(1, window.innerHeight);
renderer.setSize(w, h, false);
simW = Math.max(1, Math.round(w * CFG.simScale)); simH = Math.max(1, Math.round(h * CFG.simScale));
fboSize.set(simW, simH); cellScale.set(1/simW, 1/simH);
for(var k in RT) RT[k].setSize(simW, simH);
}
window.addEventListener('resize', resize); resize();

function updateMouse(cx, cy){
var nx = cx / window.innerWidth; var ny = cy / window.innerHeight;
mouse.coords.set(2 * nx - 1, -(2 * ny - 1));
}
window.addEventListener('mousemove', function(e){ updateMouse(e.clientX, e.clientY); });

var visible = !document.hidden;
document.addEventListener('visibilitychange', function(){ visible = !document.hidden; if(visible && !rafId) rafId = requestAnimationFrame(frame); });

var rafId = null;
function frame(){
if(!visible){ rafId = null; return; }
mouse.diff.subVectors(mouse.coords, mouse.coords_old);
mouse.coords_old.copy(mouse.coords);
boundarySpace.copy(cellScale);

advect.uniforms.velocity.value = RT.vel_0.texture;
advect.uniforms.fboSize.value = fboSize;
renderPass(advect, RT.vel_1);

var fx = (mouse.diff.x / 2) * CFG.mouseForce;
var fy = (mouse.diff.y / 2) * CFG.mouseForce;
var cs = CFG.cursorSize * cellScale.x;
var sy = CFG.cursorSize * cellScale.y;
mouseMat.uniforms.force.value.set(fx, fy);
mouseMat.uniforms.center.value.set(Math.min(Math.max(mouse.coords.x, -1 + cs + 2*cellScale.x), 1 - cs - 2*cellScale.x), Math.min(Math.max(mouse.coords.y, -1 + sy + 2*cellScale.y), 1 - sy - 2*cellScale.y));
mouseMat.uniforms.px.value = cellScale;
renderer.setRenderTarget(RT.vel_1);
renderer.render(mouseScene, camera);

viscous.uniforms.velocity.value = RT.vel_1.texture;
viscous.uniforms.velocity_new.value = RT.vel_1.texture;
renderPass(viscous, RT.vel_visc0);

divPass.uniforms.velocity.value = RT.vel_visc0.texture;
renderPass(divPass, RT.div);

renderer.setRenderTarget(RT.press_0);
renderer.clear();
var pIn = RT.press_0, pOut = RT.press_1;
for(var i = 0; i < CFG.pressureIter; i++){
pressPass.uniforms.pressure.value = pIn.texture;
renderPass(pressPass, pOut);
var tmp = pIn; pIn = pOut; pOut = tmp;
}

gradPass.uniforms.velocity.value = RT.vel_visc0.texture;
gradPass.uniforms.pressure.value = pIn.texture;
renderPass(gradPass, RT.vel_0);

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
font-family:"PingFang SC","HarmonyOS Sans SC","Microsoft YaHei",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
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
