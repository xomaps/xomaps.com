(function(){
    var loader=document.getElementById('page-loader');
    var bar=loader.querySelector('.bar');
    var num=loader.querySelector('.num');
    var progress=0;
    var LOAD_DURATION=1500;
    var start=performance.now();
    function step(){
      var elapsed=performance.now()-start;
      progress=Math.min(elapsed/LOAD_DURATION*100,100);
      bar.style.width=progress+'%';
      num.textContent=Math.floor(progress);
      if(progress<100){requestAnimationFrame(step);}
      else{setTimeout(function(){loader.classList.add('done');},300);}
    }
    requestAnimationFrame(step);
  })();
(function(){
    var slides=document.querySelectorAll('.hero-slide');
    var dots=document.querySelectorAll('.hero-indicators button');
    var bar=document.getElementById('heroProgressBar');
    var prevBtn=document.querySelector('.hero-arrow.prev');
    var nextBtn=document.querySelector('.hero-arrow.next');
    var index=0,len=slides.length,duration=6000,interval,tStart;
    function show(i){
      index=(i+len)%len;
      slides.forEach(function(s,idx){s.classList.toggle('active',idx===index);});
      dots.forEach(function(d,idx){d.classList.toggle('active',idx===index);});
      tStart=performance.now();
      requestAnimationFrame(progressLoop);
    }
    function progressLoop(now){var p=Math.min((now-tStart)/duration*100,100);bar.style.width=p+'%';if(p<100)requestAnimationFrame(progressLoop);}
    function next(){show(index+1);resetTimer();}
    function prev(){show(index-1);resetTimer();}
    function resetTimer(){clearInterval(interval);interval=setInterval(next,duration);tStart=performance.now();}
    if(nextBtn)nextBtn.addEventListener('click',next);
    if(prevBtn)prevBtn.addEventListener('click',prev);
    dots.forEach(function(d,i){d.addEventListener('click',function(){show(i);resetTimer();});});
    interval=setInterval(next,duration);tStart=performance.now();requestAnimationFrame(progressLoop);
  })();

  (function(){
    var track=document.getElementById('svcTrack');
    var carousel=document.getElementById('svcCarousel');
    var prevBtn=document.querySelector('.svc-prev');
    var nextBtn=document.querySelector('.svc-next');
    var dotsWrap=document.getElementById('svcDots');
    if(!track)return;
    var cards=track.querySelectorAll('.svc-card');
    var total=cards.length;
    var visible=4;
    function updateVisible(){visible=window.innerWidth<=680?1:(window.innerWidth<=1024?2:4);}
    updateVisible();
    var maxIndex=Math.max(total-visible,0);
    var index=0,isDown=false,startX,scrollLeft;
    for(var i=0;i<=maxIndex;i++){var s=document.createElement('span');if(i===0)s.className='active';s.addEventListener('click',(function(idx){return function(){goTo(idx);restartAuto();};})(i));dotsWrap.appendChild(s);}
    var dots=dotsWrap.querySelectorAll('span');
    function updateDots(){dots.forEach(function(d,i){d.classList.toggle('active',i===index);});}
    function updateButtons(){if(prevBtn)prevBtn.disabled=index<=0;if(nextBtn)nextBtn.disabled=index>=maxIndex;}
    function goTo(i){
      index=Math.max(0,Math.min(i,maxIndex));
      var cardWidth=cards[0].offsetWidth+18;
      track.style.transform='translateX(-'+(index*cardWidth)+'px)';
      updateDots();updateButtons();
    }
    function next(){if(index<maxIndex)goTo(index+1);}
    function prev(){if(index>0)goTo(index-1);}
    var autoTimer=null,AUTO_DELAY=3500;
    function stopAuto(){if(autoTimer){clearInterval(autoTimer);autoTimer=null;}}
    function startAuto(){stopAuto();autoTimer=setInterval(function(){if(index>=maxIndex){goTo(0);}else{goTo(index+1);}},AUTO_DELAY);}
    function restartAuto(){stopAuto();setTimeout(startAuto,AUTO_DELAY);}
    if(prevBtn)prevBtn.addEventListener('click',function(){prev();restartAuto();});
    if(nextBtn)nextBtn.addEventListener('click',function(){next();restartAuto();});
    carousel.addEventListener('mouseenter',stopAuto);
    carousel.addEventListener('mouseleave',startAuto);
    window.addEventListener('resize',function(){updateVisible();maxIndex=Math.max(total-visible,0);goTo(Math.min(index,maxIndex));restartAuto();});
    carousel.addEventListener('mousedown',function(e){stopAuto();isDown=true;track.classList.add('grabbing');startX=e.pageX;scrollLeft=index;});
    carousel.addEventListener('mouseleave',function(){if(isDown){isDown=false;track.classList.remove('grabbing');startAuto();}});
    carousel.addEventListener('mouseup',function(e){if(!isDown)return;isDown=false;track.classList.remove('grabbing');var dx=e.pageX-startX;var cardWidth=cards[0].offsetWidth+18;if(dx<-60)next();else if(dx>60)prev();else goTo(index);restartAuto();});
    carousel.addEventListener('mousemove',function(e){if(!isDown)return;e.preventDefault();var dx=e.pageX-startX;var cardWidth=cards[0].offsetWidth+18;track.style.transform='translateX('+(dx-index*cardWidth)+'px)';});
    var touchStartX=0;
    carousel.addEventListener('touchstart',function(e){stopAuto();touchStartX=e.touches[0].clientX;},{passive:true});
    carousel.addEventListener('touchend',function(e){var dx=e.changedTouches[0].clientX-touchStartX;if(dx<-50)next();else if(dx>50)prev();restartAuto();},{passive:true});
    updateButtons();
    startAuto();
  })();


  (function(){
    var sels='section,.sec-head,.svc-card,.why-card,.method-step,.stat-card,.news-card,.industry-cloud span,.trust-item,.about-layout,.partner-logo,.svc-carousel-wrap,.svc-controls';
    var els=document.querySelectorAll(sels);
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('reveal-in');io.unobserve(e.target);}});},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
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
              (function step(now){var p=Math.min((now-st)/dur,1);acc.textContent=Math.floor(p*end);if(p<1)requestAnimationFrame(step);else acc.textContent=end;})(st);
            }
          }
          nio.unobserve(e.target);
        }
      });
    },{threshold:.5});
    nums.forEach(function(el){nio.observe(el);});
    var glowSels='section,.svc-card,.why-card,.method-step,.stat-card,.news-card';
    document.querySelectorAll(glowSels).forEach(function(el){
      el.classList.add('glow-host');
      var g=document.createElement('div');g.className='glow-follow';
      el.insertBefore(g,el.firstChild);
      el.addEventListener('mousemove',function(e){var r=el.getBoundingClientRect();g.style.setProperty('--mx',(e.clientX-r.left)+'px');g.style.setProperty('--my',(e.clientY-r.top)+'px');});
    });
  })();

