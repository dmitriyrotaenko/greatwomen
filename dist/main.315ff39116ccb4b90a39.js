!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t,o){},function(e,t,o){"use strict";o.r(t);const n={container:document.querySelector(".gallery-container"),modalContainer:document.querySelector(".modal__container"),modal:document.querySelector(".gallery__modal"),modalContent:document.querySelector(".modal__content"),close:document.querySelector(".modal__close"),name:document.querySelector(".modal__name"),info:document.querySelector(".modal__info"),quote:document.querySelector(".quote__content"),quoteContainer:document.querySelector(".modal__quote"),links:[...document.querySelectorAll(".item__link")]};class r{constructor(e){this.id=e}async getResults(){const e=await fetch("https://jsonstorage.net/api/items/79b8af27-5ede-4dbb-b360-c3a63116849d").then(e=>e.json());this.results=e,this.name=this.results.women[this.id].name,this.info=this.results.women[this.id].info,this.quote=this.results.women[this.id].quote}}const a="loader-container",i=()=>{n.modal.classList.add("gallery__modal-hidden"),n.modal.addEventListener("animationend",()=>{["gallery__modal-hidden","gallery__modal-visible"].forEach(e=>n.modal.classList.remove(e)),n.modalContent.scrollTop=0,n.modalContainer.scrollTop=0})},l=e=>{e.insertAdjacentHTML("afterbegin",'\n    <div class="loader-container">\n    <div class="loader">\n    <div class="box box-1"></div>\n    <div class="box box-2"></div>\n    <div class="box box-3"></div>\n    <div class="box box-4"></div>\n    <div class="box box-5"></div>\n    <div class="box box-6"></div>\n    <div class="box box-7"></div>\n    <div class="box box-8"></div>\n    <div class="box box-9"></div>\n  </div>\n    </div>\n  ')},d=()=>{const e=document.querySelector(`.${a}`);e&&e.parentNode.removeChild(e)};o(0);l(document.body),window.addEventListener("load",()=>{n.container.classList.add("gallery-container-visible"),d()});(e=>{let t=0;e.forEach(e=>e.id=t++)})(n.links);const s={};n.container.addEventListener("click",async e=>{e.preventDefault();const t=e.target.closest(".item__link");if(t){const o=parseInt(t.id),a=e.target.closest(".gallery__item").children.item(0).src;s.woman=new r(o);try{l(document.body),await s.woman.getResults(),d(document.body),n.modal.classList.add("gallery__modal-visible"),n.name.innerHTML=s.woman.name,n.info.innerHTML=s.woman.info,n.quote.innerHTML=s.woman.quote,n.quoteContainer.style.backgroundImage=`url('${a}')`}catch(e){alert("Ooops there's an error. Try again (:")}}}),n.modal.addEventListener("click",({target:e})=>{e===n.modal&&i()}),n.close.addEventListener("click",i)}]);