'use strict';

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const firstPerson = document.querySelector(".first-person");
const secondPerson = document.querySelector(".second-person");
const imgTwo = document.querySelector(".img-two");
const imgs = document.querySelector('.imgs');


next.addEventListener('click', function() {

    if(firstPerson.classList.contains('hidden')){
        firstPerson.classList.remove('hidden');
        secondPerson.classList.add('hidden');
        imgs.src = '/images/image-tanya.jpg';
        
    }else {
        firstPerson.classList.add('hidden');
        secondPerson.classList.remove('hidden');
        imgs.src = '/images/image-john.jpg';
    }
});


prev.addEventListener('click', function() {
    if(firstPerson.classList.contains('hidden')){
        firstPerson.classList.remove('hidden');
        secondPerson.classList.add('hidden');
        imgs.src = '/images/image-tanya.jpg';
        
    }else {
        firstPerson.classList.add('hidden');
        secondPerson.classList.remove('hidden');
        imgs.src = '/images/image-john.jpg';
    }
});