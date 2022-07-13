import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");




const createEl = () => {
    const galleryArr = galleryItems.map(({ preview, original,description}) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="large-image.jpg">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </div>`
    }).join("")
    return galleryArr;
}

const imgArr = createEl();

galleryEl.insertAdjacentHTML('afterbegin', imgArr);


galleryEl.addEventListener("click", onGallaryClick)

function onGallaryClick(event){
    event.preventDefault();
    if(event.target.tagName !== 'IMG'){
        return
    } 
    
    const instance = basicLightbox.create(`
    <img
      class="gallery__image"
      src=${event.target.dataset.source}
      alt=${event.target.getAttribute("alt")}
    />
`)
instance.show()

}
