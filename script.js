/* ============================================
   BARBER LIFE — Interactive Script
   ============================================ */
(function () {
  'use strict';

  // ---------- PHONE ----------
  const PHONE = '5492616174842';

  // ---------- DOM ----------
  const header  = document.getElementById('header');
  const burger  = document.getElementById('burger');
  const nav     = document.getElementById('mainNav');
  const reveals = document.querySelectorAll('.reveal');
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = lightbox.querySelector('.lightbox__img');
  const lightboxClose = lightbox.querySelector('.lightbox__close');
  const lightboxPrev  = lightbox.querySelector('.lightbox__prev');
  const lightboxNext  = lightbox.querySelector('.lightbox__next');
  const galleryItems  = document.querySelectorAll('.galeria__item');

  // ---------- MOBILE MENU ----------
  burger.addEventListener('click', function () {
    const isOpen = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open');
  });

  // Close on link click
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      burger.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    });
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains('is-open')) {
      burger.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }
  });

  // ---------- STICKY HEADER ----------
  var lastScroll = 0;
  function handleScroll() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (y > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
    lastScroll = y;
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ---------- REVEAL ON SCROLL ----------
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = entry.target.getAttribute('data-delay');
          if (delay) {
            setTimeout(function () {
              entry.target.classList.add('revealed');
            }, parseInt(delay, 10));
          } else {
            entry.target.classList.add('revealed');
          }
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show all
    reveals.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  // ---------- LIGHTBOX ----------
  var galleryImages = [];
  var currentIndex = 0;

  galleryItems.forEach(function (item, idx) {
    var img = item.querySelector('img');
    var fullSrc = img.getAttribute('data-full') || img.src;
    galleryImages.push({ src: fullSrc, alt: img.alt });

    item.addEventListener('click', function () {
      currentIndex = idx;
      openLightbox();
    });
  });

  function openLightbox() {
    var g = galleryImages[currentIndex];
    lightboxImg.src = g.src;
    lightboxImg.alt = g.alt;
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    lightboxImg.alt = '';
    document.body.style.overflow = '';
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    openLightbox();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    openLightbox();
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxNext.addEventListener('click', nextImage);
  lightboxPrev.addEventListener('click', prevImage);

  // Keyboard navigation
  document.addEventListener('keydown', function (e) {
    if (lightbox.getAttribute('aria-hidden') === 'true') return;
    if (e.key === 'Escape' || e.key === 'Esc') closeLightbox();
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextImage();
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevImage();
  });

  // Close on backdrop click
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  // ---------- WHATSAPP DATA ATTRIBUTES ----------
  document.querySelectorAll('[data-whatsapp]').forEach(function (el) {
    if (el.tagName === 'A') {
      var href = el.getAttribute('href');
      if (!href || href === '#') {
        el.setAttribute('href', 'https://wa.me/' + PHONE);
      }
    }
  });

  // ---------- SMOOTH ANCHOR ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

})();
