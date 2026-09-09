/* ═══════════════════════════════════════════════
   BANANA CAT HUB — script.js
   Includes: i18n, particles, navbar, FAQ,
   scroll reveal, stats counter, parallax
═══════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════════════
   1. TRANSLATIONS
══════════════════════════════════════ */
const translations = {
  vi: {
    // Nav
    nav_about:    'Giới thiệu',
    nav_features: 'Tính năng',
    nav_why:      'Tại sao chọn',
    nav_stats:    'Thống kê',
    nav_faq:      'FAQ',
    btn_discord:  'Tham gia Discord',
    lang_vi:      'Tiếng Việt',
    lang_en:      'English',

    // Hero
    hero_badge:         'Đang hoạt động · v2.5 Ra mắt',
    hero_desc:          'Hub tự động hóa thế hệ mới — tối ưu hiệu năng, giao diện sạch, hỗ trợ hàng chục tính năng tiện lợi và luôn cập nhật.',
    btn_view_features:  'Xem tính năng',
    scroll_hint:        'Cuộn xuống',

    // About
    label_about:       'Giới thiệu',
    about_title_html:  'Hub không chỉ là<br><span class="gradient-text">một công cụ</span>',
    about_p1:          'Banana Cat Hub được xây dựng với triết lý đơn giản: <strong>mạnh mẽ nhưng dễ dùng.</strong> Dù bạn là người mới hay lập trình viên kỳ cựu, Hub đều hoạt động trơn tru ngay từ lần đầu tiên.',
    about_p2:          'Chúng tôi liên tục cập nhật, lắng nghe cộng đồng và tối ưu từng tính năng để mang lại trải nghiệm tốt nhất.',
    str1_title: 'Dễ sử dụng',
    str1_desc:  'Cài đặt và chạy trong vài giây, không cần kiến thức chuyên sâu.',
    str2_title: 'Giao diện thân thiện',
    str2_desc:  'UI sạch, trực quan, dễ điều hướng trên mọi thiết bị.',
    str3_title: 'Cập nhật thường xuyên',
    str3_desc:  'Tính năng mới và bản vá lỗi được phát hành định kỳ.',
    str4_title: 'Tối ưu hiệu năng',
    str4_desc:  'Nhẹ, nhanh và không ảnh hưởng đến hiệu suất hệ thống.',
    str5_title: 'Hỗ trợ nhiều tính năng',
    str5_desc:  '50+ tính năng được tích hợp sẵn, đáp ứng mọi nhu cầu.',
    str6_title: 'Cộng đồng sôi động',
    str6_desc:  'Hơn 10.000 thành viên sẵn sàng hỗ trợ 24/7.',

    // Features
    label_features:        'Tính năng',
    features_title_mid:    'tính năng',
    features_title_end:    'mạnh mẽ',
    features_sub:          'Từ tự động hóa cơ bản đến hệ thống nâng cao — tất cả đều có trong Hub.',
    feat_farm:    'Tự động farming hiệu quả, tối ưu hóa từng vòng lặp để đạt loot tối đa.',
    feat_quest:   'Nhận và hoàn thành quest tự động, không bỏ sót bất kỳ nhiệm vụ nào.',
    feat_boss:    'Tham chiến boss tự động với chiến thuật thông minh và phản xạ nhanh.',
    feat_raid:    'Tự động tham gia raid, tối ưu điểm số và phần thưởng mỗi mùa.',
    feat_sea:     'Không bỏ lỡ bất kỳ sự kiện biển nào với hệ thống phát hiện thông minh.',
    feat_collect: 'Thu thập item, tài nguyên và phần thưởng tự động, không cần giám sát.',
    feat_tp:      'Dịch chuyển tức thì đến bất kỳ vị trí nào với hệ thống teleport tiên tiến.',
    feat_status:  'Giao diện hiển thị trạng thái real-time, theo dõi mọi thông số quan trọng.',
    feat_webhook: 'Nhận thông báo tức thì qua Discord Webhook khi có sự kiện quan trọng.',
    feat_multi:   'Hỗ trợ đa tài khoản đồng thời, quản lý tập trung trong một giao diện.',
    feat_config:  'Hệ thống cấu hình linh hoạt, lưu/tải profile dễ dàng chỉ với vài click.',
    feat_perf:    'Tối ưu CPU & RAM thông minh, chạy mượt ngay cả trên máy cấu hình thấp.',

    // Why
    label_why:         'Tại sao chọn',
    why_title_html:    'Tại sao chọn <span class="gradient-text">Banana Cat Hub?</span>',
    why1_desc: 'Hệ thống được tối ưu kỹ lưỡng, hoạt động ổn định 24/7 không gián đoạn.',
    why2_desc: 'Giao diện tối giản, không rối, mọi chức năng đều dễ tìm và dễ dùng.',
    why3_desc: 'Thuật toán thông minh, tự thích nghi với từng tình huống trong game.',
    why4_desc: 'Tiêu tốn tài nguyên tối thiểu, không làm chậm máy hay kết nối mạng.',
    why5_desc: 'Cài đặt trong 60 giây, hướng dẫn chi tiết bằng tiếng Việt đầy đủ.',
    why6_desc: 'Đội ngũ hỗ trợ sẵn sàng 24/7 qua Discord, phản hồi trong vài phút.',

    // Showcase
    label_showcase:        'Giao diện',
    showcase_title_html:   'Giao diện <span class="gradient-text">Hub</span>',
    showcase_sub:          'Thiết kế tối giản, chuyên nghiệp và hoàn toàn tùy chỉnh được.',
    sc_main:   'Màn hình chính',
    sc_config: 'Cấu hình',
    sc_notif:  'Thông báo',

    // Stats
    stat_users:    'Người dùng',
    stat_features: 'Tính năng',
    stat_support:  'Hỗ trợ',
    stat_updates:  'Bản cập nhật',

    // FAQ
    label_faq:  'FAQ',
    faq_title:  'Câu hỏi',
    faq_title2: 'thường gặp',
    faq1_q: 'Hub có dễ sử dụng không?',
    faq1_a: 'Rất dễ! Chỉ cần tải Hub, chạy file cài đặt và làm theo hướng dẫn từng bước. Toàn bộ giao diện được thiết kế tối giản, dễ hiểu kể cả với người mới lần đầu sử dụng.',
    faq2_q: 'Có cập nhật thường xuyên không?',
    faq2_a: 'Có! Chúng tôi phát hành bản cập nhật liên tục — bao gồm tính năng mới, vá lỗi và tối ưu hiệu năng. Mỗi bản cập nhật đều được thông báo trước trên Discord.',
    faq3_q: 'Có hỗ trợ config không?',
    faq3_a: 'Có đầy đủ! Hệ thống Config cho phép bạn lưu, tải và chia sẻ cấu hình một cách dễ dàng. Bạn có thể tạo nhiều profile khác nhau cho từng mục đích sử dụng.',
    faq4_q: 'Có Discord hỗ trợ không?',
    faq4_a: 'Có! Discord của chúng tôi luôn hoạt động 24/7 với đội ngũ support nhiệt tình. Cộng đồng hơn 10.000 thành viên sẵn sàng giúp đỡ bạn bất kỳ lúc nào.',
    faq5_q: 'Hub có hỗ trợ đa tài khoản không?',
    faq5_a: 'Có! Tính năng Multi Account cho phép quản lý nhiều tài khoản cùng lúc trong một giao diện thống nhất, tiết kiệm thời gian và tăng hiệu quả đáng kể.',

    // CTA
    cta_title_html: 'Sẵn sàng tham gia <span class="gradient-text">chưa?</span>',
    cta_desc:         'Hàng nghìn người đang sử dụng Banana Cat Hub mỗi ngày. Đừng bỏ lỡ!',
    cta_btn:          'Tham gia ngay',

    // Footer
    footer_hub:         'Hub',
    footer_community: 'Cộng đồng',
    footer_copy:      '© 2025 Banana Cat Hub. Bảo lưu mọi quyền.',
  },

  en: {
    // Nav
    nav_about:    'About',
    nav_features: 'Features',
    nav_why:      'Why Us',
    nav_stats:    'Stats',
    nav_faq:      'FAQ',
    btn_discord:  'Join Discord',
    lang_vi:      'Tiếng Việt',
    lang_en:      'English',

    // Hero
    hero_badge:         'Now Live · v2.5 Released',
    hero_desc:          'Next-gen automation hub — optimized performance, clean interface, dozens of powerful features and always up to date.',
    btn_view_features:  'View Features',
    scroll_hint:        'Scroll',

    // About
    label_about:       'About',
    about_title_html: 'Hub is more than<br><span class="gradient-text">just a tool</span>',
    about_p1:          'Banana Cat Hub is built with a simple philosophy: <strong>powerful yet easy to use.</strong> Whether you\'re a beginner or a seasoned developer, the Hub runs smoothly from the very first launch.',
    about_p2:          'We continuously update, listen to the community, and optimize every feature to deliver the best possible experience.',
    str1_title: 'Easy to Use',
    str1_desc:  'Install and run in seconds — no deep technical knowledge required.',
    str2_title: 'Friendly UI',
    str2_desc:  'Clean, intuitive interface that\'s easy to navigate on any device.',
    str3_title: 'Regular Updates',
    str3_desc:  'New features and bug fixes are released on a consistent schedule.',
    str4_title: 'Performance Optimized',
    str4_desc:  'Lightweight, fast, and won\'t impact your system performance.',
    str5_title: 'Feature-Rich',
    str5_desc:  '50+ built-in features ready to cover all your needs.',
    str6_title: 'Active Community',
    str6_desc:  'Over 10,000 members ready to help 24/7.',

    // Features
    label_features:        'Features',
    features_title_mid:    'powerful',
    features_title_end:    'features',
    features_sub:          'From basic automation to advanced systems — everything is included in the Hub.',
    feat_farm:    'Efficient auto farming that optimizes each loop to maximize loot gained.',
    feat_quest:   'Automatically accept and complete quests — never miss a single task.',
    feat_boss:    'Battle bosses automatically with smart tactics and fast reaction times.',
    feat_raid:    'Auto-join raids and optimize your score and rewards each season.',
    feat_sea:     'Never miss a sea event with our intelligent detection system.',
    feat_collect: 'Automatically collect items, resources and rewards without supervision.',
    feat_tp:      'Instantly teleport to any location using our advanced teleport system.',
    feat_status:  'Real-time status UI to monitor every important stat at a glance.',
    feat_webhook: 'Receive instant Discord Webhook notifications for important events.',
    feat_multi:   'Multi-account support — manage all accounts in one unified interface.',
    feat_config:  'Flexible config system to save, load and share profiles in just a few clicks.',
    feat_perf:    'Smart CPU & RAM optimization — runs smoothly even on low-end hardware.',

    // Why
    label_why:         'Why Us',
    why_title_html:    'Why choose <span class="gradient-text">Banana Cat Hub?</span>',
    why1_desc: 'Meticulously optimized system running stable 24/7 without interruption.',
    why2_desc: 'Minimal, clutter-free UI — every function is easy to find and use.',
    why3_desc: 'Smart algorithms that self-adapt to every in-game situation.',
    why4_desc: 'Minimal resource usage — won\'t slow down your PC or network.',
    why5_desc: 'Set up in 60 seconds with detailed step-by-step documentation.',
    why6_desc: 'Support team ready 24/7 on Discord, responding within minutes.',

    // Showcase
    label_showcase:       'Showcase',
    showcase_title_html: 'Hub <span class="gradient-text">Interface</span>',
    showcase_sub:         'Minimal, professional design that\'s fully customizable.',
    sc_main:   'Main Dashboard',
    sc_config: 'Config Panel',
    sc_notif:  'Notification Hub',

    // Stats
    stat_users:    'Active Users',
    stat_features: 'Features',
    stat_support:  'Support',
    stat_updates:  'Updates Released',

    // FAQ
    label_faq:  'FAQ',
    faq_title:  'Frequently',
    faq_title2: 'Asked Questions',
    faq1_q: 'Is the Hub easy to use?',
    faq1_a: 'Absolutely! Just download the Hub, run the installer and follow the step-by-step guide. The entire interface is designed to be minimal and intuitive, even for first-time users.',
    faq2_q: 'Are updates frequent?',
    faq2_a: 'Yes! We release updates continuously — including new features, bug fixes and performance improvements. Every update is announced in advance on Discord.',
    faq3_q: 'Does it support config profiles?',
    faq3_a: 'Fully! The Config System lets you save, load and share configurations with ease. You can create multiple profiles for different use cases.',
    faq4_q: 'Is there Discord support?',
    faq4_a: 'Yes! Our Discord runs 24/7 with a dedicated support team. A community of 10,000+ members is ready to help you at any time.',
    faq5_q: 'Does it support multiple accounts?',
    faq5_a: 'Yes! The Multi Account feature lets you manage multiple accounts simultaneously in one unified interface, saving time and boosting efficiency.',

    // CTA
    cta_title_html: 'Ready to <span class="gradient-text">join us?</span>',
    cta_desc:         'Thousands of people use Banana Cat Hub every day. Don\'t miss out!',
    cta_btn:          'Join Now',

    // Footer
    footer_hub:         'Hub',
    footer_community: 'Community',
    footer_copy:      '© 2025 Banana Cat Hub. All rights reserved.',
  }
};

