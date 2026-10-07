(() => {
  const config = window.AYS_SITE_CONFIG || {};
  const emailNode = document.querySelector('[data-contact="email"]');
  const phoneNode = document.querySelector('[data-contact="phone"]');
  const areaNode = document.querySelector('[data-contact="serviceArea"]');
  if (config.businessEmail && emailNode) emailNode.textContent = config.businessEmail;
  if (config.phoneDisplay && phoneNode) phoneNode.textContent = config.phoneDisplay;
  if (config.phoneLink && phoneNode) {
    const phoneLink = document.createElement('a');
    phoneLink.href = `tel:${config.phoneLink.replace(/[^+\d]/g, '')}`;
    phoneLink.textContent = phoneNode.textContent;
    phoneNode.replaceWith(phoneLink);
  }
  if (config.serviceArea && areaNode) areaNode.textContent = config.serviceArea;
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('is-open', !open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation');
      nav.classList.remove('is-open');
    }));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
        nav.classList.remove('is-open');
        toggle.focus();
      }
    });
  }
  const galleryTrack = document.getElementById('gallery-track');
  const galleryControls = document.querySelectorAll('[data-gallery-step]');
  if (galleryTrack && galleryControls.length) {
    const updateGalleryControls = () => {
      const lastPosition = galleryTrack.scrollWidth - galleryTrack.clientWidth;
      galleryControls.forEach(button => {
        const direction = Number(button.dataset.galleryStep);
        button.disabled = direction < 0 ? galleryTrack.scrollLeft <= 2 : galleryTrack.scrollLeft >= lastPosition - 2;
      });
    };
    galleryControls.forEach(button => button.addEventListener('click', () => {
      const card = galleryTrack.querySelector('.gallery-card');
      if (!card) return;
      const gap = parseFloat(getComputedStyle(galleryTrack).columnGap) || 18;
      const direction = Number(button.dataset.galleryStep);
      galleryTrack.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: 'smooth' });
    }));
    galleryTrack.addEventListener('scroll', updateGalleryControls, { passive: true });
    window.addEventListener('resize', updateGalleryControls);
    updateGalleryControls();
  }  const form = document.getElementById('estimate-form');
  const notice = document.getElementById('form-notice');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (!config.businessEmail || !config.businessEmail.includes('@')) {
      notice.textContent = 'The site owner still needs to add a working businessEmail in config.js before requests can be delivered.';
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(`AYS TILE estimate request — ${data.get('project')}`);
    const body = encodeURIComponent(`Name: ${data.get('name')}\nPhone: ${data.get('phone') || 'Not provided'}\nEmail: ${data.get('email')}\nProject type: ${data.get('project')}\n\n${data.get('message') || ''}`);
    const emailDraft = document.createElement('a');
    const recipient = encodeURIComponent(config.businessEmail);
    emailDraft.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
    emailDraft.target = '_blank';
    emailDraft.rel = 'noopener';
    emailDraft.click();
    notice.textContent = 'Gmail should open in a new tab with your request ready to send.';
  });
})();
