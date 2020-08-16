const dogImage = document.querySelector('.dog-image')

// when the page is loaded
if (window.innerWidth <= 870) {
    dogImage.setAttribute('src', 'images/pictures/dog2.png')
}  else {
    dogImage.setAttribute('src', 'images/pictures/dog.png')
}


// if the page is resized
function changePhoto () {
    if (window.innerWidth <= 870) {
        dogImage.setAttribute('src', 'images/pictures/dog2.png')
    }  else {
        dogImage.setAttribute('src', 'images/pictures/dog.png')
    }
}

window.addEventListener("resize", changePhoto);
