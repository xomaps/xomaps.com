---
title: "企业文化 - 信朴科技 | 信朴筑路，循拓致远"
description: "信朴科技企业文化：信为本，朴为根。使命、愿景、价值观与行为准则——以可信的工程能力贯穿业务全链路，成为企业可托付、与业务共生长的全链路伙伴。"
keywords: "企业文化,使命,愿景,价值观,行为准则,信朴科技,Xomaps"
nav: "culture"
date: 2026-11-28
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
.btn-accent{background:var(--accent);color:#fff;border-color:var(--accent)}
.btn-accent:hover{background:#c2410c;border-color:#c2410c}
.btn-ghost{background:#fff;color:var(--text);border-color:var(--border-2)}
.btn-ghost:hover{border-color:var(--text);color:var(--text)}
.btn-lg{padding:12px 32px;font-size:15px}

.hero{
position:relative;
margin-top:50px;
min-height:480px;
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
.bg-soft{background:var(--bg-section)}
.sec-head{text-align:center;max-width:760px;margin:0 auto 48px}
.sec-eyebrow{font-size:12.5px;font-weight:600;color:var(--brand);letter-spacing:.12em;text-transform:uppercase;margin-bottom:14px}
.sec-title{font-size:30px;font-weight:700;letter-spacing:-.01em;line-height:1.35;margin-bottom:14px;color:var(--text)}
.sec-title .em{color:var(--brand-text)}
.sec-desc{font-size:14.5px;color:var(--text-2);line-height:1.8}

.reveal{opacity:0;transform:translateY(28px);transition:opacity .7s cubic-bezier(.22,.61,.36,1),transform .7s cubic-bezier(.22,.61,.36,1)}
.reveal-in{opacity:1;transform:none}

/* ===== 品牌取义 ===== */
.brand-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.brand-card{
background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);
padding:32px 28px;transition:all .2s;position:relative;overflow:hidden;
}
.brand-card:hover{border-color:var(--brand);box-shadow:var(--shadow);transform:translateY(-4px)}
.brand-card .letter{
font-size:44px;font-weight:800;color:var(--brand);line-height:1;margin-bottom:14px;
font-family:Georgia,serif;letter-spacing:-.02em;
}
.brand-card .en{font-size:12px;font-weight:600;color:var(--text-3);letter-spacing:.14em;text-transform:uppercase;margin-bottom:10px}
.brand-card h4{font-size:17px;font-weight:700;margin-bottom:10px;color:var(--text)}
.brand-card p{font-size:13.5px;color:var(--text-2);line-height:1.75}

/* ===== 内核 ===== */
.core-band{
margin-top:48px;background:linear-gradient(135deg,#1d4ed8 0%,#1e40af 100%);
border-radius:var(--radius-lg);padding:44px 48px;color:#fff;text-align:center;
}
.core-band .core-line{font-size:24px;font-weight:800;letter-spacing:.06em;margin-bottom:12px}
.core-band p{font-size:14px;color:rgba(255,255,255,.82);line-height:1.85;max-width:640px;margin:0 auto}

/* ===== 使命愿景 ===== */
.mv-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.mv-card{
background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);
padding:36px 32px;transition:all .2s;
}
.mv-card:hover{border-color:var(--brand);box-shadow:var(--shadow)}
.mv-card .mv-tag{display:inline-block;font-size:12px;font-weight:700;color:var(--accent);letter-spacing:.16em;text-transform:uppercase;margin-bottom:16px}
.mv-card h4{font-size:19px;font-weight:700;color:var(--text);line-height:1.6;margin-bottom:12px}
.mv-card p{font-size:13.5px;color:var(--text-2);line-height:1.8}

/* ===== 价值观五卡 ===== */
.value-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px}
.value-card{
background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);
padding:28px 20px;text-align:center;transition:all .2s;
}
.value-card:hover{border-color:var(--brand);box-shadow:var(--shadow);transform:translateY(-4px)}
.value-card .zi{
width:56px;height:56px;border-radius:12px;margin:0 auto 16px;
display:flex;align-items:center;justify-content:center;
background:linear-gradient(135deg,rgba(29,78,216,.12),rgba(29,78,216,.03));
font-size:26px;font-weight:800;color:var(--brand);
}
.value-card h4{font-size:15.5px;font-weight:700;color:var(--text);margin-bottom:4px}
.value-card .v-en{font-size:11px;font-weight:600;color:var(--text-3);letter-spacing:.1em;text-transform:uppercase;margin-bottom:12px}
.value-card p{font-size:12.5px;color:var(--text-2);line-height:1.7}

/* ===== 行为准则 ===== */
.rule-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.rule-card{
background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);
padding:32px 28px;transition:all .2s;
}
.rule-card:hover{border-color:var(--brand);box-shadow:var(--shadow)}
.rule-card .num{font-size:13px;font-weight:700;color:var(--text-3);letter-spacing:.16em;margin-bottom:14px;font-variant-numeric:tabular-nums}
.rule-card h4{font-size:17px;font-weight:700;color:var(--text);margin-bottom:10px}
.rule-card p{font-size:13.5px;color:var(--text-2);line-height:1.8}

