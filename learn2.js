/* 1-Variables */
const fileInput = document.querySelector('.rfile');
const widthInput = document.querySelector('.rwidth--width');
const heightInput = document.querySelector('.rwidth--height');
const aspectToggle = document.querySelector('.rcheck');
const canvas = document.querySelector('.rcanvas');
const canvasCtx = canvas.getContext('2d');

let activeImage, originalWidthToHeightRatio;

/* 2-Functions*/
fileInput.addEventListener('change', e => {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
        openImage(reader.result);
    });

    reader.readAsDataURL(e.target.files[0]);
});

widthInput.addEventListener('change', () => {
    if(!activeImage) return;

    resize(widthInput.value, heightInput.value)
});
heightInput.addEventListener('change', () => {
    if(!activeImage) return;

    resize(widthInput.value, heightInput.value)
});


function openImage(imageSrc) {
    activeImage = new Image();

    activeImage.addEventListener('load', () => {
        originalWidthToHeightRatio = activeImage.width / activeImage.height;

        resize(activeImage.width, activeImage.height);
     });
    activeImage.src = imageSrc
}

function resize(width, height) {
    canvas.width = width;
    canvas.height = height;
    widthInput.value = width;
    heightInput.value = height;

    canvasCtx.drawImage(activeImage, 0, 0, width, height);
}

