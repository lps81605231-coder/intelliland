/* ============ 共享交互 ============ */

/* 头部滚动态 */
const hdr = document.getElementById('hdr');
if (hdr) addEventListener('scroll', () => hdr.classList.toggle('scrolled', scrollY > 20));

/* 移动端菜单 */
function toggleMenu(){ document.getElementById('mm')?.classList.toggle('open'); }

/* 平滑滚动（页内锚点） */
function go(s){ document.querySelector(s)?.scrollIntoView({ behavior:'smooth' }); }

/* 滚动渐入 */
const io = new IntersectionObserver((es) => {
  es.forEach(e => { if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold:.15 });
function observeReveals(){ document.querySelectorAll('.reveal:not(.in)').forEach(el => io.observe(el)); }
observeReveals();

/* 标题打字机：滚动到视口内逐字打出（尊重减少动效） */
function initTypewriter(){
  if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  document.querySelectorAll('[data-typewriter]').forEach(host => {
    const span = host.querySelector('.tw-text');
    if (!span) return;
    const full = span.textContent;
    let started = false;
    function run(){
      if (started) return; started = true;
      host.classList.add('tw-run');   // 显示闪烁光标
      span.textContent = '';
      let i = 0, deleting = false;
      (function tick(){
        if (!deleting){
          span.textContent = full.slice(0, ++i);
          if (i >= full.length){ deleting = true; setTimeout(tick, 1500); return; }  // 打完停顿
          setTimeout(tick, 120);
        } else {
          span.textContent = full.slice(0, --i);
          if (i <= 0){ deleting = false; setTimeout(tick, 450); return; }            // 退完停顿后重打
          setTimeout(tick, 55);
        }
      })();
    }
    function check(){
      const r = host.getBoundingClientRect();
      if (r.top < innerHeight * 0.9 && r.bottom > 0){ run(); cleanup(); }
    }
    function cleanup(){ removeEventListener('scroll', check); removeEventListener('resize', check); }
    addEventListener('scroll', check, { passive:true });
    addEventListener('resize', check);
    check();  // 首屏内的标题立即开始
  });
}
initTypewriter();

/* ============ 立即体验 CTA：点击空间穿梭后跳转 ============ */
(function initCtaWarp(){
  let warping = false;

  addEventListener('pageshow', () => {   // 从 bfcache 返回时清理残留过场
    warping = false;
    document.querySelectorAll('.warp-overlay').forEach(o => o.remove());
  });

  document.addEventListener('click', e => {
    const cta = e.target.closest('a.cta-fx');
    if (!cta) return;
    const href = cta.getAttribute('href') || '';
    if (!href || href.startsWith('#')) return;   // 页内锚点不做穿梭
    if (warping){ e.preventDefault(); return; }
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;   // 直接默认跳转
    e.preventDefault();
    warping = true;
    const newTab = cta.getAttribute('target') === '_blank';
    const rect = cta.getBoundingClientRect();   // 以按钮中心为穿梭出发点
    playWarp({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }, overlay => {
      if (newTab){
        open(href, '_blank', 'noopener');
        overlay.classList.add('out');
        setTimeout(() => overlay.remove(), 340);
        warping = false;
      } else {
        location.href = href;   // 同页跳转：白光停留到新页面接管
      }
    });
  });

  function playWarp(origin, done){
    const overlay = document.createElement('div');
    overlay.className = 'warp-overlay';
    overlay.style.background = `radial-gradient(circle at ${origin.x}px ${origin.y}px, #10173a 0%, #04050b 55%)`;   // 按钮处先亮起入口
    const maxCss = Math.hypot(Math.max(origin.x, innerWidth - origin.x), Math.max(origin.y, innerHeight - origin.y));
    overlay.style.clipPath = `circle(0px at ${origin.x}px ${origin.y}px)`;   // 从按钮中心的一个点开始
    const canvas = document.createElement('canvas');
    overlay.appendChild(canvas);
    document.body.appendChild(overlay);
    requestAnimationFrame(() => {   // 下一帧展开成盖满全屏的圆
      overlay.style.clipPath = `circle(${Math.ceil(maxCss)}px at ${origin.x}px ${origin.y}px)`;
    });
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const w = canvas.width = innerWidth * dpr;
    const h = canvas.height = innerHeight * dpr;
    const cx = origin.x * dpr, cy = origin.y * dpr;
    const maxR = Math.hypot(Math.max(cx, w - cx), Math.max(cy, h - cy));   // 覆盖到最远角落
    const stars = Array.from({ length: 300 }, () => ({
      a: Math.random() * Math.PI * 2,
      r: 20 * dpr + Math.random() * maxR,
      z: .35 + Math.random() * .65,             // 远近：影响粗细与速度
      hue: 190 + Math.random() * 140
    }));
    const EXPAND = 380, DUR = 950;              // 扩散盖屏 -> 星轨隧道
    let finished = false;
    const finish = () => { if (!finished){ finished = true; clearTimeout(guard); done(overlay); } };
    const guard = setTimeout(finish, EXPAND + DUR + 300);   // 标签页被隐藏、rAF 停摆时兜底跳转
    setTimeout(() => {
      const t0 = performance.now();
      (function frame(now){
      if (finished) return;
      const t = Math.min(1, (now - t0) / DUR);
      const boost = t * t;                       // 越飞越快
      ctx.fillStyle = 'rgba(4,5,11,.5)';         // 半透明覆盖形成星轨拖尾
      ctx.fillRect(0, 0, w, h);
      ctx.lineCap = 'round';
      for (const s of stars){
        const grow = 1 + (.028 + boost * .16) * s.z;
        const r2 = s.r * grow;
        const cos = Math.cos(s.a), sin = Math.sin(s.a);
        ctx.strokeStyle = `hsla(${s.hue},90%,${62 + boost * 25}%,${.25 + s.z * .55})`;
        ctx.lineWidth = (s.z * 2.2 + boost * s.z * 3) * dpr;
        ctx.beginPath();
        ctx.moveTo(cx + cos * s.r, cy + sin * s.r);
        ctx.lineTo(cx + cos * r2, cy + sin * r2);
        ctx.stroke();
        s.r = r2;
        if (s.r > maxR * 1.05) s.r = (2 + Math.random() * 40) * dpr;   // 飞出后从中心重生
      }
      if (t > .8){                               // 抵达前白光渐起
        const f = (t - .8) / .2;
        ctx.fillStyle = `rgba(255,255,255,${f * f})`;
        ctx.fillRect(0, 0, w, h);
      }
      if (t < 1) requestAnimationFrame(frame);
      else finish();
      })(t0);
    }, EXPAND);
  }
})();
