
// variables
var images = document.querySelectorAll('.image');
var mainImage = document.querySelector('#main-image img');

// functions
function enlargeImage(e) {
    // change image source
    mainImage.src = e.target.src;

    // fade-in main image
    mainImage.classList = "fade-in";

    // remove fade-in class
    setTimeout(function() {
        mainImage.classList.remove("fade-in");
    }, 500)
}

// Event Listeners
// image event listener
images.forEach( image => {
    image.addEventListener("click", enlargeImage);
})