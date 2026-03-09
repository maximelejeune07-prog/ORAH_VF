/* ============================================
   ORAH — Main JavaScript
   Data + Components + Interactions
   ============================================ */

/* ============================================
   CMS DATA OBJECTS (easy to update)
   ============================================ */
const DATA = {

  events: {
    guillemins: {
      name: 'ORAH Guillemins',
      date: '18 avril 2026',
      dateShort: '18.04.26',
      location: 'Gare de Liège-Guillemins',
      city: 'Liège, Belgique',
      description: 'Une nuit de house music dans l\'une des plus belles gares du monde, signée Santiago Calatrava. Une expérience architecturale et sonore unique.',
      url: 'guillemins.html',
    },
    festival: {
      name: 'ORAH Festival',
      date: '24 → 27 juin 2026',
      dateShort: '24–27.06.26',
      location: 'Lieu TBA',
      city: 'Liège, Belgique',
      description: '4 jours. 4 artistes par jour. 16 performances. Le festival de house music qui redéfinit l\'expérience estivale à Liège.',
      url: 'festival.html',
    }
  },

  artists: {
    guillemins: [
      {
        name: 'Marten Lou', tag: 'Headliner — Deep & Melodic House', headliner: true,
        origin: 'International', followers: '+100K', listeners: '+6M',
        bio: 'Artiste émergent aux millions de streams. Titres phares : "Your Body x", "Another Life x", "My Love For You". Présences à Tomorrowland, Coachella, Burning Man, Space Miami. Soutenu par Keinemusik & Adriatique.',
      },
      {
        name: 'AVÖ', tag: 'Afro & Melodic House', headliner: false,
        origin: 'Porto, Portugal', followers: '+30K', listeners: '+750K',
        bio: 'Producteur, compositeur et DJ influencé par l\'Afro et le Melodic House. Crée des atmosphères immersives mêlant percussions profondes et textures électroniques. Soutenu par Black Coffee, Keinemusik, Adriatique, Francis Mercier et Mahmut Orhan.',
      },
      { name: 'TBA', tag: 'À annoncer', headliner: false },
    ],
    festival2025: [
      { name: 'Artiste A', tag: 'House' },
      { name: 'Artiste B', tag: 'Deep House' },
      { name: 'Artiste C', tag: 'Techno' },
      { name: 'Artiste D', tag: 'Live' },
      { name: 'Artiste E', tag: 'House' },
      { name: 'Artiste F', tag: 'Afro House' },
      { name: 'Artiste G', tag: 'Deep House' },
      { name: 'Artiste H', tag: 'Melodic' },
    ]
  },

  programme: {
    mer24: [
      { time: '18:00', name: 'TBA', tag: 'Ouverture', tba: true },
      { time: '20:00', name: 'TBA', tag: 'À annoncer', tba: true },
      { time: '22:00', name: 'TBA', tag: 'À annoncer', tba: true },
      { time: '00:00', name: 'TBA', tag: 'Closing', tba: true },
    ],
    jeu25: [
      { time: '18:00', name: 'TBA', tag: 'Ouverture', tba: true },
      { time: '20:00', name: 'TBA', tag: 'À annoncer', tba: true },
      { time: '22:00', name: 'TBA', tag: 'À annoncer', tba: true },
      { time: '00:00', name: 'TBA', tag: 'Closing', tba: true },
    ],
    ven26: [
      { time: '18:00', name: 'TBA', tag: 'Ouverture', tba: true },
      { time: '20:00', name: 'TBA', tag: 'À annoncer', tba: true },
      { time: '22:00', name: 'TBA', tag: 'À annoncer', tba: true },
      { time: '00:00', name: 'TBA', tag: 'Closing', tba: true },
    ],
    sam27: [
      { time: '18:00', name: 'TBA', tag: 'Ouverture', tba: true },
      { time: '20:00', name: 'TBA', tag: 'À annoncer', tba: true },
      { time: '22:00', name: 'TBA', tag: 'À annoncer', tba: true },
      { time: '00:00', name: 'TBA', tag: 'Closing', tba: true },
    ],
  },

  faq: {
    guillemins: [
      { q: 'Quand commence l\'événement ?', a: 'Les portes ouvrent à 20h00. Le premier set démarre à 21h00. Fin prévue à 04h00.' },
      { q: 'Comment accéder à la gare de Liège-Guillemins ?', a: 'La gare est accessible en train (connexion directe depuis Bruxelles, Namur, Verviers), en bus (TEC, lignes 1, 18, 23) et à vélo. Un parking vélo sécurisé est disponible sur place. Nous déconseillons fortement la voiture.' },
      { q: 'Qu\'est-ce que le billet VIP comprend ?', a: 'Le billet VIP comprend : accès prioritaire sans file, espace lounge privatif, boissons de bienvenue, vue privilégiée sur la scène, service vestiaire inclus et badge collector.' },
      { q: 'Y a-t-il un vestiaire ?', a: 'Oui, un vestiaire est disponible. Inclus dans le billet VIP, il est payant en accès standard (2€).' },
      { q: 'Les mineurs sont-ils acceptés ?', a: 'L\'événement est réservé aux personnes majeures (18+). Une pièce d\'identité sera demandée à l\'entrée.' },
      { q: 'Quelle est la politique de réduction pour les habitants du voisinage ?', a: 'Les riverains de la Gare Guillemins bénéficient d\'un code promotionnel exclusif de -25% sur leurs billets. Contactez-nous via le formulaire contact pour l\'obtenir.' },
      { q: 'Y a-t-il des éco-cups ?', a: 'Oui, ORAH fonctionne en système éco-cup consigné. Un dépôt de 2€ est demandé à l\'achat de la première boisson, restitué à la restitution du verre.' },
    ],
    festival: [
      { q: 'Peut-on acheter un pass pour un seul jour ?', a: 'Oui, des pass 1 jour seront disponibles à partir d\'une date annoncée ultérieurement. Le pass 4 jours offre le meilleur rapport qualité/prix.' },
      { q: 'Y a-t-il un camping sur le site ?', a: 'Des informations sur les options d\'hébergement partenaires seront communiquées prochainement. Restez connectés à la newsletter.' },
      { q: 'Combien d\'artistes se produiront ?', a: '4 artistes par jour, sur 4 jours, soit 16 performances au total. Le line-up sera annoncé progressivement.' },
      { q: 'Les mineurs sont-ils acceptés ?', a: 'L\'événement est réservé aux personnes majeures (18+). Une pièce d\'identité sera demandée à l\'entrée.' },
      { q: 'Y a-t-il de la nourriture sur place ?', a: 'Oui, des stands food & beverage seront présents, avec une sélection de restaurateurs locaux liégeois.' },
    ],
  },

  stats2025: [
    { num: '4', label: 'Soirées festives' },
    { num: '16', label: 'DJs (10 nationalités)' },
    { num: '4K+', label: 'Participants (sold-out)' },
    { num: '20', label: 'Sponsors & partenaires' },
  ],

  testimonials: [
    { quote: 'Une ambiance folle, une organisation au millimètre. Hâte de revivre ça en 2026 !', name: 'Léa M.', role: 'Festivalière 2025' },
    { quote: 'Le lieu était magique, la sélection musicale au niveau. ORAH crée quelque chose de rare.', name: 'Thomas D.', role: 'Festivalier 2025' },
    { quote: 'En tant que partenaire, la visibilité était au rendez-vous et l\'équipe très professionnelle.', name: 'Sarah V.', role: 'Partenaire 2025' },
  ],

  dna: [
    { num: '01', icon: '✦', title: 'Expérience', desc: 'Chaque détail est pensé pour créer une expérience immersive : du son à la lumière, de l\'accueil à l\'ambiance.' },
    { num: '02', icon: '◈', title: 'Lieux iconiques', desc: 'ORAH s\'approprie des espaces architecturaux forts de Liège pour transformer la musique en événement mémorable.' },
    { num: '03', icon: '◉', title: 'Communauté', desc: 'Une communauté soudée, bienveillante, passionnée de house music, au cœur de chaque édition ORAH.' },
    { num: '04', icon: '⬡', title: 'Responsable', desc: 'Éco-cups, partenariats locaux, mobilité douce, respect du voisinage : ORAH s\'engage pour un événement durable.' },
  ],

  volunteerRoles: [
    { icon: '🍺', name: 'Bar', desc: 'Service des boissons, gestion des éco-cups, accueil du public.' },
    { icon: '👋', name: 'Accueil & Entrée', desc: 'Contrôle des billets, fouilles de sécurité, orientation des festivaliers.' },
    { icon: '🔧', name: 'Montage & Démontage', desc: 'Installation des structures, scène, décors, et démontage post-événement.' },
    { icon: '🚛', name: 'Logistique', desc: 'Coordination des flux, gestion du matériel et support aux équipes techniques.' },
    { icon: '📸', name: 'Communication', desc: 'Couverture photo/vidéo, stories live, community management sur place.' },
    { icon: '♻️', name: 'Développement durable', desc: 'Tri des déchets, sensibilisation des visiteurs, gestion des éco-cups.' },
  ],

  partnerTiers: [
    {
      level: 'Bronze',
      name: 'Bronze',
      price: '1 000€',
      features: ['Voucher 200€ (Public & VIP)', 'Logo sur supports de communication', 'Activation de votre marque sur site', 'Logo sur le site internet ORAH'],
      featured: false,
    },
    {
      level: 'Silver',
      name: 'Silver',
      price: '2 000€',
      features: ['Voucher 400€ (Public & VIP)', '1 bâche 3×2m avec votre logo', 'Logo sur supports de communication', 'Activation de votre marque sur site', 'Logo sur le site internet ORAH'],
      featured: false,
    },
    {
      level: 'Gold — Le plus populaire',
      name: 'Gold',
      price: '4 000€',
      features: ['Voucher 1 000€ (Public & VIP)', '2 bâches 3×2m avec votre logo', 'Stand sur site inclus', 'Spot vidéo promotionnel dédié', 'Logo sur le merchandising'],
      featured: true,
    },
    {
      level: 'Platinium',
      name: 'Platinium',
      price: '7 500€',
      features: ['Voucher 1 500€ (Public & VIP)', '4 bâches 3×2m avec votre logo', 'Stand + spot vidéo promotionnel dédié', 'Logo sur les 2000 tickets', 'Sponsoring de la zone VIP', 'Official partner de l\'événement'],
      featured: false,
    },
  ],
};

