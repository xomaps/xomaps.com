---
title: "信朴科技 | 自研软件产品与企业 AI 落地服务商"
description: "广州信朴科技有限公司以自研底座为支撑，自研软件产品产权自有、按需求交付，支持 SaaS 订阅、私有化部署与一站式全包交付（域名、服务器、SSL 证书与域名解析一并配齐），并上架云市场与企业微信应用市场。同时提供企业 AI 落地、Agent 定制与 AI 原生研发服务。"
keywords: "自研软件,软件授权,私有化部署,SaaS订阅,一站式交付,企业微信应用,云市场,Agent定制,企业AI落地,信朴科技"
nav: "home"
date: 2026-11-18
draft: false
------

<style>
:root{
--ink:#0a0e1a;--ink-2:#1a2236;
--brand:#1d4ed8;--brand-2:#1e4ca8;--brand-glow:rgba(30,76,168,.12);
--accent:#d9480f;--accent-soft:rgba(217,72,15,.08);
--text:#0a0e1a;--text-2:#5a6577;--text-3:#9aa4b8;
--bg:#fafbfd;--bg-card:#ffffff;--bg-soft:#f4f6fa;
--border:#ebedf3;--border-soft:#f0f2f7;
--radius:12px;--radius-lg:18px;--radius-xl:24px;
--shadow-xs:0 1px 2px rgba(10,14,26,.03);
--shadow-sm:0 2px 8px rgba(10,14,26,.04);
--shadow:0 8px 32px rgba(10,14,26,.06);
--shadow-lg:0 24px 64px rgba(10,14,26,.08);
--maxw:1280px;
--ft-bg:#ffffff;--ft-bg-2:#e0f2fe;--ft-text:#1f2937;--ft-text-2:#4b5563;--ft-text-3:#6b7280;
--ft-line:#dbe7f5;--ft-hover:#2563eb;
--brand-b:#2563eb;--brand-b2:#3b82f6;--brand-text:#0f2c5e;
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
font-family:"PingFang SC","HarmonyOS Sans SC","Microsoft YaHei",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
color:var(--text);background:#f5f8fc;line-height:1.7;font-size:15px;
-webkit-font-smoothing:antialiased;overflow-x:hidden;letter-spacing:.005em;
}
section,footer{position:relative;z-index:2}
#fluid-wrap{position:fixed;inset:0;z-index:1;pointer-events:none;overflow:hidden}
#fluid-wrap canvas{display:block;width:100%;height:100%}
a{color:inherit;text-decoration:none}
img{display:block;max-width:100%}
ul{list-style:none}
.wrap{max-width:var(--maxw);margin:0 auto;padding:0 32px;position:relative;z-index:2}
section{padding:96px 0;position:relative}
.bg-soft{background:rgba(244,246,250,.78)}
.bg-gradient{background:linear-gradient(180deg,rgba(255,255,255,.82) 0%,rgba(238,244,252,.86) 100%)}

@keyframes bgFlow{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}

/* ===== 全屏加载动画 ===== */
#page-loader{position:fixed;inset:0;z-index:999999;display:flex;align-items:center;justify-content:center;overflow:hidden;
background:linear-gradient(135deg,#f8fbff 0%,#eaf5ff 45%,#ffffff 100%);transition:opacity .65s ease,visibility .65s ease}
#page-loader.done{opacity:0;visibility:hidden;pointer-events:none}
#page-loader .loader-bg-blob{position:absolute;top:50%;left:50%;width:640px;height:640px;border-radius:50%;
background:radial-gradient(circle,rgba(59,130,246,.22) 0%,rgba(59,130,246,.08) 45%,transparent 65%);
transform:translate(-50%,-50%);animation:loaderBlob 5.5s ease-in-out infinite}
@keyframes loaderBlob{0%,100%{transform:translate(-50%,-50%) scale(1);opacity:.9}50%{transform:translate(-50%,-50%) scale(1.25);opacity:.6}}
#page-loader .loader-inner{text-align:center;color:var(--ink);position:relative;z-index:2;padding:0 24px}
#page-loader .loader-logo img{height:128px;margin:0 auto 22px;animation:loaderPulse 2.2s ease-in-out infinite}
@keyframes loaderPulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.06);opacity:.85}}
#page-loader .loader-slogan{font-size:24px;letter-spacing:.32em;color:rgba(31,41,55,.55);margin-bottom:12px;text-transform:uppercase}
#page-loader .loader-brand{font-size:54px;font-weight:800;letter-spacing:.05em;margin-bottom:40px;color:var(--ink)}
#page-loader .loader-brand .em{font-size:24px;font-weight:500;color:rgba(31,41,55,.45);letter-spacing:.28em;margin-left:12px}
#page-loader .loader-progress{width:min(340px,72vw);height:2px;background:rgba(31,41,55,.12);border-radius:2px;margin:0 auto 16px;overflow:hidden}
#page-loader .loader-progress .bar{height:100%;width:0;border-radius:2px;background:linear-gradient(90deg,#3b82f6,#7fb0ff,#3b82f6);background-size:200% 100%;animation:loaderBar 1.6s linear infinite;transition:width .12s linear}
@keyframes loaderBar{0%{background-position:0 0}100%{background-position:200% 0}}
#page-loader .loader-percent{font-size:12px;color:rgba(31,41,55,.5);letter-spacing:.22em;font-variant-numeric:tabular-nums}


