import { DOM } from './modules/DOM';
import Woman from './modules/Woman';
import * as View from './modules/View';
import './styles.css';

// set ID's to all the links

View.renderLoader(document.body);

window.addEventListener('load', () => {
  DOM.container.classList.add('gallery-container-visible');
  View.clearLoader();
});

const setIDs = links => {
  let id = 0;
  links.forEach(link => link.id = id++);
}
setIDs(DOM.links);



// state to monitor current woman clicked
const state = {};



const renderInfo = async event => {
  event.preventDefault();
  const link = event.target.closest('.item__link');

  if(link) {
    const id = parseInt(link.id);
    const img = event.target.closest('.gallery__item').children.item(0).src;

    state.woman = new Woman(id);

    try {

      // loader here

      View.renderLoader(document.body);

      await state.woman.getResults();

      View.clearLoader(document.body);

      View.showModal();


      DOM.name.innerHTML = state.woman.name;
      DOM.info.innerHTML = state.woman.info;
      DOM.quote.innerHTML = state.woman.quote;
      DOM.quoteContainer.style.backgroundImage = `url('${img}')`; 

    } catch(e) {
      alert('Ooops there\'s an error. Try again (:');
    }
  } 
}


DOM.container.addEventListener('click', renderInfo);
DOM.modal.addEventListener('click', ({target}) => {
  if(target === DOM.modal) View.hideModal();
})
DOM.close.addEventListener('click', View.hideModal);
