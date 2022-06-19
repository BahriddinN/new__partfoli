

var burger = document.querySelector('.burger');
var list = document.querySelector('.list');
var nav = document.querySelector('.nav');
var int = 0;

burger.addEventListener('click', function(){
     int++;
  if (int == 1) {
    list.classList.add('active');
    nav.classList.add('active');
    burger.classList.add('active');
}
else if (int == 2 ) {
    list.classList.remove('active');
    nav.classList.remove('active');
    burger.classList.remove('active');

    int=0;
}
else{
    list.classList.remove('active');
    nav.classList.remove('active');
    burger.classList.remove('active');
}     
}
);



