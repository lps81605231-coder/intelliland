(function(){
  const NAV_ITEMS = [
    { key: 'home', href: 'index.html', label: '首页' },
    { key: 'dev', href: 'dev.html', label: '创建智能体' }
  ];
  const MOBILE_ITEMS = [
    { key: 'home', href: 'index.html', label: '首页' },
    { key: 'store', href: 'store.html', label: '智能体市场' },
    { key: 'dev', href: 'dev.html', label: '创建智能体' }
  ];
  const AVATARS = ['bedtime','turtlesoup','memory','artisan','picturebook'];
  const TYPE_WORDS = ['睡前陪伴','聚会推理','记忆珍藏','知识探索','绘本创作'];

  const boolAttr = (el, name, fallback) => {
    if (!el.hasAttribute(name)) return fallback;
    return el.getAttribute(name) !== 'false';
  };

  function renderMobileMenu(target, opts){
    const links = MOBILE_ITEMS.map(item =>
      `<a href="${item.href}" onclick="toggleMenu()">${item.label}</a>`
    ).join('');
    const targetAttr = opts.ctaTarget ? ` target="${opts.ctaTarget}" rel="noopener"` : '';
    return `
      <div class="mobile-menu" id="mm">
        <button class="mm-close" onclick="toggleMenu()">×</button>
        ${links}
        <a href="${opts.ctaHref}"${targetAttr} style="color:var(--accent)">${opts.ctaText}${opts.mobileCtaArrow ? ' →' : ''}</a>
      </div>`;
  }

  function renderHeader(el){
    const active = el.dataset.active || '';
    const showNav = boolAttr(el, 'data-show-nav', true);
    const ctaHref = el.dataset.ctaHref || 'https://intelliland.cn/app';
    const ctaText = el.dataset.ctaText || '立即体验';
    const ctaTarget = el.dataset.ctaTarget || '';
    const mobileCtaArrow = boolAttr(el, 'data-mobile-cta-arrow', true);
    const targetAttr = ctaTarget ? ` target="${ctaTarget}" rel="noopener"` : '';
    const nav = showNav
      ? `<div class="navlinks">
          ${NAV_ITEMS.map(item => `<a href="${item.href}"${active === item.key ? ' class="active"' : ''}>${item.label}</a>`).join('')}
        </div>`
      : '<div class="nav-slot" aria-hidden="true"></div>';

    el.outerHTML = `
      ${renderMobileMenu(el, { ctaHref, ctaText, ctaTarget, mobileCtaArrow })}
      <header id="hdr">
        <div class="wrap">
          <nav>
            <a class="brand" href="index.html">
              <img class="brand-img" src="assets/brand-logo.png" alt="intelliland · 精品智能体" width="626" height="120" decoding="async" />
            </a>
            ${nav}
            <div class="nav-actions">
              <a class="btn cta-fx" href="${ctaHref}"${targetAttr}>${ctaText}</a>
              <button class="menu-btn" onclick="toggleMenu()">☰</button>
            </div>
          </nav>
        </div>
      </header>`;
  }

  function renderHero(el){
    const showBackHome = boolAttr(el, 'data-back-home', false);
    const back = showBackHome
      ? `<a class="store-home-float" href="index.html" aria-label="返回首页">
          <span class="home-float-ic" aria-hidden="true">←</span>
          <span>返回首页</span>
        </a>`
      : '';
    const avatarImgs = AVATARS.map(name =>
      `<i><img src="assets/avatars/${name}.jpg" alt="" /></i>`
    ).join('');

    el.outerHTML = `
      <section class="hero-brand">
        <div class="wrap">
          ${back}
          <h1 class="brandmark reveal in" aria-label="Intelliland">
            <img class="bm-mark" src="assets/intelliland-mark.svg" alt="" />
            <span>Intelli</span>
            <span class="bm-avatars" aria-hidden="true">${avatarImgs}</span>
            <span class="bm-type" aria-hidden="true"></span>
            <span>land</span>
          </h1>
        </div>
      </section>`;
  }

  function startBrandTypewriter(){
    const el = document.querySelector('.bm-type');
    if (!el) return;
    const mq = window.matchMedia('(max-width:560px)');
    let wi = 0, ci = 0, deleting = false, timer = null, running = false;

    function tick(){
      const word = TYPE_WORDS[wi];
      if (!deleting){
        ci++;
        el.textContent = word.slice(0, ci);
        if (ci >= word.length){
          deleting = true;
          timer = setTimeout(tick, 1200);
          return;
        }
        timer = setTimeout(tick, 140);
      } else {
        ci--;
        el.textContent = word.slice(0, ci);
        if (ci <= 0){
          deleting = false;
          wi = (wi + 1) % TYPE_WORDS.length;
          timer = setTimeout(tick, 320);
          return;
        }
        timer = setTimeout(tick, 70);
      }
    }

    function start(){
      if (running) return;
      running = true;
      wi = 0;
      ci = 0;
      deleting = false;
      tick();
    }
    function stop(){
      running = false;
      clearTimeout(timer);
      timer = null;
      el.textContent = '';
    }
    function apply(){
      mq.matches ? start() : stop();
    }
    mq.addEventListener ? mq.addEventListener('change', apply) : mq.addListener(apply);
    apply();
  }

  document.querySelectorAll('[data-site-header]').forEach(renderHeader);
  document.querySelectorAll('[data-intelliland-hero]').forEach(renderHero);
  startBrandTypewriter();
})();