/* ══════════════════════════════════════
   2. i18n ENGINE
══════════════════════════════════════ */
let currentLang = localStorage.getItem('bch_lang') || 'vi';

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // Fade out body text
  document.body.classList.add('lang-switching');

  setTimeout(() => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // Update html lang attr
    document.documentElement.lang = lang;

    // Update page title
    document.title = lang === 'en'
      ? 'Banana Cat Hub — Automation Redefined'
      : 'Banana Cat Hub — Tự Động Hóa Thế Hệ Mới';

    document.body.classList.remove('lang-switching');
    document.body.classList.add('lang-fadein');
    setTimeout(() => document.body.classList.remove('lang-fadein'), 300);
  }, 180);
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('bch_lang', lang);

  // Update all lang buttons (desktop + mobile)
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  applyTranslations(lang);
}

function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang !== currentLang) setLang(lang);
    });
  });

  // Apply saved language on load
  if (currentLang !== 'vi') {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
    applyTranslations(currentLang);
  }
}

/* ══════════════════════════════════════
   3. PARTICLE CANVAS (Updated to Yellow Palette)
══════════════════════════════════════ */
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  const COUNT = 80;
  // Đổi sang hệ màu Vàng chuối đặc trưng của Banana Cat Hub
  const COLORS = ['rgba(234,179,8,', 'rgba(250,204,21,', 'rgba(202,138,4,'];

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  function rand(a, b) { return Math.random() * (b - a) + a; }
  function createParticle() {
    return { x: rand(0,W), y: rand(0,H), r: rand(0.5,2.2), vx: rand(-0.18,0.18), vy: rand(-0.18,0.18), alpha: rand(0.15,0.55), color: COLORS[Math.floor(Math.random()*COLORS.length)] };
  }
  function init() { particles = []; for (let i=0;i<COUNT;i++) particles.push(createParticle()); }
  function draw() {
    ctx.clearRect(0,0,W,H);
    for (let i=0;i<particles.length;i++) {
      for (let j=i+1;j<particles.length;j++) {
        const p1=particles[i],p2=particles[j];
        const dx=p1.x-p2.x,dy=p1.y-p2.y,d=Math.sqrt(dx*dx+dy*dy);
        if(d<110){ctx.beginPath();ctx.strokeStyle=`rgba(234,179,8,${0.06*(1-d/110)})`;ctx.lineWidth=0.5;ctx.moveTo(p1.x,p1.y);ctx.lineTo(p2.x,p2.y);ctx.stroke();}
      }
    }
    particles.forEach(p=>{
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=p.color+p.alpha+')';ctx.fill();
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<-10)p.x=W+10;if(p.x>W+10)p.x=-10;
      if(p.y<-10)p.y=H+10;if(p.y>H+10)p.y=-10;
    });
    requestAnimationFrame(draw);
  }
  resize(); init(); draw();
  window.addEventListener('resize', ()=>{resize();init();});
})();

