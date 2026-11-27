---
title: "行业场景与交付实践 - 信朴科技"
description: "信朴科技交付实践：覆盖户外媒体、装备制造、企业服务、知识产权与科技服务等业务场景，展示自研业务系统、Agent 定制与私有化部署在真实流程中的落地方式。"
keywords: "行业场景,交付实践,自研业务系统,私有化部署,信朴科技"
nav: "cases"
date: 2026-11-18
draft: false
------

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
img{display:block;max-width:100%}

/* ===== WebGL 流体背景 ===== */
#fluid-wrap{position:fixed;inset:0;z-index:1;pointer-events:none;overflow:hidden;mix-blend-mode:multiply;opacity:.7}
#fluid-wrap canvas{display:block;width:100%;height:100%}

/* ===== 容器 ===== */
.wrap{max-width:var(--maxw);margin:0 auto;padding:0 32px;position:relative;z-index:2}

/* ===== Hero ===== */
.hero{position:relative;padding:100px 0 56px;min-height:520px;overflow:hidden;background:#eaf2fc url(/assets/img/theme/1617443834642507.jpg) center/cover no-repeat}
.hero-inner{max-width:960px}
.hero-eyebrow{display:inline-flex;align-items:center;gap:14px;font-size:11.5px;color:var(--brand);font-weight:600;margin-bottom:32px;letter-spacing:.18em;text-transform:uppercase}
.hero-eyebrow .line{width:40px;height:1px;background:linear-gradient(90deg,var(--brand),transparent)}
.hero h1{font-size:46px;line-height:1.12;font-weight:800;letter-spacing:-.03em;margin-bottom:28px;color:var(--ink)}
.hero h1 .em{
background: #2563eb;
-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
}
.hero .sub{font-size:clamp(15px,1.2vw,17px);line-height:1.9;color:var(--text-2);max-width:620px;margin-bottom:40px;font-weight:400}
.hero-metrics{display:flex;align-items:center;gap:0;margin-bottom:44px;flex-wrap:wrap}
.hero-metric{padding:0 36px 0 0;margin-right:36px;border-right:1px solid var(--border)}
.hero-metric:last-child{border-right:none;margin-right:0;padding-right:0}
.hero-metric .num{font-size:32px;font-weight:800;color:var(--ink);letter-spacing:-.03em;line-height:1;font-variant-numeric:tabular-nums}
.hero-metric .num .unit{font-size:15px;font-weight:600;color:var(--text-2);margin-left:2px}
.hero-metric .label{font-size:12px;color:var(--text-3);margin-top:8px;letter-spacing:.04em}
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

/* ===== 精选案例 — 大卡 ===== */
.featured{padding:80px 0 100px}
.featured-card{
position:relative;background:var(--bg-card);border:1px solid var(--border-soft);border-radius:var(--radius-xl);
overflow:hidden;display:grid;grid-template-columns:1.1fr 1fr;
box-shadow:var(--shadow);transition:box-shadow .5s;
}
.featured-card:hover{box-shadow:var(--shadow-lg)}

/* 精选案例跳转链接容器（包住可视区 + 正文） */
.featured-card>a.featured-link{
display:grid;grid-template-columns:1.1fr 1fr;grid-column:1/-1;
text-decoration:none;color:inherit;cursor:pointer;
}
.featured-card>a.featured-link:hover{color:inherit}
.featured-visual{position:relative;overflow:hidden;background:linear-gradient(135deg,#0a0e1a,#141a2e);min-height:440px}
.featured-visual::before{
content:"";position:absolute;inset:0;
background:radial-gradient(circle at 30% 40%,rgba(30,76,168,.4),transparent 55%),radial-gradient(circle at 80% 80%,rgba(217,72,15,.15),transparent 50%);
}
.featured-visual::after{
content:"";position:absolute;inset:0;
background-image:
linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);
background-size:40px 40px;
}
.featured-badge{
position:absolute;top:32px;left:32px;z-index:2;display:flex;align-items:center;gap:10px;
padding:8px 16px;border-radius:100px;background:rgba(255,255,255,.08);backdrop-filter:blur(12px);
border:1px solid rgba(255,255,255,.12);font-size:11.5px;font-weight:600;letter-spacing:.06em;text-transform:uppercase
}
.featured-badge .dot{width:6px;height:6px;border-radius:50%;background:var(--accent);box-shadow:0 0 12px var(--accent)}
.featured-logo{
position:absolute;bottom:32px;left:32px;z-index:2;
}
.featured-logo .name{font-size:36px;font-weight:800;letter-spacing:-.02em;line-height:1;margin-bottom:8px}
.featured-logo .industry{font-size:13px;letter-spacing:.06em}
.featured-body{padding:56px 52px;display:flex;flex-direction:column;justify-content:center}
.featured-tag{font-size:11px;font-weight:700;color:var(--accent);letter-spacing:.14em;text-transform:uppercase;margin-bottom:20px}
.featured-body h3{font-size:clamp(22px,2.4vw,30px);font-weight:800;color:var(--ink);letter-spacing:-.02em;line-height:1.35;margin-bottom:20px}
.featured-body .challenge{font-size:14.5px;color:var(--text-2);line-height:1.9;margin-bottom:28px}
.featured-solutions{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:32px}
.featured-solutions .sol{font-size:12px;font-weight:600;padding:6px 14px;border-radius:8px;background:var(--bg-soft);border:1px solid var(--border);color:var(--text-2);transition:all .3s}
.featured-card:hover .featured-solutions .sol{border-color:var(--border)}
.featured-results{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding-top:28px;border-top:1px solid var(--border-soft)}
.featured-result .num{font-size:32px;font-weight:800;color:var(--brand);letter-spacing:-.03em;line-height:1;font-variant-numeric:tabular-nums}
.featured-result .num .unit{font-size:14px;font-weight:600;color:var(--text-2);margin-left:2px}
.featured-result .label{font-size:12px;color:var(--text-3);margin-top:8px;letter-spacing:.03em}

/* ===== 案例网格 ===== */
.cases-section{padding:100px 0 120px;background:var(--bg-card);border-top:1px solid var(--border)}
.cases-head{display:flex;align-items:flex-end;justify-content:space-between;gap:32px;margin-bottom:56px;flex-wrap:wrap}
.cases-filter{display:flex;gap:6px;flex-wrap:wrap;background:var(--bg-soft);border:1px solid var(--border);border-radius:12px;padding:5px}
.cases-filter button{padding:9px 18px;font-size:13px;color:var(--text-2);background:transparent;border:none;border-radius:8px;cursor:pointer;transition:all .3s cubic-bezier(.22,1,.36,1);font-family:inherit;font-weight:500}
.cases-filter button:hover{color:var(--ink)}
.cases-filter button.active{background:var(--ink);color:#fff;font-weight:600}

.cases-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
.case-card{
position:relative;background:var(--bg-card);border:1px solid var(--border-soft);border-radius:var(--radius-lg);
overflow:hidden;display:flex;flex-direction:column;
transition:transform .4s cubic-bezier(.22,1,.36,1),box-shadow .4s,border-color .3s,opacity .4s;
}
.case-card:hover{
border-color:transparent;
box-shadow:0 24px 56px -20px rgba(10,14,26,.12),0 8px 24px -12px rgba(10,14,26,.06);
transform:translateY(-8px);
}
.case-bar{position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--c),transparent 200%);transform:scaleX(0);transform-origin:left;transition:transform .6s cubic-bezier(.22,1,.36,1);z-index:4}
.case-card:hover .case-bar{transform:scaleX(1)}
.case-visual{position:relative;aspect-ratio:16/9;overflow:hidden;background:linear-gradient(135deg,var(--bg-deep),var(--bg-deep-2))}
.case-visual::before{
content:"";position:absolute;inset:0;
background:radial-gradient(circle at 25% 35%,var(--c-glow,rgba(30,76,168,.3)),transparent 60%),radial-gradient(circle at 85% 75%,rgba(217,72,15,.08),transparent 50%);
transition:opacity .5s
}
.case-visual::after{
content:"";position:absolute;inset:0;
background-image:
linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);
background-size:32px 32px;
}
.case-card:hover .case-visual::before{opacity:1.2}
.case-industry{position:absolute;top:16px;left:16px;font-size:10.5px;font-weight:600;padding:5px 12px;border-radius:6px;background:rgba(255,255,255,.88);backdrop-filter:blur(10px);color:var(--ink);letter-spacing:.06em;text-transform:uppercase;border:1px solid rgba(255,255,255,.5);z-index:2;transition:color .3s}
.case-card:hover .case-industry{color:var(--c)}
.case-logo{position:absolute;bottom:20px;left:20px;z-index:2}
.case-logo .name{font-size:24px;font-weight:800;letter-spacing:-.02em;line-height:1}
.case-logo .sub{font-size:11.5px;margin-top:4px;letter-spacing:.04em}
.case-body{padding:28px 28px 32px;display:flex;flex-direction:column;flex:1}
.case-body .challenge{font-size:13.5px;color:var(--text-2);line-height:1.8;margin-bottom:20px;min-height:50px}
.case-sols{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:24px;flex:1}
.case-sols .sol{font-size:11px;color:var(--text-3);padding:4px 10px;background:var(--bg-soft);border-radius:6px;font-weight:500;transition:all .3s}
.case-card:hover .case-sols .sol{color:var(--text-2);background:var(--border-soft)}
.case-results{display:flex;gap:28px;padding-top:20px;border-top:1px solid var(--border-soft)}
.case-result{display:flex;flex-direction:column}
.case-result .num{font-size:24px;font-weight:800;color:var(--c);letter-spacing:-.02em;line-height:1;font-variant-numeric:tabular-nums;transition:color .3s}
.case-result .num .unit{font-size:12px;font-weight:600;color:var(--text-2);margin-left:1px}
.case-result .label{font-size:11px;color:var(--text-3);margin-top:6px;letter-spacing:.03em}

