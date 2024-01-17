const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
let images = ['images/pic1.jpg','images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg']

/* Declaring the alternative text for each image file */
// let alt = ['Sand land','Lavendar flowers','art work','butterflies','Closeup of a human eye']
let alt = ['Closeup of a human eye', 'Rock that looks like a wave','Purple and white pansies','Section of wall from a pharoah\'s tomb','Large moth on a leaf']

/* Looping through images */
index = 0;
for(xxx of images){ 
    const newImage = document.createElement('img');
    newImage.setAttribute('src', xxx);
    newImage.setAttribute('alt', alt[index]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
    index++
}

/* Wiring up the Darken/Lighten button */

function toggleLightDark(){
    overlayImg = document.getElementsByClassName('overlay')[0]
    overlayImg.classList.toggle('dark-view')
}