/* ==========================================================================
   DARYNA MURADOVA — PORTFOLIO SCRIPT
   --------------------------------------------------------------------------
   EDIT HERE (no coding needed):
     1. PROJECTS  — the featured projects in the Work section
     2. SITE      — email, LinkedIn, Instagram, CV, optional hero video
     3. TOOLKIT   — the words in the moving toolkit strip

   Everything below the "ENGINE" line builds the page and runs the animations.
   ========================================================================== */


/* ==========================================================================
   1. PROJECTS
   --------------------------------------------------------------------------
   One entry = one featured project row. Rows appear in this order.

   title        Project name. Wrap a word in *stars* to set it in italics,
                e.g. 'Spring *Campaign*'
   client       Client or brand name
   year         e.g. '2025'
   role         Your role, e.g. 'Creative producer'
   tags         Any of 'Video', 'AI', 'Social' (used by the links in the hero)
   description  2–3 sentences: the brief, the idea, what was delivered
   items        The materials shown in the sideways-scrolling strip (any number)

   EACH ITEM:
   type         'video' or 'image'
   src          Path to the file, e.g. 'assets/projects/01/hero-film.mp4'
   poster       (videos) still image shown before the video plays
   ratio        Shape of the file: '9:16', '4:5', '1:1', '16:9', '4:3' …
                Any mix works — items keep their own shape in the strip.
   phone        true → shows the item inside a phone frame (great for 9:16)
   caption      Small line under the item, e.g. 'Campaign film'
   prompt       (AI images) adds a "Prompt" button that reveals this text
   firstGeneration  (optional, with prompt) image of the first generation
   alt          (optional) description of the image for screen readers

   Put each project's files in its own folder: assets/projects/01/, 02/ …
   If a file doesn't exist yet, a neutral placeholder with the file name is
   shown instead — so you can see exactly which file to add.

   ▼ The 5 projects below are PLACEHOLDERS. Replace them with your own work. ▼
   ========================================================================== */
const PROJECTS = [
  {
    title: 'Spring *Campaign*',
    client: 'Client name',
    year: '2025',
    role: 'Creative producer',
    tags: ['Video', 'AI', 'Social'],
    description: 'Short project description: the brief, the idea and what you delivered. Two or three sentences work best.',
    items: [
      { type: 'video', src: 'assets/projects/01/campaign-video.mp4', poster: 'assets/projects/01/campaign-video.jpg', ratio: '9:16', phone: true, caption: 'Campaign video' },
      { type: 'video', src: 'assets/projects/01/reel.mp4', poster: 'assets/projects/01/reel.jpg', ratio: '9:16', phone: true, caption: 'Instagram reel' },
      { type: 'image', src: 'assets/projects/01/key-visual.jpg', ratio: '4:5', caption: 'AI key visual',
        prompt: 'Editorial still life of a sculpted glass perfume bottle floating above wet black sand, soft rim light, 85mm lens, subtle film grain, luxury campaign mood.',
        firstGeneration: 'assets/projects/01/key-visual-first.jpg' },
      { type: 'image', src: 'assets/projects/01/post.jpg', ratio: '1:1', caption: 'Feed post' },
      { type: 'image', src: 'assets/projects/01/story.jpg', ratio: '9:16', phone: true, caption: 'Story' },
      { type: 'video', src: 'assets/projects/01/bts.mp4', poster: 'assets/projects/01/bts.jpg', ratio: '9:16', phone: true, caption: 'Behind the scenes' },
    ],
  },
  {
    title: 'Product *Launch*',
    client: 'Client name',
    year: '2025',
    role: 'Producer & editor',
    tags: ['Video', 'Social'],
    description: 'Short project description: the brief, the idea and what you delivered. Two or three sentences work best.',
    items: [
      { type: 'video', src: 'assets/projects/02/launch-video.mp4', poster: 'assets/projects/02/launch-video.jpg', ratio: '9:16', phone: true, caption: 'Launch video' },
      { type: 'video', src: 'assets/projects/02/teaser.mp4', poster: 'assets/projects/02/teaser.jpg', ratio: '9:16', phone: true, caption: 'Teaser' },
      { type: 'video', src: 'assets/projects/02/cutdown.mp4', poster: 'assets/projects/02/cutdown.jpg', ratio: '1:1', caption: '1:1 cutdown' },
      { type: 'image', src: 'assets/projects/02/carousel.jpg', ratio: '4:5', caption: 'Carousel' },
      { type: 'image', src: 'assets/projects/02/product-visual.jpg', ratio: '4:5', caption: 'Product visual' },
    ],
  },
  {
    title: 'Festival *Season*',
    client: 'Client name',
    year: '2024',
    role: 'Content producer',
    tags: ['Video', 'Social'],
    description: 'Short project description: the brief, the idea and what you delivered. Two or three sentences work best.',
    items: [
      { type: 'video', src: 'assets/projects/03/aftermovie.mp4', poster: 'assets/projects/03/aftermovie.jpg', ratio: '9:16', phone: true, caption: 'Aftermovie' },
      { type: 'video', src: 'assets/projects/03/recap-reel.mp4', poster: 'assets/projects/03/recap-reel.jpg', ratio: '9:16', phone: true, caption: 'Recap reel' },
      { type: 'image', src: 'assets/projects/03/lineup.jpg', ratio: '4:5', caption: 'Line-up post' },
      { type: 'image', src: 'assets/projects/03/countdown.jpg', ratio: '9:16', phone: true, caption: 'Countdown story' },
      { type: 'image', src: 'assets/projects/03/photo.jpg', ratio: '4:3', caption: 'Event photo' },
    ],
  },
  {
    title: 'Future *Commute*',
    client: 'Client name',
    year: '2025',
    role: 'AI creative lead',
    tags: ['AI'],
    description: 'Short project description: the brief, the idea and what you delivered. Two or three sentences work best.',
    items: [
      { type: 'image', src: 'assets/projects/04/visual-01.jpg', ratio: '4:5', caption: 'Concept visual',
        prompt: 'Night-time city tram interior in 2040, passengers lit by soft screen glow, translucent seats, rain streaks on curved glass, documentary photo style, 35mm.',
        firstGeneration: 'assets/projects/04/visual-01-first.jpg' },
      { type: 'image', src: 'assets/projects/04/visual-02.jpg', ratio: '4:5', caption: 'Concept visual',
        prompt: 'Aerial view of a green city at dawn, autonomous cable cars gliding between towers, mist, warm low sun, cinematic wide shot.' },
      { type: 'video', src: 'assets/projects/04/ai-video.mp4', poster: 'assets/projects/04/ai-video.jpg', ratio: '9:16', phone: true, caption: 'AI video' },
      { type: 'image', src: 'assets/projects/04/visual-03.jpg', ratio: '1:1', caption: 'Social visual',
        prompt: 'Close-up of a commuter’s hand holding a glowing transit pass, shallow depth of field, neon reflections, editorial photography.' },
    ],
  },
  {
    title: 'Creator *Series*',
    client: 'Client name',
    year: '2024',
    role: 'Producer, influencer collaborations',
    tags: ['Video', 'Social'],
    description: 'Short project description: the brief, the idea and what you delivered. Two or three sentences work best.',
    items: [
      { type: 'video', src: 'assets/projects/05/creator-01.mp4', poster: 'assets/projects/05/creator-01.jpg', ratio: '9:16', phone: true, caption: 'Creator reel' },
      { type: 'video', src: 'assets/projects/05/creator-02.mp4', poster: 'assets/projects/05/creator-02.jpg', ratio: '9:16', phone: true, caption: 'Creator reel' },
      { type: 'video', src: 'assets/projects/05/creator-03.mp4', poster: 'assets/projects/05/creator-03.jpg', ratio: '9:16', phone: true, caption: 'Creator reel' },
      { type: 'image', src: 'assets/projects/05/announcement.jpg', ratio: '4:5', caption: 'Announcement post' },
      { type: 'video', src: 'assets/projects/05/compilation.mp4', poster: 'assets/projects/05/compilation.jpg', ratio: '1:1', caption: 'Compilation' },
    ],
  },
];


