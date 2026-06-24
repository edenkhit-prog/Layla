document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initStickyHeader();
  initScrollSpy();
  initScrollReveal();
  initModals();
  initCopyEmailButton();
  initProgressBar();
});

/**
 * Mobile Navigation Hamburger Menu Interaction
 */
function initMobileMenu() {
  const navToggle = document.querySelector('.js-nav-toggle');
  const navMenu = document.querySelector('.js-nav-menu');
  const navLinks = document.querySelectorAll('.js-nav-link');

  if (!navToggle || !navMenu) return;

  function toggleMenu() {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isExpanded ? 'hidden' : '';
  }

  function closeMenu() {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close menu when resizing beyond mobile breakpoint
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      closeMenu();
    }
  });
}

/**
 * Sticky Header Tonal background trigger on scroll
 */
function initStickyHeader() {
  const header = document.querySelector('.js-site-header');
  if (!header) return;

  function checkScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Initial check in case page starts scrolled
}

/**
 * Scroll Spy: Highlight active navigation link based on current section visible
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.js-nav-link');

  if (sections.length === 0 || navLinks.length === 0) return;

  const spyOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of viewport
    threshold: 0
  };

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, spyOptions);

  sections.forEach(section => {
    spyObserver.observe(section);
  });
}

/**
 * Scroll Reveal micro-animations for high-fidelity content entry
 */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length === 0) return;

  const revealOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px', // Trigger slightly before element enters view
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        
        // If it's the progress bar container, fill it
        if (entry.target.classList.contains('js-progress-bar-reveal')) {
          triggerProgressBarAnimation();
        }
        
        revealObserver.unobserve(entry.target); // Reveal only once
      }
    });
  }, revealOptions);

  reveals.forEach(el => {
    revealObserver.observe(el);
  });
}

/**
 * Trigger Scientific Research Progress Bar Fill Animation
 */
function initProgressBar() {
  // Initiates state, will be filled via scroll observer trigger or timeout fallback
  const fill = document.querySelector('.js-progress-fill');
  if (!fill) return;
  
  // Set default accessibility attributes
  fill.parentElement.setAttribute('role', 'progressbar');
  fill.parentElement.setAttribute('aria-valuenow', '35');
  fill.parentElement.setAttribute('aria-valuemin', '0');
  fill.parentElement.setAttribute('aria-valuemax', '100');
  fill.parentElement.setAttribute('aria-label', 'Xia-Gibbs Syndrome cell model research progress');
}

function triggerProgressBarAnimation() {
  const fill = document.querySelector('.js-progress-fill');
  if (!fill) return;
  fill.style.width = '35%'; // Stage 1 Cell models fully underway
}

/**
 * Accessible Modal Window Interactions (Medical Disclaimer, Terms, Privacy)
 */
function initModals() {
  const modalTriggers = document.querySelectorAll('.js-modal-trigger');
  const modalOverlays = document.querySelectorAll('.js-modal-overlay');
  const modalCloseBtns = document.querySelectorAll('.js-modal-close');
  
  let lastActiveElement = null; // Save reference to return focus after modal closes

  if (modalTriggers.length === 0) return;

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    lastActiveElement = document.activeElement;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus close button or first focusable element inside modal
    const focusable = modal.querySelectorAll('button, [tabindex="0"], a');
    if (focusable.length > 0) {
      setTimeout(() => focusable[0].focus(), 100);
    }

    // ARIA state update
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // ARIA state update
    modal.setAttribute('aria-hidden', 'true');

    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  }

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.getAttribute('data-modal');
      openModal(modalId);
    });
  });

  modalCloseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.js-modal-overlay');
      closeModal(modal);
    });
  });

  modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  // Handle keyboard events (Escape to close, Tab trapping)
  document.addEventListener('keydown', (e) => {
    const activeModal = document.querySelector('.js-modal-overlay.active');
    if (!activeModal) return;

    // Close on Escape key
    if (e.key === 'Escape') {
      closeModal(activeModal);
      return;
    }

    // Trap focus inside modal
    if (e.key === 'Tab') {
      const focusables = activeModal.querySelectorAll('button, [tabindex="0"], a, input, textarea');
      if (focusables.length === 0) return;
      
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey) { // Shift + Tab (Backward)
        if (document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      } else { // Tab (Forward)
        if (document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    }
  });
}

/**
 * Copy Email Address to Clipboard Interaction
 */
function initCopyEmailButton() {
  const btnCopy = document.querySelector('.js-btn-copy');
  const emailText = document.querySelector('.js-email-address');
  const copyIcon = document.querySelector('.js-copy-icon');
  const checkIcon = document.querySelector('.js-check-icon');
  const btnText = document.querySelector('.js-copy-btn-text');

  if (!btnCopy || !emailText) return;

  btnCopy.addEventListener('click', () => {
    const email = emailText.textContent.trim();
    
    navigator.clipboard.writeText(email).then(() => {
      // Toggle icons
      if (copyIcon && checkIcon) {
        copyIcon.style.display = 'none';
        checkIcon.style.display = 'inline-block';
      }
      
      // Update text
      if (btnText) {
        btnText.textContent = 'Copied!';
      }
      
      // Add visual success styling
      btnCopy.style.borderColor = '#155724';
      btnCopy.style.backgroundColor = '#d4edda';
      btnCopy.style.color = '#155724';
      
      // Reset back to original after 2 seconds
      setTimeout(() => {
        if (copyIcon && checkIcon) {
          copyIcon.style.display = 'inline-block';
          checkIcon.style.display = 'none';
        }
        if (btnText) {
          btnText.textContent = 'Copy Address';
        }
        btnCopy.style.borderColor = '';
        btnCopy.style.backgroundColor = '';
        btnCopy.style.color = '';
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  });
}
