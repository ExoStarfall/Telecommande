"user strict";

// j'écoute l'évènement "click" de la première touche de ma télécommande
document
  .querySelector("main > ul > li:nth-of-type(1)")
  .addEventListener("click", (event) => {
    let bruit = new Audio("Cat-meow-audio-clip.mp3"); // je créé un objet audio appelé "bruit"
    bruit.play(); // je joue ce bruit
  });

// même chose avec les autres touches de ma télécommande

document
  .querySelector("main > ul > li:nth-of-type(2)")
  .addEventListener("click", (event) => {
    let bruit = new Audio("poussin.mp3");
    bruit.play();
  });

document
  .querySelector("main > ul > li:nth-of-type(3)")
  .addEventListener("click", (event) => {
    let bruit = new Audio("Sonette velo.mp3");
    bruit.play();
  });

document
  .querySelector("main > ul > li:nth-of-type(4)")
  .addEventListener("click", (event) => {
    let bruit = new Audio("train.mp3");
    bruit.play();
  });

document
  .querySelector("main > ul > li:nth-of-type(5)")
  .addEventListener("click", (event) => {
    let bruit = new Audio("fireplace.mp3");
    bruit.play();
  });
document
  .querySelector("main > ul > li:nth-of-type(6)")
  .addEventListener("click", (event) => {
    let bruit = new Audio("wavebig.mp3");
    bruit.play();
  });
