// import { galleryItems } from './gallery-items.js';
// // Change code below this line
// const galleryEl = document.querySelector(".gallery");

// function createEl(){ 
//  return galleryItems.map((imageAdd) => 
//     `<li>
//     <a class="gallery__item"
//         href="${imageAdd.original}">
//         <img class="gallery__image" 
//         src="${imageAdd.preview}"
//             alt="${imageAdd.description}" />
//         </a>
//     </li>`).join("");
// }

// const imgArr = createEl();

// galleryEl.insertAdjacentHTML('afterbegin', imgArr);

// var lightbox = new SimpleLightbox('.gallery a',{
//     'captionsData': 'alt',
//     'captionDelay': 250
// });

import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");

function markup() {
    return galleryItems.map((imageAdd) => 
    `<li>
        <a class="gallery__item"
            href="${imageAdd.original}">
            <img class="gallery__image" 
            src="${imageAdd.preview}"
            alt="${imageAdd.description}" />
        </a>
    </li>`)
      .join("");
    }
    list.insertAdjacentHTML("afterbegin", markup(galleryItems));
console.log(galleryItems);


var lightbox = new SimpleLightbox('.gallery a',{
    'captionsData': 'alt',
    'captionDelay': 250
});