/* ===== 案例卡背景图（可单独配置） ===== */
.featured-bg,.case-bg{
position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;
z-index:0;display:block;pointer-events:none;
}
.featured-bg{transition:transform .8s cubic-bezier(.22,1,.36,1)}
.case-bg{transition:transform .6s cubic-bezier(.22,1,.36,1)}
.featured-card:hover .featured-bg{transform:scale(1.04)}
.case-card:hover .case-bg{transform:scale(1.05)}

/* 让徽标 / Logo 名 / 行业角标始终浮在背景图之上 */
.featured-visual>.featured-badge,
.featured-visual>.featured-logo{z-index:3}
.case-visual>.case-industry,
.case-visual>.case-logo{z-index:3}

/* 案例卡片跳转链接容器（包住可视区 + 正文） */
.case-card>a.case-link{
display:flex;flex-direction:column;flex:1;text-decoration:none;color:inherit;cursor:pointer;
}
.case-card>a.case-link>.case-visual{flex-shrink:0}

/* Logo 文字 fallback（纯 HTML/CSS，无 SVG 语法） */
.logo-fb{
display:inline-flex;align-items:center;justify-content:center;
width:48px;height:48px;border-radius:10px;color:#fff;
font-weight:800;font-size:22px;line-height:1;font-family:inherit;
}

