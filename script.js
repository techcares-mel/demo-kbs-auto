/* ============================================================
   KBS Auto Service and Repair — script.js
   Template A: Auto / Trades / Industrial
   ============================================================ */

(function () {
  'use strict';

  /* ── Scroll Progress Bar ── */
  const progressBar = document.getElementById('scrollProgress');

  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = pct + '%';
  }

  /* ── Navbar scroll behaviour ── */
  const navbar = document.getElementById('navbar');

  function updateNavbar() {
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  /* ── Back to top ── */
  const backToTop = document.getElementById('backToTop');

  function updateBackToTop() {
    if (!backToTop) return;
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Combined scroll handler ── */
  window.addEventListener('scroll', function () {
    updateScrollProgress();
    updateNavbar();
    updateBackToTop();
  }, { passive: true });

  // Run once on load
  updateScrollProgress();
  updateNavbar();
  updateBackToTop();

  /* ── Mobile nav ── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const mobileNavClose = document.getElementById('mobileNavClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileNav() {
    if (!mobileNav || !hamburger) return;
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (!mobileNav || !hamburger) return;
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      if (mobileNav.classList.contains('open')) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    });
  }

  if (mobileNavClose) {
    mobileNavClose.addEventListener('click', closeMobileNav);
  }

  mobileNavLinks.forEach(function (link) {
    link.addEventListener('click', closeMobileNav);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('open')) {
      closeMobileNav();
    }
  });

  /* ── Scroll-reveal (IntersectionObserver) ── */
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealElements.length) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show all immediately
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  /* ── Stats counter ── */
  function easeOutQuad(t) {
    return t * (2 - t);
  }

  function animateStat(el) {
    var rawTarget = el.getAttribute('data-target');
    var suffix = el.getAttribute('data-suffix') || '';
    var target = parseFloat(rawTarget);
    var isDecimal = rawTarget.indexOf('.') !== -1;
    var decimals = isDecimal ? (rawTarget.split('.')[1] || '').length : 0;

    var start = null;
    var duration = 1500;

    function step(timestamp) {
      if (!start) start = timestamp;
      var elapsed = timestamp - start;
      var progress = Math.min(elapsed / duration, 1);
      var eased = easeOutQuad(progress);
      var current = eased * target;

      if (isDecimal) {
        el.textContent = current.toFixed(decimals) + suffix;
      } else {
        el.textContent = Math.floor(current) + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        if (isDecimal) {
          el.textContent = target.toFixed(decimals) + suffix;
        } else {
          el.textContent = Math.floor(target) + suffix;
        }
      }
    }

    requestAnimationFrame(step);
  }

  var statNumbers = document.querySelectorAll('.stat-number');

  if ('IntersectionObserver' in window && statNumbers.length) {
    var statsObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateStat(entry.target);
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    statNumbers.forEach(function (el) {
      statsObserver.observe(el);
    });
  }

  /* ── Active nav link via IntersectionObserver ── */
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-link');

  if ('IntersectionObserver' in window && sections.length && navLinks.length) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.remove('active-link');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active-link');
            }
          });
        }
      });
    }, {
      rootMargin: '-40% 0px -55% 0px',
      threshold: 0
    });

    sections.forEach(function (section) {
      navObserver.observe(section);
    });
  }

  /* ── Contact form ── */
  var contactForm = document.getElementById('contactForm');
  var formThanks = document.getElementById('formThanks');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // Fade form out
      contactForm.style.transition = 'opacity 0.3s ease';
      contactForm.style.opacity = '0';

      setTimeout(function () {
        contactForm.style.display = 'none';
        if (formThanks) {
          formThanks.hidden = false;
          formThanks.style.opacity = '0';
          formThanks.style.transition = 'opacity 0.4s ease';
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              formThanks.style.opacity = '1';
            });
          });
        }
      }, 300);
    });
  }

})();
