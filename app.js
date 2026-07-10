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
