---
title: "企业信息 SaaS 平台 AI 落地案例：平台 AI 原生能力升级实践 - 信朴科技"
description: "以知识问答、智能推荐、文档生成四类Agent定制切入，FDE现场共创把AI能力原生嵌入SaaS产品体验，4类智能Agent上线，用户活跃提升，SaaS行业AI落地标杆案例。
"
keywords: "AI落地,企业AI,Agent定制,某企业服务平台AI,SaaS平台AI,知识问答Agent,智能推荐Agent,信朴科技"
nav: "cases"
date: 2026-11-18
draft: false
---

<style>
:root{
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
--maxw:1280px;
--c:#1e4ca8;
--c-glow:rgba(30,76,168,.35);
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
font-family:"PingFang SC","HarmonyOS Sans SC","Microsoft YaHei",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
color:var(--text);background:linear-gradient(135deg,#eaf2fc 0%,#ffffff 25%,#f0f6fc 50%,#ffffff 75%,#eaf2fc 100%);background-size:400% 400%;animation:bgFlow 22s ease-in-out infinite;line-height:1.7;font-size:15px;
-webkit-font-smoothing:antialiased;overflow-x:hidden;letter-spacing:.005em;
}
a{color:inherit;text-decoration:none}
img{display:block;max-width:100%}

#progress{position:fixed;top:0;left:0;right:0;height:3px;z-index:99;background:transparent;pointer-events:none}
#progress .bar{height:100%;width:0;background:linear-gradient(90deg,var(--c),var(--brand) 70%,var(--accent));border-radius:0 3px 3px 0;transition:width .1s linear}

#fluid-wrap{position:fixed;inset:0;z-index:1;pointer-events:none;overflow:hidden;mix-blend-mode:multiply;opacity:.7}
#fluid-wrap canvas{display:block;width:100%;height:100%}

.wrap{max-width:var(--maxw);margin:0 auto;padding:0 32px;position:relative;z-index:2}

.case-hero{position:relative;overflow:hidden;padding:36px 0 0;min-height:520px;background:#eaf2fc url(/assets/img/20260814/ban1.png) center/cover no-repeat}
.case-hero::before{
content:"";position:absolute;inset:0;
background:radial-gradient(circle at 22% 30%,var(--c-glow),transparent 55%),radial-gradient(circle at 85% 80%,rgba(217,72,15,.12),transparent 48%);
}
.case-hero::after{
content:"";position:absolute;inset:0;
background-image:
linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);
background-size:44px 44px;
}
.case-hero .wrap{position:relative;z-index:2;margin-top: 80px;}
.crumbs-inner{display:flex;align-items:center;gap:10px;font-size:12.5px;color:rgba(10,14,26,.45);letter-spacing:.03em}
.crumbs-inner a{color:rgba(10,14,26,.45);transition:color .3s}
.crumbs-inner a:hover{color:var(--ink)}
.crumbs-inner svg{width:13px;height:13px;opacity:.55}
.crumbs-inner .cur{color:rgba(10,14,26,.85);font-weight:500}

.case-head{position:relative;padding:72px 0 0;max-width0px}
.watermark{
position:absolute;top:-8px;right:-40px;font-size:clamp(90px,14vw,190px);font-weight:900;line-height:1;
color:rgba(10,14,26,.04);letter-spacing:-.04em;pointer-events:none;user-select:none;white-space:nowrap;
}
.case-cat{display:inline-flex;align-items:center;gap:10px;margin-bottom:28px}
.case-cat .pill{
display:inline-flex;align-items:center;gap:8px;padding:7px 16px;border-radius:100px;
background:rgba(21,56,122,.07);backdrop-filter:blur(12px);border:1px solid rgba(21,56,122,.14);
font-size:11px;font-weight:600;color:rgba(10,14,26,.75);letter-spacing:.14em;text-transform:uppercase;
}
.case-cat .pill .dot{width:5px;height:5px;border-radius:50%;background:var(--c);box-shadow:0 0 12px var(--c)}
.case-cat .ind{font-size:12px;color:rgba(10,14,26,.45);letter-spacing:.08em}
.case-head h1{
font-size:clamp(30px,4.6vw,52px);line-height:1.2;font-weight:800;letter-spacing:-.028em;color:var(--ink);margin-bottom:24px;
}
.case-head .lead{font-size:16px;line-height:1.95;color:rgba(10,14,26,.55);max-width:680px;margin-bottom:44px}
.case-meta{display:flex;align-items:center;gap:14px;flex-wrap:wrap;font-size:12.5px;color:rgba(10,14,26,.35);letter-spacing:.05em;padding-bottom:56px}
.case-meta .item{display:inline-flex;align-items:center;gap:6px}
.case-meta .item svg{width:14px;height:14px;opacity:.7}
.case-meta .divider{width:1px;height:12px;background:rgba(10,14,26,.15)}

.stats-band{position:relative;z-index:3;margin-top:-1px;padding-bottom:8px}
.stats-card{
background:var(--bg-card);border:1px solid var(--border-soft);border-radius:var(--radius-xl);
box-shadow:var(--shadow-lg);display:grid;grid-template-columns:repeat(4,1fr);overflow:hidden;
}
.stats-card .st{
padding:40px 32px;text-align:center;position:relative;transition:background .35s;
}
.stats-card .st + .st{border-left:1px solid var(--border-soft)}
.stats-card .st:hover{background:var(--bg-soft)}
.stats-card .num{font-size:40px;font-weight:800;color:var(--c);letter-spacing:-.03em;line-height:1;font-variant-numeric:tabular-nums}
.stats-card .num .unit{font-size:15px;font-weight:600;color:var(--text-2);margin-left:2px}
.stats-card .label{font-size:12.5px;color:var(--text-2);margin-top:12px;letter-spacing:.04em}
.stats-card .sub{font-size:11px;color:var(--text-3);margin-top:4px;letter-spacing:.03em}

.case-body-wrap{paddingpx 0 96px}
.case-cols{display:grid;grid-template-columns:1fr 340px;gap:56px;align-items:start}
.case-main{min-width:0}

.sec-block{margin-bottom:72px}
.sec-block:last-child{margin-bottom:0}
.sec-label{
display:flex;align-items:center;gap:14px;margin-bottom:30px;
}
.sec-label .no{
font-size:11px;font-weight:700;color:#fff;letter-spacing:.1em;
width:34px;height:34px;border-radius:10px;flex-shrink:0;
background:linear-gradient(135deg,var(--c),var(--brand));
display:flex;align-items:center;justify-content:center;
box-shadow:0 6px 18px -6px var(--c-glow);
font-variant-numeric:tabular-nums;
}
.sec-label h2{font-size:24px;font-weight:800;color:var(--ink);letter-spacing:-.02em;line-height:1.3}
.sec-label .en{font-size:11px;color:var(--text-3);letter-spacing:.18em;text-transform:uppercase;display:block;margin-top:2px;font-weight:600}
.case-main p{font-size:15.5px;line-height:2.05;color:#2a3346;margin-bottom:26px}
.case-main strong{color:var(--ink);font-weight:700}

.chal-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:34px 0}
.chal{
background:var(--bg-card);border:1px solid var(--border-soft);border-radius:var(--radius);
padding:26px 24px;transition:transform .35s cubic-bezier(.22,1,.36,1),box-shadow .35s,border-color .3s;position:relative;overflow:hidden;
}
.chal::before{content:"";position:absolute;top:0;left:0;bottom:0;width:3px;background:linear-gradient(180deg,#dc2626,transparent);transform:scaleY(0);transform-origin:top;transition:transform .5s cubic-bezier(.22,1,.36,1)}
.chal:hover{transform:translateY(-4px);box-shadow:var(--shadow)}
.chal:hover::before{transform:scaleY(1)}
.chal .ic{width:38px;height:38px;border-radius:10px;background:rgba(220,38,38,.07);display:flex;align-items:center;justify-content:center;margin-bottom:16px}
.chal .ic svg{width:18px;height:18px;color:#dc2626}
.chal h4{font-size:14.5px;font-weight:800;color:var(--ink);margin-bottom:8px;letter-spacing:-.01em}
.chal p{font-size:12.5px;line-height:1.75;color:var(--text-2);margin:0}

.sol-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:34px 0}
.sol{
position:relative;background:var(--bg-card);border:1px solid var(--border-soft);border-radius:var(--radius);
padding:28px 28px 26px;transition:transform .35s cubic-bezier(.22,1,.36,1),box-shadow .35s,border-color .3s;overflow:hidden;
}
.sol::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--c),transparent 160%);transform:scaleX(0);transform-origin:left;transition:transform .6s cubic-bezier(.22,1,.36,1)}
.sol:hover{transform:translateY(-4px);box-shadow:var(--shadow);border-color:transparent}
.sol:hover::before{transform:scaleX(1)}
.sol .step{display:flex;align-items:baseline;gap:12px;margin-bottom:14px}
.sol .step .zh{font-size:17px;font-weight:800;color:var(--ink);letter-spacing:-.01em}
.sol .step .tag{font-size:10.5px;font-weight:700;color:var(--c);letter-spacing:.14em;text-transform:uppercase}
.sol h4{font-size:13.5px;font-weight:700;color:var(--ink);margin-bottom:10px}
.sol p{font-size:12.5px;line-height:1.8;color:var(--text-2);margin:0}

