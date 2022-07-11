// //Slider
const prev = document.getElementById('btn-prev')
      next = document.getElementById('btn-next')
      slides = document.querySelectorAll('.slide')
      dots = document.querySelectorAll('.dot')
      slidesWrap = document.querySelectorAll('.slider-wrapper');

let index = 0;

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const preperCurrentSlides = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        preperCurrentSlides(index);

    } else {
        index++;
        preperCurrentSlides(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        preperCurrentSlides(index);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 3000);

//Acordeon

var acordion = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acordion.length; i++) {
  acordion[i].addEventListener("click", function() {
    this.classList.toggle("active-acordion");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var acordionFooter = document.getElementsByClassName("accordion-footer");
var i;

for (i = 0; i < acordionFooter.length; i++) {
  acordionFooter[i].addEventListener("click", function() {
    this.classList.toggle("active-acordion-footer");
    var panelfooter = this.nextElementSibling;
    if (panelfooter.style.display === "block") {
      panelfooter.style.display = "none";
    } else {
      panelfooter.style.display = "block";
    }
  });
}

//Preloader

const mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 1000);
});

// burger menu

const btnOpen = document.getElementById('burger-header');
const btnClose = document.getElementById('burger-window__btn');
const burgerWrapp = document.getElementById('burger-header-main');


btnOpen.addEventListener('click', () => {
    burgerWrapp.classList.add('active-burger');
})

const closeModel = () => {
    burgerWrapp.classList.remove('active-burger');
}

burgerWrapp.addEventListener('click', closeModel);

for (let burgerWindow of burgerWrapp.children) {
    burgerWindow.addEventListener('click', event => {
        event.stopPropagation();
    })
}

btnClose.addEventListener('click', closeModel);

//Form search

let search = document.querySelector('.button-search');
let formSearch = document.querySelector('.form-search-game');


search.addEventListener('click',() => {
    formSearch.classList.add('active-search');
});
let closeForm = () => {
    formSearch.classList.remove('active-search');
}

formSearch.addEventListener('click', closeForm);
