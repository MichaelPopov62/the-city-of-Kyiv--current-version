import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const metroImg = document.querySelector(
  '.coordinates-link[data-large]'
);

if (metroImg) {
  metroImg.addEventListener('click', (e) => {console.log('clicked', e.target);
    e.preventDefault();

    const largeImg = metroImg.dataset.large;
    const altText = metroImg.alt;

    const instance = basicLightbox.create(`
      <img
        src="${largeImg}"
        alt="${altText}"
        style="
          max-width: 100vw;
          max-height: 100vh;
          object-fit: contain;
        "
        />
      `);

    instance.show();
  });
}
