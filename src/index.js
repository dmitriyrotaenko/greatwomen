import Loader from './modules/Loader';
import ModalWoman from './modules/Modal';
import Woman from './modules/Woman';
import './styles.css';
import womenData from './data/womenInitialData';


const root = document.querySelector('.gallery-container');
const loader = new Loader();
// injects hidden modal into DOM
const modal = new ModalWoman();



loader.start();

const womanTemplate = womanDetails => {
  return `
    <div data-id="${womanDetails.id}" class="gallery__item">
      <img src="${womanDetails.image}" alt="${womanDetails.name}">
      <div class="item__name">
        <div class="item__name-link">
          <a href="#" class="item__link">Подробнее</a>
        </div>
        <div class="item__name-name"><span>${womanDetails.name}</span></div>
      </div>
    </div>
  `;
}

// populating initial data such as name and images

for(let woman of womenData) {
  root.insertAdjacentHTML('beforeend', womanTemplate(woman));
}


window.addEventListener('load', () => {
  root.classList.add('gallery-container-visible');
  loader.destroy();
});

const renderInfo = async event => {
  event.preventDefault();
  const element = event.target.closest('.gallery__item');
  const link = element.querySelector('.item__link');

  if(event.target === link) {
    const id = element.dataset.id;
    const imgSrc = element.querySelector('img').src;


    let woman = new Woman(id);

    try {

      loader.start();

      const { name, info, quote } = await woman.getResults();

      loader.destroy();

      modal.show();

      modal.populate({
        name,
        info,
        quote,
        imgSrc
      });

    } catch(e) {
      console.log(e);
      alert('Ooops there\'s an error. Try again (:');
      loader.destroy();
    }
  } 
}


root.addEventListener('click', renderInfo);
