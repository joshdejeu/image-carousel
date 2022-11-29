//ClassName returns an Array
var btnLeft = document.getElementsByClassName('btn')[0];
var btnRight = document.getElementsByClassName('btn')[1];

//Card container
//GetElementById is NOT an array
var cardContainer = document.getElementById('card_container');

//Adding click event listeners
btnLeft.addEventListener('click',()=>{
    cardContainer.scrollLeft -= 200;
});

btnRight.addEventListener('click',()=>{
    cardContainer.scrollLeft += 200;
});