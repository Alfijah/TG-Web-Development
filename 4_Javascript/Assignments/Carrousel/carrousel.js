
//define variables
const imageContainer = document.querySelector('.image_slides');
const slides = Array.from(imageContainer.children);

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');

const navDots = document.querySelector('.container_nav_dots');
const dot = Array.from(navDots.children);


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
// console.log(setSlidesPosition);

const moveToSlide = (imageContainer, currentSlide, targetSlide) => {
    imageContainer.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
}

const moveDots = (currentNavDot, targetDot) => {
    currentNavDot.classList.remove('current_slide');
    targetDot.classList.add('current_slide');
}

const visibilityArrows = (slides, leftArrow, rightArrow, targetIndex) => {
    if (targetIndex === 0) {
        leftArrow.classList.add('hide_arrow');
        rightArrow.classList.remove('hide_arrow');
    } else if (targetIndex === slides.length -1) {
        leftArrow.classList.remove('hide_arrow');
        rightArrow.classList.add('hide_arrow');
    } else {
        leftArrow.classList.remove('hide_arrow');
        rightArrow.classList.remove('hide_arrow');
    }
}


//click left, move slides to the left
leftArrow.addEventListener('click', e => {
    const currentSlide = imageContainer.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = navDots.querySelector('.current_slide');
    const previousDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    //move to the previous slide
    moveToSlide(imageContainer, currentSlide, prevSlide);
    moveDots(currentDot, previousDot);
    visibilityArrows(slides, leftArrow, rightArrow, prevIndex);
})


//click right, move slides to the right
rightArrow.addEventListener('click', e => {
    const currentSlide = imageContainer.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = navDots.querySelector('.current_slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    // const amountToMove = nextSlide.style.left;
    // console.log(amountToMove);

    //move to the next slide

    // imageContainer.style.transform = 'translateX(-' + amountToMove + ')';
    // currentSlide.classList.remove('current_slide');
    // nextSlide.classList.add('current_slide');

    moveToSlide(imageContainer, currentSlide, nextSlide);
    moveDots(currentDot, nextDot);
    visibilityArrows(slides, leftArrow, rightArrow, nextIndex);
})


//click on a nav dot, move to that slide
navDots.addEventListener('click', e => {
    //current dot clicked on
    const targetDot = e.target.closest('.nav_dots');
    console.log(targetDot);
    if (!targetDot) return;

    const currentSlide = imageContainer.querySelector('.current_slide');
    const currentNavDot = navDots.querySelector('.current_slide');
    const targetIndex = dot.findIndex(d => d === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(imageContainer, currentSlide, targetSlide);
    moveDots(currentNavDot, targetDot);
    visibilityArrows(slides, leftArrow, rightArrow, targetIndex)
})