document.querySelectorAll('[data-gallery]').forEach((gallery) => {
  const slides = Array.from(gallery.querySelectorAll('.gallery-slide'));
  const controls = gallery.querySelector('.gallery-controls');
  if (!controls || slides.length < 2) return;
  controls.hidden = false;
  let index = 0;
  function show(next) {
    index = (next + slides.length) % slides.length;
    slides.forEach((slide, i) => { slide.hidden = i !== index; });
    gallery.querySelector('.gallery-count').textContent = `${index + 1} / ${slides.length}`;
  }
  gallery.querySelector('.gallery-prev').addEventListener('click', () => show(index - 1));
  gallery.querySelector('.gallery-next').addEventListener('click', () => show(index + 1));
});

const dialog = document.querySelector('#figure-dialog');
if (dialog && typeof dialog.showModal === 'function') {
  let activeTrigger = null;
  document.querySelectorAll('[data-zoom]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      activeTrigger = link;
      const figure = link.querySelector('img');
      const image = dialog.querySelector('#dialog-image');
      image.src = link.href;
      image.alt = figure.alt;
      dialog.querySelector('.dialog-image-wrap').classList.toggle('mts-crop', link.classList.contains('mts-crop'));
      dialog.querySelector('#dialog-caption').textContent = link.dataset.caption;
      dialog.querySelector('#dialog-original').href = link.href;
      dialog.showModal();
      dialog.querySelector('.dialog-close').focus();
    });
  });
  dialog.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;
    const controls = Array.from(dialog.querySelectorAll('button, a[href]'));
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  dialog.addEventListener('close', () => {
    if (activeTrigger) activeTrigger.focus();
  });
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    }
  });
}