/* ══════════════════════════════════════
   4. NAVBAR SCROLL
══════════════════════════════════════ */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
})();

/* ══════════════════════════════════════
   5. MOBILE NAV TOGGLE
══════════════════════════════════════ */
(function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('navMobile');
  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    const spans = toggle.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity = '';
      spans[2].style.transform = '';
    }
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      toggle.querySelectorAll('span').forEach(s => { s.style.transform=''; s.style.opacity=''; });
    });
  });
})();

/* ══════════════════════════════════════
   6. SMOOTH SCROLL
══════════════════════════════════════ */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (!href || href.length <= 1) return;
      const target = document.querySelector(href);
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });
})();

/* ══════════════════════════════════════
   7. SCROLL REVEAL
══════════════════════════════════════ */
(function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const staggerParents = ['.features-grid','.strength-grid','.why-grid','.showcase-grid','.stats-grid','.faq-list'];
  staggerParents.forEach(sel => {
    const parent = document.querySelector(sel);
    if (!parent) return;
    parent.querySelectorAll('.reveal').forEach((child, idx) => { child.dataset.delay = idx * 80; });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), Number(entry.target.dataset.delay || 0));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach(item => observer.observe(item));
})();

/* ══════════════════════════════════════
   8. FAQ ACCORDION
══════════════════════════════════════ */
(function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!btn || !answer) return;

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        const a = i.querySelector('.faq-answer');
        if (a) a.style.maxHeight = '0';
      });
      if (!isOpen) { item.classList.add('open'); answer.style.maxHeight = answer.scrollHeight + 'px'; }
    });
  });
})();

