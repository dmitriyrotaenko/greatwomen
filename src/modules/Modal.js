class Modal {
  constructor(parent = document.body) {
    this.parent = parent;

    this.modal = document.createElement('div');
    this.modal.classList.add('gallery__modal');
    this.modal.innerHTML = `
      <div class="modal__container">
        <div class="modal__quote">
          <div class="quote">
            <p class="quote__content"></p>
            <span class="quote__line"></span>
          </div>
        </div>
        <div class="modal__content">
          <h1 class="modal__name"></h1>
          <p class="modal__info"></p>
        </div>
        <button class="modal__close">
          <svg class="modal__svg" width="40" height="40" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      </div>
    `;

    this.closeBtn = this.modal.querySelector('.modal__close');
    this.closeBtn.addEventListener('click', this.close.bind(this));
    this.modal.addEventListener('click', ({target}) => {
      if(target === this.modal) this.close();
    });


    this.injectInDOM();

  }

  injectInDOM() {
    this.parent.prepend(this.modal);
  }

  show() {
    this.modal.classList.add('gallery__modal-visible');
  }

  close() {
    this.modal.classList.add('gallery__modal-hidden');
    this.modal.addEventListener('animationend', this._removeClasses.bind(this));

    this.modal.querySelector('.modal__content').scrollTop = 0;
  }

  _removeClasses() {
    this.modal.classList.remove('gallery__modal-visible', 'gallery__modal-hidden');
  }
}


export default class ModalWoman extends Modal {
  constructor(parent) {
    super(parent);
  }

  populate({name, info, quote, imgSrc}) {
    this.modal.querySelector('.modal__name').innerHTML = name;
    this.modal.querySelector('.modal__info').innerHTML = info;
    this.modal.querySelector('.quote__content').innerHTML = quote;
    this.modal.querySelector('.modal__quote').style.backgroundImage = `url(${imgSrc})`;
  }
}