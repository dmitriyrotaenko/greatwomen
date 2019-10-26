import { DOM } from './DOM';


const DOMstrings = {
  loader: 'loader-container'
}


export const showModal = () => {
  DOM.modal.classList.add('gallery__modal-visible');
}

export const hideModal = () => {
  DOM.modal.classList.add('gallery__modal-hidden');
  DOM.modal.addEventListener('animationend', () => {
    ['gallery__modal-hidden','gallery__modal-visible'].forEach(cl => DOM.modal.classList.remove(cl));
    DOM.modalContent.scrollTop = 0;
    DOM.modalContainer.scrollTop = 0;
  });
};


export const renderLoader = parent => {
  const loader = `
    <div class="loader-container">
    <div class="loader">
    <div class="box box-1"></div>
    <div class="box box-2"></div>
    <div class="box box-3"></div>
    <div class="box box-4"></div>
    <div class="box box-5"></div>
    <div class="box box-6"></div>
    <div class="box box-7"></div>
    <div class="box box-8"></div>
    <div class="box box-9"></div>
  </div>
    </div>
  `;

  parent.insertAdjacentHTML('afterbegin', loader);
}

export const clearLoader = () => {
  const loader = document.querySelector(`.${DOMstrings.loader}`);

  if(loader) loader.parentNode.removeChild(loader);
}