.timeline{position:relative;margin:36px 0 8px;padding-left:36px}
.timeline::before{content:"";position:absolute;left:11px;top:8px;bottom:8px;width:2px;background:linear-gradient(180deg,var(--c),var(--c-glow) 60%,transparent)}
.tl-item{position:relative;padding-bottom:38px}
.tl-item:last-child{padding-bottom:0}
.tl-item::before{
content:"";position:absolute;left:-31px;top:6px;width:12px;height:12px;border-radius:50%;
background:var(--bg);border:3px solid var(--c);box-shadow:0 0 0 4px rgba(30,76,168,.1);
}
.tl-item .phase{font-size:10.5px;font-weight:700;color:var(--c);letter-spacing:.16em;text-transform:uppercase;margin-bottom:6px;display:flex;align-items:center;gap:10px}
.tl-item .phase .dur{font-size:10.5px;color:var(--text-3);letter-spacing:.06em;font-weight:500;text-transform:none;padding:2px 10px;background:var(--bg-soft);border-radius:100px;border:1px solid var(--border-soft)}
.tl-item h4{font-size:15.5px;font-weight:800;color:var(--ink);margin-bottom:8px;letter-spacing:-.01em}
.tl-item p{font-size:13.5px;line-height:1.85;color:var(--text-2);margin:0;max-width:640px}