/* ===== Hero 轮播 ===== */
.hero{padding:0;min-height:640px;overflow:hidden}
.hero-slider{position:relative;overflow:hidden;min-height:640px}
.hero-slide{position:absolute;inset:0;opacity:0;visibility:hidden;transition:opacity 1s ease,visibility 1s;display:flex;align-items:center}
.hero-slide.active{position:relative;opacity:1;visibility:visible}
.hero-slide .bg{position:absolute;inset:0;background: #eaf2fc url(/assets/img/20260814/ban3.png) center / cover no-repeat;z-index:0;opacity:0.92}
.hero-slide.active .bg{animation:heroZoom 9s ease-out forwards}
@keyframes heroZoom{0%{transform:scale(1.06)}100%{transform:scale(1)}}
.hero-slide:nth-child(2) .bg{filter:hue-rotate(-8deg) brightness(.97)}
.hero-slide:nth-child(3) .bg{filter:hue-rotate(8deg) brightness(1.02)}
.hero-slide .bg::after{content:"";position:absolute;inset:0;
background:linear-gradient(105deg,rgba(255,255,255,.92) 0%,rgba(255,255,255,.78) 34%,rgba(234,242,252,.35) 62%,rgba(234,242,252,.15) 100%)}
.hero-slide .wrap{position:relative;z-index:2;padding-top:140px;padding-bottom:110px}
.hero-eyebrow{display:inline-flex;align-items:center;gap:12px;font-size:11.5px;color:var(--brand);font-weight:600;margin-bottom:26px;letter-spacing:.16em;text-transform:uppercase}
.hero-eyebrow .dot{width:6px;height:6px;border-radius:50%;background:var(--accent);box-shadow:0 0 10px var(--accent);animation:dotBlink 2s ease-in-out infinite}
@keyframes dotBlink{0%,100%{opacity:1}50%{opacity:.4}}
.hero h1{font-size:clamp(36px,5.2vw,46px);line-height:1.14;font-weight:800;letter-spacing:-.03em;margin-bottom:24px;color:var(--ink)}
.hero h1 .line1,.hero h1 .line2{display:block}
.hero h1 .line2{background:linear-gradient(135deg,#1e4ca8 0%,#1d4ed8 60%,#3b82f6 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero .sub{font-size:clamp(15px,1.2vw,16.5px);line-height:1.9;color:var(--text-2);max-width:640px;margin-bottom:28px;font-weight:400}
.hero-chips{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:38px}
.hero-chips span{font-size:12.5px;font-weight:500;padding:6px 15px;border-radius:100px;background:rgba(255,255,255,.75);border:1px solid var(--border);color:var(--text-2);backdrop-filter:blur(8px);transition:all .3s}
.hero-chips span:hover{border-color:var(--brand);color:var(--brand);transform:translateY(-2px)}
.hero-slide.active .hero-eyebrow,.hero-slide.active h1,.hero-slide.active .sub,.hero-slide.active .hero-chips,.hero-slide.active .hero-cta{animation:heroUp .9s cubic-bezier(.22,1,.36,1) both}
.hero-slide.active h1{animation-delay:.1s}
.hero-slide.active .sub{animation-delay:.2s}
.hero-slide.active .hero-chips{animation-delay:.3s}
.hero-slide.active .hero-cta{animation-delay:.4s}
@keyframes heroUp{0%{opacity:0;transform:translateY(34px)}100%{opacity:1;transform:none}}
.hero-cta{display:flex;gap:14px;flex-wrap:wrap}
.btn{display:inline-flex;align-items:center;gap:8px;padding:14px 30px;border-radius:10px;font-size:14.5px;font-weight:500;cursor:pointer;
transition:all .3s cubic-bezier(.22,1,.36,1);border:1px solid transparent;font-family:inherit;white-space:nowrap;letter-spacing:.01em}
.btn svg{width:16px;height:16px;transition:transform .3s}
.btn-lg{padding:16px 36px;font-size:15.5px}
.btn-accent{background:var(--accent);color:#fff;box-shadow:0 4px 24px rgba(217,72,15,.3)}
.btn-accent:hover{background:#c2410c;transform:translateY(-2px);box-shadow:0 8px 32px rgba(217,72,15,.4);color:#fff}
.btn-ghost{background:rgba(255,255,255,.7);color:var(--ink);border-color:var(--border);backdrop-filter:blur(8px)}
.btn-ghost:hover{border-color:var(--accent);background:var(--accent);color:#fff;transform:translateY(-2px)}
.hero-float{position:absolute;top:50%;transform:translateY(-50%);z-index:3;display:flex;flex-direction:column;gap:14px}
.hf-card{display:flex;align-items:center;gap:14px;padding:16px 20px;border-radius:var(--radius-lg);background:rgba(255,255,255,.85);
border:1px solid var(--border);backdrop-filter:blur(14px);box-shadow:var(--shadow);transition:all .4s cubic-bezier(.22,1,.36,1)}
.hf-card:hover{transform:translateX(-8px);box-shadow:var(--shadow-lg)}
.hf-icon{width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.hf-icon svg{width:22px;height:22px}
.hf-num{font-size:22px;font-weight:800;color:var(--ink);letter-spacing:-.02em;line-height:1.1;font-variant-numeric:tabular-nums}
.hf-num .unit{font-size:12px;font-weight:600;color:var(--text-2);margin-left:2px}
.hf-label{font-size:11.5px;color:var(--text-3);letter-spacing:.02em}
.hero-arrows{position:absolute;left:calc((100vw - 1280px)/2);bottom:96px;z-index:5;display:flex;gap:10px}
.hero-arrow{width:46px;height:46px;border-radius:50%;border:1px solid var(--border);background:rgba(255,255,255,.8);
backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--ink);
transition:all .3s cubic-bezier(.22,1,.36,1)}
.hero-arrow svg{width:18px;height:18px}
.hero-arrow:hover{background:var(--brand);border-color:var(--brand);color:#fff;transform:scale(1.08)}
.hero-indicators{position:absolute;left:calc((100vw - 1280px)/2 + 116px);bottom:114px;z-index:5;display:flex;gap:8px;align-items:center}
.hero-indicators button{width:26px;height:4px;border-radius:4px;border:none;background:rgba(10,14,26,.18);cursor:pointer;transition:all .35s cubic-bezier(.22,1,.36,1);padding:0}
.hero-indicators button:hover{background:rgba(10,14,26,.38)}
.hero-indicators button.active{width:44px;background:var(--brand)}
.hero-progress{position:absolute;left:0;right:0;bottom:0;height:3px;background:rgba(10,14,26,.08);z-index:5}
.hero-progress .bar{height:100%;width:0;background:linear-gradient(90deg,var(--brand),#3b82f6)}

/* ===== 信任指标条 ===== */
.trust-bar{background:rgba(255,255,255,.88);border-bottom:1px solid var(--border);position:relative;z-index:4;backdrop-filter:blur(6px)}
.trust-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.trust-item{display:flex;align-items:center;justify-content:center;gap:10px;padding:6px 8px;transition:transform .3s}
.trust-item:hover{transform:translateY(-2px)}
.trust-item svg{width:19px;height:19px;color:var(--brand);flex-shrink:0}
.trust-item .tv{font-size:13.5px;color:var(--text-2);font-weight:500}
.trust-item .tv .accent{color:var(--accent);font-weight:700}

/* ===== 区块标题通用 ===== */
.sec-head{margin-bottom:52px}
.sec-eyebrow{font-size:11.5px;font-weight:600;color:var(--brand);letter-spacing:.18em;text-transform:uppercase;margin-bottom:14px;display:flex;align-items:center;gap:12px}
.sec-eyebrow .dot{width:6px;height:6px;border-radius:50%;background:var(--brand)}
.sec-title{font-size:clamp(26px,3.2vw,40px);font-weight:800;color:var(--ink);letter-spacing:-.025em;line-height:1.25}
.sec-title .em{color:var(--brand)}
.sec-desc{font-size:15px;color:var(--text-2);max-width:640px;margin-top:14px;line-height:1.85}

/* ===== 七大服务横向轮播 ===== */
.svc-carousel-wrap{position:relative;margin:0 -32px;padding:0 32px}
.svc-carousel{overflow:hidden;cursor:grab}
.svc-carousel.grabbing{cursor:grabbing}
.svc-track{display:flex;gap:18px;transition:transform .55s cubic-bezier(.22,1,.36,1)}
.svc-carousel.grabbing .svc-track{transition:none}
.svc-card{flex:0 0 calc((100% - 54px)/4);background:var(--bg-card);border:1px solid var(--border-soft);border-radius:var(--radius-lg);
overflow:hidden;position:relative;box-shadow:var(--shadow-sm);transition:transform .45s cubic-bezier(.22,1,.36,1),box-shadow .45s,border-color .45s;display:flex;flex-direction:column}
.svc-card:hover{transform:translateY(-8px);box-shadow:var(--shadow-lg);border-color:rgba(30,76,168,.22)}
.svc-num{position:absolute;top:14px;right:18px;z-index:2;font-size:44px;font-weight:800;color:rgba(10,14,26,.06);letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums;transition:color .4s}
.svc-card:hover .svc-num{color:rgba(29,78,216,.14)}
.svc-thumb{position:relative;height:150px;overflow:hidden;background:var(--bg-soft)}
.svc-thumb img{width:100%;height:100%;object-fit:cover;transition:transform .7s cubic-bezier(.22,1,.36,1)}
.svc-card:hover .svc-thumb img{transform:scale(1.07)}
.svc-thumb::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(10,14,26,.18));opacity:.6;transition:opacity .4s}
.svc-card:hover .svc-thumb::after{opacity:.9}
.svc-body{padding:24px 24px 26px;display:flex;flex-direction:column;flex:1}
.svc-icon{width:42px;height:42px;border-radius:11px;display:flex;align-items:center;justify-content:center;margin-bottom:14px;
background:linear-gradient(135deg,rgba(29,78,216,.1),rgba(59,130,246,.05));color:var(--brand);transition:all .4s}
.svc-icon svg{width:21px;height:21px}
.svc-card:hover .svc-icon{background:linear-gradient(135deg,var(--brand),#3b82f6);color:#fff;transform:rotate(-6deg) scale(1.05)}
.svc-body h4{font-size:18px;font-weight:700;color:var(--ink);letter-spacing:-.015em;margin-bottom:6px}
.svc-tag{font-size:12px;font-weight:600;color:var(--brand);margin-bottom:14px;letter-spacing:.02em}
.svc-features{margin-bottom:20px;flex:1}
.svc-features li{position:relative;padding-left:16px;font-size:12.8px;color:var(--text-2);line-height:1.75;margin-bottom:6px}
.svc-features li::before{content:"";position:absolute;left:0;top:.62em;width:6px;height:6px;border-radius:2px;background:var(--brand);opacity:.45;transform:rotate(45deg)}
.svc-link{display:inline-flex;align-items:center;gap:6px;font-size:13.5px;font-weight:600;color:var(--ink);transition:all .3s;align-self:flex-start}
.svc-link svg{width:15px;height:15px;transition:transform .3s}
.svc-card:hover .svc-link{color:var(--brand);gap:10px}
.svc-card:hover .svc-link svg{transform:translateX(3px)}
.svc-controls{display:flex;align-items:center;justify-content:center;gap:20px;margin-top:36px}
.svc-prev,.svc-next{width:46px;height:46px;border-radius:50%;border:1px solid var(--border);background:var(--bg-card);
display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--ink);transition:all .3s cubic-bezier(.22,1,.36,1)}
.svc-prev svg,.svc-next svg{width:18px;height:18px}
.svc-prev:hover:not(:disabled),.svc-next:hover:not(:disabled){background:var(--brand);border-color:var(--brand);color:#fff;transform:scale(1.08)}
.svc-prev:disabled,.svc-next:disabled{opacity:.35;cursor:default}
.svc-dots{display:flex;gap:8px}
.svc-dots span{width:8px;height:8px;border-radius:50%;background:var(--border);cursor:pointer;transition:all .35s cubic-bezier(.22,1,.36,1);padding:0;border:none}
.svc-dots span:hover{background:var(--text-3)}
.svc-dots span.active{width:26px;border-radius:4px;background:var(--brand)}

/* ===== 关于我们 ===== */
.about-layout{display:grid;grid-template-columns:1fr 1.15fr;gap:60px;align-items:stretch}
.about-media{position:relative;border-radius:var(--radius-xl);overflow:hidden;box-shadow:0 28px 80px rgba(29,78,216,.14),0 10px 24px rgba(10,14,26,.08);
background:#fff;border:1px solid #d7e3f4;min-height:480px}
.about-media .img-frame{position:relative;width:100%;height:100%;border-radius:var(--radius-lg);overflow:hidden;background:linear-gradient(135deg,#eef4fc,#f8fbff)}
.about-media img{width:100%;height:100%;object-fit:cover;object-position:top center;transition:transform 1s cubic-bezier(.22,1,.36,1);display:block}
.about-media:hover img{transform:scale(1.05)}
.about-media .img-badge{position:absolute;top:24px;left:24px;z-index:3;background:var(--brand);color:#fff;font-size:12px;font-weight:700;
padding:6px 14px;border-radius:999px;box-shadow:0 6px 18px rgba(29,78,216,.28);letter-spacing:.04em}
.about-media .float-stat{position:absolute;left:24px;right:24px;bottom:24px;z-index:3;background:rgba(255,255,255,.95);backdrop-filter:blur(8px);
border:1px solid rgba(215,227,244,.8);border-radius:14px;padding:16px 18px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;box-shadow:0 8px 24px rgba(10,14,26,.1)}
.about-media .float-stat .fs-item{text-align:center}
.about-media .float-stat .fs-num{font-size:22px;font-weight:800;color:var(--brand);letter-spacing:-.02em;line-height:1}
.about-media .float-stat .fs-num .unit{font-size:12px;font-weight:600;color:var(--text-2);margin-left:2px}
.about-media .float-stat .fs-label{font-size:11px;color:var(--text-3);margin-top:6px;letter-spacing:.02em}
.about-content{display:flex;flex-direction:column;gap:22px}
.about-intro{font-size:15px;color:var(--text-2);line-height:2;letter-spacing:.005em}
.about-intro strong{color:var(--ink);font-weight:700}
.about-highlights{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.about-highlights .ah-item{padding:18px 16px;background:var(--bg-card);border:1px solid var(--border-soft);border-radius:var(--radius);transition:all .35s cubic-bezier(.22,1,.36,1)}
.about-highlights .ah-item:hover{border-color:var(--brand);transform:translateY(-3px);box-shadow:var(--shadow)}
.about-highlights .ah-icon{width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:10px;
background:linear-gradient(135deg,rgba(29,78,216,.1),rgba(59,130,246,.05));color:var(--brand)}
.about-highlights .ah-icon svg{width:18px;height:18px}
.about-highlights .ah-title{font-size:13.5px;font-weight:700;color:var(--ink);margin-bottom:4px;letter-spacing:-.01em}
.about-highlights .ah-desc{font-size:11.5px;color:var(--text-3);line-height:1.6}
.about-quote{position:relative;padding:22px 24px 20px 30px;background:linear-gradient(135deg,rgba(29,78,216,.05),rgba(59,130,246,.02));
border:1px solid rgba(29,78,216,.12);border-left:3px solid var(--brand);border-radius:var(--radius)}
.about-quote::before{content:"C";position:absolute;top:-6px;left:14px;font-size:46px;color:rgba(29,78,216,.2);font-family:Georgia,serif;line-height:1}
.about-quote p{font-size:14.5px;color:var(--ink);line-height:1.85;font-weight:500;letter-spacing:.005em}
.about-quote .aq-author{font-size:12px;color:var(--text-3);margin-top:10px;letter-spacing:.04em}
.about-services-row{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:40px}
.about-services-row .as-card{padding:20px 14px;background:var(--bg-card);border:1px solid var(--border-soft);border-radius:var(--radius);
text-align:center;transition:all .35s cubic-bezier(.22,1,.36,1);text-decoration:none}
.about-services-row .as-card:hover{border-color:var(--brand);transform:translateY(-4px);box-shadow:var(--shadow)}
.about-services-row .as-icon{width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;margin:0 auto 10px;
background:linear-gradient(135deg,rgba(29,78,216,.08),rgba(59,130,246,.04));color:var(--brand);transition:all .35s}
.about-services-row .as-icon svg{width:20px;height:20px}
.about-services-row .as-card:hover .as-icon{background:linear-gradient(135deg,var(--brand),#3b82f6);color:#fff;transform:rotate(-5deg)}
.about-services-row .as-title{font-size:13px;font-weight:700;color:var(--ink);letter-spacing:-.01em}

/* ===== 为什么选择信朴科技 ===== */
.why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.why-card{background:var(--bg-card);border:1px solid var(--border-soft);border-radius:var(--radius-lg);padding:30px 26px;
box-shadow:var(--shadow-xs);transition:transform .45s cubic-bezier(.22,1,.36,1),box-shadow .45s,border-color .45s;position:relative;overflow:hidden}
.why-card::before{content:"";position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--brand),#3b82f6);
transform:scaleX(0);transform-origin:left;transition:transform .5s cubic-bezier(.22,1,.36,1)}
.why-card:hover{transform:translateY(-8px);box-shadow:var(--shadow-lg);border-color:rgba(30,76,168,.2)}
.why-card:hover::before{transform:scaleX(1)}
.why-icon{width:46px;height:46px;border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:18px;
background:linear-gradient(135deg,rgba(29,78,216,.1),rgba(59,130,246,.05));color:var(--brand);transition:all .4s}
.why-icon svg{width:22px;height:22px}
.why-card:hover .why-icon{background:linear-gradient(135deg,var(--brand),#3b82f6);color:#fff;transform:rotate(-6deg)}
.why-card h4{font-size:16.5px;font-weight:700;color:var(--ink);letter-spacing:-.01em;margin-bottom:10px}
.why-card p{font-size:13.5px;color:var(--text-2);line-height:1.85}

/* ===== 方法论 ===== */
.method-wrap{position:relative;background: #eaf2fc url(/assets/img/20260814/ban3.png) center / cover no-repeat;border:1px solid var(--border-soft);border-radius:var(--radius-xl);
padding:64px 60px;box-shadow:var(--shadow);overflow:hidden;backdrop-filter:blur(4px)}
.method-wrap::before{content:"";position:absolute;top:-160px;right:-120px;width:420px;height:420px;border-radius:50%;
background:radial-gradient(circle,rgba(30,76,168,.08),transparent 65%);pointer-events:none}
.method-head{margin-bottom:48px}
.method-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:26px;position:relative}
.method-grid::before{content:"";position:absolute;top:31px;left:6%;right:6%;height:2px;
background:linear-gradient(90deg,transparent,rgba(29,78,216,.25) 15%,rgba(29,78,216,.25) 85%,transparent)}
.method-step{position:relative;text-align:center;padding-top:8px}
.ms-icon{width:62px;height:62px;border-radius:50%;margin:0 auto 18px;display:flex;align-items:center;justify-content:center;
background:var(--bg-card);border:2px solid rgba(29,78,216,.25);color:var(--brand);position:relative;z-index:2;transition:all .4s cubic-bezier(.22,1,.36,1)}
.ms-icon svg{width:26px;height:26px}
.method-step:hover .ms-icon{background:linear-gradient(135deg,var(--brand),#3b82f6);border-color:transparent;color:#fff;transform:scale(1.1);box-shadow:0 10px 30px rgba(29,78,216,.35)}
.ms-label{font-size:11px;font-weight:700;color:var(--accent);letter-spacing:.14em;margin-bottom:8px;text-transform:uppercase}
.method-step h4{font-size:16px;font-weight:700;color:var(--ink);margin-bottom:8px;letter-spacing:-.01em}
.method-step p{font-size:12.8px;color:var(--text-2);line-height:1.8}

/* ===== 数据 ===== */
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.stat-card{background:var(--bg-card);border:1px solid var(--border-soft);border-radius:var(--radius-lg);padding:34px 20px;
text-align:center;box-shadow:var(--shadow-xs);transition:transform .45s cubic-bezier(.22,1,.36,1),box-shadow .45s}
.stat-card:hover{transform:translateY(-6px);box-shadow:var(--shadow)}
.stat-num{font-size:clamp(34px,3.4vw,44px);font-weight:800;letter-spacing:-.03em;line-height:1;margin-bottom:12px;font-variant-numeric:tabular-nums}
.stat-num .accent{background:#3b82f6;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.stat-num .unit{font-size:15px;font-weight:600;color:var(--text-2);margin-left:3px}
.stat-label{font-size:13px;color:var(--text-3);letter-spacing:.03em}

/* ===== 合作伙伴跑马灯 ===== */
.partner-section{overflow:hidden}
.partner-track-wrap{overflow:hidden;-webkit-mask:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);
mask:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)}
.partner-track{display:flex;gap:16px;width:max-content;animation:marquee 38s linear infinite}
.partner-track:hover{animation-play-state:paused}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.partner-logo{flex:none;width:176px;height:90px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);
display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:10px 8px;
filter:grayscale(1);opacity:.78;transition:all .4s cubic-bezier(.22,1,.36,1)}
.partner-logo:hover{filter:grayscale(0);opacity:1;border-color:rgba(29,78,216,.35);box-shadow:var(--shadow);transform:translateY(-5px) scale(1.04);background:#fff}
.partner-logo svg{height:30px;width:auto;display:block}
.partner-logo .pl-name{font-size:13px;font-weight:800;color:var(--ink);letter-spacing:.02em;text-align:center;line-height:1.15;white-space:nowrap}
.partner-logo .pl-sub{font-size:10px;color:var(--text-3);letter-spacing:.04em;text-align:center}

/* ===== 客户墙 ===== */
.clients-section{padding:120px 0;background:var(--bg-card);border-top:1px solid var(--border);border-bottom:1px solid var(--border);overflow:hidden}
.clients-head{margin-bottom:56px}
.clients-marquee{display:flex;gap:16px;animation:marquee 45s linear infinite;width:max-content}
.clients-marquee:hover{animation-play-state:paused}
@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
.client-chip{flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;
min-width:180px;padding:28px 24px;background:var(--bg-soft);border:1px solid var(--border-soft);
border-radius:var(--radius);transition:all .3s cubic-bezier(.22,1,.36,1)}
.client-chip .logo-img{width:48px;height:48px;display:flex;align-items:center;justify-content:center;margin-bottom:8px;opacity:.85;transition:opacity .3s}
.client-chip .logo-img img{width:48px;height:48px;border-radius:10px;object-fit:cover;box-shadow:0 4px 12px rgba(30,76,168,.12)}
.client-chip:hover .logo-img{opacity:1}
.client-chip .logo-mono{width:48px;height:48px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:800;color:var(--brand,#2563eb);background:linear-gradient(135deg,rgba(37,99,235,.12),rgba(37,99,235,.03));box-shadow:0 4px 12px rgba(30,76,168,.12)}
.client-chip:hover{background:var(--bg-card);border-color:var(--border);box-shadow:var(--shadow-sm);transform:translateY(-4px)}
.client-chip .name{font-size:16px;font-weight:700;color:var(--ink);letter-spacing:-.01em}
.client-chip .industry{font-size:11.5px;color:var(--text-3);letter-spacing:.02em}
.marquee-track{display:flex;gap:16px;width:max-content}
.clients-marquee-wrap{overflow:hidden;mask-image:linear-gradient(90deg,transparent 0%,#000 6%,#000 94%,transparent 100%)}
/* ===== 行业覆盖 ===== */
.industry-cloud{display:flex;flex-wrap:wrap;gap:14px}
.industry-cloud span{padding:12px 26px;border-radius:100px;background:var(--bg-card);border:1px solid var(--border);
font-size:14px;font-weight:600;color:var(--text-2);transition:all .35s cubic-bezier(.22,1,.36,1);cursor:default}
.industry-cloud span:hover{border-color:var(--brand);color:var(--brand);transform:translateY(-4px) scale(1.04);box-shadow:var(--shadow)}
.industry-cloud .hot{border-color:rgba(29,78,216,.3);color:var(--brand);background:linear-gradient(135deg,rgba(29,78,216,.06),rgba(59,130,246,.03));position:relative}
.industry-cloud .hot::after{content:"HOT";position:absolute;top:-8px;right:-6px;font-size:8.5px;font-weight:800;color:#fff;
background:var(--accent);border-radius:4px;padding:2px 5px;letter-spacing:.08em}


/* ===== 滚动渐入（JS IntersectionObserver 驱动） ===== */
.sec-head,.svc-card,.why-card,.method-step,.stat-card,.industry-cloud span,.trust-item,.about-layout,.partner-logo,.svc-carousel-wrap,.svc-controls,.about-video{
opacity:0;transform:translateY(30px);
transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .8s cubic-bezier(.22,1,.36,1)}
.reveal-in{opacity:1 !important;transform:none !important}

/* ===== 鼠标跟随光效 ===== */
.glow-host{position:relative}
.glow-follow{position:absolute;inset:0;pointer-events:none;z-index:1;opacity:0;transition:opacity .5s;
background:radial-gradient(320px circle at var(--mx,50%) var(--my,50%),rgba(37,99,235,.07),transparent 62%)}
.glow-host:hover .glow-follow{opacity:1}

/* ===== 响应式 ===== */
@media(max-width:1280px){.hero-float{display:none}.hero-arrows{left:32px}.hero-indicators{left:150px}}
@media(max-width:1080px){
.hero,.hero-slider{min-height:560px}
.hero-slide .wrap{padding-top:120px;padding-bottom:100px}
.trust-grid{grid-template-columns:repeat(2,1fr);gap:8px}
.svc-card{flex-basis:calc((100% - 18px)/2)}
.about-layout{grid-template-columns:1fr;gap:44px}
.why-grid,.method-grid,.stats-grid{grid-template-columns:repeat(2,1fr)}
.method-wrap{padding:48px 40px}
.method-grid::before{display:none}
.hero-arrows{bottom:110px}
}
@media(max-width:680px){
section{padding:72px 0}
.hero,.hero-slider{min-height:520px}
.hero-slide .wrap{padding-top:110px;padding-bottom:96px}
.hero-arrows{left:24px;bottom:96px}
.hero-indicators{left:130px;bottom:112px}
.trust-grid{grid-template-columns:1fr;gap:2px}
.svc-card{flex-basis:100%}
.why-grid,.method-grid,.stats-grid,.about-services{grid-template-columns:1fr}
.about-video{padding:10px;max-height:460px}
.about-video .img-badge{top:18px;left:18px;font-size:11px;padding:5px 10px}
.about-video .img-caption{left:18px;right:18px;bottom:18px;padding:9px 12px;font-size:12px}
.cta-contact{gap:16px}
.method-wrap{padding:40px 24px}
.svc-carousel-wrap{margin:0 -16px;padding:0 16px}
}
@media (prefers-reduced-motion: reduce){
*{animation-duration:.01ms !important;transition-duration:.01ms !important}
.sec-head,.svc-card,.why-card,.method-step,.stat-card,.industry-cloud span,.trust-item,.about-layout,.partner-logo,.svc-carousel-wrap,.svc-controls,.about-video{opacity:1;transform:none}
#page-loader{display:none}
}
</style>

<div id="fluid-wrap"></div>


<div id="page-loader">
<div class="loader-bg-blob"></div>
<div class="loader-inner">
<div class="loader-logo"><img src="/assets/img/brand/xomaps-logo-temp.png" alt="信朴科技"></div>
<div class="loader-slogan">企业 AI 能力建设与应用落地服务商</div>
<div class="loader-brand">信朴科技 <span class="em">XOMAPS<sup></sup></span></div>
<div class="loader-progress"><div class="bar"></div></div>
<div class="loader-percent"><span class="num">0</span> %</div>
</div>
</div>

<section class="hero" style="padding-top:0;">
<div class="hero-slider" id="heroSlider">
<div class="hero-slide active">
<div class="bg"></div>
<div class="wrap" style="padding-top:140px;">
<div class="hero-eyebrow"><span class="dot"></span>企业 AI 能力建设与应用落地服务商 · 自研软件产品产权自有</div>
<h1><span class="line1">让 AI 真正走进</span><span class="line2">企业的业务流程</span></h1>
<p class="sub">信朴科技以自研软件产品为底座，围绕企业 AI 落地提供咨询、培训、工具模型、Agent 定制与内化建设的一体化支持——学·用·建·管，一站式闭环。</p>
<div class="hero-chips"><span>自研软件产品产权自有</span><span>SaaS 订阅与私有化部署</span><span>企业微信应用上架</span><span>云市场入驻服务商</span></div>
<div class="hero-cta"><a href="/contact.html#form" class="btn btn-accent btn-lg">联系信朴科技</a><a href="/services.html" class="btn btn-ghost btn-lg">查看服务</a></div>
</div>
</div>
<div class="hero-slide">
<div class="bg"></div>
<div class="wrap" style="padding-top:140px;">
<div class="hero-eyebrow"><span class="dot"></span>学 · 用 · 建 · 管 —— 企业 AI 落地闭环方法论</div>
<h1><span class="line1">不只是培训，</span><span class="line2">更是让人把 AI 用起来</span></h1>
<p class="sub">从高管认知到员工实操，从 Prompt 工程到 Agent 定制，信朴科技陪企业完成 AI 落地的每一步。</p>
<div class="hero-chips"><span>企业 AI 培训</span><span>WorkBuddy 推广</span><span>Agent 定制</span><span>场景化落地</span></div>
<div class="hero-cta"><a href="/ai-training.html" class="btn btn-accent btn-lg">了解培训</a><a href="/ai-landing.html" class="btn btn-ghost btn-lg">落地路径</a></div>
</div>
</div>
<div class="hero-slide">
<div class="bg"></div>
<div class="wrap" style="padding-top:140px;">
<div class="hero-eyebrow"><span class="dot"></span>自研 SaaS · 私有化部署 · 双形态交付</div>
<h1><span class="line1">云 + AI 一体化，</span><span class="line2">让企业少走弯路</span></h1>
<p class="sub">依托自研软件底座与私有化交付能力，结合 AI 落地咨询与实施，帮助企业建设安全、可扩展、产权自主的数字化底座。</p>
<div class="hero-chips"><span>私有化部署</span><span>全包交付</span><span>云市场上架</span><span>企微应用上架</span></div>
<div class="hero-cta"><a href="/cloud.html" class="btn btn-accent btn-lg">私有化部署</a><a href="tel:18926108189" class="btn btn-ghost btn-lg">咨询报价</a></div>
</div>
</div>

<div class="hero-float" style="right:calc((100vw - 1200px)/2 + 24px);">
<div class="hf-card"><div class="hf-icon" style="background:linear-gradient(135deg,rgba(37,99,235,.12),rgba(59,130,246,.06))"><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div><div class="hf-body"><div class="hf-num">自研</div><div class="hf-label">软件产品产权自有</div></div></div>
<div class="hf-card"><div class="hf-icon" style="background:linear-gradient(135deg,rgba(249,115,22,.12),rgba(249,115,22,.06))"><svg viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div><div class="hf-body"><div class="hf-num">双形态</div><div class="hf-label">SaaS 订阅与私有化部署</div></div></div>
<div class="hf-card"><div class="hf-icon" style="background:linear-gradient(135deg,rgba(37,99,235,.12),rgba(59,130,246,.06))"><svg viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div class="hf-body"><div class="hf-num">全包</div><div class="hf-label">域名、服务器、证书与解析一站式</div></div></div>
</div>

<div class="hero-arrows">
<button class="hero-arrow prev" aria-label="上一个"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>
<button class="hero-arrow next" aria-label="下一个"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>
</div>
<div class="hero-indicators"><button class="active" data-i="0"></button><button data-i="1"></button><button data-i="2"></button></div>
<div class="hero-progress"><div class="bar" id="heroProgressBar"></div></div>
</div>
</section>

<section class="trust-bar" style="padding:20px 0;">
<div class="wrap">
<div class="trust-grid">
<div class="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg><span class="tv">自研软件<span class="accent">产权自有</span></span></div>
<div class="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg><span class="tv">SaaS 与<span class="accent">私有化</span>双交付</span></div>
<div class="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg><span class="tv">企业微信<span class="accent">应用上架</span></span></div>
<div class="trust-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg><span class="tv">一站式<span class="accent">全包</span>交付</span></div>
</div>
</div>
</section>

<section id="services">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">SERVICE DIRECTIONS</div>
<h2 class="sec-title">七大服务方向，<span class="em">覆盖 AI 落地全链路</span></h2>
<p class="sec-desc">企业所处阶段不同，需要的服务也不同。信朴科技的服务可以独立采购，也可以组合为完整的企业 AI 建设项目。</p>
</div>
<div class="svc-carousel-wrap">
<div class="svc-carousel" id="svcCarousel">
<div class="svc-track" id="svcTrack">
<div class="svc-card"><a href="/ai-efficiency.html"><div class="svc-num">01</div><div class="svc-thumb"><img src="/assets/img/20260814/ban3.png" alt="AI 提效"></div><div class="svc-body"><div class="svc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></div><h4>AI 提效</h4><div class="svc-tag">学·用·建·管，一站式闭环</div><ul class="svc-features"><li>企业 AI 培训 + 模型用量 + Agent 定制 + 咨询</li><li>让人会用 AI、让模型用得省</li><li>让场景真落地、让投入沉淀为资产</li></ul><a href="/ai-efficiency.html" class="svc-link">了解详情<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div></a></div>
<div class="svc-card">
<a href="/cloud.html"><div class="svc-num">02</div><div class="svc-thumb"><img src="/assets/img/20260814/ban2.png" alt="私有化部署与托管"></div><div class="svc-body"><div class="svc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg></div><h4>私有化部署与托管</h4><div class="svc-tag">软件产权自有 · 按需求交付</div><ul class="svc-features"><li>私有化环境交付与运维托管</li><li>域名、服务器、证书、解析全包配齐</li><li>SaaS 订阅与私有化双形态可选</li></ul><a href="/cloud.html" class="svc-link">了解详情<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div></a>
</div>
<div class="svc-card"><a href="/ai-landing.html"><div class="svc-num">03</div><div class="svc-thumb"><img src="/assets/img/20260814/ban1.png" alt="AI 落地"></div><div class="svc-body"><div class="svc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div><h4>AI 落地</h4><div class="svc-tag">从场景到业务，真实落地</div><ul class="svc-features"><li>场景识别与 AI 机会诊断</li><li>工具导入与工作流改造</li><li>FDE 现场共创，真实材料验证</li></ul><a href="/ai-landing.html" class="svc-link">了解详情<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div></a></div>
<div class="svc-card"><a href="/ai-training.html"><div class="svc-num">04</div><div class="svc-thumb"><img src="/assets/img/theme/1617443834642507.jpg" alt="AI 转型培训"></div><div class="svc-body"><div class="svc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div><h4>AI 转型培训</h4><div class="svc-tag">建立认知 · 普及能力 · 培养骨干</div><ul class="svc-features"><li>线上：WorkBuddy 使用 / Prompt 工程</li><li>线下七大模块：通识 / 思维 / Vibe Coding</li><li>诊断式定制训练营 · 标准课程包</li></ul><a href="/ai-training.html" class="svc-link">了解详情<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div></a></div>
<div class="svc-card"><a href="/agent.html"><div class="svc-num">05</div><div class="svc-thumb"><img src="/assets/img/20260814/ban1.png" alt="Agent 定制"></div><div class="svc-body"><div class="svc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4M8 16h.01M16 16h.01"/></svg></div><h4>Agent 定制</h4><div class="svc-tag">FDE 现场共创 · 五步法落地</div><ul class="svc-features"><li>知识问答 / 客服 / 销售辅助</li><li>运营分析 / 报告 / 流程协同</li><li>场景→知识→原型→试点→交接</li></ul><a href="/agent.html" class="svc-link">了解详情<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div></a></div>
<div class="svc-card"><a href="/token-supply.html"><div class="svc-num">06</div><div class="svc-thumb"><img src="/assets/img/20260814/ban3.png" alt="Token 供应"></div><div class="svc-body"><div class="svc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div><h4>Token 供应</h4><div class="svc-tag">GPT · Gemini 等主流模型</div><ul class="svc-features"><li>模型用量稳定供给与资源管理</li><li>50 席以上赠 2000 元兑换券</li><li>后续用量约官网 45 折</li></ul><a href="/token-supply.html" class="svc-link">了解详情<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div></a></div>
<div class="svc-card"><a href="/workbuddy-training.html"><div class="svc-num">07</div><div class="svc-thumb"><img src="/assets/img/theme/1617443834642507.jpg" alt="WorkBuddy 培训"></div><div class="svc-body"><div class="svc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg></div><h4>WorkBuddy 培训</h4><div class="svc-tag">AI 办公助手专项培训</div><ul class="svc-features"><li>WorkBuddy 使用方法与最佳实践</li><li>Prompt 工程与知识库搭建</li><li>50 席起购，面向企业全员推广</li></ul><a href="/workbuddy-training.html" class="svc-link">了解详情<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a></div></a></div>
</div>
</div>
</div>
<div class="svc-controls">
<button class="svc-prev" aria-label="上一个"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>
<div class="svc-dots" id="svcDots"></div>
<button class="svc-next" aria-label="下一个"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>
</div>
</div>
</section>

<section class="bg-soft" id="about">
<div class="wrap">
<div class="sec-head" style="margin-bottom:48px">
<div class="sec-eyebrow"><span class="dot"></span>ABOUT XOMAPS<sup></sup> · 关于信朴科技</div>
<h2 class="sec-title">让 AI 真正走进<span class="em">企业的业务流程</span></h2>
<p class="sec-desc">企业 AI 能力建设与应用落地服务商 · 自研软件产品产权自有</p>
</div>
<div class="about-layout">
<div class="about-media">
<span class="img-badge">自研底座</span>
<div class="img-frame">
<img src="/assets/img/theme/brand-visual-placeholder.png" alt="信朴科技自研软件产品能力示意" loading="lazy">
</div>
<div class="float-stat">
<div class="fs-item"><div class="fs-num">自研</div><div class="fs-label">软件产品产权自有</div></div>
<div class="fs-item"><div class="fs-num">双形态</div><div class="fs-label">SaaS 与私有化</div></div>
<div class="fs-item"><div class="fs-num">全包</div><div class="fs-label">一站式交付</div></div>
</div>
<!-- 视频播放器代码预留：企业介绍视频制作完成后取消注释即可启用
<video id="aboutVideoEl" controls playsinline preload="none" style="display:none;z-index:2;"></video>
<div class="play-btn" id="videoPlayBtn"><div class="p"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg></div></div>
-->
</div>
<div class="about-content">
<p class="about-intro">广州信朴科技有限公司，<strong>企业 AI 能力建设与应用落地服务商</strong>。自研底座与企业级智能体平台双轨交付，围绕企业 AI 落地提供咨询、培训、工具模型、Agent 定制与内化建设的一体化支持——<strong>学 · 用 · 建 · 管</strong>，一站式闭环。软件产品产权自有，支持 SaaS 订阅与私有化部署，并可上架云市场与企业微信应用市场交付。</p>
<div class="about-highlights">
<div class="ah-item"><div class="ah-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></div><div class="ah-title">底座双轨</div><div class="ah-desc">自研底座与企业级智能体平台，按需选型</div></div>
<div class="ah-item"><div class="ah-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div><div class="ah-title">双形态交付</div><div class="ah-desc">SaaS 订阅与私有化部署</div></div>
<div class="ah-item"><div class="ah-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div><div class="ah-title">开放生态</div><div class="ah-desc">云市场与企业微信应用上架</div></div>
</div>
<div class="about-quote">
<p>让企业里的每一个人，都能把 AI 真正用起来。AI 的价值不在演示，而在业务闭环——信朴科技的使命是帮助企业完成从认知、工具到组织能力的内化。</p>
<div class="aq-author">— 信朴科技 · 企业理念</div>
</div>
</div>
</div>
<div class="about-services-row">
<a href="/workbuddy-training.html" class="as-card"><div class="as-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div><div class="as-title">企业 AI 培训</div></a>
<a href="/token-supply.html" class="as-card"><div class="as-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div><div class="as-title">模型 Token 供应</div></a>
<a href="/agent.html" class="as-card"><div class="as-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/></svg></div><div class="as-title">Agent 定制与 FDE</div></a>
<a href="/cloud.html" class="as-card"><div class="as-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg></div><div class="as-title">私有化部署与咨询</div></a>
</div>
</div>
</section>

<section class="bg-gradient">
<div class="wrap">
<div class="sec-head"><div class="sec-eyebrow">WHY XOMAPS<sup></sup></div><h2 class="sec-title">既是落地服务商，<span class="em">也是 AI 落地亲历者</span></h2><p class="sec-desc">信朴科技不止于做演示——从咨询到应用的一体化能力，让 AI 真正落进业务流程。</p></div>
<div class="why-grid">
<div class="why-card"><div class="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div><h4>一体化能力</h4><p>同时具备咨询、培训、工具、模型、知识库和 Agent 服务能力，减少多个供应商之间的沟通与割裂。</p></div>
<div class="why-card"><div class="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div><h4>业务起点</h4><p>更关注员工每天在做什么、哪些环节最耗时间，而不是先从某个模型或工具出发设计项目。</p></div>
<div class="why-card"><div class="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg></div><h4>实操共建</h4><p>无论培训还是定制项目，都使用客户真实材料、真实流程和真实任务验证结果，避免交付后无法使用。</p></div>
<div class="why-card" ><div class="why-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg></div><h4>短期与长期兼顾</h4><p>先用培训和试点获得可见成果，再逐步建设知识库、Agent 与内部人才体系，控制投入节奏和实施风险。</p></div>
</div>
</div>
</section>

<section>
<div class="wrap">
<div class="method-wrap">
<div class="method-head"><div class="sec-eyebrow">METHODOLOGY</div><h2 class="sec-title">学·用·建·管，<span class="em">让 AI 真正闭环</span></h2><p class="sec-desc">信朴科技的四个坚持，不是口号，而是企业 AI 落地中真正遵循的工作方式——从方向到人，从工具到价值。</p></div>
<div class="method-grid">
<div class="method-step"><div class="ms-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div><div class="ms-label">STEP 01 · 学</div><h4>以咨询定方向</h4><p>先识别 AI 机会、梳理场景、设计路径，让企业在投入之前看清方向，避免盲目采购和零散试用。</p></div>
<div class="method-step"><div class="ms-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 7h7v7M21 7l-9 9-3-3-5 5"/></svg></div><div class="ms-label">STEP 02 · 用</div><h4>以实操培育人</h4><p>通过真实任务训练，让员工不仅「听懂 AI」，更能在岗位中用起来，把方法变成可复用的能力。</p></div>
<div class="method-step"><div class="ms-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg></div><div class="ms-label">STEP 03 · 建</div><h4>以工具承载场景</h4><p>为员工提供稳定、统一、便于推广的 AI 使用入口——让工具进入真实工作流，而不是停留在演示里。</p></div>
<div class="method-step"><div class="ms-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div><div class="ms-label">STEP 04 · 管</div><h4>以应用实现价值</h4><p>把验证有效的做法固化为知识库、流程、Agent 与组织机制——让 AI 变成可持续的业务能力。</p></div>
</div>
</div>
</div>
</section>

<section class="bg-soft">
<div class="wrap">
<div class="sec-head"><div class="sec-eyebrow">CAPABILITIES</div><h2 class="sec-title">自研底座支撑，<span class="em">按需求交付</span></h2><p class="sec-desc">从产品形态到交付方式，每一项能力都围绕企业 AI 真实落地构建。</p></div>
<div class="stats-grid">
<div class="stat-card"><div class="stat-num"><span class="accent">自研</span></div><div class="stat-label">软件产品产权自有</div></div>
<div class="stat-card"><div class="stat-num"><span class="accent">双形态</span></div><div class="stat-label">SaaS 订阅与私有化部署</div></div>
<div class="stat-card"><div class="stat-num"><span class="accent">全包</span></div><div class="stat-label">域名、服务器、证书与解析一站式</div></div>
<div class="stat-card"><div class="stat-num"><span class="accent">企微</span></div><div class="stat-label">企业微信应用上架</div></div>
<div class="stat-card"><div class="stat-num"><span class="accent">云市场</span></div><div class="stat-label">云市场服务商入驻</div></div>
<div class="stat-card"><div class="stat-num"><span class="accent">开放</span></div><div class="stat-label">开放接口与生态接入</div></div>
<div class="stat-card"><div class="stat-num"><span class="accent">闭环</span></div><div class="stat-label">学 · 用 · 建 · 管方法论</div></div>
<div class="stat-card"><div class="stat-num"><span class="accent">长期</span></div><div class="stat-label">版本持续迭代与本地支持</div></div>
</div>
</div>
</section>

<section class="clients-section">
<div class="wrap">
<div class="clients-head sec-head">
<div class="sec-eyebrow"><span class="dot"></span>TRUSTED BY · 合作客户</div>
<h2 class="sec-title">多行业企业的<span class="em">共同选择</span></h2>
<p class="sec-sub">从新能源汽车到金融科技，信朴科技的合作实践覆盖制造、服务与科技专业服务行业。</p>
</div>
</div>
<div class="clients-marquee-wrap">
<div class="clients-marquee">
<div class="marquee-track">
<div class="client-chip"><div class="logo-img"><span class="logo-mono">车</span></div><div class="name">某新能源汽车企业</div><div class="industry">新能源汽车</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">行</span></div><div class="name">某智慧出行平台</div><div class="industry">智慧出行</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">装</span></div><div class="name">某装备制造企业</div><div class="industry">装备制造</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">芯</span></div><div class="name">某半导体企业</div><div class="industry">半导体</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">邮</span></div><div class="name">某邮政物流企业</div><div class="industry">邮政物流</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">游</span></div><div class="name">某游戏研发企业</div><div class="industry">游戏文娱</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">教</span></div><div class="name">某教育科技企业</div><div class="industry">教育科技</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">电</span></div><div class="name">某工业电子企业</div><div class="industry">工业电子</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">岩</span></div><div class="name">某运动连锁品牌</div><div class="industry">运动休闲</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">服</span></div><div class="name">某企业服务平台</div><div class="industry">企业服务 SaaS</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">人</span></div><div class="name">某人力资源机构</div><div class="industry">人力资源</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">建</span></div><div class="name">某建材陶瓷企业</div><div class="industry">建材陶瓷</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">产</span></div><div class="name">某知识产权机构</div><div class="industry">知识产权</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">金</span></div><div class="name">某金融科技企业</div><div class="industry">金融科技</div></div>
</div>
<div class="marquee-track">
<div class="client-chip"><div class="logo-img"><span class="logo-mono">车</span></div><div class="name">某新能源汽车企业</div><div class="industry">新能源汽车</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">行</span></div><div class="name">某智慧出行平台</div><div class="industry">智慧出行</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">装</span></div><div class="name">某装备制造企业</div><div class="industry">装备制造</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">芯</span></div><div class="name">某半导体企业</div><div class="industry">半导体</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">邮</span></div><div class="name">某邮政物流企业</div><div class="industry">邮政物流</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">游</span></div><div class="name">某游戏研发企业</div><div class="industry">游戏文娱</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">教</span></div><div class="name">某教育科技企业</div><div class="industry">教育科技</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">电</span></div><div class="name">某工业电子企业</div><div class="industry">工业电子</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">岩</span></div><div class="name">某运动连锁品牌</div><div class="industry">运动休闲</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">服</span></div><div class="name">某企业服务平台</div><div class="industry">企业服务 SaaS</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">人</span></div><div class="name">某人力资源机构</div><div class="industry">人力资源</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">建</span></div><div class="name">某建材陶瓷企业</div><div class="industry">建材陶瓷</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">产</span></div><div class="name">某知识产权机构</div><div class="industry">知识产权</div></div>
<div class="client-chip"><div class="logo-img"><span class="logo-mono">金</span></div><div class="name">某金融科技企业</div><div class="industry">金融科技</div></div>
</div>
</div>
</div>
</section>


<section class="bg-soft">
<div class="wrap">
<div class="sec-head"><div class="sec-eyebrow">INDUSTRY COVERAGE</div><h2 class="sec-title">跨行业实践，<span class="em">自研底座持续沉淀</span></h2><p class="sec-desc">信朴科技的合作实践覆盖企业 AI 咨询、能力培养、工具导入和业务场景应用建设，客户来自制造业、服务业与科技专业服务三大板块。</p></div>
<div class="industry-cloud">
<span class="hot">新能源汽车</span><span class="hot">智慧出行</span><span class="hot">装备制造</span><span class="hot">半导体芯片</span>
<span>邮政物流</span><span>建材陶瓷</span><span>知识产权</span><span>金融科技</span>
<span>游戏文娱</span><span>企业服务</span><span>人力资源</span><span>教育科技</span>
<span>工业电子</span><span>运动休闲</span><span>科技服务</span>
</div>
</div>
</section>



<!-- ══════════ WebGL 流体特效（Three.js） ══════════ -->
<script src="/assets/js/vendor/three.min.js"></script>
<script src="/assets/js/homesy.js" type="text/javascript" /></script>
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
