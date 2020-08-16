const dogImage = document.querySelector('.dog-image')

function changePhoto () {
    if (window.innerWidth <= 870) {
        dogImage.setAttribute('src', 'images/pictures/dog2.png')
    }  else {
        dogImage.setAttribute('src', 'images/pictures/dog.png')
    }
}

window.addEventListener("resize", changePhoto);
