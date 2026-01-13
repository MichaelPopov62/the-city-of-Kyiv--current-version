// import * as basicLightbox from 'basiclightbox'
// import 'basiclightbox/dist/basicLightbox.min.css'

// const metroLink = document.querySelector(
//   '.map-link .coordinates-link[data-large]'
// )

// if (metroLink) {
//   metroLink.closest('.map-link').addEventListener('click', (e) => {
//     e.preventDefault()

//     const img = e.currentTarget.querySelector('img')
//     const largeImg = img.dataset.large
//     const altText = img.alt

//     const instance = basicLightbox.create(`
//       <img
//         src="${largeImg}"
//         alt="${altText}"
//         class="modal-map"
//       />
//     `)

//     instance.show()
//   })
// }


// import * as basicLightbox from 'basiclightbox'
// import 'basiclightbox/dist/basicLightbox.min.css'

// document.addEventListener('click', (e) => {
//   const link = e.target.closest('.map-link[data-modal]')
//   if (!link) return

//   e.preventDefault()

//   const img = link.querySelector('img[data-large]')
//   if (!img) return

//   basicLightbox
//     .create(`<img src="${img.dataset.large}" class="modal-map">`)
//     .show()
// })
console.log('SCRIPT LOADED');

import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css'


document.addEventListener('click', (e) => {
  console.log('CLICK OK');
  const link = e.target.closest('a[data-large]');
  console.log('link:', link);
  console.log('target:', e.target);
  if (!link) return  // якщо клік не по потрібному <a>, нічого не робимо

  e.preventDefault()// блокуємо стандартну поведінку href="#"

    const largeImg = link.dataset.large;// шлях до великого зображення
  const altText = link.querySelector('img')?.alt || '';// alt текст зображення
   console.log('Opening image:', largeImg);



  const instance = basicLightbox.create(
    `<img src="${largeImg}"
     alt="${altText}" class="coordinates-link">`)

  instance.show()// показуємо модальне вікно
})
