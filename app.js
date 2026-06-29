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