/* ══════════════════════════════════════
   9. STATS COUNTER
══════════════════════════════════════ */
(function initCounters() {
  const nums = document.querySelectorAll('.stat-number[data-target]');
  if (!nums.length) return;

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();
    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const cur = Math.floor(ease * target);
      el.textContent = cur >= 1000 ? (cur/1000).toFixed(cur%1000===0?0:1)+'K' : cur;
      if (progress < 1) requestAnimationFrame(update);
      else el.textContent = target >= 1000 ? (target/1000).toFixed(0)+'K' : target;
    }
    requestAnimationFrame(update);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { animateCounter(entry.target); observer.unobserve(entry.target); }
    });
  }, { threshold: 0.5 });

  nums.forEach(el => observer.observe(el));
})();

/* ══════════════════════════════════════
   10. HERO PARALLAX GLOW
══════════════════════════════════════ */
(function initParallaxGlow() {
  const glows = document.querySelectorAll('.hero-glow');
  if (!glows.length) return;
  let ticking = false;
  window.addEventListener('mousemove', e => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const cx = window.innerWidth/2, cy = window.innerHeight/2;
      const dx = (e.clientX-cx)/cx, dy = (e.clientY-cy)/cy;
      glows.forEach((g,i) => { const f=(i+1)*12; g.style.transform=`translate(${dx*f}px,${dy*f}px)`; });
      ticking = false;
    });
  });
})();

/* ══════════════════════════════════════
   11. ACTIVE NAV LINK
══════════════════════════════════════ */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  if (!sections.length || !navLinks.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = '';
          if (link.getAttribute('href') === '#'+id) link.style.color = 'var(--accent-3)';
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => observer.observe(s));
})();

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initLangSwitcher();
});