/* ============================================
   HEADER — Scroll + Hamburger
   ============================================ */
function initHeader() {
  const header = document.querySelector('.site-header');
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Active nav link
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a, .mobile-nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ============================================
   REVEAL ON SCROLL
   ============================================ */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}

/* ============================================
   FAQ ACCORDION
   ============================================ */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    const answer = item.querySelector('.faq-a');
    if (!btn || !answer) return;
    btn.addEventListener('click', () => {
      const open = item.classList.toggle('open');
      answer.style.maxHeight = open ? answer.scrollHeight + 'px' : '0';
    });
  });
}

/* ============================================
   TABS (Programme)
   ============================================ */
function initTabs() {
  document.querySelectorAll('.tab-nav').forEach(nav => {
    const container = nav.closest('[data-tabs]') || nav.parentElement;
    const btns = nav.querySelectorAll('.tab-btn');
    const panels = container.querySelectorAll('.tab-panel');
    btns.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        if (panels[i]) panels[i].classList.add('active');
      });
    });
  });
}

/* ============================================
   COOKIE BANNER
   ============================================ */
function initCookies() {
  const banner = document.querySelector('.cookie-banner');
  if (!banner) return;
  if (localStorage.getItem('orah-cookies')) { banner.classList.add('hidden'); return; }
  banner.querySelector('.cookie-accept')?.addEventListener('click', () => {
    localStorage.setItem('orah-cookies', '1');
    banner.classList.add('hidden');
  });
  banner.querySelector('.cookie-decline')?.addEventListener('click', () => {
    localStorage.setItem('orah-cookies', '0');
    banner.classList.add('hidden');
  });
}