/* ==========================================================================
   2. SITE SETTINGS — links used everywhere on the page
   ========================================================================== */
const SITE = {
  email: 'hello@example.com',                          // ← REPLACE with your email
  linkedin: 'https://linkedin.com/in/your-profile',    // ← REPLACE with your LinkedIn URL
  instagram: 'https://instagram.com/your-handle',      // ← REPLACE with your Instagram URL
  cv: 'assets/cv/Daryna_Muradova_CV.pdf',              // ← put your CV PDF at this path
  heroVideo: '',        // optional muted loop behind the hero, e.g. 'assets/videos/hero-loop.mp4'
  timeZone: 'Europe/Ljubljana',                        // used by the live clock in Contact
};


/* ==========================================================================
   3. TOOLKIT — the moving strip in section (06)
   ========================================================================== */
const TOOLKIT = ['Adobe Creative Suite', 'Figma', 'CapCut', 'Higgsfield', 'ElevenLabs', 'Claude Code'];


/* ==========================================================================
   ───────────────────────────────  ENGINE  ────────────────────────────────
   You shouldn't need to edit anything below this line.
   ========================================================================== */
(() => {
  'use strict';

  /* ---------- Helpers & environment ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const root = document.documentElement;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const hasGSAP = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

  if (hasGSAP) {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });
  }

  const PH_POS = [[18, 15], [72, 30], [40, 80], [85, 12], [25, 60], [60, 20], [50, 40], [15, 85], [78, 55]];

  const state = {
    lenis: null,
    menuOpen: false,
  };

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));
  const pad = (n) => String(n).padStart(2, '0');
  /** '16:9' → 1.7778 */
  const ratioValue = (r) => {
    const [w, h] = String(r || '16:9').split(':').map(Number);
    return w > 0 && h > 0 ? w / h : 16 / 9;
  };
  /** Escapes text and turns *word* into italics */
  const richTitle = (t) => esc(t).replace(/\*(.+?)\*/g, '<em>$1</em>');
  const plainTitle = (t) => String(t || '').replace(/\*/g, '');

  /** Every item of every project in one flat list: { item, project, pi } */
  const ITEMS = [];
  PROJECTS.forEach((project, pi) => (project.items || []).forEach((item) => ITEMS.push({ item, project, pi })));


  /* ======================================================================
     SITE LINKS & STATIC CONTENT
     ====================================================================== */
  function applySiteLinks() {
    $$('[data-link="email"]').forEach((a) => { a.href = 'mailto:' + SITE.email; });
    $$('[data-link-text="email"]').forEach((el) => { el.textContent = SITE.email; });
    $$('[data-link="linkedin"]').forEach((a) => { a.href = SITE.linkedin; });
    $$('[data-link="instagram"]').forEach((a) => { a.href = SITE.instagram; });
    $$('[data-link="cv"]').forEach((a) => { a.href = SITE.cv; });
    // Hero tags jump to the first project with that tag
    $$('[data-tag]').forEach((a) => {
      const i = PROJECTS.findIndex((p) => (p.tags || []).includes(a.dataset.tag));
      if (i > -1) a.href = '#project-' + (i + 1);
    });
  }

  function buildMarquee() {
    const track = $('.marquee__track');
    if (!track) return;
    const srText = $('[data-toolkit-text]');
    if (srText) srText.textContent = TOOLKIT.join(' · ');
    const items = TOOLKIT.map((t) => (
      `<span class="marquee__item">${esc(t)}</span><span class="marquee__sep">✦</span>`
    )).join('');
    track.innerHTML = `<div class="marquee__group">${items}</div><div class="marquee__group">${items}</div>`;
  }


  /* ======================================================================
     FEATURED PROJECTS (rendered from PROJECTS)
     ====================================================================== */
  function mediaLayers(it, gi) {
    const still = it.poster || (it.type === 'image' ? it.src : '');
    const [x, y] = PH_POS[gi % PH_POS.length];
    const alt = it.alt || it.caption || 'Project material';
    return `
      <span class="ph" style="--ph-x:${x}%;--ph-y:${y}%" aria-hidden="true"><span class="ph__label">${esc(it.src)}</span></span>
      ${still ? `<img class="card__img" data-src="${esc(still)}" alt="${esc(alt)}" decoding="async" draggable="false">` : ''}
      ${it.type === 'video' ? '<video class="card__video" muted loop playsinline preload="none" tabindex="-1" aria-hidden="true"></video>' : ''}`;
  }

  function itemHTML(entry, gi) {
    const it = entry.item;
    const verb = it.type === 'video' ? 'Play' : 'View';
    const r = ratioValue(it.phone ? '9:16' : it.ratio);
    const name = `${plainTitle(entry.project.title)}${it.caption ? ' — ' + it.caption : ''}`;
    const caption = it.caption ? `<p class="item__caption label">${esc(it.caption)}</p>` : '';
    const open = `<button class="card__open" type="button" data-open="${gi}" data-cursor="${verb}" aria-label="${verb}: ${esc(name)}"></button>`;

    if (it.prompt && !it.phone) {
      const compare = it.firstGeneration ? `
        <div class="prompt__compare">
          <figure class="prompt__thumb">
            <div class="prompt__thumb-media">
              <span class="ph" aria-hidden="true"><span class="ph__label">${esc(it.firstGeneration)}</span></span>
              <img data-src="${esc(it.firstGeneration)}" alt="First generation" decoding="async" draggable="false">
            </div>
            <figcaption class="label">First generation</figcaption>
          </figure>
          <figure class="prompt__thumb">
            <div class="prompt__thumb-media">
              <span class="ph" aria-hidden="true"><span class="ph__label">${esc(it.src)}</span></span>
              <img data-src="${esc(it.src)}" alt="Final result" decoding="async" draggable="false">
            </div>
            <figcaption class="label">Final</figcaption>
          </figure>
        </div>` : '';
      return `
        <li class="item card card--ai" data-index="${gi}" style="--r:${r.toFixed(4)}">
          <div class="card__media" data-media>
            <div class="card__flip">
              <div class="card__face card__face--front">
                <div class="card__scale">${mediaLayers(it, gi)}</div>
              </div>
              <div class="card__face card__face--back" id="prompt-${gi}" aria-hidden="true">
                <p class="label prompt__label">Prompt</p>
                <p class="prompt__text">
                  <span class="prompt__typed" aria-hidden="true"></span><span class="prompt__caret" aria-hidden="true"></span>
                  <span class="visually-hidden">${esc(it.prompt)}</span>
                </p>
                ${compare}
              </div>
            </div>
            ${open}
            <button class="card__toggle" type="button" aria-expanded="false" aria-controls="prompt-${gi}">
              <span class="card__toggle-dot" aria-hidden="true"></span><span class="card__toggle-text">Prompt</span>
            </button>
          </div>
          ${caption}
        </li>`;
    }

    if (it.phone) {
      return `
        <li class="item item--phone card" data-index="${gi}" style="--r:0.5625">
          <div class="phone">
            <div class="card__media" data-media>
              <div class="card__scale">${mediaLayers(it, gi)}</div>
              ${open}
            </div>
          </div>
          ${caption}
        </li>`;
    }

    return `
      <li class="item card" data-index="${gi}" style="--r:${r.toFixed(4)}">
        <div class="card__media" data-media>
          <div class="card__scale">${mediaLayers(it, gi)}</div>
          ${open}
        </div>
        ${caption}
      </li>`;
  }

  function renderProjects() {
    const host = $('[data-projects]');
    if (!host) return;
    const total = PROJECTS.length;
    let gi = 0;
    host.innerHTML = PROJECTS.map((p, pi) => {
      const n = pi + 1;
      const items = (p.items || []).map(() => itemHTML(ITEMS[gi], gi++)).join('');
      const meta = [p.client, p.year, p.role].filter(Boolean).map(esc).join(' · ');
      const tags = (p.tags || []).map((t) => `<li>${esc(t)}</li>`).join('');
      return `
        <article class="project${pi % 2 ? ' project--flip' : ''}" id="project-${n}" aria-labelledby="project-${n}-title">
          <div class="container">
            <div class="project__head grid">
              <p class="project__index label" data-reveal><span>${pad(n)}</span> / ${pad(total)}</p>
              <h3 class="project__title" id="project-${n}-title" data-split>${richTitle(p.title)}</h3>
              <div class="project__info" data-reveal>
                ${meta ? `<p class="project__meta label">${meta}</p>` : ''}
                ${p.description ? `<p class="project__desc">${esc(p.description)}</p>` : ''}
                ${tags ? `<ul class="project__tags" aria-label="Disciplines">${tags}</ul>` : ''}
              </div>
            </div>
          </div>
          <div class="strip" data-strip>
            <div class="strip__window" tabindex="0" role="region" aria-label="${esc(plainTitle(p.title))}: project materials, scroll sideways" data-cursor="Drag">
              <ul class="strip__track">${items}</ul>
            </div>
          </div>
          <div class="container">
            <div class="strip__controls" data-reveal>
              <span class="label strip__count">${pad((p.items || []).length)} pieces</span>
              <div class="strip__bar" aria-hidden="true"><i class="strip__progress"></i></div>
              <div class="strip__nav">
                <button type="button" class="strip__arrow" data-strip-prev aria-label="Scroll ${esc(plainTitle(p.title))} materials left">
                  <svg viewBox="0 0 20 12" aria-hidden="true"><path d="M20 6H2M7 1L2 6l5 5" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>
                </button>
                <button type="button" class="strip__arrow" data-strip-next aria-label="Scroll ${esc(plainTitle(p.title))} materials right">
                  <svg viewBox="0 0 20 12" aria-hidden="true"><path d="M0 6h18M13 1l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>
                </button>
              </div>
            </div>
          </div>
        </article>`;
    }).join('');
  }


  /* ======================================================================
     LAZY IMAGES
     ====================================================================== */
  function loadImg(img) {
    const src = img.dataset.src;
    if (!src) return;
    img.addEventListener('load', () => img.classList.add('is-loaded'), { once: true });
    img.addEventListener('error', () => img.remove(), { once: true }); // missing file → placeholder stays
    img.src = src;
    img.removeAttribute('data-src');
  }

  const imgObserver = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        loadImg(e.target);
        obs.unobserve(e.target);
      });
    }, { rootMargin: '400px 600px' })
    : null;

  function observeImages(scope = document) {
    $$('img[data-src]', scope).forEach((img) => {
      if (img.closest('.card__face--back')) return; // loaded when the prompt opens
      if (imgObserver) imgObserver.observe(img); else loadImg(img);
    });
  }


  /* ======================================================================
     ITEM VIDEOS — play on hover (desktop) or when in view (touch)
     ====================================================================== */
  const touchVideoObserver = (!finePointer && !reduced && 'IntersectionObserver' in window)
    ? new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const card = e.target;
        if (!card._play) return;
        if (e.isIntersecting) card._play(); else card._pause();
      });
    }, { threshold: 0.6 })
    : null;

  function initCardVideos() {
    $$('.card').forEach((card) => {
      const entry = ITEMS[card.dataset.index];
      const media = $('[data-media]', card);
      const video = $('video', media);
      if (!video || !entry) return;
      const src = entry.item.src;

      video.addEventListener('playing', () => media.classList.add('is-playing'));
      video.addEventListener('error', () => {
        media.classList.remove('is-playing');
        card._failed = true;
      });

      card._play = () => {
        if (!src || card._failed) return;
        if (!video.getAttribute('src')) video.src = src;
        const pr = video.play();
        if (pr && pr.catch) pr.catch(() => {});
      };
      card._pause = () => {
        video.pause();
        media.classList.remove('is-playing');
      };

      if (finePointer) {
        media.addEventListener('pointerenter', card._play);
        media.addEventListener('pointerleave', card._pause);
      } else if (touchVideoObserver) {
        touchVideoObserver.observe(card);
      }
    });
  }

  function pauseCardVideos() {
    $$('.card').forEach((c) => c._pause && c._pause());
  }


  /* ======================================================================
     "BEHIND THE PROMPT" (AI Creatives)
     ====================================================================== */
  function typePrompt(card) {
    const entry = ITEMS[card.dataset.index];
    const el = $('.prompt__typed', card);
    const text = (entry && entry.item.prompt) || '';
    clearInterval(card._typer);
    clearTimeout(card._typeDelay);
    if (reduced) { el.textContent = text; return; }
    el.textContent = '';
    let i = 0;
    card._typeDelay = setTimeout(() => {
      card._typer = setInterval(() => {
        i += 2;
        el.textContent = text.slice(0, i);
        if (i >= text.length) clearInterval(card._typer);
      }, 18);
    }, 380);
  }

  function initPrompts() {
    $$('.card--ai').forEach((card) => {
      const btn = $('.card__toggle', card);
      const back = $('.card__face--back', card);
      if (!btn) return;
      back.setAttribute('inert', '');

      btn.addEventListener('click', () => {
        const open = !card.classList.contains('is-flipped');
        card.classList.toggle('is-flipped', open);
        btn.setAttribute('aria-expanded', String(open));
        $('.card__toggle-text', btn).textContent = open ? 'Close' : 'Prompt';
        back.setAttribute('aria-hidden', String(!open));
        if (open) {
          back.removeAttribute('inert');
          $$('img[data-src]', back).forEach(loadImg);
          typePrompt(card);
        } else {
          back.setAttribute('inert', '');
          clearInterval(card._typer);
          clearTimeout(card._typeDelay);
        }
      });
    });
  }


  /* ======================================================================
     LIGHTBOX — full-screen project viewer
     ====================================================================== */
  const lb = { el: null, stage: null, index: 0, lastFocus: null, isOpen: false };

  function renderLightbox(i) {
    const { item: it, project, pi } = ITEMS[i];
    lb.index = i;
    const ratio = it.ratio || '16:9';
    const ar = ratioValue(ratio);
    const stage = lb.stage;

    stage.style.setProperty('--stage-ar', ar.toFixed(4));
    stage.style.setProperty('--stage-w', `min(100%, calc((100svh - 12.5rem) * ${ar.toFixed(4)}), 1280px)`);
    stage.innerHTML = `<span class="ph" aria-hidden="true"><span class="ph__label">${esc(it.src)}</span></span>`;

    const still = it.type === 'video' ? it.poster : it.src;
    if (still) {
      const img = new Image();
      img.alt = it.alt || it.caption || plainTitle(project.title);
      img.decoding = 'async';
      img.addEventListener('error', () => img.remove());
      img.src = still;
      stage.appendChild(img);
    }
    if (it.type === 'video') {
      const v = document.createElement('video');
      v.controls = true;
      v.playsInline = true;
      v.preload = 'auto';
      if (it.poster) v.poster = it.poster;
      v.setAttribute('aria-label', it.caption || plainTitle(project.title));
      v.addEventListener('error', () => v.remove());
      v.src = it.src;
      stage.appendChild(v);
      const pr = v.play();
      if (pr && pr.catch) pr.catch(() => {});
    }

    const siblings = ITEMS.filter((e) => e.pi === pi);
    const pos = siblings.indexOf(ITEMS[i]) + 1;
    $('.lightbox__title', lb.el).textContent = plainTitle(project.title);
    $('.lightbox__meta', lb.el).textContent = [it.caption, ratio].filter(Boolean).join(' · ');
    $('.lightbox__count', lb.el).textContent = `${pad(pos)} / ${pad(siblings.length)}`;
  }

  function openLightbox(i, opener) {
    lb.lastFocus = opener || document.activeElement;
    lb.isOpen = true;
    pauseCardVideos();
    renderLightbox(i);
    lb.el.hidden = false;
    stopScroll();
    if (hasGSAP) {
      gsap.fromTo(lb.el, { opacity: 0 }, { opacity: 1, duration: 0.45, ease: 'power2.out' });
      gsap.fromTo(lb.stage, { opacity: 0, scale: reduced ? 1 : 0.96 }, { opacity: 1, scale: 1, duration: 0.9, ease: 'expo.out' });
    }
    $('.lightbox__close', lb.el).focus({ preventScroll: true });
    document.addEventListener('keydown', onLightboxKey);
  }

  function closeLightbox() {
    if (!lb.isOpen) return;
    lb.isOpen = false;
    document.removeEventListener('keydown', onLightboxKey);
    const v = $('video', lb.stage);
    if (v) v.pause();
    const done = () => {
      lb.el.hidden = true;
      lb.stage.innerHTML = '';
      startScroll();
      if (lb.lastFocus && lb.lastFocus.focus) lb.lastFocus.focus({ preventScroll: true });
    };
    if (hasGSAP) gsap.to(lb.el, { opacity: 0, duration: 0.3, ease: 'power2.in', onComplete: done });
    else done();
  }

  function stepLightbox(dir) {
    // step through the materials of the same project
    const pi = ITEMS[lb.index].pi;
    const list = ITEMS.map((e, i) => (e.pi === pi ? i : -1)).filter((i) => i > -1);
    const at = list.indexOf(lb.index);
    const next = list[(at + dir + list.length) % list.length];
    if (!hasGSAP || reduced) { renderLightbox(next); return; }
    gsap.to(lb.stage, {
      opacity: 0, x: -dir * 40, duration: 0.25, ease: 'power2.in',
      onComplete: () => {
        renderLightbox(next);
        gsap.fromTo(lb.stage, { opacity: 0, x: dir * 40 }, { opacity: 1, x: 0, duration: 0.7, ease: 'expo.out' });
      },
    });
  }

  function onLightboxKey(e) {
    if (e.key === 'Escape') { e.preventDefault(); closeLightbox(); return; }
    const inVideo = e.target && e.target.tagName === 'VIDEO';
    if (e.key === 'ArrowRight' && !inVideo) { e.preventDefault(); stepLightbox(1); return; }
    if (e.key === 'ArrowLeft' && !inVideo) { e.preventDefault(); stepLightbox(-1); return; }
    if (e.key === 'Tab') {
      // keep keyboard focus inside the lightbox
      const f = $$('button, video[controls], [href], [tabindex]:not([tabindex="-1"])', lb.el)
        .filter((el) => el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      else if (!lb.el.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
    }
  }

  function initLightbox() {
    lb.el = $('#lightbox');
    lb.stage = $('.lightbox__stage', lb.el);
    if (!lb.el) return;

    document.addEventListener('click', (e) => {
      const opener = e.target.closest('[data-open]');
      if (opener) { openLightbox(Number(opener.dataset.open), opener); return; }
      if (!lb.isOpen) return;
      if (e.target.closest('[data-lightbox-close]')) closeLightbox();
      else if (e.target.closest('[data-lightbox-prev]')) stepLightbox(-1);
      else if (e.target.closest('[data-lightbox-next]')) stepLightbox(1);
    });
  }


  /* ======================================================================
     SMOOTH SCROLL (Lenis) + anchor links
     ====================================================================== */
  function initSmoothScroll() {
    if (reduced || typeof window.Lenis === 'undefined') return;
    const lenis = new window.Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    state.lenis = lenis;
    if (hasGSAP) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }

  function stopScroll() {
    if (state.lenis) state.lenis.stop();
    root.classList.add('scroll-locked');
  }
  function startScroll() {
    if (lb.isOpen || state.menuOpen || root.classList.contains('is-loading')) return;
    root.classList.remove('scroll-locked');
    if (state.lenis) state.lenis.start();
  }
  const currentScroll = () => (state.lenis ? state.lenis.scroll : window.scrollY);

  function scrollToTarget(target) {
    if (state.lenis) {
      state.lenis.scrollTo(target, { duration: 1.5 });
      return;
    }
    const y = target === 0 ? 0 : target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
  }

  function initAnchors() {
    document.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href').slice(1);
      const target = (id === '' || id === 'top') ? 0 : document.getElementById(id);
      if (target === null) return;
      e.preventDefault();
      if (state.menuOpen) closeMenu(false);
      scrollToTarget(target);
      // Move keyboard focus to the section for screen-reader / keyboard users
      const focusEl = target === 0 ? $('.wordmark') : target;
      if (focusEl !== $('.wordmark') && !focusEl.hasAttribute('tabindex')) focusEl.setAttribute('tabindex', '-1');
      focusEl.focus({ preventScroll: true });
    });
  }


  /* ======================================================================
     HEADER — hide on scroll down, show on scroll up, blur once scrolled
     ====================================================================== */
  function initHeader() {
    const header = $('.site-header');
    let lastY = currentScroll();
    const onScroll = (y) => {
      header.classList.toggle('is-scrolled', y > 40);
      if (!state.menuOpen) {
        if (y > lastY + 4 && y > 240) header.classList.add('is-hidden');
        else if (y < lastY - 4 || y <= 240) header.classList.remove('is-hidden');
      }
      lastY = y;
    };
    if (state.lenis) state.lenis.on('scroll', (l) => onScroll(l.scroll));
    else window.addEventListener('scroll', () => onScroll(window.scrollY), { passive: true });
    header.addEventListener('focusin', () => header.classList.remove('is-hidden'));
    onScroll(lastY);
  }

  function initProgress() {
    const bar = $('.progress__bar');
    if (!bar) return;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, currentScroll() / max)) : 0;
      bar.style.transform = `scaleX(${p})`;
    };
    if (state.lenis) state.lenis.on('scroll', update);
    else window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  function initActiveNav() {
    if (!hasGSAP) return;
    ['work', 'about', 'contact'].forEach((id) => {
      const section = document.getElementById(id);
      const link = $(`.nav__link[data-nav="${id}"]`);
      if (!section || !link) return;
      ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        end: 'bottom 50%',
        onToggle: (self) => {
          link.classList.toggle('is-active', self.isActive);
          if (self.isActive) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        },
      });
    });
  }


  /* ======================================================================
     MOBILE MENU
     ====================================================================== */
  let menuEls = null;

  function openMenu() {
    const { btn, menu, links } = menuEls;
    state.menuOpen = true;
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Close menu');
    menu.removeAttribute('inert');
    menu.setAttribute('aria-hidden', 'false');
    root.classList.add('menu-open');
    stopScroll();
    if (hasGSAP) {
      gsap.killTweensOf([menu, links]);
      gsap.timeline()
        .set(menu, { visibility: 'visible' })
        .fromTo(menu, { clipPath: 'inset(0% 0% 100% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: reduced ? 0.01 : 0.9, ease: 'expo.inOut' })
        .fromTo(links, { yPercent: reduced ? 0 : 110, opacity: reduced ? 0 : 1 }, { yPercent: 0, opacity: 1, duration: reduced ? 0.3 : 1, ease: 'power4.out', stagger: 0.07 }, reduced ? 0 : '-=0.45');
    } else {
      menu.style.visibility = 'visible';
      menu.style.clipPath = 'none';
    }
    setTimeout(() => { const first = $('.menu__link', menu); if (first) first.focus({ preventScroll: true }); }, 350);
  }

  function closeMenu(restoreFocus = true) {
    const { btn, menu, links } = menuEls;
    state.menuOpen = false;
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open menu');
    menu.setAttribute('inert', '');
    menu.setAttribute('aria-hidden', 'true');
    root.classList.remove('menu-open');
    startScroll();
    if (hasGSAP) {
      gsap.killTweensOf([menu, links]);
      gsap.to(menu, {
        clipPath: 'inset(0% 0% 100% 0%)', duration: reduced ? 0.01 : 0.7, ease: 'expo.inOut',
        onComplete: () => gsap.set(menu, { visibility: 'hidden' }),
      });
    } else {
      menu.style.visibility = 'hidden';
    }
    if (restoreFocus) btn.focus({ preventScroll: true });
  }

  function initMenu() {
    const btn = $('.menu-toggle');
    const menu = $('#menu');
    if (!btn || !menu) return;
    menuEls = { btn, menu, links: $$('.menu__link span', menu) };
    btn.addEventListener('click', () => (state.menuOpen ? closeMenu() : openMenu()));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && state.menuOpen) closeMenu(); });
    window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => { if (e.matches && state.menuOpen) closeMenu(false); });
  }


  /* ======================================================================
     CUSTOM CURSOR & MAGNETIC ELEMENTS (desktop only)
     ====================================================================== */
  function initCursor() {
    if (!finePointer || !hasGSAP) return;
    root.classList.add('has-cursor');
    const cursor = $('.cursor');
    const dot = $('.cursor__dot');
    const ring = $('.cursor__ring');
    const label = $('.cursor__label');
    const dotX = gsap.quickSetter(dot, 'x', 'px');
    const dotY = gsap.quickSetter(dot, 'y', 'px');
    const ringX = gsap.quickTo(ring, 'x', { duration: reduced ? 0.01 : 0.5, ease: 'power3' });
    const ringY = gsap.quickTo(ring, 'y', { duration: reduced ? 0.01 : 0.5, ease: 'power3' });

    window.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      cursor.classList.add('is-visible');
      dotX(e.clientX); dotY(e.clientY);
      ringX(e.clientX); ringY(e.clientY);
    }, { passive: true });
    document.addEventListener('mouseleave', () => cursor.classList.remove('is-visible'));
    window.addEventListener('pointerdown', () => cursor.classList.add('is-down'));
    window.addEventListener('pointerup', () => cursor.classList.remove('is-down'));

    document.addEventListener('pointerover', (e) => {
      const hit = e.target.closest('a, button, [data-cursor]');
      const t = hit && hit.dataset.cursor && !e.target.closest('.card__face--back') ? hit : null;
      if (t) {
        label.textContent = t.dataset.cursor;
        cursor.classList.add('is-label');
        cursor.classList.remove('is-link');
        return;
      }
      cursor.classList.remove('is-label');
      cursor.classList.toggle('is-link', !!e.target.closest('a, button, [role="button"]'));
    });
  }

  function initMagnetic() {
    if (!finePointer || reduced || !hasGSAP) return;
    $$('[data-magnetic]').forEach((el) => {
      const strength = (el.classList.contains('btn') || el.classList.contains('pill')) ? 0.35 : 0.25;
      const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3' });
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * strength);
        yTo((e.clientY - (r.top + r.height / 2)) * strength);
      });
      el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
    });
  }


  /* ======================================================================
     TEXT SPLITTING (SplitType, with a tiny built-in fallback)
     ====================================================================== */
  function manualSplit(el) {
    const words = [];
    const walk = (node) => {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
            const w = document.createElement('span');
            w.className = 'word';
            w.style.display = 'inline-block';
            w.textContent = part;
            words.push(w);
            frag.appendChild(w);
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1) {
          walk(child);
        }
      });
    };
    walk(el);
    return words;
  }

  function splitWords(el) {
    if (window.SplitType) {
      try {
        const st = new window.SplitType(el, { types: 'words', tagName: 'span' });
        if (st.words && st.words.length) return st.words;
      } catch (err) { /* fall through to manual split */ }
    }
    return manualSplit(el);
  }

  /** Splits a heading into masked words and returns a function that plays the reveal. */
  function prepareHeading(el) {
    if (el._play) return el._play;
    const words = splitWords(el);
    const inners = words.map((w) => {
      w.classList.add('split-word');
      const inner = document.createElement('span');
      inner.className = 'split-word__inner';
      while (w.firstChild) inner.appendChild(w.firstChild);
      w.appendChild(inner);
      return inner;
    });
    el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
    words.forEach((w) => w.setAttribute('aria-hidden', 'true'));

    if (reduced) {
      gsap.set(el, { opacity: 0 });
      el._play = (delay = 0) => gsap.to(el, { opacity: 1, duration: 0.8, delay, ease: 'power1.out' });
      return el._play;
    }

    gsap.set(inners, { yPercent: 118 });
    el._play = (delay = 0) => {
      // group words by visual line so each line rises together
      let line = -1;
      let lastTop = null;
      let posInLine = 0;
      const delays = words.map((w) => {
        const top = w.offsetTop;
        if (lastTop === null || Math.abs(top - lastTop) > 4) { line += 1; lastTop = top; posInLine = 0; } else { posInLine += 1; }
        return line * 0.12 + posInLine * 0.03;
      });
      return gsap.to(inners, {
        yPercent: 0,
        duration: 1.3,
        ease: 'power4.out',
        delay,
        stagger: (i) => delays[i],
        overwrite: true,
      });
    };
    return el._play;
  }

  function initHeadingReveals() {
    $$('[data-split]').forEach((el) => {
      if (el.dataset.split === 'hero') return; // the hero plays after the preloader
      const play = prepareHeading(el);
      ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: () => play() });
    });
  }


  /* ======================================================================
     SECTION ENTRANCES
     ====================================================================== */
  function initReveals() {
    const els = $$('[data-reveal]').filter((el) => !el.closest('.social'));
    gsap.set(els, { opacity: 0, y: reduced ? 0 : 36 });
    ScrollTrigger.batch(els, {
      start: 'top 90%',
      once: true,
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', stagger: 0.09, overwrite: true }),
    });
  }

  function revealCards(batch) {
    const frames = batch.map((c) => $('.phone', c) || $('.card__media', c));
    const scales = batch.map((c) => $('.card__scale', c)).filter(Boolean);
    const infos = batch.map((c) => $('.item__caption', c)).filter(Boolean);
    gsap.to(frames, { clipPath: 'inset(0% 0% 0% 0%)', duration: reduced ? 0.6 : 1.4, ease: 'expo.out', stagger: 0.12, clearProps: 'clipPath' });
    if (!reduced) gsap.fromTo(scales, { scale: 1.18 }, { scale: 1, duration: 1.8, ease: 'expo.out', stagger: 0.12, clearProps: 'transform' });
    gsap.to(infos, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.12, delay: 0.25 });
  }

  function hideCards(cards) {
    gsap.set(cards.map((c) => $('.phone', c) || $('.card__media', c)), { clipPath: 'inset(100% 0% 0% 0%)' });
    gsap.set(cards.map((c) => $('.item__caption', c)).filter(Boolean), { opacity: 0, y: reduced ? 0 : 20 });
  }

  /* ======================================================================
     PROJECT STRIPS — sideways scrolling, arrows, progress, drag
     ====================================================================== */
  function initStrips() {
    $$('.project').forEach((project) => {
      const win = $('.strip__window', project);
      const track = $('.strip__track', project);
      const bar = $('.strip__progress', project);
      const prev = $('[data-strip-prev]', project);
      const next = $('[data-strip-next]', project);
      const controls = $('.strip__controls', project);
      if (!win) return;

      const update = () => {
        const max = win.scrollWidth - win.clientWidth;
        const p = max > 2 ? win.scrollLeft / max : 0;
        bar.style.transform = `scaleX(${Math.max(0.04, p)})`;
        prev.disabled = win.scrollLeft < 4;
        next.disabled = win.scrollLeft > max - 4;
        controls.classList.toggle('is-static', max <= 2);
      };
      win.addEventListener('scroll', update, { passive: true });
      window.addEventListener('resize', update);
      update();

      const by = (dir) => win.scrollBy({ left: dir * win.clientWidth * 0.7, behavior: reduced ? 'auto' : 'smooth' });
      prev.addEventListener('click', () => by(-1));
      next.addEventListener('click', () => by(1));

      initDrag(win);

      if (!hasGSAP) return;
      // Materials wipe in when the strip enters the screen
      const cards = $$('.card', track);
      hideCards(cards);
      ScrollTrigger.create({
        trigger: win, start: 'top 85%', once: true,
        onEnter: () => revealCards(cards),
      });
      // The whole strip drifts in slightly from the right as you scroll
      if (!reduced) {
        gsap.fromTo(track, { x: () => window.innerWidth * 0.08 }, {
          x: 0, ease: 'none',
          scrollTrigger: { trigger: win, start: 'top bottom', end: 'top 35%', scrub: 0.8, invalidateOnRefresh: true },
        });
      }
    });
  }

  function initDrag(win) {
    let down = false;
    let moved = false;
    let startX = 0;
    let start = 0;
    let suppressClick = false;

    win.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      if (e.target.closest('.card__toggle, .card__face--back')) return;
      down = true;
      moved = false;
      startX = e.clientX;
      start = win.scrollLeft;
    });
    window.addEventListener('pointermove', (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (!moved && Math.abs(dx) > 6) { moved = true; win.classList.add('is-dragging'); }
      if (moved) win.scrollLeft = start - dx;
    });
    window.addEventListener('pointerup', () => {
      if (!down) return;
      down = false;
      win.classList.remove('is-dragging');
      if (moved) { suppressClick = true; setTimeout(() => { suppressClick = false; }, 0); }
    });
    win.addEventListener('click', (e) => {
      if (suppressClick) { e.preventDefault(); e.stopPropagation(); }
    }, true);
  }


  /* ======================================================================
     NUMBERS — count up once
     ====================================================================== */
  function initCounters() {
    $$('[data-count]').forEach((el) => {
      const target = Number(el.dataset.count);
      const stat = el.closest('.stat');
      // Screen readers get the final number straight away
      const num = $('.stat__num', stat);
      num.setAttribute('aria-hidden', 'true');
      const sr = document.createElement('span');
      sr.className = 'visually-hidden';
      sr.textContent = `${target}+ `;
      $('.stat__label', stat).prepend(sr);

      if (!hasGSAP || reduced) { el.textContent = target; return; }
      el.textContent = '0';
      const obj = { v: 0 };
      ScrollTrigger.create({
        trigger: el, start: 'top 90%', once: true,
        onEnter: () => gsap.to(obj, {
          v: target, duration: target > 50 ? 2.2 : 1.6, ease: 'power3.out', delay: 0.15,
          onUpdate: () => { el.textContent = Math.round(obj.v); },
        }),
      });
    });
  }


  /* ======================================================================
     HOW I WORK — line draws, steps light up
     ====================================================================== */
  function initSteps() {
    const steps = $('.steps');
    if (!steps) return;
    const line = $('.steps__line', steps);
    const prog = $('.steps__progress', steps);
    const items = $$('.step', steps);
    const mm = gsap.matchMedia();

    mm.add({ horizontal: '(min-width: 768px)', vertical: '(max-width: 767px)' }, (ctx) => {
      const horiz = ctx.conditions.horizontal;
      const axis = horiz ? 'scaleX' : 'scaleY';
      let fracs = [];
      const measure = () => {
        fracs = items.map((s) => {
          const d = $('.step__dot', s);
          return horiz
            ? (s.offsetLeft + d.offsetLeft + d.offsetWidth / 2 - line.offsetLeft) / line.offsetWidth
            : (s.offsetTop + d.offsetTop + d.offsetHeight / 2 - line.offsetTop) / line.offsetHeight;
        });
      };
      measure();
      gsap.fromTo(prog, { [axis]: 0 }, {
        [axis]: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: steps,
          start: horiz ? 'top 72%' : 'top 70%',
          end: horiz ? 'top 28%' : 'bottom 60%',
          scrub: 0.8,
          onRefresh: measure,
          onUpdate: (self) => {
            const p = self.progress;
            items.forEach((s, i) => s.classList.toggle('is-active', p > 0.002 && p >= fracs[i] - 0.01));
          },
        },
      });
      return () => items.forEach((s) => s.classList.remove('is-active'));
    });
  }


  /* ======================================================================
     ABOUT — words brighten as you scroll, portrait parallax
     ====================================================================== */
  function initAbout() {
    const p = $('[data-scrub-words]');
    if (p) {
      const words = splitWords(p);
      gsap.fromTo(words, { opacity: 0.18 }, {
        opacity: 1,
        ease: 'none',
        stagger: 0.1,
        scrollTrigger: { trigger: p, start: 'top 82%', end: 'bottom 50%', scrub: true },
      });
    }
    const img = $('.portrait__img');
    if (img && !reduced) {
      gsap.fromTo(img, { yPercent: -6 }, {
        yPercent: 6, ease: 'none',
        scrollTrigger: { trigger: '.portrait', start: 'top bottom', end: 'bottom top', scrub: true },
      });
    }
  }


  /* ======================================================================
     TOOLKIT MARQUEE — direction & speed follow your scroll
     ====================================================================== */
  function initMarquee() {
    const marquee = $('.marquee');
    const track = $('.marquee__track');
    if (!marquee || !track) return;
    if (reduced || !hasGSAP) { marquee.classList.add('is-static'); return; }

    const groups = $$('.marquee__group', track);
    // make sure one group is wider than the screen so the loop is seamless
    const fill = () => {
      let guard = 0;
      while (groups[0].offsetWidth < window.innerWidth * 1.1 && guard < 4) {
        groups.forEach((g) => { g.innerHTML += g.innerHTML; });
        guard += 1;
      }
    };
    fill();
    let width = groups[0].offsetWidth;
    window.addEventListener('resize', () => { fill(); width = groups[0].offsetWidth; });

    let x = 0;
    let dir = 1;
    let boost = 0;
    let speed = 1;
    let hover = false;
    let visible = false;
    const BASE = 140; // pixels per second

    marquee.addEventListener('pointerenter', () => { hover = true; });
    marquee.addEventListener('pointerleave', () => { hover = false; });

    ScrollTrigger.create({
      trigger: marquee, start: 'top bottom', end: 'bottom top',
      onToggle: (self) => { visible = self.isActive; },
      onUpdate: (self) => {
        dir = self.direction;
        boost = Math.min(Math.abs(self.getVelocity()) / 350, 6);
      },
    });

    gsap.ticker.add((time, dt) => {
      if (!visible || !width) return;
      const goal = hover ? 0 : dir * (1 + boost);
      speed += (goal - speed) * 0.06;
      boost *= 0.93;
      x -= speed * BASE * (dt / 1000);
      const w = ((x % width) + width) % width; // 0 … width
      track.style.transform = `translate3d(${-w}px, 0, 0)`;
    });
  }


  /* ======================================================================
     CONTACT — copy email, live Ljubljana time, toast
     ====================================================================== */
  let toastTimer = null;
  function toast(msg) {
    const el = $('.toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-visible'), 1800);
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      try {
        const t = document.createElement('textarea');
        t.value = text;
        t.setAttribute('readonly', '');
        t.style.position = 'fixed';
        t.style.opacity = '0';
        document.body.appendChild(t);
        t.select();
        const ok = document.execCommand('copy');
        t.remove();
        return ok;
      } catch (e) {
        return false;
      }
    }
  }

  function initEmailCopy() {
    // Clicking the email copies it AND still opens the mail app (mailto)
    $$('.contact__email').forEach((a) => {
      a.addEventListener('click', () => {
        copyText(SITE.email).then((ok) => { if (ok) toast('Copied'); });
      });
    });
  }

  function initClock() {
    const el = $('[data-clock] time');
    if (!el) return;
    let fmt;
    let tzFmt;
    try {
      fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: SITE.timeZone });
      tzFmt = new Intl.DateTimeFormat('en-GB', { timeZone: SITE.timeZone, timeZoneName: 'short' });
    } catch (e) { return; }
    const names = { 'GMT+1': 'CET', 'GMT+2': 'CEST', 'UTC+1': 'CET', 'UTC+2': 'CEST' };
    const update = () => {
      const now = new Date();
      const part = tzFmt.formatToParts(now).find((x) => x.type === 'timeZoneName');
      const tz = part ? (names[part.value] || part.value) : '';
      el.textContent = `${fmt.format(now)} ${tz}`.trim();
      el.dateTime = now.toISOString();
    };
    update();
    setTimeout(() => { update(); setInterval(update, 60000); }, (60 - new Date().getSeconds()) * 1000);
  }


  /* ======================================================================
     HERO — optional background video, intro, scroll exit
     ====================================================================== */
  function initHeroVideo() {
    const v = $('.hero__video');
    if (!v || !SITE.heroVideo || reduced) return;
    v.addEventListener('playing', () => v.classList.add('is-playing'));
    v.addEventListener('error', () => v.remove());
    v.src = SITE.heroVideo;
    const pr = v.play();
    if (pr && pr.catch) pr.catch(() => {});
  }

  function initHeroSpot() {
    const hero = $('.hero');
    const spot = $('.hero__spot');
    if (!hero || !spot || !finePointer || reduced) return;
    const pos = { x: 70, y: 30 };
    const apply = () => {
      spot.style.setProperty('--mx', pos.x + '%');
      spot.style.setProperty('--my', pos.y + '%');
    };
    const xTo = gsap.quickTo(pos, 'x', { duration: 1.2, ease: 'power3', onUpdate: apply });
    const yTo = gsap.quickTo(pos, 'y', { duration: 1.2, ease: 'power3', onUpdate: apply });
    hero.addEventListener('pointermove', (e) => {
      const r = hero.getBoundingClientRect();
      xTo(((e.clientX - r.left) / r.width) * 100);
      yTo(((e.clientY - r.top) / r.height) * 100);
    });
  }

  function prepareHero() {
    const title = $('.hero__title');
    const fades = $$('[data-hero-fade]');
    const playTitle = prepareHeading(title);
    gsap.set(fades, { opacity: 0, y: reduced ? 0 : 24 });

    // Exit: the headline shrinks and fades as you scroll away
    gsap.to(title, {
      scale: reduced ? 1 : 0.9,
      yPercent: reduced ? 0 : -14,
      opacity: 0.12,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: reduced ? true : 0.6 },
    });

    return () => {
      playTitle(0);
      gsap.to(fades, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', stagger: 0.08, delay: reduced ? 0.2 : 0.65 });
    };
  }


  /* ======================================================================
     PRELOADER — counter 0 → 100, then the screen wipes up
     ====================================================================== */
  function finishLoading() {
    const pre = $('.preloader');
    if (pre) pre.remove();
    root.classList.remove('is-loading');
    startScroll();
    if (hasGSAP) ScrollTrigger.refresh();
  }

  function runPreloader(playHero) {
    const pre = $('.preloader');
    if (!pre) { finishLoading(); playHero(); return; }
    stopScroll();
    const num = $('.preloader__num', pre);
    const name = $('.preloader__name span', pre);
    const line = $('.preloader__line', pre);
    const counter = { v: 0 };
    const dur = reduced ? 0.5 : 1.05;

    const fontsReady = Promise.race([
      document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve(),
      new Promise((r) => setTimeout(r, 1500)),
    ]);

    const intro = gsap.timeline();
    intro
      .fromTo(name, { yPercent: reduced ? 0 : 110 }, { yPercent: 0, duration: reduced ? 0.01 : 0.8, ease: 'power4.out' }, 0)
      .to(counter, {
        v: 100, duration: dur, ease: 'power2.inOut',
        onUpdate: () => { num.textContent = String(Math.round(counter.v)).padStart(3, '0'); },
      }, 0)
      .to(line, { scaleX: 1, duration: dur, ease: 'power2.inOut' }, 0);

    const introDone = new Promise((r) => intro.eventCallback('onComplete', r));

    Promise.all([fontsReady, introDone]).then(() => {
      const out = gsap.timeline({ onComplete: finishLoading });
      if (reduced) {
        out.to(pre, { opacity: 0, duration: 0.4, ease: 'power1.out' });
        out.add(playHero, 0.1);
      } else {
        out
          .to([name, num], { yPercent: -110, duration: 0.45, ease: 'power3.in' })
          .to(pre, { yPercent: -100, duration: 0.85, ease: 'expo.inOut' }, '-=0.2')
          .add(playHero, '-=0.5');
      }
    });
  }


  /* ======================================================================
     START
     ====================================================================== */
  function init() {
    applySiteLinks();
    buildMarquee();
    renderProjects();
    observeImages();
    initLightbox();
    initPrompts();
    initCardVideos();
    initEmailCopy();
    initClock();

    if (!hasGSAP) {
      // Libraries didn't load: show everything without animation.
      initSmoothScroll();
      initAnchors();
      initHeader();
      initProgress();
      initMenu();
      initStrips();
      $('.marquee') && $('.marquee').classList.add('is-static');
      $$('.step').forEach((s) => s.classList.add('is-active'));
      const prog = $('.steps__progress');
      if (prog) prog.style.transform = 'none';
      finishLoading();
      return;
    }

    initSmoothScroll();
    initAnchors();
    initHeader();
    initProgress();
    initMenu();
    initCursor();
    initMagnetic();
    initHeroVideo();
    initHeroSpot();

    // Scroll animations (top to bottom)
    const playHero = prepareHero();
    initCounters();
    initReveals();
    initHeadingReveals();
    initStrips();
    initSteps();
    initAbout();
    initMarquee();
    initActiveNav();
    ScrollTrigger.sort();

    runPreloader(playHero);
  }

  try {
    init();
  } catch (err) {
    // Never leave the visitor stuck behind the preloader
    console.error(err);
    finishLoading();
    if (hasGSAP) gsap.set('[data-reveal], [data-hero-fade], .split-word__inner, .item__caption, .card__media, .phone, .strip__track', { clearProps: 'all' });
  }
  // Safety net in case something stalls
  setTimeout(() => {
    if (!root.classList.contains('is-loading')) return;
    finishLoading();
    if (hasGSAP) gsap.set('.split-word__inner, [data-hero-fade]', { yPercent: 0, y: 0, opacity: 1 });
  }, 6000);
})();
