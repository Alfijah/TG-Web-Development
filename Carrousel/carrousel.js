let slideIndex = 1;
showImages(slideIndex);

function slideArrow(n) {
    showImages(slideIndex += n);
}

function showImages(n) {
    let i;
    let image = document.getElementsByClassName('images');
    if (n > image.length) {slideIndex = 1}
    if (n < 1) {slideIndex = image.length};
    for (i = 0; i < image.length; i++) {
        image[i].style.display = 'none';
    }
    image[slideIndex-1].style.display = 'block';
}