.case-quote{
position:relative;margin:40px 0;padding:36px 40px;
background:linear-gradient(135deg,rgba(21,56,122,.05),rgba(30,76,168,.02));
border-left:3px solid var(--c);border-radius:0 var(--radius) var(--radius) 0;
}
.case-quote .mark{font-size:44px;font-weight:900;color:var(--c);opacity:.18;line-height:1;margin-bottom:8px;font-family:Georgia,serif}
.case-quote p{font-size:16.5px;line-height:1.9;color:var(--ink);font-weight:600;margin:0 0 18px;letter-spacing:.005em}
.case-quote .src{font-size:12.5px;color:var(--text-3);display:flex;align-items:center;gap:10px;font-weight:400}
.case-quote .src::before{content:"";width:18px;height:1px;background:var(--border)}
.case-quote .src strong{color:var(--text-2);font-weight:600}

.case-side{position:sticky;top:32px;display:flex;flex-direction:column;gap:20px}
.side-card{
background:var(--bg-card);border:1px solid var(--border-soft);border-radius:var(--radius-lg);
padding:30px 28px;box-shadow:var(--shadow-sm);
}
.side-card h4{font-size:11.5px;font-weight:700;color:var(--text-3);letter-spacing:.16em;text-transform:uppercase;margin-bottom:20px;display:flex;align-items:center;gap:10px}
.side-card h4::after{content:"";flex:1;height:1px;background:var(--border-soft)}
.info-row{display:flex;align-items:flex-start;gap:14px;padding:10px 0}
.info-row + .info-row{border-top:1px solid var(--border-soft)}
.info-row .k{font-size:11.5px;color:var(--text-3);letter-spacing:.05em;width:64px;flex-shrink:0;padding-top:3px}
.info-row .v{font-size:13.5px;color:var(--ink);font-weight:500;line-height:1.65}
.side-services{display:flex;flex-wrap:wrap;gap:8px}
.side-services a{
font-size:12px;font-weight:500;color:var(--brand);padding:7px 14px;border-radius:8px;
background:rgba(21,56,122,.045);border:1px solid var(--brand-glow);transition:all .3s;
}
.side-services a:hover{background:var(--brand);color:#fff;border-color:var(--brand);transform:translateY(-2px)}
.side-cta{background:var(--bg-deep);border:none;position:relative;overflow:hidden}
.side-cta::before{
content:"";position:absolute;top:-40%;right:-30%;width:90%;height:160%;
background:radial-gradient(circle,var(--c-glow),transparent 62%);pointer-events:none;
}
.side-cta *{position:relative;z-index:2}
.side-cta h4{color:rgba(255,255,255,.45)}
.side-cta h4::after{background:rgba(255,255,255,.1)}
.side-cta p{font-size:13px;color:rgba(255,255,255,.65);line-height:1.8;margin-bottom:20px}
.side-cta .btn{display:inline-flex;align-items:center;gap:8px;padding:12px 22px;border-radius:10px;font-size:13px;font-weight:500;transition:all .3s;cursor:pointer;border:1px solid transparent;font-family:inherit}
.side-cta .btn svg{width:14px;height:14px}
.side-cta .btn-p{background:var(--accent);color:#fff;box-shadow:0 4px 24px rgba(217,72,15,.3)}
.side-cta .btn-p:hover{transform:translateY(-2px);background:#c2410c}

.rel-section{paddingpx 0 110px;background:var(--bg-card);border-top:1px solid var(--border);padding-top: 50px;}
.sec-head{margin-bottom:48px;display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap}
.sec-eyebrow{font-size:11.5px;font-weight:600;color:var(--brand);letter-spacing:.18em;text-transform:uppercase;margin-bottom:14px;display:flex;align-items:center;gap:12px}
.sec-eyebrow .dot{width:6px;height:6px;border-radius:50%;background:var(--brand)}
.sec-title{font-size:clamp(24px,2.8vw,34px);font-weight:800;color:var(--ink);letter-spacing:-.025em;line-height:1.25}
.sec-title .em{color:var(--brand)}
.rel-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.rel-card{
position:relative;background:var(--bg);border:1px solid var(--border-soft);border-radius:var(--radius-lg);
overflow:hidden;display:flex;flex-direction:column;
transition:transform .4s cubic-bezier(.22,1,.36,1),box-shadow .4s,border-color .3s;
}
.rel-card:hover{transform:translateY(-6px);box-shadow:0 24px 56px -20px rgba(10,14,26,.12);border-color:transparent}
.rel-card .rbar{position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--rc,#1e4ca8),transparent 200%);transform:scaleX(0);transform-origin:left;transition:transform .6s cubic-bezier(.22,1,.36,1);z-index:4}
.rel-card:hover .rbar{transform:scaleX(1)}
.rel-visual{position:relative;aspect-ratio:16/9;overflow:hidden;background:linear-gradient(135deg,var(--bg-deep),var(--bg-deep-2))}
.rel-visual .rv-img{
position:absolute;inset:0;width:100%;height:100%;
background-size:cover;background-position:center;background-repeat:no-repeat;
z-index:0;transition:transform .8s cubic-bezier(.22,1,.36,1);
}
.rel-card:hover .rv-img{transform:scale(1.06)}
.rel-visual .rv-mask{
position:absolute;inset:0;z-index:1;
background:linear-gradient(180deg,rgba(10,14,26,.12) 0%,rgba(10,14,26,.55) 70%,rgba(10,14,26,.88) 100%);
}
.rel-visual::before{
content:"";position:absolute;inset:0;z-index:2;
background:radial-gradient(circle at 25% 35%,var(--rg,rgba(30,76,168,.4)),transparent 60%),radial-gradient(circle at 85% 75%,rgba(217,72,15,.1),transparent 50%);
}
.rel-visual::after{
content:"";position:absolute;inset:0;z-index:3;
background-image:
linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);
background-size:28px 28px;
}
.rel-visual .cname{position:absolute;bottom:18px;left:22px;z-index:4}
.rel-visual .cname .n{font-size:21px;font-weight:800;color:rgba(255,255,255,.95);letter-spacing:-.02em;line-height:1}
.rel-visual .cname .s{font-size:11px;color:rgba(255,255,255,.4);margin-top:5px;letter-spacing:.05em}
.rel-body{padding:22px 24px 26px;display:flex;flex-direction:column;flex:1}
.rel-body .cat{font-size:10.5px;font-weight:700;color:var(--rc,#1e4ca8);letter-spacing:.14em;text-transform:uppercase;margin-bottom:10px}
.rel-body h3{font-size:15.5px;font-weight:800;color:var(--ink);letter-spacing:-.01em;line-height:1.55;margin-bottom:14px;transition:color .3s}
.rel-card:hover .rel-body h3{color:var(--rc,#1e4ca8)}
.rel-body .rs{display:flex;gap:20px;margin-top:auto;padding-top:16px;border-top:1px solid var(--border-soft)}
.rel-body .rs .num{font-size:19px;font-weight:800;color:var(--rc,#1e4ca8);letter-spacing:-.02em;line-height:1;font-variant-numeric:tabular-nums}
.rel-body .rs .num .unit{font-size:10.5px;font-weight:600;color:var(--text-2)}
.rel-body .rs .label{font-size:10.5px;color:var(--text-3);margin-top:5px;letter-spacing:.03em}
.rc-finance{--rc:#059669;--rg:rgba(5,150,105,.28)}
.rc-manufacture{--rc:#0891b2;--rg:rgba(8,145,178,.28)}
.rc-semi{--rc:#6d28d9;--rg:rgba(109,40,217,.28)}
.rc-logistics{--rc:#d9480f;--rg:rgba(217,72,15,.22)}
.rc-saas{--rc:#dc2626;--rg:rgba(220,38,38,.22)}
.rc-ceramic{--rc:#b45309;--rg:rgba(180,83,9,.22)}
.rc-service{--rc:#4f46e5;--rg:rgba(79,70,229,.25)}

.cta-section{padding:0 0 120px}
.cta-band{
position:relative;background:#eaf2fc url(banner-visual.png) center/cover no-repeat;border-radius:var(--radius-xl);
padding:64px 64px;overflow:hidden;
}
.cta-band::before{
content:"";position:absolute;top:-50%;right:-20%;width:70%;height:200%;
background:radial-gradient(circle,rgba(30,76,168,.35),transparent 60%);pointer-events:none;
}
.cta-band::after{
content:"";position:absolute;inset:0;
background-image:
linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);
background-size:48px 48px;pointer-events:none;
}
.cta-inner{position:relative;z-index:2;display:flex;align-items:center;justify-content:space-between;gap:48px;flex-wrap:wrap}
.cta-text h2{font-size:clamp(22px,2.6vw,32px);font-weight:800;color:var(--ink);letter-spacing:-.025em;line-height:1.3;margin-bottom:16px;max-width:560px}
.cta-text p{font-size:14px;color:rgba(10,14,26,.6);line-height:1.85;max-width:480px}
.cta-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:30px}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 28px;border-radius:10px;font-size:14px;font-weight:500;cursor:pointer;transition:all .3s cubic-bezier(.22,1,.36,1);border:1px solid transparent;font-family:inherit;white-space:nowrap}
.btn svg{width:15px;height:15px}
.btn-primary{background:var(--accent);color:#fff;box-shadow:0 4px 24px rgba(217,72,15,.3)}
.btn-primary:hover{background:#c2410c;transform:translateY(-2px);box-shadow:0 8px 32px rgba(217,72,15,.4)}
.btn-ghost{background:transparent;color:var(--ink);border-color:var(--border)}
.btn-ghost:hover{border-color:var(--accent);background:var(--accent);color:#fff;transform:translateY(-2px)}

.reveal{opacity:0;transform:translateY(36px);transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .8s cubic-bezier(.22,1,.36,1)}
.reveal.in{opacity:1;transform:none}
.reveal-d1{transition-delay:.1s}
.reveal-d2{transition-delay:.2s}
.reveal-d3{transition-delay:.3s}

@keyframes bgFlow{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}

@media(max-width:1200px){
.case-cols{grid-template-columns:1fr 300px;gap:40px}
}
@media(max-width:1080px){
.case-cols{grid-template-columns:1fr}
.case-side{position:static;display:grid;grid-template-columns:repeat(3,1fr);align-items:start}
.stats-card{grid-template-columns:repeat(2,1fr)}
.stats-card .st:nth-child(3){border-left:none;border-top:1px solid var(--border-soft)}
.stats-card .st:nth-child(4){border-top:1px solid var(--border-soft)}
.stats-card .st{padding:32px 24px}
.stats-card .num{font-size:32px}
.rel-grid{grid-template-columns:repeat(2,1fr)}
.watermark{display:none}
}
@media(max-width:860px){
.case-hero{min-height:460px}
.chal-grid,.sol-grid{grid-template-columns:1fr}
.case-body-wrap{padding:64px 0}
.rel-section{padding:64px 0 80px}
.cta-band{padding:44px 32px}
.side-cta{grid-column:1/-1}
}
@media(max-width:560px){
.case-hero{min-height:380px}
.stats-card{grid-template-columns:1fr}
.stats-card .st + .st{border-left:none;border-top:1px solid var(--border-soft)}
.rel-grid{grid-template-columns:1fr}
.case-side{grid-template-columns:1fr}
.cta-inner{flex-direction:column;align-items:flex-start}
.cta-band{border-radius:var(--radius-lg)}
.case-head h1{margin-bottom:18px}
.timeline{padding-left:28px}
.tl-item::before{left:-24px}
}
@media (prefers-reduced-motion: reduce){
.reveal{opacity:1;transform:none;transition:none}
*{animation-duration:.01ms!important;transition-duration:.01ms!important}
}

</style>


<div id="progress"><div class="bar" id="progressBar"></div></div>

<!-- WebGL 流体背景 -->
<div id="fluid-wrap"></div>

<!-- ===== 案例 Hero ===== -->
<header class="case-hero">
<div class="wrap">
<nav class="crumbs reveal">
<div class="crumbs-inner">
<a href="/">首页</a>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
<a href="/cases/">客户案例</a>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
<span class="cur">企业服务 SaaS</span>
</div>
</nav>

<div class="case-head">
<div class="watermark">国内知名科创服务企业</div>
<div class="case-cat reveal">
<span class="pill"><span class="dot"></span>Case Study · 客户案例</span>
<span class="ind">企业服务 · SaaS 平台</span>
</div>
<h1 class="reveal reveal-d1">SaaS 平台的 AI 原生升级：把智能体嵌进产品</h1>
<p class="lead reveal reveal-d2">国内知名科创服务企业 × 信朴科技：以知识问答、智能推荐、文档生成四类 Agent 切入，FDE 现场共创，把 AI 能力原生嵌入 SaaS 产品体验，让企业用户用得起来。</p>
<div class="case-meta reveal reveal-d3">
<span class="item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>2026 年 7 月发布</span>
<span class="divider"></span>
<span class="item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2 6h6l-5 4 2 7-5-4-5 4 2-7-5-4h6z"/></svg>精选案例</span>
<span class="divider"></span>
<span class="item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>阅读约 8 分钟</span>
</div>
</div>
</div>
</header>

<!-- ===== 核心成果数据条 ===== -->
<section class="stats-band">
<div class="wrap">
<div class="stats-card reveal">
<div class="st">
<div class="num">4<span class="unit">类</span></div>
<div class="label">智能 Agent 上线</div>
<div class="sub">问答 / 推荐 / 生成 / 检索</div>
</div>
<div class="st">
<div class="num">FDE<span class="unit"></span></div>
<div class="label">现场共创交付</div>
<div class="sub">五步法嵌入产品</div>
</div>
<div class="st">
<div class="num">45<span class="unit">折</span></div>
<div class="label">模型用量成本</div>
<div class="sub">统一供应 + 治理</div>
</div>
<div class="st">
<div class="num">30<span class="unit">%</span></div>
<div class="label">用户活跃提升</div>
<div class="sub">AI 原生体验带动</div>
</div>
</div>
</div>
</section>

<!-- ===== 双栏正文 ===== -->
<section class="case-body-wrap">
<div class="wrap">
<div class="case-cols">

<!-- 主栏 -->
<main class="case-main">

<!-- 01 背景与挑战 -->
<div class="sec-block reveal">
<div class="sec-label">
<span class="no">01</span>
<div>
<span class="en">Background & Challenge</span>
<h2>背景与挑战</h2>
</div>
</div>
<p>作为面向企业的知识服务平台，国内知名科创服务企业的产品的用户期望越来越高的智能化体验——从知识问答到智能推荐。SaaS 平台做 AI 原生升级天然有三个难点：</p>
<div class="chal-grid">
<div class="chal">
<div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg></div>
<h4>产品需要 AI 原生能力</h4>
<p>用户期望智能问答、智能推荐成为产品标配，传统关键词检索已无法满足，体验差距直接流失用户。</p>
</div>
<div class="chal">
<div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5M3 12a9 3 0 0 0 18 0"/></svg></div>
<h4>数据知识整合复杂</h4>
<p>企业数据、政策、专利、行业资讯多源异构，整合与实时更新难度大，AI 答非所问风险高。</p>
</div>
<div class="chal">
<div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
<h4>AI 能力交付节奏紧</h4>
<p>产品迭代快，市场窗口短，需要快速把 AI 能力嵌入产品，自建团队周期长、试错成本高。</p>
</div>
</div>
<p>管理层最终确认的方向是：<strong>不把 AI 当外挂功能，而是以 FDE 现场共创的方式，把智能体原生嵌入产品体验，让企业用户真正用得起来。</strong></p>
</div>

<!-- 02 解决方案 -->
<div class="sec-block reveal">
<div class="sec-label">
<span class="no">02</span>
<div>
<span class="en">Solution</span>
<h2>解决方案：问答 · 推荐 · 生成 · 检索四类智能体</h2>
</div>
</div>
<p>信朴科技以 FDE 现场共创、五步法交付，把 AI 能力原生嵌入 SaaS 产品体验：</p>
<div class="sol-grid">
<div class="sol">
<div class="step"><span class="zh">问</span><span class="tag">Q&A</span></div>
<h4>知识问答 Agent · 让用户问得到</h4>
<p>接入企业数据、政策、专利知识，构建产品级知识问答 Agent，自然语言问数、问政策、问专利，体验从检索升级为对话。</p>
</div>
<div class="sol">
<div class="step"><span class="zh">荐</span><span class="tag">Recommend</span></div>
<h4>智能推荐 Agent · 让用户发现得到</h4>
<p>基于用户行为与知识图谱，构建智能推荐 Agent，主动推送相关政策、专利、资讯，提升用户活跃与留存。</p>
</div>
<div class="sol">
<div class="step"><span class="zh">生</span><span class="tag">Generate</span></div>
<h4>文档生成 Agent · 让用户写得快</h4>
<p>构建文档生成 Agent，辅助用户生成申报材料、分析报告、商业文档，把知识服务从「找到」延伸到「写好」。</p>
</div>
<div class="sol">
<div class="step"><span class="zh">管</span><span class="tag">Govern</span></div>
<h4>Token 供应 + 用量治理</h4>
<p>统一 GPT、Gemini 等模型供应渠道，用量约官网 45 折；建立产品级用量看板与成本治理，支撑 SaaS 商业模式可持续。</p>
</div>
</div>
</div>

<!-- 03 实施路径 -->
<div class="sec-block reveal">
<div class="sec-label">
<span class="no">03</span>
<div>
<span class="en">Implementation</span>
<h2>实施路径：五步法交付</h2>
</div>
</div>
<div class="timeline">
<div class="tl-item">
<div class="phase">Phase 1 <span class="dur">阶段一</span></div>
<h4>场景定义与产品对齐</h4>
<p>深入产品、研发、运营访谈，梳理产品体验差距，按「用户价值 × 技术可行性」筛选出问答、推荐、生成、检索四类首批场景。</p>
</div>
<div class="tl-item">
<div class="phase">Phase 2 <span class="dur">阶段二</span></div>
<h4>知识流程与数据接入</h4>
<p>接入企业数据、政策、专利、行业资讯多源数据，构建知识库底座，明确数据更新机制与权限边界。</p>
</div>
<div class="tl-item">
<div class="phase">Phase 3 <span class="dur">阶段三</span></div>
<h4>原型开发与产品集成</h4>
<p>FDE 团队驻场开发四类 Agent 原型，与产品研发团队协同集成，完成产品级体验联调。</p>
</div>
<div class="tl-item">
<div class="phase">Phase 4 <span class="dur">阶段四</span></div>
<h4>灰度测试与迭代</h4>
<p>在部分企业用户中灰度测试，每周迭代；Token 统一供应与用量治理同步上线，支撑 SaaS 商业模式。</p>
</div>
<div class="tl-item">
<div class="phase">Phase 5 <span class="dur">阶段五</span></div>
<h4>全量发布与交接</h4>
<p>灰度验证后全量发布，智能 Agent 上线；知识资产与 SOP 全量交接给客户研发团队，持续陪跑新场景。</p>
</div>
</div>
</div>

<!-- 04 落地成果 -->
<div class="sec-block reveal">
<div class="sec-label">
<span class="no">04</span>
<div>
<span class="en">Results</span>
<h2>落地成果</h2>
</div>
</div>
<p>项目交付后一个季度，各项指标持续向好：<strong>智能 Agent 上线</strong>，知识问答、智能推荐、文档生成、智能检索覆盖核心体验；<strong>用户活跃显著提升</strong>，AI 原生体验带动留存；模型用量成本稳定在官网约 45 折，支撑 SaaS 商业模式可持续。</p>
<p>更重要的是产品形态的变化——AI 从外挂功能变成了产品的核心体验，用户开始<strong>主动</strong>反馈新的智能化需求，产品竞争力明显上一个台阶。</p>
<div class="case-quote">
<div class="mark">“</div>
<p>信朴科技的 FDE 不是外包，是和我们产品团队一起把 AI 嵌进产品的人。现在我们的用户是真的能问、能荐、能生成，这是过去自建团队做不到的速度。</p>
<div class="src"><strong>国内知名科创服务企业 · 产品相关负责人</strong></div>
</div>
</div>

</main>

<!-- 侧栏 -->
<aside class="case-side">
<div class="side-card reveal reveal-d1">
<h4>客户信息</h4>
<div class="info-row"><span class="k">客户名称</span><span class="v">国内知名科创服务企业</span></div>
<div class="info-row"><span class="k">所属行业</span><span class="v">企业服务 · SaaS 平台</span></div>
<div class="info-row"><span class="k">项目周期</span><span class="v">分阶段交付 + 持续陪跑</span></div>
<div class="info-row"><span class="k">服务团队</span><span class="v">FDE 现场 + 产品架构师 + 数据架构师</span></div>
<div class="info-row"><span class="k">发布时间</span><span class="v">2026 年 7 月</span></div>
</div>
<div class="side-card reveal reveal-d2">
<h4>使用服务</h4>
<div class="side-services">
<a href="/agent.html">Agent 定制</a>
<a href="/token-supply.html">Token 供应</a>
<a href="/ai-training.html">AI 转型咨询</a>
<a href="/ai-efficiency.html">AI 提效闭环</a>
</div>
</div>
<div class="side-card side-cta reveal reveal-d3">
<h4>想要同样的成果？</h4>
<p>预约一次免费的场景诊断，让信朴科技 FDE 团队帮你找出团队里最适合先落地的 AI 场景。</p>
<a href="tel:18926108189" class="btn btn-p">预约诊断 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
</div>
</aside>

</div>
</div>
</section>

<!-- ===== 相关案例 ===== -->
<section class="rel-section">
<div class="wrap">
<div class="sec-head reveal">
<div>
<div class="sec-eyebrow"><span class="dot"></span>MORE CASES · 相关案例</div>
<h2 class="sec-title">他们在<span class="em">用同样的方法</span>提效</h2>
</div>
</div>
<div class="rel-grid">
<a href="/case-guomin-tech.html" class="rel-card rc-semi reveal reveal-d1">
<span class="rbar"></span>
<div class="rel-visual">
<div class="rv-img" style="background-image: url('/assets/img/20260814/ban2.png')"></div>
<div class="rv-mask"></div>
<div class="cname"><div class="n">国内知名芯片企业</div><div class="s">集成电路 · 芯片设计</div></div>
</div>
<div class="rel-body">
<div class="cat">Case Study · 科技企业</div>
<h3>芯片企业的研发辅助 Agent：代码生成与审查提效</h3>
<div class="rs">
<div><div class="num">40<span class="unit">%</span></div><div class="label">研发效率提升</div></div>
<div><div class="num">2<span class="unit">个</span></div><div class="label">研发 Agent 上线</div></div>
</div>
</div>
</a>
<a href="/case-huajin-ip.html" class="rel-card rc-service reveal reveal-d1">
<span class="rbar"></span>
<div class="rel-visual">
<div class="rv-img" style="background-image: url('/assets/img/20260814/ban4.png')"></div>
<div class="rv-mask"></div>
<div class="cname"><div class="n">国内知名知识产权服务机构</div><div class="s">知识产权 · 专业服务</div></div>
</div>
<div class="rel-body">
<div class="cat">Case Study · 专业服务</div>
<h3>知识产权的知识问答 Agent：文档处理显著提效</h3>
<div class="rs">
<div><div class="num">70<span class="unit">%</span></div><div class="label">文档处理提效</div></div>
<div><div class="num">1<span class="unit">个</span></div><div class="label">知识问答 Agent</div></div>
</div>
</div>
</a>
<a href="/case-yinsheng-pay.html" class="rel-card rc-finance reveal reveal-d1">
<span class="rbar"></span>
<div class="rel-visual">
<div class="rv-img" style="background-image: url('/assets/img/20260816/40ade249039bc314342849325e.png')"></div>
<div class="rv-mask"></div>
<div class="cname"><div class="n">国内知名支付科技企业</div><div class="s">金融科技 · 支付服务</div></div>
</div>
<div class="rel-body">
<div class="cat">Case Study · 金融科技</div>
<h3>支付机构的知识问答 Agent：客服响应效率显著提升</h3>
<div class="rs">
<div><div class="num">40<span class="unit">%</span></div><div class="label">响应效率提升</div></div>
<div><div class="num">3<span class="unit">类</span></div><div class="label">运营 Agent 上线</div></div>
</div>
</div>
</a>
</div>
</div>
</section>

<!-- ===== CTA ===== -->
<section class="cta-section" id="contact">

</section>

<script>
var bar = document.getElementById('progressBar');
function updProgress(){
var h = document.documentElement;
var max = h.scrollHeight - h.clientHeight;
var p = max > 0 ? (h.scrollTop / max) * 100 : 0;
bar.style.width = Math.min(p, 100) + '%';
}
window.addEventListener('scroll', updProgress, { passive: true });
updProgress();

var io = new IntersectionObserver(function(entries){
entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
}, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

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
'  float p2 = texture2D(pressure, uv + vec2(0.0, px.y*2.0)).r;',
'  float p3 = texture2D(pressure, uv - vec2(0.0, px.y*2.0)).r;',
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
