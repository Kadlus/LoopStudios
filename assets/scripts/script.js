function galleryResize() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 1200) {
        responsiveGallery();
    } else {
        returnGallery();
    }
}

function responsiveGallery() {
    const parentElements = document.querySelectorAll('.gallery-image');
    parentElements.forEach(parentElement => {
        const imageElement = parentElement.querySelector('img');
        const path = parentElement.querySelector('img').src;
        imageElement.src = path.replace('desktop', 'mobile');
    });
}

function returnGallery() {
    const parentElements = document.querySelectorAll('.gallery-image');
    parentElements.forEach(parentElement => {
        const imageElement = parentElement.querySelector('img');
        const path = parentElement.querySelector('img').src;
        imageElement.src = path.replace('mobile', 'desktop');
    });
}

window.addEventListener('resize', galleryResize);
galleryResize();