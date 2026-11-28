---
title: "企业 AI 场景落地 | 场景诊断到 Agent 上线 - 信朴科技"
description: "信朴科技以企业上下文与场景闸门识别高价值场景，FDE 前置驻场工程师现场共创，用真实材料与真实流程验证结果，把 AI 能力沉淀为组织资产。"
keywords: "企业AI落地,场景闸门,FDE,企业上下文,知识库,Agent定制,信朴科技"
nav: "services"
date: 2026-11-18
draft: false
------

<style>
:root{
/* 严格对齐众安信科落地页的克制配色 */
--brand:#1d4ed8;          /* 蓝色主色 */
--brand-text:#0f2c5e;     /* 深蓝文字（标题强调） */
--accent:#d9480f;      /* 橙色强调（数字/CTA） */
--text:#0a0e1a;          /* 正文深灰（非纯黑） */
--text-2:#5a6577;        /* 次级文字 */
--text-3:#9aa4b8;        /* 三级文字 */
--bg:#ffffff;            /* 主背景：纯白 */
--bg-soft:#f4f6fa;       /* 极浅灰背景 */
--bg-section:#f4f6fa;    /* 区块底色 */
--border:#ebedf3;        /* 浅灰边框 */
--border-2:#d9e2f0;
--radius:12px;            /* 圆角更小、更克制 */
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

/* ───────── 按钮：扁平极简 ───────── */
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
background:#eaf2fc url(/assets/img/20260814/ban3.png) center/cover no-repeat;
overflow:hidden;
}
.hero::after{
content:"";position:absolute;inset:0;
background:linear-gradient(90deg,rgba(255,255,255,.85) 0%,rgba(255,255,255,.55) 45%,rgba(255,255,255,0) 75%);
pointer-events:none;
}
.hero .wrap{position:relative;z-index:2}
/* WebGL 流体画布：全页 fixed，multiply 混合，鼠标到哪里蓝到哪里 */
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

/* ───────── Agent 类型：极简四卡 ───────── */
.layer-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.layer-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);padding:24px 22px;position:relative;transition:all .2s}
.layer-card:hover{border-color:var(--brand);box-shadow:var(--shadow)}
.layer-num{font-size:32px;font-weight:700;color:var(--bg-soft);font-family:Georgia,serif;line-height:1;margin-bottom:12px;display:inline-block}
.layer-icon{width:36px;height:36px;border-radius:6px;background:var(--bg-soft);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;margin-bottom:14px}
.layer-icon svg{width:20px;height:20px;color:var(--brand)}
.layer-card h4{font-size:15.5px;font-weight:600;color:var(--text);margin-bottom:6px;position:relative}
.layer-stage{font-size:12px;color:var(--accent);font-weight:500;margin-bottom:10px}
.layer-card p{font-size:13px;color:var(--text-2);line-height:1.65}

/* ───────── Agent 类型标签云 ───────── */
.agent-cloud{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;max-width0px;margin:28px auto 0}
.agent-cloud span{padding:7px 16px;font-size:13.5px;color:var(--text-2);font-weight:500;background:#fff;border:1px solid var(--border);border-radius:4px;transition:all .2s;cursor:default}
.agent-cloud span:hover{border-color:var(--brand);color:var(--brand)}
.agent-cloud span.hot{color:var(--brand);border-color:var(--brand);font-weight:600}
.agent-cloud-note{text-align:center;font-size:13px;color:var(--text-3);margin-top:16px}

/* ───────── 成果数据：极简灰底 ───────── */
.stats-section{background:var(--bg-soft)}
.stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid var(--border);border-radius:var(--radius-lg);overflow:hidden;background:#fff}
.stat-card{padding:32px 28px;text-align:center;border-right:1px solid var(--border);transition:all .2s}
.stat-card:last-child{border-right:none}
.stat-card:hover{background:var(--bg-soft)}
.stat-num{font-size:36px;font-weight:700;color:var(--text);line-height:1;margin-bottom:8px;font-family:Georgia,serif;letter-spacing:-.02em}
.stat-num .accent{color:var(--accent)}
.stat-num .unit{font-size:18px;color:var(--text-2);font-weight:600;margin-left:2px}
.stat-label{font-size:13px;color:var(--text-2);font-weight:500}

/* ───────── 案例：极简双卡 ───────── */
.case-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
.case-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);padding:28px;transition:all .2s}
.case-card:hover{border-color:var(--brand);box-shadow:var(--shadow)}
.case-tag{font-size:12px;font-weight:500;color:var(--brand);margin-bottom:10px;display:inline-block}
.case-card h4{font-size:17px;font-weight:600;color:var(--text);margin-bottom:14px;line-height:1.5}
.case-metrics{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px}
.case-metric{padding:14px;border:1px solid var(--border);border-radius:6px;background:var(--bg-soft)}
.case-metric .v{font-size:20px;font-weight:700;color:var(--brand);line-height:1;margin-bottom:4px;font-family:Georgia,serif}
.case-metric .l{font-size:12px;color:var(--text-2);line-height:1.5}
.case-card p{font-size:13.5px;color:var(--text-2);line-height:1.7}