/* ============================================
   NEWSLETTER FORM
   ============================================ */
function initNewsletter() {
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const btn = form.querySelector('button');
      if (!input?.value) return;
      btn.textContent = '✓ Inscription confirmée';
      btn.disabled = true;
      input.value = '';
    });
  });
}

/* ============================================
   CONTACT / PARTNER FORMS
   ============================================ */
function initForms() {
  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.textContent = '✓ Message envoyé'; btn.disabled = true; }
      form.reset();
    });
  });
}

/* ============================================
   MARQUEE (duplicate for seamless loop)
   ============================================ */
function initMarquee() {
  document.querySelectorAll('.marquee-track').forEach(track => {
    const clone = track.cloneNode(true);
    track.parentElement.appendChild(clone);
  });
}

/* ============================================
   STAT COUNTER ANIMATION
   ============================================ */
function initCounters() {
  const stats = document.querySelectorAll('.stat-num[data-val]');
  if (!stats.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = el.dataset.val;
      const isNum = !isNaN(parseInt(target));
      if (!isNum) { el.textContent = target; io.unobserve(el); return; }
      const end = parseInt(target);
      const suffix = target.replace(/[0-9]/g, '');
      let start = 0;
      const dur = 1200;
      const step = 16;
      const inc = end / (dur / step);
      const timer = setInterval(() => {
        start = Math.min(start + inc, end);
        el.textContent = Math.floor(start) + suffix;
        if (start >= end) clearInterval(timer);
      }, step);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  stats.forEach(s => io.observe(s));
}

/* ============================================
   INIT
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initReveal();
  initFAQ();
  initTabs();
  initCookies();
  initNewsletter();
  initForms();
  initMarquee();
  initCounters();
});
