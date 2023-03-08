const imageContainer = document.querySelector('.image-container');
const nextBtn = document.getElementById('right');
const backBtn = document.getElementById('left');


const image1 = './rm1.jpg';
const image2 = './rm2.jpg';
const image3 = './rm3.jpg';
const image4 = './rm4.webp';
const image5 = './rm5.webp';


const imageArray = [
    image1,
    image2,
    image3,
    image4,
    image5
];

let currentImage = document.createElement('img');
let i = 0;

currentImage.setAttribute('src', image1);
imageContainer.appendChild(currentImage);

nextBtn.addEventListener('click', () => {
    i++;
    currentImage.setAttribute('src', imageArray[i]);
    imageContainer.appendChild(currentImage);
    console.log(imageContainer);
    if (i >= imageArray.length - 1) {
        currentImage.setAttribute('src', imageArray[imageArray.length - 1]);
        imageContainer.appendChild(currentImage);
    }



})

backBtn.addEventListener('click', () => {
    i--;
    if (i >= 0 && (i <= imageArray.length - 1)) {
        currentImage.setAttribute('src', imageArray[i]);
        imageContainer.appendChild(currentImage);
    } else if (i < 0) {
        currentImage.setAttribute('src', imageArray[0]);
        imageContainer.appendChild(currentImage);


    }


})