/* ───────── 为什么选信朴科技：极简四卡 ───────── */
.why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.why-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius-lg);padding:28px 22px;text-align:center;transition:all .2s}
.why-card:hover{border-color:var(--brand);box-shadow:var(--shadow)}
.why-icon{width:44px;height:44px;border-radius:50%;background:var(--bg-soft);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;margin:0 auto 16px}
.why-icon svg{width:22px;height:22px;color:var(--brand)}
.why-card h4{font-size:15.5px;font-weight:600;color:var(--text);margin-bottom:8px}
.why-card p{font-size:13px;color:var(--text-2);line-height:1.65}

/* ───────── 行业覆盖：扁平标签 ───────── */
.industry-cloud{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;max-width0px;margin:0 auto}
.industry-cloud span{padding:7px 16px;font-size:13.5px;color:var(--text-2);font-weight:500;background:#fff;border:1px solid var(--border);border-radius:4px;transition:all .2s;cursor:default}
.industry-cloud span:hover{border-color:var(--brand);color:var(--brand)}
.industry-cloud span.hot{color:var(--brand);border-color:var(--brand);font-weight:600}

/* ───────── 荣誉：极简列表 ───────── */
.honor-list{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;max-width:900px;margin:0 auto}
.honor-item{display:flex;align-items:center;gap:14px;padding:14px 20px;background:#fff;border:1px solid var(--border);border-radius:6px;transition:all .2s}
.honor-item:hover{border-color:var(--brand)}
.honor-medal{width:24px;height:24px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.honor-medal svg{width:12px;height:12px;color:#fff}
.honor-item p{font-size:13.5px;color:var(--text);line-height:1.6;font-weight:500}

/* ───────── FAQ：极简折叠 ───────── */
.faq-list{max-width0px;margin:0 auto;display:flex;flex-direction:column;gap:12px}
.faq-item{background:#fff;border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;transition:all .2s}
.faq-item:hover{border-color:var(--brand)}
.faq-item[open]{border-color:var(--brand);box-shadow:var(--shadow)}
.faq-q{padding:18px 24px;font-size:15px;font-weight:600;color:var(--text);cursor:pointer;display:flex;align-items:center;gap:12px;list-style:none}
.faq-q::-webkit-details-marker{display:none}
.faq-q::before{content:"Q";width:26px;height:26px;border-radius:50%;background:var(--bg-soft);border:1px solid var(--border);color:var(--brand);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0}
.faq-item[open] .faq-q::before{background:var(--brand);color:#fff;border-color:var(--brand)}
.faq-q::after{content:"+";margin-left:auto;color:var(--text-3);font-size:20px;font-weight:300;transition:transform .25s}
.faq-item[open] .faq-q::after{transform:rotate(45deg);color:var(--brand)}
.faq-a{padding:0 24px 18px 62px;font-size:13.5px;color:var(--text-2);line-height:1.75}
.faq-a strong{color:var(--text);font-weight:600}

/* ───────── 底部 CTA：极简 ───────── */
.cta-final{padding:60px 0;background:var(--bg-soft);border-top:1px solid var(--border);text-align:center}
.cta-final h2{font-size:26px;font-weight:700;color:var(--text);margin-bottom:12px}
.cta-final p{font-size:15px;color:var(--text-2);margin-bottom:28px;max-width:540px;margin-left:auto;margin-right:auto}
.cta-final .hero-cta{justify-content:center}
.cta-contact{margin-top:36px;padding-top:24px;border-top:1px solid var(--border);display:flex;gap:32px;justify-content:center;flex-wrap:wrap;font-size:13px;color:var(--text-2)}
.cta-contact .item{display:flex;align-items:center;gap:6px}
.cta-contact svg{width:15px;height:15px;color:var(--brand)}

/* ───────── 页脚 ───────── */
footer{padding:24px 0;border-top:1px solid var(--border);color:var(--text-3);font-size:12.5px;text-align:center;background:#fff}

/* ───────── 响应式 ───────── */
@media (max-width:1024px){
.hero{min-height:460px;padding:80px 0 48px}
.hero h1{font-size:36px}
.prod-grid,.layer-grid,.why-grid{grid-template-columns:repeat(2,1fr)}
.stats-grid{grid-template-columns:repeat(3,1fr)}
}
@media (max-width:680px){
section{padding:48px 0}
.sec-title{font-size:24px}
.hero{min-height:380px;padding:60px 0 40px}
.hero h1{font-size:26px}
.hero .sub{font-size:14.5px}
.pain-grid,.prod-grid,.layer-grid,.why-grid,.plan-grid,.case-grid,.stats-grid,.honor-list{grid-template-columns:1fr}
.case-metrics{grid-template-columns:1fr 1fr}
.stat-card{border-right:none;border-bottom:1px solid var(--border)}
.stat-card:last-child{border-bottom:none}
.stat-num{font-size:30px}
.cta-final h2{font-size:22px}
.btn-lg{padding:11px 24px;font-size:14px}
.faq-a{padding-left:24px}
}

/* ───────── 动态样式：滚动显现 + 交互增强 ───────── */
section,.pain-card,.prod-card,.layer-card,.why-card,.flow-step,.model-card,.case-card,.honor-item,.stat-card,.plan-card,.industry-cloud span,.audience-tags span,.faq-item,.agent-cloud span{
opacity:0;transform:translateY(28px);
transition:opacity .7s cubic-bezier(.22,.61,.36,1),transform .7s cubic-bezier(.22,.61,.36,1);
}
.reveal-in{opacity:1 !important;transform:none !important}
/* 网格内错峰延迟 */
.prod-grid>:nth-child(2),.layer-grid>:nth-child(2),.why-grid>:nth-child(2),.flow>:nth-child(2),.model-grid>:nth-child(2),.pain-grid>:nth-child(2),.case-grid>:nth-child(2),.honor-list>:nth-child(2),.stats-grid>:nth-child(2),.faq-list>:nth-child(2){transition-delay:.08s}
.prod-grid>:nth-child(3),.layer-grid>:nth-child(3),.why-grid>:nth-child(3),.flow>:nth-child(3),.model-grid>:nth-child(3),.pain-grid>:nth-child(3),.case-grid>:nth-child(3),.honor-list>:nth-child(3),.stats-grid>:nth-child(3),.faq-list>:nth-child(3){transition-delay:.16s}
.prod-grid>:nth-child(4),.layer-grid>:nth-child(4),.why-grid>:nth-child(4),.flow>:nth-child(4),.model-grid>:nth-child(4),.pain-grid>:nth-child(4),.case-grid>:nth-child(4),.honor-list>:nth-child(4),.stats-grid>:nth-child(4),.faq-list>:nth-child(4){transition-delay:.24s}
.prod-grid>:nth-child(5),.flow>:nth-child(5),.model-grid>:nth-child(5),.honor-list>:nth-child(5),.stats-grid>:nth-child(5),.faq-list>:nth-child(5){transition-delay:.32s}
.flow>:nth-child(6),.honor-list>:nth-child(6),.stats-grid>:nth-child(6),.faq-list>:nth-child(6){transition-delay:.4s}
/* Hero 加载入场 */
.hero-eyebrow,.hero h1,.hero .sub,.hero-chips,.hero-cta{animation:heroIn .8s both}
.hero h1{animation-delay:.1s}
.hero .sub{animation-delay:.22s}
.hero-chips{animation-delay:.34s}
.hero-cta{animation-delay:.46s}
@keyframes heroIn{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
/* hover 增强 */
.pain-card:hover,.prod-card:hover,.layer-card:hover,.why-card:hover,.model-card:hover,.case-card:hover,.faq-item:hover{transform:translateY(-4px)}
.flow-step:hover{transform:translateY(-4px) scale(1.02)}
.industry-cloud span:hover,.agent-cloud span:hover{transform:translateY(-2px)}
/* 数字强调色脉动 */
.stat-num .accent{display:inline-block;animation:numPulse 3s ease-in-out infinite}
@keyframes numPulse{0%,100%{opacity:1}50%{opacity:.65}}
/* 标题装饰下划线生长 */
.sec-title{position:relative}
.sec-title::after{content:"";display:block;width:0;height:3px;margin:14px auto 0;background:var(--accent);transition:width .8s .2s cubic-bezier(.22,.61,.36,1)}
.reveal-in .sec-title::after,.sec-head.reveal-in .sec-title::after{width:54px}
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
@media (prefers-reduced-motion:reduce){
*{animation:none !important;transition:none !important}
section,.pain-card,.prod-card,.layer-card,.why-card,.flow-step,.model-card,.case-card,.honor-item,.stat-card,.plan-card,.industry-cloud span,.audience-tags span,.faq-item,.agent-cloud span{opacity:1 !important;transform:none !important}
}
</style>


<!-- ══════════ 全页 WebGL 流体特效 ══════════ -->
<div id="fluid-wrap"></div>

<!-- ══════════ Hero ══════════ -->
<header class="hero">
<div class="wrap">
<div class="hero-eyebrow">企业级 AI 能力建设服务商 · 自研软件产品产权自有</div>
<h1>
<span class="line1">AI 驱动业务落地</span>
<span class="line2">从场景诊断到 Agent 上线</span>
</h1>
<p class="sub">以「诊断 + 知识库 + Agent 定制 + 内化体系」四段闭环，让 AI 真正走进业务流程——不止于做演示，更让能力沉淀为组织资产。</p>
<div class="hero-chips">
<span>场景诊断与规划</span>
<span>知识库建设</span>
<span>Agent 定制与 FDE</span>
<span>内化体系建设</span>
</div>
<div class="hero-cta">
<a href="/contact.html#form" class="btn btn-accent btn-lg">预约落地咨询</a>
<a href="#product" class="btn btn-ghost btn-lg">查看落地服务</a>
</div>
</div>
</header>

<!-- ══════════ 服务对象 ══════════ -->
<section class="audience">
<div class="wrap">
<div class="audience-label">服务已覆盖</div>
<div class="audience-tags">
<span>国有企业</span><span>民营集团</span><span>新能源汽车</span><span>智慧出行</span>
<span>装备制造</span><span>半导体芯片</span><span>邮政物流</span><span>建材家居</span>
<span>知识产权</span><span>金融科技</span><span>游戏文娱</span><span>企业管理</span>
</div>
</div>
</section>

<!-- ══════════ 1. 落地痛点 ══════════ -->
<section id="pain">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">PAIN POINTS</div>
<h2 class="sec-title">AI 落地难？<span class="em">6 大核心卡点</span>一站式破解</h2>
<p class="sec-desc">AI 的价值不在 Demo，而在每天真正进入工作流。我们把企业 AI 落地初期最高频的痛点拆给你看——因为我们也是这样一步步跑通的。</p>
</div>

<!-- 管理层 -->
<div class="pain-layer">
<div class="pain-layer-head">
<span class="pain-layer-tag">管理层</span>
<span class="pain-layer-sub">关心投入产出、落地路径与组织共识</span>
</div>
<div class="pain-grid">
<div class="pain-card">
<div class="pain-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
</div>
<div class="pain-body">
<h4>AI 停在演示里</h4>
<p>演示时惊艳，回到日常用不起来，AI 停留在 PPT 与试点里，进不了真实工作流。</p>
<span class="pain-solve">✓ 场景诊断先行，找对高价值切入点</span>
</div>
</div>
<div class="pain-card">
<div class="pain-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/></svg>
</div>
<div class="pain-body">
<h4>投入看不到产出</h4>
<p>工具买了、培训也做了，业务指标却没动静，AI 投入像无底洞。</p>
<span class="pain-solve">✓ 试点先行小步快跑，成果可量化</span>
</div>
</div>
</div>
</div>

<!-- 业务层 -->
<div class="pain-layer">
<div class="pain-layer-head">
<span class="pain-layer-tag">业务骨干层</span>
<span class="pain-layer-sub">关心能不能在岗位上真正用起来</span>
</div>
<div class="pain-grid">
<div class="pain-card">
<div class="pain-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
</div>
<div class="pain-body">
<h4>工具买了没人会用</h4>
<p>系统交付了，但回到岗位面对真实任务依然无从下手，需求与落地之间隔着一条沟。</p>
<span class="pain-solve">✓ FDE 现场共创，真实材料验证</span>
</div>
</div>
<div class="pain-card">
<div class="pain-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
</div>
<div class="pain-body">
<h4>AI 没有企业知识</h4>
<p>通用模型不懂企业业务，回答质量不稳定，像隔靴搔痒，难以直接用。</p>
<span class="pain-solve">✓ 知识库建设，让 AI 有高质量弹药</span>
</div>
</div>
</div>
</div>

<!-- 技术与一线层 -->
<div class="pain-layer">
<div class="pain-layer-head">
<span class="pain-layer-tag">技术与一线层</span>
<span class="pain-layer-sub">关心经验沉淀、持续运营与落地成效</span>
</div>
<div class="pain-grid">
<div class="pain-card">
<div class="pain-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
</div>
<div class="pain-body">
<h4>做完就散经验不沉淀</h4>
<p>项目验收即结束，经验无法沉淀复用，换个团队又要从头再来。</p>
<span class="pain-solve">✓ 内化体系，能力沉淀为组织资产</span>
</div>
</div>
<div class="pain-card">
<div class="pain-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>
</div>
<div class="pain-body">
<h4>招人买软件还是没用</h4>
<p>买软件是买工具，招人是加人手，落地依然难——缺少方法与体系。</p>
<span class="pain-solve">✓ 诊断 + 建设 + 内化一体交付</span>
</div>
</div>
</div>
</div>
</div>
</section>

<!-- ══════════ 2. 落地五步法 ══════════ -->
<section id="flow" class="bg-soft">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">LANDING LOOP</div>
<h2 class="sec-title">从场景到交接，<span class="em">五步法跑通 AI 落地闭环</span></h2>
<p class="sec-desc">围绕「场景定义、知识流程、原型开发、测试试点、推广交接」，把每个环节的抓手讲清楚——这正是企业 AI 落地要的体系化、可执行。</p>
</div>

<div class="flow">
<div class="flow-step">
<div class="flow-num">01</div>
<h4>场景定义</h4>
<p>明确目标用户、业务任务、输入资料与预期输出</p>
</div>
<div class="flow-step">
<div class="flow-num">02</div>
<h4>知识流程</h4>
<p>梳理企业资料、业务规则、SOP 与权限审核节点</p>
</div>
<div class="flow-step">
<div class="flow-num">03</div>
<h4>原型开发</h4>
<p>搭建可验证的 Agent 或流程原型，先解决一个完整问题</p>
</div>
<div class="flow-step">
<div class="flow-num">04</div>
<h4>测试试点</h4>
<p>用真实任务验证准确性、稳定性与可用性</p>
</div>
<div class="flow-step">
<div class="flow-num">05</div>
<h4>推广交接</h4>
<p>完善使用说明与迭代机制，帮助团队持续运营</p>
</div>
</div>

<div style="text-align:center;margin-top:36px">
<a href="/contact.html#form" class="btn btn-primary btn-lg">预约落地咨询</a>
</div>
</div>
</section>

<!-- ══════════ 3. 落地服务全景 ══════════ -->
<section id="product">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">SERVICE MODULES</div>
<h2 class="sec-title">四大服务环节，<span class="em">环环相扣的落地闭环</span></h2>
<p class="sec-desc">找对场景 → 备好弹药 → 做出应用 → 沉淀体系，一套服务支撑企业从 AI 诊断到内化落地的全周期需求。各环节可独立采购，也可组合。</p>
</div>

<div class="prod-grid">
<div class="prod-card">
<div class="prod-stage">STAGE 01 · 找对场景</div>
<div class="prod-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
</div>
<h4>场景诊断与规划</h4>
<div class="prod-scene">场景：先找对高价值切入点</div>
<ul class="prod-features">
<li>业务场景梳理 · 高管访谈</li>
<li>优先级排序 · 价值×可行性</li>
<li>实施路径设计 · 分阶段落地</li>
<li>界定试点范围 · 小步快跑</li>
</ul>
<a href="/contact.html#form" class="prod-link">立即咨询 →</a>
</div>

<div class="prod-card">
<div class="prod-stage">STAGE 02 · 备好弹药</div>
<div class="prod-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
</div>
<h4>企业知识库建设</h4>
<div class="prod-scene">场景：把企业知识变成 AI 可用资产</div>
<ul class="prod-features">
<li>知识盘点 · 来源摸底质量评估</li>
<li>整理建模 · 分类目录与内容标准</li>
<li>建库上线 · 权限检索与问答场景</li>
<li>运营维护 · 更新迭代持续检验</li>
</ul>
<a href="/contact.html#form" class="prod-link">立即咨询 →</a>
</div>

<div class="prod-card">
<div class="prod-stage">STAGE 03 · 做出应用</div>
<div class="prod-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
</div>
<h4>Agent 定制与 FDE</h4>
<div class="prod-scene">场景：现场共创搭建原型</div>
<ul class="prod-features">
<li>FDE 现场驻场 · 与业务共同工作</li>
<li>真实材料 · 真实流程验证</li>
<li>原型开发 · 先解决一个完整问题</li>
<li>试点推广 · 持续反馈迭代</li>
</ul>
<a href="/contact.html#form" class="prod-link">立即咨询 →</a>
</div>

<div class="prod-card">
<div class="prod-stage">STAGE 04 · 沉淀体系</div>
<div class="prod-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
</div>
<h4>内化体系建设</h4>
<div class="prod-scene">场景：让经验沉淀为组织资产</div>
<ul class="prod-features">
<li>流程固化 · 工作流标准化</li>
<li>机制建设 · 维护与迭代规范</li>
<li>人才培训 · 内部团队持续运营</li>
<li>考核激励 · AI 应用常态化</li>
</ul>
<a href="/contact.html#form" class="prod-link">立即咨询 →</a>
</div>
</div>
</div>
</section>

<!-- ══════════ 4. 交付方案对比 ══════════ -->
<section id="plan" class="bg-soft">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">DELIVERY PLAN</div>
<h2 class="sec-title">两种交付方案，<span class="em">按企业 AI 落地阶段选择</span></h2>
<p class="sec-desc">方案 A 单场景试点适合希望快速验证 AI 价值的企业；方案 B 全链路体系适合希望系统化建设 AI 能力的企业。两种方式可独立采购，也可组合使用。</p>
</div>

<div class="plan-grid">
<div class="plan-card plan-a">
<span class="plan-badge">方案 A · 推荐</span>
<h4>单场景试点方案</h4>
<p class="plan-tagline">先选一个完整场景做出可见成果，见效后再逐步扩大范围。</p>
<div class="plan-rows">
<div class="plan-row"><span class="k">适用企业</span><span class="v">希望快速验证 AI 价值的企业</span></div>
<div class="plan-row"><span class="k">内容特点</span><span class="v">单场景诊断 + 原型 + 试点验证</span></div>
<div class="plan-row"><span class="k">交付形式</span><span class="v">FDE 现场共创 + 真实材料验证</span></div>
<div class="plan-row"><span class="k">适合阶段</span><span class="v">AI 落地起步期</span></div>
<div class="plan-row"><span class="k">课后支持</span><span class="v">试点验证 + 迭代优化</span></div>
</div>
<a href="/contact.html#form" class="btn btn-accent btn-lg">预约试点咨询</a>
</div>

<div class="plan-card plan-b">
<span class="plan-badge">方案 B · 灵活</span>
<h4>全链路体系方案</h4>
<p class="plan-tagline">诊断 + 知识库 + Agent + 内化一体化建设，系统化沉淀 AI 能力。</p>
<div class="plan-rows">
<div class="plan-row"><span class="k">适用企业</span><span class="v">希望系统化建设 AI 能力的企业</span></div>
<div class="plan-row"><span class="k">内容特点</span><span class="v">四环节闭环全交付</span></div>
<div class="plan-row"><span class="k">交付形式</span><span class="v">FDE 驻场 + 团队共创 + 交接</span></div>
<div class="plan-row"><span class="k">适合阶段</span><span class="v">AI 应用深化期</span></div>
<div class="plan-row"><span class="k">课后支持</span><span class="v">内化体系 + 持续运营</span></div>
</div>
<a href="/contact.html#form" class="btn btn-primary btn-lg">预约体系咨询</a>
</div>
</div>
</div>
</section>

<!-- ══════════ 5. 可定制 Agent 类型 ══════════ -->
<section id="layer">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">AGENT TYPES</div>
<h2 class="sec-title">7 类可定制 Agent，<span class="em">覆盖核心业务场景</span></h2>
<p class="sec-desc">围绕知识、客服、销售、运营、报告、协同、研发七大场景，按岗位真实任务定制 Agent——拒绝「通用 Demo」，让每个 Agent 都能进入日常工作。</p>
</div>

<div class="layer-grid">
<div class="layer-card">
<div class="layer-num">01</div>
<div class="layer-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
</div>
<h4>知识问答 Agent</h4>
<div class="layer-stage">场景：内部知识检索 · 制度问答</div>
<p>把企业知识变成随时可问的专家，让分散在文档、SOP、 wiki 里的内容一问即答。</p>
</div>

<div class="layer-card">
<div class="layer-num">02</div>
<div class="layer-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
</div>
<h4>智能客服 Agent</h4>
<div class="layer-stage">场景：7×24 客户咨询 · 工单处理</div>
<p>全天候响应客户咨询，自动识别意图、调用知识库并流转工单，降低人工成本。</p>
</div>

<div class="layer-card">
<div class="layer-num">03</div>
<div class="layer-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/></svg>
</div>
<h4>运营分析 Agent</h4>
<div class="layer-stage">场景：经营数据解读 · 异常预警</div>
<p>解读经营报表、识别异常与趋势，把数据变成业务团队看得懂的洞察与建议。</p>
</div>

<div class="layer-card">
<div class="layer-num">04</div>
<div class="layer-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>
</div>
<h4>报告生成 Agent</h4>
<div class="layer-stage">场景：周报月报 · 会议纪要</div>
<p>自动汇总数据与素材生成文档报告，会议纪要、周报月报一键产出，释放重复劳动。</p>
</div>
</div>

<div class="agent-cloud">
<span class="hot">知识问答</span>
<span class="hot">智能客服</span>
<span>销售辅助</span>
<span class="hot">运营分析</span>
<span class="hot">报告生成</span>
<span>流程协同</span>
<span>研发辅助</span>
</div>
<div class="agent-cloud-note">项目可从单一岗位的小范围试点开始，见效后再逐步扩展到部门或跨部门使用</div>
</div>
</section>

<!-- ══════════ 6. 落地成果数据 ══════════ -->
<section class="stats-section">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">LANDING OUTCOMES</div>
<h2 class="sec-title">不止方法论，<span class="em">更有跑通的真实成果</span></h2>
<p class="sec-desc">信朴科技以自研软件产品为底座，让 AI 真正落进业务流程。</p>
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
<div class="stat-num"><span class="accent">4</span><span class="unit">环节</span></div>
<div class="stat-label">落地服务闭环</div>
</div>
<div class="stat-card">
<div class="stat-num"><span class="accent">5</span><span class="unit">步</span></div>
<div class="stat-label">落地五步法</div>
</div>
<div class="stat-card">
<div class="stat-num"><span class="accent">7</span><span class="unit">类</span></div>
<div class="stat-label">可定制 Agent</div>
</div>
<div class="stat-card">
<div class="stat-num"><span class="accent">1</span><span class="unit">站式</span></div>
<div class="stat-label">从诊断到落地</div>
</div>
</div>
</div>
</section>

<!-- ══════════ 7. 案例 ══════════ -->
<section>
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">CUSTOMER CASES</div>
<h2 class="sec-title">真实客户实践，<span class="em">验证 AI 可落地</span></h2>
<p class="sec-desc">不同行业、不同岗位的落地场景不同，信朴科技按「先诊断、后定制」的方式设计 Agent。</p>
</div>

<div class="case-grid">
<div class="case-card">
<span class="case-tag">新能源汽车 · 头部车企</span>
<h4>从场景诊断到 Agent 上线，知识库 + 客服 Agent 一体落地</h4>
<div class="case-metrics">
<div class="case-metric">
<div class="v">全链路</div>
<div class="l">诊断 + 知识库 + Agent 一体</div>
</div>
<div class="case-metric">
<div class="v">多岗位</div>
<div class="l">沉淀可复用工作方法</div>
</div>
</div>
<p>围绕研发、市场、客服真实任务，FDE 现场共创搭建 Agent，让 AI 从演示进入日常运营流程，并沉淀为可复用的组织资产。</p>
</div>

<div class="case-card">
<span class="case-tag">智慧出行 · 网约车平台</span>
<h4>FDE 现场共创，运营分析 Agent 嵌入日常流程</h4>
<div class="case-metrics">
<div class="case-metric">
<div class="v">真实材料</div>
<div class="l">用客户真实流程验证</div>
</div>
<div class="case-metric">
<div class="v">试点先行</div>
<div class="l">见效后扩大到多部门</div>
</div>
</div>
<p>通过场景诊断锁定运营分析高价值环节，FDE 驻场搭建原型，用真实任务验证效果后推广交接，衔接内化体系持续运营。</p>
</div>
</div>
</div>
</section>

<!-- ══════════ 8. 为什么选信朴科技 ══════════ -->
<section id="why" class="bg-soft">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">WHY XOMAPS<sup></sup></div>
<h2 class="sec-title">既是落地服务商，<span class="em">也是 AI 落地亲历者</span></h2>
<p class="sec-desc">信朴科技不止于做演示——业务起点、真实材料、FDE 驻场、全链路承接，让 AI 真正落进业务流程。</p>
</div>

<div class="why-grid">
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
<h4>真实材料</h4>
<p>使用客户真实材料、真实流程和真实任务验证结果，避免系统交付后无法使用。</p>
</div>
<div class="why-card">
<div class="why-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>
</div>
<h4>FDE 驻场</h4>
<p>工程师进入项目现场或核心工作组，快速理解业务，缩短需求与落地之间的距离。</p>
</div>
<div class="why-card">
<div class="why-icon">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>
</div>
<h4>全链路承接</h4>
<p>培训、模型用量、企业 AI 咨询可同步支撑，落地所需的配套能力一步到位。</p>
</div>
</div>
</div>
</section>

<!-- ══════════ 9. 行业覆盖 ══════════ -->
<section>
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">INDUSTRY COVERAGE</div>
<h2 class="sec-title">跨行业实践，<span class="em">自研底座持续沉淀</span></h2>
<p class="sec-desc">信朴科技的 AI 落地实践覆盖新能源汽车、出行、装备制造、半导体、邮政、建材、知识产权、金融科技等行业。</p>
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
<a href="/contact.html#form" class="btn btn-primary btn-lg">预约落地咨询</a>
</div>
</div>
</section>

<!-- ══════════ 10. 荣誉背书 ══════════ -->
<section class="bg-soft">
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

<!-- ══════════ 11. 常见问题 ══════════ -->
<section id="faq">
<div class="wrap">
<div class="sec-head">
<div class="sec-eyebrow">FAQ</div>
<h2 class="sec-title">高频问题，<span class="em">一页说清</span></h2>
<p class="sec-desc">关于 AI 落地周期、真实业务适配、知识库前提、持续运营与方案差异，你最关心的都在这里。</p>
</div>

<div class="faq-list">
<details class="faq-item" open>
<summary class="faq-q">多久能看到落地效果？</summary>
<div class="faq-a">
取决于场景复杂度与知识准备度。信朴科技采用<strong>试点先行、小步快跑</strong>的方式，先选择一个完整场景做出可见成果，见效后再逐步扩大范围。
</div>
</details>

<details class="faq-item">
<summary class="faq-q">Agent 能处理我们的真实业务吗？</summary>
<div class="faq-a">
可以。FDE 使用<strong>客户真实材料、真实流程和真实任务</strong>搭建并验证原型，先解决一个完整问题，确认有效后再推广到更多岗位。
</div>
</details>

<details class="faq-item">
<summary class="faq-q">落地前需要先建好知识库吗？</summary>
<div class="faq-a">
不一定。信朴科技会先做知识盘点，判断现有资料能否支撑场景；知识库建设本身也是落地服务的一环，可以<strong>一并规划、分步推进</strong>。
</div>
</details>

<details class="faq-item">
<summary class="faq-q">落地之后怎么持续运营？</summary>
<div class="faq-a">
信朴科技会完成<strong>使用说明、维护方式与迭代机制</strong>的交接，并培训内部团队持续运营；如需深化，可衔接企业 AI 咨询的内化体系建设服务。
</div>
</details>

<details class="faq-item">
<summary class="faq-q">与直接买软件或招人有什么区别？</summary>
<div class="faq-a">
买软件是「买工具」，招人是「加人手」；信朴科技提供的是<strong>「诊断 + 建设 + 内化」</strong>的方法与交付，帮企业把 AI 用进真实业务，并把能力沉淀给自己团队。
</div>
</details>
</div>
</div>
</section>



<script>
(function(){
// 滚动显现：元素进入视口加 reveal-in
var sels='section,.sec-head,.pain-card,.prod-card,.layer-card,.why-card,.flow-step,.model-card,.case-card,.honor-item,.stat-card,.plan-card,.industry-cloud span,.audience-tags span,.faq-item,.agent-cloud span';
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
var glowSels='section,.pain-card,.prod-card,.layer-card,.why-card,.flow-step,.model-card,.case-card,.plan-card,.honor-item,.stat-card,.faq-item';
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
