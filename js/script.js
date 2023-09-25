window.addEventListener('DOMContentLoaded', () => {
   const menu = document.querySelector('.menu__item'),
   menuItem = document.querySelectorAll('.menu__link'),
   hamburger = document.querySelector('.hamburger');
   
   hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
   });

   menuItem.forEach(item => {
      item.addEventListener('click', () => {
         hamburger.classList.toggle('hamburger_active');
         menu.classList.toggle('menu_active');
      })
   });
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()
   
      const blockID = anchor.getAttribute('href').substr(1)
   
      document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
      });
   });
};


const cards = Array.from(document.querySelectorAll(".gallery__images"));
const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider__container");
const picture = Array.from(document.querySelectorAll(".gallery__pic"));
const sliderBtnLeft = document.querySelector(".slider__btn_left");
const sliderBtnRight = document.querySelector(".slider__btn_right");
const sliderClose = document.querySelector(".slider__close");

let cardIndex = -1;
let pictureFull;

for (const card of cards) {
   card.addEventListener("click", (event) => {
   event.preventDefault();
   cardIndex = cards.indexOf(card);
   pictureFull = picture[cardIndex].cloneNode();
   pictureFull.style.objectFit = "contain";
   sliderContainer.append(pictureFull);
   slider.classList.add("active");
   });
}

sliderBtnLeft.addEventListener("click", (event) => {
   event.preventDefault();
   changePicture("left");
});

sliderBtnRight.addEventListener("click", (event) => {
   event.preventDefault();
   changePicture("right");
});

function changePicture(dir) {
   if (dir === "left") {
   if (cardIndex > 0) {
      cardIndex--;
   } else {
      cardIndex = cards.length - 1;
   }
   } else if (dir === "right") {
   if (cardIndex < cards.length - 1) {
      cardIndex++;
   } else {
      cardIndex = 0;
   }
   } 
   let newPictureFull = picture[cardIndex].cloneNode();
   newPictureFull.style.objectFit = "contain";
   pictureFull.replaceWith(newPictureFull);
   pictureFull = newPictureFull;
}

sliderClose.addEventListener("click", (event) => {
   event.preventDefault();
   slider.classList.remove("active");
   pictureFull.remove();
   pictureFull.remove();
});