(function(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if(window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches) return;
  if(typeof THREE === 'undefined') return;
  var wrap = document.getElementById('fluid-wrap'); if(!wrap) return;
  var testCanvas = document.createElement('canvas');
  var gl = testCanvas.getContext('webgl2') || testCanvas.getContext('webgl'); if(!gl) return;
  var CFG = { dt: 0.016, viscous: 28, pressureIter: 14, cursorSize: 110, mouseForce: 26, simScale: 0.45, palette: ['#1e4ca8', '#3b82f6', '#93c5fd', '#dbeafe'] };
  var VERT = ['attribute vec3 position;','uniform vec2 px;','uniform vec2 boundarySpace;','varying vec2 uv;','void main(){','vec3 pos = position;','vec2 scale = 1.0 - boundarySpace * 2.0;','pos.xy = pos.xy * scale;','uv = vec2(0.5) + (pos.xy) * 0.5;','gl_Position = vec4(pos, 1.0);','}'].join('\n');
  var ADVECT = ['precision highp float;','uniform sampler2D velocity;','uniform float dt;','uniform vec2 fboSize;','uniform vec2 px;','varying vec2 uv;','void main(){','vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;','vec2 spot_new = uv;','vec2 vel_old = texture2D(velocity, uv).xy;','vec2 spot_old = spot_new - vel_old * dt * ratio;','vec2 vel_new1 = texture2D(velocity, spot_old).xy;','vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;','vec2 error = spot_new2 - spot_new;','vec2 spot_new3 = spot_new - error / 2.0;','vec2 vel_2 = texture2D(velocity, spot_new3).xy;','vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;','gl_FragColor = vec4(texture2D(velocity, spot_old2).xy, 0.0, 1.0);','}'].join('\n');
  var MOUSE_V = ['precision highp float;','attribute vec3 position;','attribute vec2 uv;','uniform vec2 center, scale, px;','varying vec2 vUv;','void main(){','vec2 pos = position.xy * scale * 2.0 * px + center;','vUv = uv;','gl_Position = vec4(pos, 0.0, 1.0);','}'].join('\n');
  var MOUSE_F = ['precision highp float;','uniform vec2 force;','varying vec2 vUv;','void main(){','vec2 circle = (vUv - 0.5) * 2.0;','float d = 1.0 - min(length(circle), 1.0);','d *= d;','gl_FragColor = vec4(force * d, 0.0, 1.0);','}'].join('\n');
  var VISCOUS = ['precision highp float;','uniform sampler2D velocity;','uniform sampler2D velocity_new;','uniform float v, dt;','uniform vec2 px;','varying vec2 uv;','void main(){','vec2 old = texture2D(velocity, uv).xy;','vec2 n0 = texture2D(velocity_new, uv + vec2(px.x*2.0, 0.0)).xy;','vec2 n1 = texture2D(velocity_new, uv - vec2(px.x*2.0, 0.0)).xy;','vec2 n2 = texture2D(velocity_new, uv + vec2(0.0, px.y*2.0)).xy;','vec2 n3 = texture2D(velocity_new, uv - vec2(0.0, px.y*2.0)).xy;','vec2 newv = (4.0 * old + v * dt * (n0 + n1 + n2 + n3)) / (4.0 * (1.0 + v * dt));','gl_FragColor = vec4(newv, 0.0, 1.0);','}'].join('\n');
  var DIVERGENCE = ['precision highp float;','uniform sampler2D velocity;','uniform float dt;','uniform vec2 px;','varying vec2 uv;','void main(){','float x0 = texture2D(velocity, uv - vec2(px.x, 0.0)).x;','float x1 = texture2D(velocity, uv + vec2(px.x, 0.0)).x;','float y0 = texture2D(velocity, uv - vec2(0.0, px.y)).y;','float y1 = texture2D(velocity, uv + vec2(0.0, px.y)).y;','gl_FragColor = vec4((x1 - x0 + y1 - y0) / 2.0 / dt, 0.0, 0.0, 1.0);','}'].join('\n');
  var PRESSURE = ['precision highp float;','uniform sampler2D pressure;','uniform sampler2D divergence;','uniform vec2 px;','varying vec2 uv;','void main(){','float p0 = texture2D(pressure, uv + vec2(px.x*2.0, 0.0)).r;','float p1 = texture2D(pressure, uv - vec2(px.x*2.0, 0.0)).r;','float p2 = texture2D(pressure, uv + vec2(0.0, px.y*2.0)).r;','float p3 = texture2D(pressure, uv - vec2(0.0, px.y*2.0)).r;','float div = texture2D(divergence, uv).r;','gl_FragColor = vec4((p0 + p1 + p2 + p3) / 4.0 - div, 0.0, 0.0, 1.0);','}'].join('\n');
  var GRAD_SUB = ['precision highp float;','uniform sampler2D pressure;','uniform sampler2D velocity;','uniform vec2 px;','uniform float dt;','varying vec2 uv;','void main(){','float p0 = texture2D(pressure, uv + vec2(px.x, 0.0)).r;','float p1 = texture2D(pressure, uv - vec2(px.x, 0.0)).r;','float p2 = texture2D(pressure, uv + vec2(0.0, px.y)).r;','float p3 = texture2D(pressure, uv - vec2(0.0, px.y)).r;','vec2 v = texture2D(velocity, uv).xy;','v = v - vec2(p0 - p1, p2 - p3) * 0.5 * dt;','gl_FragColor = vec4(v, 0.0, 1.0);','}'].join('\n');
  var DISPLAY = ['precision highp float;','uniform sampler2D velocity;','uniform sampler2D palette;','uniform vec4 bgColor;','varying vec2 uv;','void main(){','vec2 vel = texture2D(velocity, uv).xy;','float lenv = clamp(length(vel), 0.0, 1.0) * 0.5;','vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;','gl_FragColor = vec4(mix(bgColor.rgb, c, lenv), mix(bgColor.a, 1.0, lenv));','}'].join('\n');
  var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.autoClear = false; renderer.setClearColor(0xffffff, 1); renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  wrap.appendChild(renderer.domElement);
  var colors = CFG.palette, palData = new Uint8Array(colors.length * 4);
  colors.forEach(function(hex, i){ var c = new THREE.Color(hex); palData[4*i]=Math.round(255*c.r); palData[4*i+1]=Math.round(255*c.g); palData[4*i+2]=Math.round(255*c.b); palData[4*i+3]=255; });
  var palette = new THREE.DataTexture(palData, colors.length, 1, THREE.RGBAFormat);
  palette.magFilter = THREE.LinearFilter; palette.minFilter = THREE.LinearFilter; palette.wrapS = THREE.ClampToEdgeWrapping; palette.wrapT = THREE.ClampToEdgeWrapping; palette.needsUpdate = true;
  var simW = 1, simH = 1, cellScale = new THREE.Vector2(1, 1), fboSize = new THREE.Vector2(1, 1), boundarySpace = new THREE.Vector2(1, 1);
  var mouse = { coords: new THREE.Vector2(0,0), coords_old: new THREE.Vector2(0,0), diff: new THREE.Vector2(0,0) };
  var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  var rtOpts = { type: isIOS ? THREE.HalfFloatType : THREE.FloatType, depthBuffer: false, stencilBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, wrapS: THREE.ClampToEdgeWrapping, wrapT: THREE.ClampToEdgeWrapping };
  var RT = {}; ['vel_0','vel_1','vel_visc0','vel_visc1','div','press_0','press_1'].forEach(function(name){ RT[name] = new THREE.WebGLRenderTarget(1, 1, rtOpts); });
  var camera = new THREE.Camera(), quadGeo = new THREE.PlaneGeometry(2, 2);
  function makePass(fragShader, uniforms){ var mat = new THREE.RawShaderMaterial({ vertexShader: VERT, fragmentShader: fragShader, uniforms: uniforms }); var mesh = new THREE.Mesh(quadGeo, mat); var scene = new THREE.Scene(); scene.add(mesh); return { scene: scene, mesh: mesh, uniforms: uniforms }; }
  function renderPass(pass, output){ pass.mesh.material.uniforms = pass.uniforms; renderer.setRenderTarget(output || null); renderer.render(pass.scene, camera); }
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
  function resize(){ var w = Math.max(1, window.innerWidth), h = Math.max(1, window.innerHeight); renderer.setSize(w, h, false); simW = Math.max(1, Math.round(w * CFG.simScale)); simH = Math.max(1, Math.round(h * CFG.simScale)); fboSize.set(simW, simH); cellScale.set(1/simW, 1/simH); for(var k in RT) RT[k].setSize(simW, simH); }
  window.addEventListener('resize', resize); resize();
  function updateMouse(cx, cy){ var nx = cx / window.innerWidth, ny = cy / window.innerHeight; mouse.coords.set(2 * nx - 1, -(2 * ny - 1)); }
  window.addEventListener('mousemove', function(e){ updateMouse(e.clientX, e.clientY); });
  var visible = !document.hidden;
  document.addEventListener('visibilitychange', function(){ visible = !document.hidden; if(visible && !rafId) rafId = requestAnimationFrame(frame); });
  var rafId = null;
  function frame(){
    if(!visible){ rafId = null; return; }
    mouse.diff.subVectors(mouse.coords, mouse.coords_old); mouse.coords_old.copy(mouse.coords); boundarySpace.copy(cellScale);
    advect.uniforms.velocity.value = RT.vel_0.texture; advect.uniforms.fboSize.value = fboSize; renderPass(advect, RT.vel_1);
    var fx = (mouse.diff.x / 2) * CFG.mouseForce, fy = (mouse.diff.y / 2) * CFG.mouseForce;
    var cs = CFG.cursorSize * cellScale.x, sy = CFG.cursorSize * cellScale.y;
    mouseMat.uniforms.force.value.set(fx, fy);
    mouseMat.uniforms.center.value.set(Math.min(Math.max(mouse.coords.x, -1 + cs + 2*cellScale.x), 1 - cs - 2*cellScale.x), Math.min(Math.max(mouse.coords.y, -1 + sy + 2*cellScale.y), 1 - sy - 2*cellScale.y));
    mouseMat.uniforms.px.value = cellScale;
    renderer.setRenderTarget(RT.vel_1); renderer.render(mouseScene, camera);
    viscous.uniforms.velocity.value = RT.vel_1.texture; viscous.uniforms.velocity_new.value = RT.vel_1.texture; renderPass(viscous, RT.vel_visc0);
    divPass.uniforms.velocity.value = RT.vel_visc0.texture; renderPass(divPass, RT.div);
    renderer.setRenderTarget(RT.press_0); renderer.clear();
    var pIn = RT.press_0, pOut = RT.press_1;
    for(var i = 0; i < CFG.pressureIter; i++){ pressPass.uniforms.pressure.value = pIn.texture; renderPass(pressPass, pOut); var tmp = pIn; pIn = pOut; pOut = tmp; }
    gradPass.uniforms.velocity.value = RT.vel_visc0.texture; gradPass.uniforms.pressure.value = pIn.texture; renderPass(gradPass, RT.vel_0);
    displayMat.uniforms.velocity.value = RT.vel_0.texture;
    renderer.setRenderTarget(null); renderer.clear(); renderer.render(displayScene, camera);
    rafId = requestAnimationFrame(frame);
  }
  rafId = requestAnimationFrame(frame);
})();