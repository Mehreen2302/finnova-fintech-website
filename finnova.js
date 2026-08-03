/* ---------- INLINE ICON SET (replaces Lucide CDN dependency) ---------- */
const ICONS = {
  search:'<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  bell:'<path d="M6 8a6 6 0 0 1 12 0c0 5 2 7 2 7H4s2-2 2-7"/><path d="M10 21a2 2 0 0 0 4 0"/>',
  moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7.2 7.2 0 0 0 9.8 9.8Z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4.5"/><line x1="12" y1="19.5" x2="12" y2="22"/><line x1="2" y1="12" x2="4.5" y2="12"/><line x1="19.5" y1="12" x2="22" y2="12"/><line x1="4.9" y1="4.9" x2="6.6" y2="6.6"/><line x1="17.4" y1="17.4" x2="19.1" y2="19.1"/><line x1="4.9" y1="19.1" x2="6.6" y2="17.4"/><line x1="17.4" y1="6.6" x2="19.1" y2="4.9"/>',
  menu:'<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  x:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  plus:'<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  check:'<polyline points="20 6 9 17 4 12"/>',
  'arrow-right':'<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  landmark:'<line x1="3" y1="21" x2="21" y2="21"/><line x1="5" y1="21" x2="5" y2="10"/><line x1="9" y1="21" x2="9" y2="10"/><line x1="15" y1="21" x2="15" y2="10"/><line x1="19" y1="21" x2="19" y2="10"/><polygon points="12 3 21 9 3 9"/>',
  briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="3" y1="13" x2="21" y2="13"/>',
  sparkles:'<path d="M12 3l1.4 4.2L18 9l-4.6 1.8L12 15l-1.4-4.2L6 9l4.6-1.8Z"/><path d="M19 14l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7Z"/>',
  'piggy-bank':'<path d="M5 12a7 5 0 0 1 7-5c3 0 5.5 1.3 6.5 3.3H20l-1 3h-1.2"/><path d="M5 12a7 5 0 0 0 7 5c3.4 0 6.3-1.7 7.3-4.5"/><circle cx="15.5" cy="10.3" r="0.6" fill="currentColor" stroke="none"/><line x1="8" y1="17" x2="8" y2="19.5"/><line x1="14" y1="17" x2="14" y2="19.5"/><line x1="10" y1="7" x2="10" y2="4.5"/>',
  'trending-up':'<polyline points="3 17 9 11 13 15 21 6"/><polyline points="15 6 21 6 21 12"/>',
  'shield-check':'<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6Z"/><polyline points="9 12 11 14 15 10"/>',
  activity:'<polyline points="3 12 8 12 10 6 14 18 16 12 21 12"/>',
  layers:'<polygon points="12 3 21 8 12 13 3 8"/><polyline points="3 13 12 18 21 13"/>',
  'pie-chart':'<circle cx="12" cy="12" r="9"/><path d="M12 3v9l6 4.5"/>',
  headset:'<path d="M4 13v-1a8 8 0 0 1 16 0v1"/><rect x="3" y="13" width="4" height="6" rx="1.5"/><rect x="17" y="13" width="4" height="6" rx="1.5"/><path d="M19 19v1a3 3 0 0 1-3 3h-2"/>',
  'credit-card':'<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>',
  wallet:'<path d="M3 7a2 2 0 0 1 2-2h13a1 1 0 0 1 1 1v3"/><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H8"/><circle cx="16.5" cy="14" r="1" fill="currentColor" stroke="none"/>',
  'line-chart':'<polyline points="3 3 3 21 21 21"/><polyline points="7 15 11 10 15 13 20 6"/>',
  calculator:'<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="11" x2="8" y2="11.01"/><line x1="12" y1="11" x2="12" y2="11.01"/><line x1="16" y1="11" x2="16" y2="11.01"/><line x1="8" y1="15" x2="8" y2="15.01"/><line x1="12" y1="15" x2="12" y2="15.01"/><line x1="16" y1="15" x2="16" y2="17"/><line x1="8" y1="19" x2="12" y2="19"/>',
  'building-2':'<rect x="4" y="3" width="10" height="18"/><rect x="15" y="9" width="5" height="12"/><line x1="7" y1="7" x2="7" y2="7.01"/><line x1="11" y1="7" x2="11" y2="7.01"/><line x1="7" y1="11" x2="7" y2="11.01"/><line x1="11" y1="11" x2="11" y2="11.01"/><line x1="7" y1="15" x2="7" y2="15.01"/><line x1="11" y1="15" x2="11" y2="15.01"/>',
  'brain-circuit':'<circle cx="12" cy="6" r="3"/><path d="M12 9v3"/><circle cx="7" cy="16" r="2.5"/><circle cx="17" cy="16" r="2.5"/><path d="M12 12l-4 3M12 12l4 3"/>',
  send:'<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/>',
  'bell-ring':'<path d="M6 8a6 6 0 0 1 12 0c0 5 2 7 2 7H4s2-2 2-7"/><path d="M10 21a2 2 0 0 0 4 0"/><path d="M4 4l-1.5 1.5"/><path d="M20 4l1.5 1.5"/>',
  eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  'eye-off':'<path d="M3 3l18 18"/><path d="M10.6 5.2A10.6 10.6 0 0 1 12 5c6.5 0 10 7 10 7a17.6 17.6 0 0 1-3.4 4.4M6.6 6.6C4 8.3 2 12 2 12s3.5 7 10 7a10.4 10.4 0 0 0 4-.8"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',
  'bar-chart-3':'<line x1="4" y1="20" x2="4" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="20" y1="20" x2="20" y2="14"/>',
  tag:'<path d="M20.6 12.3 12.7 20.2a2 2 0 0 1-2.8 0L3 13.3V4h9.3l8.3 8.3a2 2 0 0 1 0 2.8Z"/><circle cx="7.5" cy="8.5" r="1" fill="currentColor" stroke="none"/>',
  receipt:'<path d="M5 3h14v18l-2.5-1.5L14 21l-2.5-1.5L9 21l-2.5-1.5L4 21V3Z"/><line x1="8" y1="8" x2="16" y2="8"/><line x1="8" y1="12" x2="16" y2="12"/>',
  coffee:'<path d="M4 9h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z"/><path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17"/><line x1="7" y1="3" x2="7" y2="5.5"/><line x1="11" y1="3" x2="11" y2="5.5"/>',
  film:'<rect x="3" y="4" width="18" height="16" rx="1"/><line x1="7" y1="4" x2="7" y2="20"/><line x1="17" y1="4" x2="17" y2="20"/><line x1="3" y1="9" x2="7" y2="9"/><line x1="3" y1="15" x2="7" y2="15"/><line x1="17" y1="9" x2="21" y2="9"/><line x1="17" y1="15" x2="21" y2="15"/>',
  zap:'<polygon points="13 2 4 14 11 14 10 22 20 9 13 9 13 2"/>',
  flag:'<path d="M5 3v18"/><path d="M5 4h13l-3 5 3 5H5"/>',
  telescope:'<path d="M3 15l9-4 9 4-2 4-14-4Z"/><path d="M11 11l1.5 8"/><circle cx="6" cy="18" r="2"/>',
  lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17.5" cy="9.5" r="2.8"/><path d="M15 13.2A5.5 5.5 0 0 1 21.5 20"/>',
  fingerprint:'<path d="M12 2a8 8 0 0 0-8 8c0 4 1.5 6 2 7"/><path d="M12 2a8 8 0 0 1 8 8c0 1 0 2-.3 3"/><path d="M8 20a10 10 0 0 0 1.5-4.5c.3-1.7.2-3.5.2-5a2.3 2.3 0 0 1 4.6 0c0 3-.2 6.5-1.3 9"/><path d="M12 9.5c1.5 0 2.5 1 2.5 3 0 3-1 6-2.5 8.5"/>',
  'lock-keyhole':'<circle cx="12" cy="16" r="1.2" fill="currentColor" stroke="none"/><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><line x1="12" y1="16" x2="12" y2="18.5"/>',
  'scan-eye':'<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><circle cx="12" cy="12" r="3"/><path d="M6 12s2.5-3.5 6-3.5S18 12 18 12s-2.5 3.5-6 3.5S6 12 6 12Z"/>',
  chrome:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.2"/><line x1="12" y1="3" x2="12" y2="8.8"/><line x1="5" y1="17" x2="9.6" y2="14.3"/><line x1="19" y1="17" x2="14.4" y2="14.3"/>',
  'mail-check':'<path d="M3 6h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6Z"/><path d="M3 6l8 6 4-3"/><path d="M18 15l1.5 1.5L23 13"/>',
  twitter:'<path d="M22 5.9a8.4 8.4 0 0 1-2.4.7 4.2 4.2 0 0 0 1.8-2.3 8.4 8.4 0 0 1-2.6 1 4.1 4.1 0 0 0-7 3.8A11.7 11.7 0 0 1 3.2 4.6a4.1 4.1 0 0 0 1.3 5.5 4 4 0 0 1-1.9-.5v.1a4.1 4.1 0 0 0 3.3 4 4.1 4.1 0 0 1-1.8.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.4a11.7 11.7 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5A8.3 8.3 0 0 0 22 5.9Z"/>',
  linkedin:'<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="7" y1="10" x2="7" y2="17"/><circle cx="7" cy="6.7" r="1" fill="currentColor" stroke="none"/><path d="M11 17v-4.5a2.5 2.5 0 0 1 5 0V17"/><line x1="11" y1="10" x2="11" y2="17"/>',
  instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>',
  facebook:'<path d="M14 8.5h3V5h-3a4 4 0 0 0-4 4v2.5H8V15h2v6h3v-6h2.5l.5-3.5H13V9a.5.5 0 0 1 .5-.5Z"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 6l9 7 9-7"/>',
  phone:'<path d="M5 4h3l1.5 4.5L7.5 10a12 12 0 0 0 6.5 6.5l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-1Z"/>',
  'map-pin':'<path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
  'message-circle':'<path d="M21 12a8.5 8.5 0 0 1-11.9 7.8L3 21l1.3-5.9A8.5 8.5 0 1 1 21 12Z"/>',
  map:'<polygon points="3 6 9 4 15 6 21 4 21 18 15 20 9 18 3 20"/><line x1="9" y1="4" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="20"/>',
  info:'<circle cx="12" cy="12" r="9"/><line x1="12" y1="11" x2="12" y2="16"/><line x1="12" y1="8" x2="12" y2="8.01"/>',
  'log-in':'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>',
  'user-plus':'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="16" y1="11" x2="22" y2="11"/>'
};
function renderIcons(scope){
  const root = scope || document;
  const nodes = root.querySelectorAll ? root.querySelectorAll('[data-lucide]') : [];
  nodes.forEach(el => {
    const name = el.getAttribute('data-lucide');
    const inner = ICONS[name];
    if(!inner) return;
    const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('viewBox','0 0 24 24');
    svg.setAttribute('fill','none');
    svg.setAttribute('stroke','currentColor');
    svg.setAttribute('stroke-width','1.8');
    svg.setAttribute('stroke-linecap','round');
    svg.setAttribute('stroke-linejoin','round');
    svg.innerHTML = inner;
    if(el.getAttribute('class')) svg.setAttribute('class', el.getAttribute('class'));
    if(el.getAttribute('style')) svg.setAttribute('style', el.getAttribute('style'));
    el.replaceWith(svg);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderIcons();

  /* ---------- ROUTING ---------- */
  const pages = document.querySelectorAll('.page');
  const navLinks = document.querySelectorAll('[data-route]');
  let dashInited = false;

  function showPage(id){
    pages.forEach(p => p.classList.toggle('active', p.id === id));
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.toggle('active', a.dataset.route === id));
    window.scrollTo({top:0, behavior:'auto'});
    document.getElementById('mobileMenu').classList.remove('open');
    if(id === 'page-dashboard' && !dashInited){ initCharts(); dashInited = true; }
  }
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      showPage(link.dataset.route);
    });
  });

  /* ---------- MOBILE MENU ---------- */
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  mobileToggle.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    mobileToggle.setAttribute('aria-expanded', open);
  });

  /* ---------- THEME ---------- */
  const themeBtn = document.getElementById('themeBtn');
  const root = document.documentElement;
  function setTheme(t){
    root.setAttribute('data-theme', t);
    localStorage.setItem('finnova-theme', t);
    themeBtn.innerHTML = t === 'dark' ? '<i data-lucide="moon"></i>' : '<i data-lucide="sun"></i>';
    renderIcons(themeBtn);
  }
  setTheme(localStorage.getItem('finnova-theme') || 'dark');
  themeBtn.addEventListener('click', () => {
    setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  /* ---------- NOTIFICATIONS DROPDOWN ---------- */
  const notifBtn = document.getElementById('notifBtn');
  const notifPanel = document.getElementById('notifPanel');
  notifBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = notifPanel.classList.toggle('open');
    notifBtn.setAttribute('aria-expanded', open);
  });
  document.addEventListener('click', (e) => {
    if(!notifPanel.contains(e.target) && e.target !== notifBtn){ notifPanel.classList.remove('open'); }
  });

  /* ---------- SEARCH MODAL ---------- */
  const searchIndex = [
    {t:'Services', s:'Explore all FinNova financial tools', route:'page-services', icon:'layers'},
    {t:'Dashboard Preview', s:'See a live sample of your finances', route:'page-dashboard', icon:'bar-chart-3'},
    {t:'SIP Calculator', s:'Estimate returns on your monthly SIP', route:'page-sip', icon:'calculator'},
    {t:'Pricing', s:'Basic, Pro, and Enterprise plans', route:'page-pricing', icon:'tag'},
    {t:'About FinNova', s:'Our story, mission, and security', route:'page-about', icon:'info'},
    {t:'Contact Support', s:'Reach our team or start a live chat', route:'page-contact', icon:'mail'},
    {t:'Digital Payments', s:'Send and receive money instantly', route:'page-services', icon:'credit-card'},
    {t:'Investment Tracking', s:'Track your full portfolio', route:'page-services', icon:'line-chart'},
    {t:'Budget Planning', s:'Adaptive budgets built for you', route:'page-services', icon:'calculator'},
    {t:'Log In', s:'Access your FinNova account', route:'page-login', icon:'log-in'},
    {t:'Sign Up', s:'Create a free FinNova account', route:'page-signup', icon:'user-plus'},
  ];
  const searchModal = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  function renderResults(query){
    const q = query.trim().toLowerCase();
    const list = q ? searchIndex.filter(i => i.t.toLowerCase().includes(q) || i.s.toLowerCase().includes(q)) : searchIndex;
    searchResults.innerHTML = list.map(i => `<div class="search-result" data-route="${i.route}"><i data-lucide="${i.icon}"></i><div><div class="t">${i.t}</div><div class="s">${i.s}</div></div></div>`).join('') || '<p style="color:var(--text-faint); font-size:13.5px; padding:10px;">No results found.</p>';
    renderIcons(searchResults);
    searchResults.querySelectorAll('.search-result').forEach(el => {
      el.addEventListener('click', () => { showPage(el.dataset.route); searchModal.classList.remove('open'); });
    });
  }
  document.getElementById('searchBtn').addEventListener('click', () => { searchModal.classList.add('open'); searchInput.value=''; renderResults(''); searchInput.focus(); });
  document.getElementById('closeSearch').addEventListener('click', () => searchModal.classList.remove('open'));
  searchInput.addEventListener('input', () => renderResults(searchInput.value));
  searchModal.addEventListener('click', (e) => { if(e.target === searchModal) searchModal.classList.remove('open'); });

  /* ---------- LIVE CHAT MODAL ---------- */
  const chatModal = document.getElementById('chatModal');
  document.getElementById('liveChatBtn').addEventListener('click', () => chatModal.classList.add('open'));
  document.getElementById('closeChat').addEventListener('click', () => chatModal.classList.remove('open'));
  chatModal.addEventListener('click', (e) => { if(e.target === chatModal) chatModal.classList.remove('open'); });

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){ searchModal.classList.remove('open'); chatModal.classList.remove('open'); notifPanel.classList.remove('open'); }
  });

  /* ---------- FAQ ACCORDION ---------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if(!isOpen) item.classList.add('open');
    });
  });

  /* ---------- TESTIMONIAL CAROUSEL ---------- */
  const slides = document.querySelectorAll('.testi-slide');
  const dotsWrap = document.getElementById('testiDots');
  let activeSlide = 0;
  slides.forEach((_, i) => {
    const b = document.createElement('button');
    if(i === 0) b.classList.add('active');
    b.addEventListener('click', () => goSlide(i));
    dotsWrap.appendChild(b);
  });
  function goSlide(i){
    slides[activeSlide].classList.remove('active');
    dotsWrap.children[activeSlide].classList.remove('active');
    activeSlide = i;
    slides[activeSlide].classList.add('active');
    dotsWrap.children[activeSlide].classList.add('active');
  }
  setInterval(() => { goSlide((activeSlide + 1) % slides.length); }, 6000);

  /* ---------- ANIMATED COUNTERS ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.closest('[data-animate]')?.classList.add('in');
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        let cur = 0;
        const step = target / 40;
        const tick = () => {
          cur += step;
          if(cur >= target){ el.textContent = prefix + target + suffix; return; }
          el.textContent = prefix + cur.toFixed(target % 1 !== 0 ? 1 : 0) + suffix;
          requestAnimationFrame(tick);
        };
        tick();
        io.unobserve(el);
      }
    });
  }, {threshold:0.4});
  counters.forEach(c => io.observe(c));

  /* ---------- PASSWORD VISIBILITY ---------- */
  document.querySelectorAll('.pw-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.previousElementSibling;
      const show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      btn.innerHTML = show ? '<i data-lucide="eye-off"></i>' : '<i data-lucide="eye"></i>';
      renderIcons(btn);
    });
  });

  /* ---------- PASSWORD STRENGTH ---------- */
  const sPass = document.getElementById('sPass');
  if(sPass){
    sPass.addEventListener('input', () => {
      const v = sPass.value;
      let score = 0;
      if(v.length >= 8) score++;
      if(/[A-Z]/.test(v)) score++;
      if(/[0-9]/.test(v)) score++;
      if(/[^A-Za-z0-9]/.test(v)) score++;
      const bars = document.querySelectorAll('#pwStrength span');
      const colors = ['var(--danger)','var(--warning)','var(--teal-500)','var(--success)'];
      bars.forEach((b,i) => { b.style.background = i < score ? colors[score-1] : 'var(--card-border)'; });
    });
  }

  /* ---------- FORM SUBMISSIONS (client-side only) ---------- */
  const contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      contactForm.style.display = 'none';
      document.getElementById('formSuccess').classList.add('show');
    });
  }
  const resetForm = document.getElementById('resetForm');
  if(resetForm){
    resetForm.addEventListener('submit', e => {
      e.preventDefault();
      resetForm.style.display = 'none';
      document.getElementById('resetSuccess').classList.add('show');
    });
  }
  ['loginForm','signupForm'].forEach(id => {
    const f = document.getElementById(id);
    if(f) f.addEventListener('submit', e => {
      e.preventDefault();
      showPage('page-dashboard');
    });
  });

  /* ---------- PRICING TOGGLE ---------- */
  const billingSwitch = document.getElementById('billingSwitch');
  const priceAmt = document.querySelector('.price-amt');
  function toggleBilling(){
    const on = billingSwitch.classList.toggle('on');
    billingSwitch.setAttribute('aria-checked', on);
    const val = on ? priceAmt.dataset.yearly : priceAmt.dataset.monthly;
    priceAmt.innerHTML = '₹' + val + '<span>/mo</span>';
    document.querySelector('.price-card.featured .per').textContent = on ? 'billed yearly' : 'billed monthly';
  }
  billingSwitch.addEventListener('click', toggleBilling);
  billingSwitch.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); toggleBilling(); } });

  /* ---------- PROFILE TOGGLES ---------- */
  document.querySelectorAll('[data-toggle]').forEach(t => {
    t.addEventListener('click', () => t.classList.toggle('on'));
  });

  /* ---------- LANGUAGE SWITCHER (demo) ---------- */
  const dict = {
    en:{hero_h1:'Your money,<br>moving with <em>intention.</em>', hero_p:"FinNova brings your accounts, investments, and spending into one secure command center — built for people who want their money to work as hard as they do."},
    es:{hero_h1:'Tu dinero,<br>se mueve con <em>intención.</em>', hero_p:'FinNova reúne tus cuentas, inversiones y gastos en un centro de control seguro, diseñado para quienes quieren que su dinero trabaje tan duro como ellos.'},
    fr:{hero_h1:'Votre argent,<br>avance avec <em>intention.</em>', hero_p:"FinNova regroupe vos comptes, investissements et dépenses dans un centre sécurisé unique, conçu pour ceux qui veulent que leur argent travaille aussi dur qu'eux."}
  };
  document.getElementById('langSelect').addEventListener('change', (e) => {
    const d = dict[e.target.value];
    document.querySelector('[data-i18n="hero_h1"]').innerHTML = d.hero_h1;
    document.querySelector('[data-i18n="hero_p"]').textContent = d.hero_p;
  });

  /* ---------- CHARTS ---------- */
  function initCharts(){
    const isLight = root.getAttribute('data-theme') === 'light';
    const textColor = isLight ? '#4C5F78' : '#9FB0C6';

    new Chart(document.getElementById('categoriesChart'), {
      type:'pie',
      data:{
        labels:['Housing','Groceries','Dining','Transport'],
        datasets:[{ data:[18500,6200,4100,1800], backgroundColor:['#2DD4C4','#5EEAD4','#1B3A6B','#254A82'], borderWidth:0 }]
      },
      options:{
        responsive:true, maintainAspectRatio:false,
        plugins:{
          legend:{position:'bottom', labels:{color:textColor, boxWidth:10, font:{size:11}}},
          tooltip:{callbacks:{label: ctx => ctx.label + ': ₹' + ctx.parsed.toLocaleString('en-IN')}}
        }
      }
    });
  }

  /* ---------- SIP CALCULATOR ---------- */
  function formatINR(num){
    return '₹' + Math.round(num).toLocaleString('en-IN');
  }
  const sipAmount = document.getElementById('sipAmount');
  const sipReturn = document.getElementById('sipReturn');
  const sipYears = document.getElementById('sipYears');
  const sipReset = document.getElementById('sipReset');
  function calcSIP(){
    const P = parseFloat(sipAmount.value) || 0;
    const annualRate = parseFloat(sipReturn.value) || 0;
    const years = parseFloat(sipYears.value) || 0;
    const n = Math.max(years * 12, 0);
    const r = annualRate / 12 / 100;
    let maturity;
    if(r > 0){
      maturity = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    } else {
      maturity = P * n;
    }
    const invested = P * n;
    const returns = Math.max(maturity - invested, 0);
    document.getElementById('sipInvested').textContent = formatINR(invested);
    document.getElementById('sipReturns').textContent = formatINR(returns);
    document.getElementById('sipMaturity').textContent = formatINR(maturity);
  }
  if(sipAmount && sipReturn && sipYears){
    [sipAmount, sipReturn, sipYears].forEach(el => el.addEventListener('input', calcSIP));
    sipReset.addEventListener('click', () => {
      sipAmount.value = 5000;
      sipReturn.value = 12;
      sipYears.value = 10;
      calcSIP();
    });
    calcSIP();
  }
});
