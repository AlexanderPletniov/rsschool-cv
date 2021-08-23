const slideContainer = document.querySelector('.slide-container');// левый, правый, кнопки

const slideRight = document.querySelector('.right-slide');//массив из правых слайдов (div)
const slideLeft = document.querySelector('.left-slide'); //массив из левых слайдов (div)

const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const slidesLength = slideLeft.querySelectorAll('div').length; // количество div в массиве slideLeft(4)

let activeSliderIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upBtn.addEventListener('click', () => changeSlide('up'));

downBtn.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = slideContainer.clientHeight;
    
    if (direction ==='up') {
       activeSliderIndex = (activeSliderIndex + 1) % slidesLength;
    }
    if (direction ==='down') {
        activeSliderIndex = Math.abs((activeSliderIndex - 1 + slidesLength) % slidesLength);
    }
    slideRight.style.transform = `translateY(-${activeSliderIndex * sliderHeight}px)`;
    slideLeft.style.transform = `translateY(${activeSliderIndex * sliderHeight}px)`;
};