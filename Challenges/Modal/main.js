import {modalContent, renderModal } from './popup.js'

//De DOMContentLoadedgebeurtenis wordt geactiveerd wanneer het oorspronkelijke HTML-document volledig is geladen en geparseerd, zonder te wachten tot stylesheets, afbeeldingen en subframes zijn geladen.

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.button_cat').addEventListener('click', (event) => {
      renderModal();
      modalContent.innerText = "Miauw! Greetings from cat";
    });
    document.querySelector('.button_dog').addEventListener('click', (event) => {
      renderModal();
      modalContent.innerText = "Bark! Greetings from dog";
    });
    document.querySelector('.button_parrot').addEventListener('click', (event) => {
      renderModal();
      modalContent.innerText = "I have my own opinion, Laura! Greetings from parrot";
    });
  });
  
  
 