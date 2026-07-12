/* Sous Vintage Shop — i18n IT/EN, intro "la vetrina incisa", nav, reveal, watchdog */
(function () {
  'use strict';

  /* ---------- i18n ---------- */

  var translations = {
    it: {
      skip: 'Salta al contenuto',
      menu: 'Menu',
      nav_shop: 'Il negozio',
      nav_what: 'Cosa trovi',
      nav_why: 'Perché vintage',
      nav_hours: 'Orari e dove',
      shop_short: 'Etsy',
      etsy_cta: 'Sfoglia su Etsy',
      visit_cta: 'Vieni in negozio',
      ig_cta: 'Seguici su Instagram',
      call_cta: 'Chiama',
      hero_eyebrow: 'Vintage · upcycling · Navigli, Milano',
      hero_nome1: 'Sous',
      hero_nome2: 'Vintage Shop',
      hero_claim: 'Abiti che dicono qualcosa.',
      hero_lead: "Seconda mano di ricerca, capi rimessi a nuovo e pezzi unici, in una vetrina liberty sull'Alzaia Naviglio Pavese. Vieni a scavare — o sfoglia il nostro Etsy.",
      hero_badge: 'Pezzi unici · nuovi arrivi ogni settimana',
      hero_foto_alt: 'La vetrina di Sous Vintage Shop: il logo liberty inciso sul vetro, dietro un rack di abiti vintage colorati, un manichino e un cestino di vimini',
      shop_title: 'Un piccolo archivio\nsui Navigli',
      shop_p1: "Sous è un negozio di vintage come lo vorremmo trovare noi: niente cassoni da rovistare a caso, ma una selezione fatta a mano — capi cercati, scelti e appesi con un'idea. Accanto alla seconda mano di ricerca ci sono progetti di designer indipendenti e capi upcycled, cuciti da tessuti che avrebbero avuto un'altra fine.",
      shop_p2: "Lo spazio è luminoso e un po' giocoso, coi suoi toni pastello e un décor che sa di altri tempi. Ci si entra per curiosare e si esce con qualcosa che non ha nessun altro. Perché quasi ogni pezzo, da noi, è uno solo.",
      n1_big: '100%',
      n1: 'selezione fatta a mano',
      n2_big: '1 di 1',
      n2: 'quasi ogni capo è un pezzo unico',
      n3_big: '∞',
      n3: 'nuovi arrivi ogni settimana',
      what_title: 'Cosa trovi da Sous',
      what_sub: 'Quattro anime nello stesso negozio.',
      r1_t: 'Vintage donna',
      r1_p: 'Abiti, gonne, camicie e capispalla di ricerca: stampe, tessuti e tagli che oggi non si fanno più.',
      r2_t: 'Vintage uomo',
      r2_p: 'Giacche, maglieria, camicie e capi da lavoro: il guardaroba maschile con una storia già addosso.',
      r3_t: 'Upcycling & indie',
      r3_p: 'Capi rimessi a nuovo e progetti di designer indipendenti: pezzi unici, cuciti da tessuti recuperati.',
      r4_t: 'Homeware',
      r4_p: 'Piccoli oggetti per la casa, curati con lo stesso occhio: complementi eclettici che raccontano qualcosa.',
      what_note: 'Una parte della selezione è anche sul nostro Etsy — ma il bello è scavare di persona.',
      why_title: 'Perché vintage',
      why_q: '«Un vestito che ha già vissuto porta con sé una storia — e non ne troverai un altro uguale.»',
      f1_t: 'Unico, davvero',
      f1_p: 'Non produzioni in serie: ogni capo è quello, e basta. Il modo più semplice di non vestirsi come tutti gli altri.',
      f2_t: 'Moda che non spreca',
      f2_p: 'Seconda mano e upcycling: diamo una seconda vita ai vestiti invece di comprarne di nuovi. Bello e sostenibile insieme.',
      f3_t: 'Un consiglio è di casa',
      f3_p: 'Ci piace far provare, abbinare, raccontare da dove viene un pezzo. Entra anche solo per una chiacchiera di stile.',
      etsy_title: 'Il negozio, anche da casa',
      etsy_p: 'Una selezione dei nostri pezzi vive sul nostro shop Etsy, con spedizione ovunque. E ogni nuovo arrivo lo raccontiamo su Instagram: seguici per non perdere il capo giusto.',
      hours_title: 'Orari e dove',
      hours_sub: "Sull'Alzaia del Naviglio Pavese, vetrina liberty.",
      hours_caption: 'Orari di apertura',
      mon: 'Lunedì',
      tuesat: 'Martedì – Sabato',
      sun: 'Domenica',
      closed: 'chiuso',
      metro: 'M2 Porta Genova, dieci minuti a piedi lungo il Naviglio',
      maps: 'Apri in Google Maps',
      dove_note: 'Vetrina LGBTQ+ friendly: qui è il benvenuto chiunque abbia voglia di frugare tra le grucce.',
      f_contacts: 'Contatti',
      f_where: 'Dove',
      f_what: 'Il negozio',
      f_line: 'Vintage di ricerca, upcycling e pezzi unici, in una vetrina liberty sui Navigli.',
      aria_top: 'Sous Vintage Shop — torna su',
      aria_nav: 'Navigazione principale',
      aria_numbers: 'Il negozio in breve'
    },
    en: {
      skip: 'Skip to content',
      menu: 'Menu',
      nav_shop: 'The shop',
      nav_what: 'What you find',
      nav_why: 'Why vintage',
      nav_hours: 'Hours & location',
      shop_short: 'Etsy',
      etsy_cta: 'Browse on Etsy',
      visit_cta: 'Come to the shop',
      ig_cta: 'Follow on Instagram',
      call_cta: 'Call',
      hero_eyebrow: 'Vintage · upcycling · Navigli, Milan',
      hero_nome1: 'Sous',
      hero_nome2: 'Vintage Shop',
      hero_claim: 'Clothes that say something.',
      hero_lead: "Curated second-hand, upcycled pieces and one-of-a-kind finds, in an art-nouveau shopfront on the Alzaia Naviglio Pavese. Come and dig — or browse our Etsy.",
      hero_badge: 'One-off pieces · new arrivals every week',
      hero_foto_alt: 'The Sous Vintage Shop window: the art-nouveau logo etched on the glass, with a rack of colourful vintage clothing, a mannequin and a wicker basket behind',
      shop_title: 'A little archive\non the Navigli',
      shop_p1: "Sous is the kind of vintage shop we’d want to find ourselves: no bins to rummage through at random, but a hand-picked selection — pieces sought out, chosen and hung with an idea. Alongside curated second-hand there are projects by independent designers and upcycled garments, sewn from fabrics that would have met another end.",
      shop_p2: "The space is bright and a little playful, with its pastel tones and décor that feels of another time. You come in to browse and leave with something no one else has. Because almost every piece here is one of a kind.",
      n1_big: '100%',
      n1: 'hand-picked selection',
      n2_big: '1 of 1',
      n2: 'almost every piece is one of a kind',
      n3_big: '∞',
      n3: 'new arrivals every week',
      what_title: 'What you find at Sous',
      what_sub: 'Four souls in the same shop.',
      r1_t: 'Women’s vintage',
      r1_p: 'Dresses, skirts, shirts and outerwear worth seeking: prints, fabrics and cuts they don’t make anymore.',
      r2_t: 'Men’s vintage',
      r2_p: 'Jackets, knitwear, shirts and workwear: the men’s wardrobe with a story already on it.',
      r3_t: 'Upcycling & indie',
      r3_p: 'Reworked garments and projects by independent designers: one-off pieces, sewn from reclaimed fabrics.',
      r4_t: 'Homeware',
      r4_p: 'Small objects for the home, curated with the same eye: eclectic pieces that tell a story.',
      what_note: 'Part of the selection is on our Etsy too — but the fun is digging in person.',
      why_title: 'Why vintage',
      why_q: '“A garment that has already lived carries a story — and you won’t find another one like it.”',
      f1_t: 'Genuinely one-off',
      f1_p: 'No mass production: each piece is that one, and that’s it. The simplest way not to dress like everyone else.',
      f2_t: 'Fashion without waste',
      f2_p: 'Second-hand and upcycling: we give clothes a second life instead of buying new ones. Beautiful and sustainable at once.',
      f3_t: 'Advice comes with it',
      f3_p: 'We love letting you try things, mixing looks, telling you where a piece comes from. Drop in just for a style chat.',
      etsy_title: 'The shop, from home too',
      etsy_p: 'A selection of our pieces lives on our Etsy shop, with worldwide shipping. And we share every new arrival on Instagram: follow us so you don’t miss the right one.',
      hours_title: 'Hours & location',
      hours_sub: 'On the Naviglio Pavese towpath, art-nouveau shopfront.',
      hours_caption: 'Opening hours',
      mon: 'Monday',
      tuesat: 'Tuesday – Saturday',
      sun: 'Sunday',
      closed: 'closed',
      metro: 'M2 Porta Genova, a ten-minute walk along the Naviglio',
      maps: 'Open in Google Maps',
      dove_note: 'An LGBTQ+ friendly shopfront: anyone who fancies a rummage through the racks is welcome here.',
      f_contacts: 'Contact',
      f_where: 'Find us',
      f_what: 'The shop',
      f_line: 'Curated vintage, upcycling and one-off pieces, in an art-nouveau shopfront on the Navigli.',
      aria_top: 'Sous Vintage Shop — back to top',
      aria_nav: 'Main navigation',
      aria_numbers: 'The shop at a glance'
    }
  };

  var current = 'it';
  try {
    var saved = localStorage.getItem('sous-lang');
    if (saved === 'en' || saved === 'it') current = saved;
  } catch (e) { /* storage non disponibile: si resta in IT */ }

  function applyLang(lang) {
    var dict = translations[lang];
    if (!dict) return;
    current = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] === undefined) return;
      var testo = dict[key];
      if (testo.indexOf('\n') !== -1) {
        el.textContent = '';
        testo.split('\n').forEach(function (riga, i) {
          if (i > 0) el.appendChild(document.createElement('br'));
          el.appendChild(document.createTextNode(riga));
        });
      } else {
        el.textContent = testo;
      }
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('sous-lang', lang); } catch (e) { /* ok */ }
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  if (current !== 'it') applyLang(current);

  /* ---------- intro "la vetrina incisa" ---------- */

  var intro = document.getElementById('intro');
  if (intro) {
    var introReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (introReduced) {
      intro.remove();
    } else {
      var introDone = false;
      var sfuma = function () {
        intro.classList.add('intro--via');
      };
      var finishIntro = function () {
        if (introDone) return;
        introDone = true;
        clearTimeout(viaTimer);
        clearTimeout(endTimer);
        document.body.classList.remove('intro-lock');
        intro.remove();
        window.removeEventListener('pointerdown', finishIntro, true);
        window.removeEventListener('keydown', finishIntro, true);
      };
      document.body.classList.add('intro-lock');
      var viaTimer = setTimeout(sfuma, 2300);
      var endTimer = setTimeout(finishIntro, 2900);
      window.addEventListener('pointerdown', finishIntro, true);
      window.addEventListener('keydown', finishIntro, true);
    }
  }

  /* ---------- copyright dinamico ---------- */

  var nowYear = new Date().getFullYear();
  document.querySelectorAll('[data-current-year]').forEach(function (el) {
    el.textContent = String(nowYear);
  });

  /* ---------- nav mobile ---------- */

  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    var chiudiNav = function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav-menu a').forEach(function (link) {
      link.addEventListener('click', chiudiNav);
    });
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        chiudiNav();
        toggle.focus();
      }
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 920) chiudiNav();
    });
  }

  /* ---------- reveal on scroll ---------- */

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll(
      '.hero-testo, .hero-foto, .sezione-titolo, .sezione-sub, .negozio-testo, .negozio-numeri, ' +
      '.reparto, .cosa-nota, .filosofia-cit, .filo-punto, .etsy-inner, .orari-tabella, .dove'
    );
    targets.forEach(function (t) { t.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* ---------- rete di sicurezza: se IntersectionObserver non parte, mostra tutto ---------- */

  if ('IntersectionObserver' in window) {
    var ioVivo = false;
    var sentinella = new IntersectionObserver(function () { ioVivo = true; sentinella.disconnect(); });
    sentinella.observe(document.body);
    setTimeout(function () {
      if (!ioVivo) {
        document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
      }
    }, 1500);
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