/* 案例主题色 */
.c-auto{--c:#1e4ca8;--c-glow:rgba(30,76,168,.35)}
.c-finance{--c:#059669;--c-glow:rgba(5,150,105,.25)}
.c-manufacture{--c:#0891b2;--c-glow:rgba(8,145,178,.25)}
.c-semi{--c:#6d28d9;--c-glow:rgba(109,40,217,.25)}
.c-logistics{--c:#d9480f;--c-glow:rgba(217,72,15,.2)}
.c-saas{--c:#dc2626;--c-glow:rgba(220,38,38,.2)}
.c-ceramic{--c:#b45309;--c-glow:rgba(180,83,9,.2)}
.c-service{--c:#4f46e5;--c-glow:rgba(79,70,229,.22)}

/* 筛选隐藏动画 */
.case-card.hide{opacity:0;transform:scale(.94) translateY(12px);pointer-events:none}

/* ===== 成果数据条 ===== */
.impact-section{padding:120px 0;background:var(--bg-deep);position:relative;overflow:hidden}
.impact-section::before{
content:"";position:absolute;top:-30%;right:-15%;width:60%;height:160%;
background:radial-gradient(circle,rgba(30,76,168,.3),transparent 60%);pointer-events:none
}
.impact-section::after{
content:"";position:absolute;inset:0;
background-image:
linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),
linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);
background-size:48px 48px;pointer-events:none
}
.impact-head{position:relative;z-index:2;margin-bottom:64px}
.impact-head .sec-eyebrow{color:rgba(255,255,255,.4)}
.impact-head .sec-eyebrow .dot{background:var(--accent)}
.impact-head .sec-title{color:#fff}
.impact-head .sec-title .em{color:#93c5fd}
.impact-head .sec-sub{color:rgba(255,255,255,.5)}
.impact-grid{position:relative;z-index:2;display:grid;grid-template-columns:repeat(4,1fr);gap:0}
.impact-item{
text-align:center;padding:0 32px;position:relative;
border-right:1px solid rgba(255,255,255,.06)
}
.impact-item:last-child{border-right:none}
.impact-item .num{font-size:clamp(40px,4.5vw,56px);font-weight:800;color:#fff;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}
.impact-item .num .unit{font-size:18px;font-weight:600;color:rgba(255,255,255,.5);margin-left:4px}
.impact-item .num .accent{color:var(--accent)}
.impact-item .label{font-size:13px;color:rgba(255,255,255,.45);margin-top:16px;letter-spacing:.04em;line-height:1.6}

/* ===== 客户Logo墙 ===== */
.clients-section{padding:120px 0;background:var(--bg-card);border-top:1px solid var(--border);border-bottom:1px solid var(--border);overflow:hidden}
.clients-head{margin-bottom:56px}
.clients-marquee{display:flex;gap:16px;animation:marquee 45s linear infinite;width:max-content}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.client-chip{
flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;
min-width:180px;padding:24px 24px 22px;background:var(--bg-soft);border:1px solid var(--border-soft);
border-radius:var(--radius);transition:all .3s cubic-bezier(.22,1,.36,1);cursor:default
}
.client-chip:hover{background:var(--bg-card);border-color:var(--border);box-shadow:var(--shadow-sm);transform:translateY(-4px)}
.client-chip .client-logo{display:flex;align-items:center;justify-content:center;height:48px;width:100%}
.client-chip .client-logo img{max-height:48px;max-width:140px;width:auto;height:auto;object-fit:contain;display:block}
.client-chip .logo-mono{width:48px;height:48px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:800;color:var(--brand,#2563eb);background:linear-gradient(135deg,rgba(37,99,235,.12),rgba(37,99,235,.03))}
.client-chip .client-logo svg{height:48px;width:auto;display:block}
.client-chip .name{font-size:16px;font-weight:700;color:var(--ink);letter-spacing:-.01em;margin-top:2px}
.client-chip .industry{font-size:11.5px;color:var(--text-3);letter-spacing:.02em}
.marquee-track{display:flex;gap:16px;width:max-content}
.clients-marquee-wrap{overflow:hidden;mask-image:linear-gradient(90deg,transparent 0%,#000 6%,#000 94%,transparent 100%)}

/* ===== CTA ===== */
.cta-section{padding:120px 0}
.cta-band{
position:relative;background:#eaf2fc url(banner-visual.png) center/cover no-repeat;border-radius:var(--radius-xl);
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
.cases-grid{grid-template-columns:repeat(2,1fr);gap:24px}
.impact-grid{grid-template-columns:repeat(2,1fr);gap:48px 0}
.impact-item:nth-child(2){border-right:none}
.featured-card{grid-template-columns:1fr}
.featured-card>a.featured-link{grid-template-columns:1fr}
.featured-visual{min-height:320px}
.featured-body{padding:40px 36px}
}
@media(max-width:860px){
.hero{padding:80px 0 48px;min-height:460px}
.hero-metric{padding:0 24px 0 0;margin-right:24px}
.hero-metric .num{font-size:26px}
.cases-grid{grid-template-columns:1fr;gap:20px}
.impact-grid{grid-template-columns:repeat(2,1fr);gap:40px 0}
.cta-band{padding:48px 36px}
.featured,.cases-section,.impact-section,.clients-section,.cta-section{padding:80px 0}
.featured-body{padding:32px 28px}
.featured-results{gap:16px}
.featured-result .num{font-size:26px}
}
@media(max-width:560px){
.hero{min-height:380px;padding:60px 0 40px}
.cases-head{flex-direction:column;align-items:flex-start}
.cta-inner{flex-direction:column;align-items:flex-start}
.cta-band{padding:40px 24px;border-radius:var(--radius-lg)}
.cta-contact{width:100%}
.hero-metrics{flex-direction:column;align-items:flex-start;gap:24px}
.hero-metric{padding:0;margin-right:0;border-right:none;border-bottom:1px solid var(--border);padding-bottom:20px;margin-right:0}
.hero-metric:last-child{border-bottom:none;padding-bottom:0}
.impact-grid{grid-template-columns:1fr;gap:40px 0}
.impact-item{border-right:none;border-bottom:1px solid rgba(255,255,255,.06);padding-bottom:32px}
.impact-item:last-child{border-bottom:none;padding-bottom:0}
.case-results{flex-direction:column;gap:16px}
.featured-results{grid-template-columns:1fr;gap:20px}
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
<div class="hero-eyebrow reveal"><span class="line"></span>多行业落地实践 · 真实场景验证</div>
<h1 class="reveal reveal-d1">每一次落地，<br>都是 <span class="em">AI 变生产力</span> 的真实证明</h1>
<p class="sub reveal reveal-d2">从新能源汽车到金融科技，从半导体到建材制造——信朴科技的服务已在多行业的头部企业中跑通闭环。不讲概念，只看结果。</p>
<div class="hero-metrics reveal reveal-d3">
<div class="hero-metric">
<div class="num">双形态</div>
<div class="label">SaaS 订阅与私有化部署</div>
</div>
<div class="hero-metric">
<div class="num">全包</div>
<div class="label">域名、服务器、证书与解析</div>
</div>
<div class="hero-metric">
<div class="num">7<span class="unit">大产品</span></div>
<div class="label">独立或组合交付</div>
</div>
</div>
<div class="hero-cta reveal reveal-d4">
<a href="#cases" class="btn btn-primary">浏览全部案例 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg></a>
<a href="#contact" class="btn btn-ghost">预约场景诊断</a>
</div>
</div>
</div>
</header>

<!-- 精选案例 -->
<section class="featured" id="featured">
<div class="wrap">
<div class="sec-head reveal">
<div class="sec-eyebrow"><span class="dot"></span>FEATURED CASE · 精选案例</div>
<h2 class="sec-title">标杆实践：<span class="em">国内知名汽车企业</span> × AI 提效</h2>
<p class="sec-sub">新能源汽车领军企业如何通过信朴科技的「学·用·建·管」闭环，实现团队 AI 能力的系统性跃升。</p>
</div>
<div class="featured-card reveal reveal-d1">
<!-- 精选案例跳转链接：替换 href 即可指向详情页/外部URL -->
<a href="/case-gac-aion.html" class="featured-link">
<div class="featured-visual">
<!-- 精选案例背景图：每个案例可单独换 src（建议 16:9 或 4:3，留出右侧文案空间） -->
<img class="featured-bg" src="/assets/img/20260816/20260816213030_90246.png" alt="" loading="lazy">
<div class="featured-badge"><span class="dot"></span>精选案例</div>
<div class="featured-logo">
<div class="name">国内知名汽车企业</div>
<div class="industry">新能源汽车 · 智能制造</div>
</div>
</div>
<div class="featured-body">
<div class="featured-tag">AI 提效 · 综合服务</div>
<h3>从「不会用 AI」到「全员 AI 提效」的组织升级</h3>
<p class="challenge">国内知名汽车企业作为新能源汽车头部企业，研发与业务团队规模庞大，但 AI 工具的使用率低、场景分散、成本不可控。信朴科技以「学·用·建·管」一站式闭环切入，从培训赋能到 Agent 定制，系统性提升全员 AI 生产力。</p>
<div class="featured-solutions">
<span class="sol">WorkBuddy 培训</span>
<span class="sol">Token 供应</span>
<span class="sol">Agent 定制</span>
<span class="sol">AI 咨询</span>
</div>
<div class="featured-results">
<div class="featured-result">
<div class="num">全员</div>
<div class="label">AI 日常化使用推进</div>
</div>
<div class="featured-result">
<div class="num">45<span class="unit">折</span></div>
<div class="label">模型用量约官网成本</div>
</div>
<div class="featured-result">
<div class="num">5<span class="unit">类 Agent</span></div>
<div class="label">场景化应用上线</div>
</div>
</div>
</div>
</a>
</div>
</div>
</section>

<!-- 案例网格 -->
<section class="cases-section" id="cases">
<div class="wrap">
<div class="cases-head reveal">
<div>
<div class="sec-eyebrow"><span class="dot"></span>CASE STUDIES · 客户案例</div>
<h2 class="sec-title">更多行业<span class="em">落地实践</span></h2>
</div>
<div class="cases-filter">
<button class="active" data-filter="all">全部</button>
<button data-filter="auto">汽车出行</button>
<button data-filter="finance">金融科技</button>
<button data-filter="manufacture">制造工业</button>
<button data-filter="tech">科技服务</button>
</div>
</div>

<div class="cases-grid" id="casesGrid">

<!-- 1. 国内知名出行企业 -->
<article class="case-card c-auto reveal" data-cat="auto">
<div class="case-bar"></div>
<a href="/case-ruqi-mobility.html" class="case-link">
<div class="case-visual">
<!-- 案例配图：每个栏目可单独换 src（建议 16:9） -->
<img class="case-bg" src="/assets/img/20260816/f9bce64d96b842bb03022e4291.png" alt="" loading="lazy">
<span class="case-industry">出行平台</span>
<div class="case-logo">
<div class="name">国内知名出行企业</div>
<div class="sub">Robotaxi · 智慧出行</div>
</div>
</div>
<div class="case-body">
<p class="challenge">出行平台客服与运营数据量大，人工处理效率受限，需要 AI 辅助提升响应速度与数据分析能力。</p>
<div class="case-sols">
<span class="sol">私有化部署</span>
<span class="sol">Agent 定制</span>
<span class="sol">Token 供应</span>
</div>
<div class="case-results">
<div class="case-result">
<div class="num">7×24</div>
<div class="label">高峰客服覆盖</div>
</div>
<div class="case-result">
<div class="num">24/7</div>
<div class="label">运营分析覆盖</div>
</div>
</div>
</div>
</a>
</article>

<!-- 2. 国内知名支付科技企业 -->
<article class="case-card c-finance reveal reveal-d1" data-cat="finance">
<div class="case-bar"></div>
<a href="/case-yinsheng-pay.html" class="case-link">
<div class="case-visual">
<img class="case-bg" src="/assets/img/20260816/40ade249039bc314342849325e.png" alt="" loading="lazy">
<span class="case-industry">金融科技</span>
<div class="case-logo">
<div class="name">国内知名支付科技企业</div>
<div class="sub">支付 · 金融数据</div>
</div>
</div>
<div class="case-body">
<p class="challenge">支付场景涉及大量交易数据处理与风险监控，需要 AI Agent 辅助运营分析与异常检测。</p>
<div class="case-sols">
<span class="sol">Agent 定制</span>
<span class="sol">AI 落地</span>
<span class="sol">Token 供应</span>
</div>
<div class="case-results">
<div class="case-result">
<div class="num">3<span class="unit">类</span></div>
<div class="label">运营 Agent 上线</div>
</div>
<div class="case-result">
<div class="num">45<span class="unit">折</span></div>
<div class="label">模型用量成本</div>
</div>
</div>
</div>
</a>
</article>

<!-- 3. 国内知名电梯制造企业 -->
<article class="case-card c-manufacture reveal reveal-d2" data-cat="manufacture">
<div class="case-bar"></div>
<a href="/case-guangri-elevator.html" class="case-link">
<div class="case-visual">
<img class="case-bg" src="/assets/img/20260814/ban3.png" alt="" loading="lazy">
<span class="case-industry">装备制造</span>
<div class="case-logo">
<div class="name">国内知名电梯制造企业</div>
<div class="sub">智能装备 · 工业制造</div>
</div>
</div>
<div class="case-body">
<p class="challenge">制造企业研发与文档管理流程重，员工 AI 使用基础薄弱，需要系统性培训与场景化落地。</p>
<div class="case-sols">
<span class="sol">WorkBuddy 培训</span>
<span class="sol">AI 提效</span>
<span class="sol">知识库建设</span>
</div>
<div class="case-results">
<div class="case-result">
<div class="num">200<span class="unit">+ 人</span></div>
<div class="label">完成 AI 培训</div>
</div>
<div class="case-result">
<div class="num">8<span class="unit">个</span></div>
<div class="label">业务场景落地</div>
</div>
</div>
</div>
</a>
</article>

<!-- 4. 国内知名芯片企业 -->
<article class="case-card c-semi reveal" data-cat="tech">
<div class="case-bar"></div>
<a href="/case-guomin-tech.html" class="case-link">
<div class="case-visual">
<img class="case-bg" src="/assets/img/20260814/ban2.png" alt="" loading="lazy">
<span class="case-industry">半导体</span>
<div class="case-logo">
<div class="name">国内知名芯片企业</div>
<div class="sub">芯片设计 · 信息安全</div>
</div>
</div>
<div class="case-body">
<p class="challenge">芯片设计企业研发协作复杂，需要 AI 辅助代码生成与审查、技术文档知识问答等场景。</p>
<div class="case-sols">
<span class="sol">AI 转型</span>
<span class="sol">Agent 定制</span>
<span class="sol">Token 供应</span>
</div>
<div class="case-results">
<div class="case-result">
<div class="num">2<span class="unit">个</span></div>
<div class="label">研发 Agent 部署</div>
</div>
<div class="case-result">
<div class="num">40<span class="unit">%</span></div>
<div class="label">研发效率提升</div>
</div>
</div>
</div>
</a>
</article>

<!-- 5. 国内知名陶瓷建材企业 -->
<article class="case-card c-ceramic reveal reveal-d1" data-cat="manufacture">
<div class="case-bar"></div>
<a href="/case-dongpeng-ceramics.html" class="case-link">
<div class="case-visual">
<img class="case-bg" src="/assets/img/20260814/ban1.png" alt="" loading="lazy">
<span class="case-industry">建材陶瓷</span>
<div class="case-logo">
<div class="name">国内知名陶瓷建材企业</div>
<div class="sub">建材 · 品牌制造</div>
</div>
</div>
<div class="case-body">
<p class="challenge">传统建材企业数字化转型需求迫切，需要从零开始构建团队 AI 意识与基础应用能力。</p>
<div class="case-sols">
<span class="sol">WorkBuddy 培训</span>
<span class="sol">AI 提效</span>
<span class="sol">AI 咨询</span>
</div>
<div class="case-results">
<div class="case-result">
<div class="num">150<span class="unit">+ 人</span></div>
<div class="label">员工 AI 启蒙</div>
</div>
<div class="case-result">
<div class="num">5<span class="unit">大模块</span></div>
<div class="label">线下训练营交付</div>
</div>
</div>
</div>
</a>
</article>

<!-- 6. 国内知名科创服务企业 -->
<article class="case-card c-saas reveal reveal-d2" data-cat="tech">
<div class="case-bar"></div>
<a href="/case-qizhidao.html" class="case-link">
<div class="case-visual">
<img class="case-bg" src="/assets/img/theme/1617443834642507.jpg" alt="" loading="lazy">
<span class="case-industry">企业服务 SaaS</span>
<div class="case-logo">
<div class="name">国内知名科创服务企业</div>
<div class="sub">企业服务 · SaaS 平台</div>
</div>
</div>
<div class="case-body">
<p class="challenge">SaaS 平台需要将 AI 能力嵌入产品体验，从知识问答到智能推荐，需要 Agent 定制与 Token 供应支持。</p>
<div class="case-sols">
<span class="sol">AI 落地</span>
<span class="sol">Agent 定制</span>
<span class="sol">Token 供应</span>
</div>
<div class="case-results">
<div class="case-result">
<div class="num">4<span class="unit">类</span></div>
<div class="label">智能 Agent 上线</div>
</div>
<div class="case-result">
<div class="num">FDE</div>
<div class="label">现场共创交付</div>
</div>
</div>
</div>
</a>
</article>

<!-- 7. 云南省央企背景综合运营国企 -->
<article class="case-card c-logistics reveal" data-cat="service">
<div class="case-bar"></div>
<a href="/case-china-post-yunnan.html" class="case-link">
<div class="case-visual">
<img class="case-bg" src="/assets/img/20260814/ban2.png" alt="" loading="lazy">
<span class="case-industry">邮政服务</span>
<div class="case-logo">
<div class="name">云南省央企背景综合运营国企</div>
<div class="sub">邮政 · 综合服务</div>
</div>
</div>
<div class="case-body">
<p class="challenge">大型央企分支机构员工基数大，AI 应用从管理层到一线需要分层赋能与场景化培训。</p>
<div class="case-sols">
<span class="sol">WorkBuddy 培训</span>
<span class="sol">AI 提效</span>
<span class="sol">定制训练营</span>
</div>
<div class="case-results">
<div class="case-result">
<div class="num">500<span class="unit">+ 席</span></div>
<div class="label">培训平台部署</div>
</div>
<div class="case-result">
<div class="num">3<span class="unit">层</span></div>
<div class="label">分层赋能体系</div>
</div>
</div>
</div>
</a>
</article>

<!-- 8. 国内知名知识产权服务企业 -->
<article class="case-card c-service reveal reveal-d1" data-cat="tech">
<div class="case-bar"></div>
<a href="/case-huajin-ip.html" class="case-link">
<div class="case-visual">
<img class="case-bg" src="/assets/img/20260814/ban1.png" alt="" loading="lazy">
<span class="case-industry">知识产权</span>
<div class="case-logo">
<div class="name">国内知名知识产权服务企业</div>
<div class="sub">知识产权 · 专业服务</div>
</div>
</div>
<div class="case-body">
<p class="challenge">知识产权服务涉及大量文档处理与专业问答，需要 AI 辅助专利分析、文档生成与知识检索。</p>
<div class="case-sols">
<span class="sol">Agent 定制</span>
<span class="sol">知识库建设</span>
<span class="sol">Token 供应</span>
</div>
<div class="case-results">
<div class="case-result">
<div class="num">1<span class="unit">个</span></div>
<div class="label">知识问答 Agent</div>
</div>
<div class="case-result">
<div class="num">FDE</div>
<div class="label">现场共创交付</div>
</div>
</div>
</div>
</a>
</article>

</div>
</div>
</section>

<!-- 成果数据条 -->
<section class="impact-section" id="impact">
<div class="wrap">
<div class="impact-head reveal sec-head">
<div class="sec-eyebrow"><span class="dot"></span>IMPACT · 成果数据</div>
<h2 class="sec-title">数字背后，是<span class="em">真实的生产力</span></h2>
<p class="sec-sub">自研底座与一站式交付能力，支撑每一次真实落地。</p>
</div>
<div class="impact-grid">
<div class="impact-item reveal">
<div class="num">双形态</div>
<div class="label">交付形态<br>SaaS 与私有化</div>
</div>
<div class="impact-item reveal reveal-d1">
<div class="num">全包</div>
<div class="label">交付范围<br>域名、服务器、证书与解析</div>
</div>
<div class="impact-item reveal reveal-d2">
<div class="num">45<span class="unit">折</span></div>
<div class="label">模型用量<br>约官网成本</div>
</div>
<div class="impact-item reveal reveal-d3">
<div class="num">长期</div>
<div class="label">持续迭代<br>版本更新与本地支持</div>
</div>
</div>
</div>
</section>

<!-- 客户Logo墙 -->
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
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">车</span></div>
<div class="name">某新能源汽车企业</div><div class="industry">新能源汽车</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">行</span></div>
<div class="name">某智慧出行平台</div><div class="industry">出行平台</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">装</span></div>
<div class="name">某装备制造企业</div><div class="industry">装备制造</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">芯</span></div>
<div class="name">某半导体企业</div><div class="industry">半导体</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">邮</span></div>
<div class="name">某邮政物流企业</div><div class="industry">邮政服务</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">游</span></div>
<div class="name">某游戏研发企业</div><div class="industry">游戏</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">教</span></div>
<div class="name">某教育科技企业</div><div class="industry">教育科技</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">电</span></div>
<div class="name">某工业电子企业</div><div class="industry">工业电子</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">岩</span></div>
<div class="name">该运动连锁品牌</div><div class="industry">运动休闲</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">服</span></div>
<div class="name">某企业服务平台</div><div class="industry">企业服务 SaaS</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">人</span></div>
<div class="name">某人力资源机构</div><div class="industry">人力资源</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">建</span></div>
<div class="name">某建材陶瓷企业</div><div class="industry">建材陶瓷</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">产</span></div>
<div class="name">某知识产权机构</div><div class="industry">知识产权</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">金</span></div>
<div class="name">某金融科技企业</div><div class="industry">金融科技</div>
</div>
</div>
<div class="marquee-track" aria-hidden="true">
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">车</span></div>
<div class="name">某新能源汽车企业</div><div class="industry">新能源汽车</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">行</span></div>
<div class="name">某智慧出行平台</div><div class="industry">出行平台</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">装</span></div>
<div class="name">某装备制造企业</div><div class="industry">装备制造</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">芯</span></div>
<div class="name">某半导体企业</div><div class="industry">半导体</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">邮</span></div>
<div class="name">某邮政物流企业</div><div class="industry">邮政服务</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">游</span></div>
<div class="name">某游戏研发企业</div><div class="industry">游戏</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">教</span></div>
<div class="name">某教育科技企业</div><div class="industry">教育科技</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">电</span></div>
<div class="name">某工业电子企业</div><div class="industry">工业电子</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">岩</span></div>
<div class="name">该运动连锁品牌</div><div class="industry">运动休闲</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">服</span></div>
<div class="name">某企业服务平台</div><div class="industry">企业服务 SaaS</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">人</span></div>
<div class="name">某人力资源机构</div><div class="industry">人力资源</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">建</span></div>
<div class="name">某建材陶瓷企业</div><div class="industry">建材陶瓷</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">产</span></div>
<div class="name">某知识产权机构</div><div class="industry">知识产权</div>
</div>
<div class="client-chip">
<div class="client-logo"><span class="logo-mono">金</span></div>
<div class="name">某金融科技企业</div><div class="industry">金融科技</div>
</div>
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
<h2>下一个案例，<br>或许就是您的企业</h2>
<p>每一个行业、每一个场景都有独特的 AI 落地路径。预约一次免费诊断，让我们帮您找到最短路径。</p>
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
var io = new IntersectionObserver(function(entries){
entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }});
}, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

// ===== 案例筛选（带交错过渡动画） =====
var filterBtns = document.querySelectorAll('.cases-filter button');
var caseCards = document.querySelectorAll('.case-card');
filterBtns.forEach(function(btn){
btn.addEventListener('click', function(){
filterBtns.forEach(function(b){ b.classList.remove('active'); });
btn.classList.add('active');
var f = btn.dataset.filter;
var shown = 0;
caseCards.forEach(function(p){
var show = f === 'all' || p.dataset.cat === f;
if(show){
p.style.display = '';
var delay = shown * 55;
shown++;
requestAnimationFrame(function(){ requestAnimationFrame(function(){
p.style.transitionDelay = delay + 'ms';
p.classList.remove('hide');
setTimeout(function(){ p.style.transitionDelay = ''; }, delay + 450);
}); });
} else {
p.style.transitionDelay = '';
p.style.transform = '';
p.classList.add('hide');
setTimeout(function(){ if(p.classList.contains('hide')) p.style.display = 'none'; }, 400);
}
});
});
});
</script>

<!-- ══════════ Logo 配图 fallback（无 SVG） ══════════ -->
<script>
// 当 logos/XXX.png 缺失时，用企业品牌色 + 首字母生成色块作为降级
(function(){
var COLORS = {
'国内知名汽车企业':'#1e4ca8', '国内知名出行企业':'#2563eb', '国内知名电梯制造企业':'#475569',
'国内知名芯片企业':'#6d28d9', '云南省央企背景综合运营国企':'#059669', '某游戏研发企业':'#ea580c',
'某教育科技企业':'#0891b2', '某工业电子企业':'#dc2626', '该运动连锁品牌':'#ca8a04',
'国内知名科创服务企业':'#1e40af', '某人力资源机构':'#7c3aed', '国内知名陶瓷建材企业':'#b91c1c',
'国内知名知识产权服务企业':'#b45309', '国内知名支付科技企业':'#0f172a'
};
document.querySelectorAll('.client-chip img').forEach(function(img){
img.addEventListener('error', function onceHandler(){
if (img.dataset.fbDone) return;
img.dataset.fbDone = '1';
var chip = img.closest('.client-chip');
var name = chip && chip.querySelector('.name') ? chip.querySelector('.name').textContent.trim() : img.alt || '';
var color = COLORS[name] || '#5a6577';
var letter = (name || img.alt || '?').charAt(0);
var fb = document.createElement('span');
fb.className = 'logo-fb';
fb.style.background = color;
fb.textContent = letter;
img.parentNode.replaceChild(fb, img);
}, { once: true });
});
})();
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
'void main(){',' vec3 pos = position;',' vec2 scale = 1.0 - boundarySpace * 2.0;',' pos.xy = pos.xy * scale;',
' uv = vec2(0.5) + (pos.xy) * 0.5;',' gl_Position = vec4(pos, 1.0);','}'
].join('\n');

var ADVECT = [
'precision highp float;','uniform sampler2D velocity;','uniform float dt;','uniform vec2 fboSize;','uniform vec2 px;','varying vec2 uv;',
'void main(){',' vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;',' vec2 spot_new = uv;',
' vec2 vel_old = texture2D(velocity, uv).xy;',' vec2 spot_old = spot_new - vel_old * dt * ratio;',
' vec2 vel_new1 = texture2D(velocity, spot_old).xy;',' vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;',
' vec2 error = spot_new2 - spot_new;',' vec2 spot_new3 = spot_new - error / 2.0;',
' vec2 vel_2 = texture2D(velocity, spot_new3).xy;',' vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;',
' gl_FragColor = vec4(texture2D(velocity, spot_old2).xy, 0.0, 1.0);','}'
].join('\n');

var MOUSE_V = [
'precision highp float;','attribute vec3 position;','attribute vec2 uv;','uniform vec2 center, scale, px;','varying vec2 vUv;',
'void main(){',' vec2 pos = position.xy * scale * 2.0 * px + center;',' vUv = uv;',' gl_Position = vec4(pos, 0.0, 1.0);','}'
].join('\n');

var MOUSE_F = [
'precision highp float;','uniform vec2 force;','varying vec2 vUv;',
'void main(){',' vec2 circle = (vUv - 0.5) * 2.0;',' float d = 1.0 - min(length(circle), 1.0);',' d *= d;',
' gl_FragColor = vec4(force * d, 0.0, 1.0);','}'
].join('\n');

var VISCOUS = [
'precision highp float;','uniform sampler2D velocity;','uniform sampler2D velocity_new;','uniform float v, dt;','uniform vec2 px;','varying vec2 uv;',
'void main(){',' vec2 old = texture2D(velocity, uv).xy;',
' vec2 n0 = texture2D(velocity_new, uv + vec2(px.x*2.0, 0.0)).xy;',
' vec2 n1 = texture2D(velocity_new, uv - vec2(px.x*2.0, 0.0)).xy;',
' vec2 n2 = texture2D(velocity_new, uv + vec2(0.0, px.y*2.0)).xy;',
' vec2 n3 = texture2D(velocity_new, uv - vec2(0.0, px.y*2.0)).xy;',
' vec2 newv = (4.0 * old + v * dt * (n0 + n1 + n2 + n3)) / (4.0 * (1.0 + v * dt));',
' gl_FragColor = vec4(newv, 0.0, 1.0);','}'
].join('\n');

var DIVERGENCE = [
'precision highp float;','uniform sampler2D velocity;','uniform float dt;','uniform vec2 px;','varying vec2 uv;',
'void main(){',' float x0 = texture2D(velocity, uv - vec2(px.x, 0.0)).x;',
' float x1 = texture2D(velocity, uv + vec2(px.x, 0.0)).x;',
' float y0 = texture2D(velocity, uv - vec2(0.0, px.y)).y;',
' float y1 = texture2D(velocity, uv + vec2(0.0, px.y)).y;',
' gl_FragColor = vec4((x1 - x0 + y1 - y0) / 2.0 / dt, 0.0, 0.0, 1.0);','}'
].join('\n');

var PRESSURE = [
'precision highp float;','uniform sampler2D pressure;','uniform sampler2D divergence;','uniform vec2 px;','varying vec2 uv;',
'void main(){',' float p0 = texture2D(pressure, uv + vec2(px.x*2.0, 0.0)).r;',
' float p1 = texture2D(pressure, uv - vec2(px.x*2.0, 0.0)).r;',
' float p2 = texture2D(pressure, uv + vec2(0.0, px.y*2.0)).r;',
' float p3 = texture2D(pressure, uv - vec2(0.0, px.y*2.0)).r;',
' float div = texture2D(divergence, uv).r;',
' gl_FragColor = vec4((p0 + p1 + p2 + p3) / 4.0 - div, 0.0, 0.0, 1.0);','}'
].join('\n');

var GRAD_SUB = [
'precision highp float;','uniform sampler2D pressure;','uniform sampler2D velocity;','uniform vec2 px;','uniform float dt;','varying vec2 uv;',
'void main(){',' float p0 = texture2D(pressure, uv + vec2(px.x, 0.0)).r;',
' float p1 = texture2D(pressure, uv - vec2(px.x, 0.0)).r;',
' float p2 = texture2D(pressure, uv + vec2(0.0, px.y)).r;',
' float p3 = texture2D(pressure, uv - vec2(0.0, px.y)).r;',
' vec2 v = texture2D(velocity, uv).xy;',' v = v - vec2(p0 - p1, p2 - p3) * 0.5 * dt;',
' gl_FragColor = vec4(v, 0.0, 1.0);','}'
].join('\n');

var DISPLAY = [
'precision highp float;','uniform sampler2D velocity;','uniform sampler2D palette;','uniform vec4 bgColor;','varying vec2 uv;',
'void main(){',' vec2 vel = texture2D(velocity, uv).xy;',' float lenv = clamp(length(vel), 0.0, 1.0) * 0.5;',
' vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;',
' gl_FragColor = vec4(mix(bgColor.rgb, c, lenv), mix(bgColor.a, 1.0, lenv));','}'
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
