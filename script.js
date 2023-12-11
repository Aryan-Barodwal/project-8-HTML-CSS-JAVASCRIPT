
let btn = document.getElementById('heading-one');
let paraOn = document.getElementById('onclick-text-appear');  //by default

// let icon = document.getElementsByClassName('.ri-add-line');

paraOn.style.display = 'none';


btn.addEventListener("click", function myfunction() {
    if (paraOn.style.display != 'none') {
        paraOn.style.display = 'none';
    } else {
        paraOn.style.display = 'block';
    }
});


let btn1 = document.getElementById('heading-two');
let paraOn1 = document.getElementById('onclick-text-appear-2');  //by default
paraOn1.style.display = 'none';

btn1.addEventListener("click", function myfunction() {
    if (paraOn1.style.display != 'none') {
        paraOn1.style.display = 'none';
    } else {
        paraOn1.style.display = 'block';
    }
});


let btn3 = document.getElementById('heading-three');
let paraOn3 = document.getElementById('onclick-text-appear-3');  //by default
paraOn3.style.display = 'none';

btn3.addEventListener("click", function myfunction() {
    if (paraOn3.style.display != 'none') {
        paraOn3.style.display = 'none';
    } else {
        paraOn3.style.display = 'block';
    }
});

let btn4 = document.getElementById('heading-four');
let paraOn4 = document.getElementById('onclick-text-appear-4');  //by default
paraOn4.style.display = 'none';

btn4.addEventListener("click", function myfunction() {
    if (paraOn4.style.display != 'none') {
        paraOn4.style.display = 'none';
    } else {
        paraOn4.style.display = 'block';
    }
});


let btn5 = document.getElementById('heading-five');
let paraOn5 = document.getElementById('onclick-text-appear-5');  //by default
paraOn5.style.display = 'none';

btn5.addEventListener("click", function myfunction() {
    if (paraOn5.style.display != 'none') {
        paraOn5.style.display = 'none';
    } else {
        paraOn5.style.display = 'block';
    }
});


let btn6 = document.getElementById('heading-six');
let paraOn6 = document.getElementById('onclick-text-appear-6');  //by default
paraOn6.style.display = 'none';
// let icon = document.querySelector('.ri-add-line'); 

btn6.addEventListener("click", function myfunction() {
    if (paraOn6.style.display === 'block') {
        paraOn6.style.display = 'none';
    } else {
        paraOn6.style.display = 'block';
    }

});


// button transform



let btn11 = document.getElementById('heading-one');
let icon = document.querySelector('.ri-add-line');

btn11.addEventListener('click', function functionICON() {
// Check if the current rotation of the icon is 'rotate(45deg)'
    if (icon.style.transform === 'rotate(45deg)') { 
        icon.style.transform = '';
    }
    else{
        icon.style.transform = 'rotate(45deg)';
    }
});


let btn132 = document.getElementById('heading-two');
let icon3 = document.getElementById('2-add-line');

btn132.addEventListener('click', function functionICON() {
// Check if the current rotation of the icon is 'rotate(45deg)'
    if (icon3.style.transform === 'rotate(45deg)') { 
        icon3.style.transform = '';
    }
    else{
        icon3.style.transform = 'rotate(45deg)';
    }
});

let btn124 = document.getElementById('heading-three');
let icon4 = document.getElementById('3-add-line');

btn124.addEventListener('click', function functionICON() {
// Check if the current rotation of the icon is 'rotate(45deg)'
    if (icon4.style.transform === 'rotate(45deg)') { 
        icon4.style.transform = '';
    }
    else{
        icon4.style.transform = 'rotate(45deg)';
    }
});

let btn125 = document.getElementById('heading-four');
let icon5 = document.getElementById('4-add-line');

btn125.addEventListener('click', function functionICON() {
// Check if the current rotation of the icon is 'rotate(45deg)'
    if (icon5.style.transform === 'rotate(45deg)') { 
        icon5.style.transform = '';
    }
    else{
        icon5.style.transform = 'rotate(45deg)';
    }
});

let btn126 = document.getElementById('heading-five');
let icon6 = document.getElementById('5-add-line');

btn126.addEventListener('click', function functionICON() {
// Check if the current rotation of the icon is 'rotate(45deg)'
    if (icon6.style.transform === 'rotate(45deg)') { 
        icon6.style.transform = '';
    }
    else{
        icon6.style.transform = 'rotate(45deg)';
    }
});

let btn127 = document.getElementById('heading-six');
let icon7 = document.getElementById('6-add-line');

btn127.addEventListener('click', function functionICON() {
// Check if the current rotation of the icon is 'rotate(45deg)'
    if (icon7.style.transform === 'rotate(45deg)') { 
        icon7.style.transform = '';
    }
    else{
        icon7.style.transform = 'rotate(45deg)';
    }
});


// let btn112 = document.getElementsByClassName('.heading-1111');
// let icon1 = document.querySelector('.ri-add-line');

// btn112.addEventListener('click', function functionICON() {

//     if (icon1.style.transform === 'rotate(45deg)') { // Check if the current rotation of the icon is 'rotate(45deg)'
//         icon1.style.transform = '';
//     }
//     else{
//         icon1.style.transform = 'rotate(45deg)';
//     }
// });



//
// by truthy and falsy in JS

// let btn11 = document.getElementById('heading-one');
// let icon = document.querySelector('.ri-add-line');
// let rotated = false;

// btn11.addEventListener('click', function functionICON() {
//   if (!rotated) {
//     icon.style.transform = 'rotate(45deg)';
//   } else {
//     icon.style.transform = 'none'; // or 'rotate(0deg)' for consistency
//   }
//   rotated = !rotated;
// });