/* ===== 口号带 ===== */
.slogan-band{
padding:88px 0;background:linear-gradient(135deg,#0f2c5e 0%,#1d4ed8 100%);text-align:center;
}
.slogan-band .slogan{font-size:clamp(26px,3.4vw,40px);font-weight:800;color:#fff;letter-spacing:.08em;margin-bottom:16px}
.slogan-band p{font-size:14.5px;color:rgba(255,255,255,.78);max-width:620px;margin:0 auto;line-height:1.85}

/* ===== CTA ===== */
.cta{padding:72px 0;text-align:center}
.cta h3{font-size:24px;font-weight:700;color:var(--text);margin-bottom:12px}
.cta p{font-size:14px;color:var(--text-2);margin-bottom:28px}
.cta .btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}

/* ===== 响应式 ===== */
@media (max-width:1024px){
.brand-grid{grid-template-columns:1fr 1fr 1fr;gap:16px}
.value-grid{grid-template-columns:repeat(3,1fr);gap:14px}
}
@media (max-width:768px){
.hero{min-height:380px;padding:60px 0 40px}
.hero h1{font-size:32px}
section{padding:56px 0}
.brand-grid{grid-template-columns:1fr}
.mv-grid{grid-template-columns:1fr}
.value-grid{grid-template-columns:repeat(2,1fr)}
.rule-grid{grid-template-columns:1fr}
.core-band{padding:32px 24px}
.core-band .core-line{font-size:20px}
}
@media (prefers-reduced-motion:reduce){
.reveal{opacity:1;transform:none;transition:none}
}
</style>

<!-- ══════════ Hero ══════════ -->
<header class="hero">
<div class="wrap">
<div class="hero-eyebrow">信朴科技企业文化 · 信为本，朴为根</div>
<h1>
<span class="line1">企业文化</span>
<span class="line2">信朴筑路，循拓致远</span>
</h1>
<p class="sub">言出必行，值得托付；回归本质，删繁就简。这是信朴科技做事的底色，也是我们与企业相处的方式。</p>
<div class="hero-chips">
<span>信为本 · 朴为根</span>
<span>循周期生长</span>
<span>向边界拓展</span>
</div>
<div class="hero-cta">
<a href="#brand" class="btn btn-accent btn-lg">品牌取义</a>
<a href="#values" class="btn btn-ghost btn-lg">价值观</a>
</div>
</div>
</header>

<!-- ══════════ 1. 品牌取义 ══════════ -->
<section id="brand">
<div class="wrap">
<div class="sec-head reveal">
<div class="sec-eyebrow">OUR NAME</div>
<h2 class="sec-title">Xomaps 的<span class="em">三个字母</span>，三条做事的线索</h2>
<p class="sec-desc">品牌名不是装饰，它写的是我们怎么做事：一轮轮沉淀之后，持续突破，打开无限成长可能。</p>
</div>

<div class="brand-grid">
<div class="brand-card reveal">
<div class="letter">X</div>
<div class="en">eXpansion</div>
<h4>突破与无限可能</h4>
<p>不给自己设边界，也不给客户的业务设边界。每一次交付，都向新的能力边界迈一步。</p>
</div>
<div class="brand-card reveal">
<div class="letter">O</div>
<div class="en">Orbit</div>
<h4>周期沉淀</h4>
<p>像轨道一样一轮轮循环、一层层沉淀，信守如期兑现的承诺——承诺过的事，按周期交付。</p>
</div>
<div class="brand-card reveal">
<div class="letter">Maps</div>
<div class="en">Maps</div>
<h4>成长路径</h4>
<p>尊重每家企业自己的脉络，不套统一模板，帮每家企业走出自己的成长路径。</p>
</div>
</div>

<div class="core-band reveal">
<div class="core-line">内核：信为本，朴为根</div>
<p>信，是言出必行、值得托付；朴，是回归本质、删繁就简。守持本源，向外打开无限可能。</p>
</div>
</div>
</section>

<!-- ══════════ 2. 使命与愿景 ══════════ -->
<section class="bg-soft" id="mission">
<div class="wrap">
<div class="sec-head reveal">
<div class="sec-eyebrow">MISSION &amp; VISION</div>
<h2 class="sec-title">使命与<span class="em">愿景</span></h2>
<p class="sec-desc">以可信的工程能力贯穿业务全链路，成为企业可托付、与业务共生长的全链路伙伴。</p>
</div>

<div class="mv-grid">
<div class="mv-card reveal">
<div class="mv-tag">Mission · 使命</div>
<h4>以可信的工程能力贯穿业务全链路，让企业业务资产持续沉淀、自主演进</h4>
<p>AI 与软件建设不是一次性项目，而是持续积累的业务资产。我们用可信的工程能力，把每一次落地沉淀为企业自己的、能够自主演进的长期能力。</p>
</div>
<div class="mv-card reveal">
<div class="mv-tag">Vision · 愿景</div>
<h4>成为企业可托付、与业务共生长的全链路伙伴</h4>
<p>从场景诊断到方案落地，从系统建设到持续运营，长期陪伴企业的业务演进，与业务共同生长。</p>
</div>
</div>
</div>
</section>

<!-- ══════════ 3. 价值观 ══════════ -->
<section id="values">
<div class="wrap">
<div class="sec-head reveal">
<div class="sec-eyebrow">OUR VALUES</div>
<h2 class="sec-title">五个字，<span class="em">五条价值观</span></h2>
<p class="sec-desc">信、朴、循、拓、路——取自信朴的品牌内核，落在每一次交付的日常里。</p>
</div>

<div class="value-grid">
<div class="value-card reveal">
<div class="zi">信</div>
<h4>信</h4>
<div class="v-en">Integrity</div>
<p>言出必行，值得托付</p>
</div>
<div class="value-card reveal">
<div class="zi">朴</div>
<h4>朴</h4>
<div class="v-en">Simplicity</div>
<p>回归本质，删繁就简</p>
</div>
<div class="value-card reveal">
<div class="zi">循</div>
<h4>循</h4>
<div class="v-en">Momentum</div>
<p>闭环沉淀，持续打磨</p>
</div>
<div class="value-card reveal">
<div class="zi">拓</div>
<h4>拓</h4>
<div class="v-en">Expansion</div>
<p>向下扎根，向外拓界</p>
</div>
<div class="value-card reveal">
<div class="zi">路</div>
<h4>路</h4>
<div class="v-en">Path</div>
<p>尊重脉络，自成路径</p>
</div>
</div>
</div>
</section>

<!-- ══════════ 4. 行为准则 ══════════ -->
<section class="bg-soft" id="principles">
<div class="wrap">
<div class="sec-head reveal">
<div class="sec-eyebrow">PRINCIPLES</div>
<h2 class="sec-title">行为准则：<span class="em">怎么做事</span></h2>
<p class="sec-desc">三条准则，约束我们自己，也定义客户能从我们这里得到什么。</p>
</div>

<div class="rule-grid">
<div class="rule-card reveal">
<div class="num">PRINCIPLE 01</div>
<h4>工程优先，理性用智</h4>
<p>用工程方法而非概念包装解决问题；对技术与工具保持理性判断，把力气花在可验证的结果上。</p>
</div>
<div class="rule-card reveal">
<div class="num">PRINCIPLE 02</div>
<h4>开放协作，长期迭代</h4>
<p>以开放姿态与客户、伙伴协作；不追求一次交付到位，而是在持续迭代中把事情越做越好。</p>
</div>
<div class="rule-card reveal">
<div class="num">PRINCIPLE 03</div>
<h4>审慎落地，风险可控</h4>
<p>对每一次落地保持审慎：先验证、再推广，方案渐进演进，风险始终控制在可承受范围内。</p>
</div>
</div>
</div>
</section>

<!-- ══════════ 口号带 ══════════ -->
<section class="slogan-band">
<div class="wrap">
<div class="slogan reveal">信朴筑路，循拓致远</div>
<p class="reveal">循周期生长，向边界拓展。在一轮轮沉淀之后，持续突破，打开无限成长可能。</p>
</div>
</section>

<!-- ══════════ CTA ══════════ -->
<section class="cta">
<div class="wrap">
<h3>认同这样的做事方式？</h3>
<p>欢迎与我们聊聊您的业务场景与落地路径。</p>
<div class="btns">
<a href="/contact.html#form" class="btn btn-accent btn-lg">联系信朴科技</a>
<a href="/about.html" class="btn btn-ghost btn-lg">了解信朴科技</a>
</div>
</div>
</section>

<script>
(function(){
var sels='.brand-card,.mv-card,.value-card,.rule-card,.core-band,.sec-head,.slogan-band .slogan,.slogan-band p';
var els=document.querySelectorAll(sels);
var io=new IntersectionObserver(function(es){
es.forEach(function(e){
if(e.isIntersecting){e.target.classList.add('reveal-in');io.unobserve(e.target);}
});
},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
els.forEach(function(el){io.observe(el);});
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
