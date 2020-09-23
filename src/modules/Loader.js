export default class Loader {
  constructor(parent = document.body) {
    this.parent = parent;
    
    // requires corresponding CSS    
    this.loader = document.createElement('div');
    this.loader.classList.add('loader-container');
    this.loader.innerHTML = `
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
      </div>`;
  }
  
  
  start() {
    this.parent.appendChild(this.loader);
  }
  
  destroy() {
    if(this.loader) this.parent.removeChild(this.loader);
  }
}