
//define variables
const imageContainer = document.querySelector('.image_slides');
const slides = Array.from(imageContainer.children);

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

const navDots = document.querySelector('.container_nav_dots');
const dot = Array.from(navDots.children);

const firstSlide = slides[slides.length - slides.length];
const lastSlide = slides[slides.length - 1];
const firstDot = dot[dot.length - dot.length];
const lastDot = dot[dot.length - 1];

// console.log(firstSlide);
// console.log(lastSlide);
// console.log(firstDot);
// console.log(lastDot);

const slideWidth = slides[0].getBoundingClientRect().width;


//arrange slides
const setSlidesPosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidesPosition);
console.log(setSlidesPosition);


//click right, move slides to right
rightArrow.addEventListener('click', e => {
    const currentSlide = imageContainer.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    console.log(nextSlide);

    //move to the next slide
    imageContainer.style.transform = 'translateX(-' + amountToMove + ')';
})