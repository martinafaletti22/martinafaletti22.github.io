const caruselSlide = document.querySelector('.carusel__slide');
const caruselImages = document.querySelectorAll ('.carusel__slide img');

//botones

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//contador

let counter = 1;
const size = caruselImages[0].clientWidth;

caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//pasan las fotos

nextBtn.addEventListener('click', ()=>{
    if (counter >= caruselImages.length - 2) return;
    caruselSlide.style.transition = "transform 1s ease-in-out";
    counter++;
    caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    caruselSlide.style.transition = "transform 1s ease-in-out";
    counter--;
    caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    
});

//vuelven a empezar las fotos

caruselSlide.addEventListener('transitionend', () => {
    if (caruselImages[counter].id === 'lastClone') {
        caruselSlide.style.transition = "none";
        counter = caruselImages.length -2;
        caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (caruselImages[counter].id === 'firstClone') {
        caruselSlide.style.transition = "none";
        counter = caruselImages.length - counter;
        caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
})