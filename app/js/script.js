hello();

const body = document.querySelector('body');
const container = document.querySelector('.container');
const new_js = document.querySelector('.new_js');

const burger = document.querySelector('.burger__menu');
const headerMenu = document.querySelector('.hm');
const headerLinkAll = document.querySelectorAll('.menu__item');

burger.addEventListener('click', function(){
	headerMenu.classList.toggle('active')
})


headerLinkAll.forEach(function(item){
item.addEventListener('click', function(){
	headerMenu.classList.remove('active')
})
})