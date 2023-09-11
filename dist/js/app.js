// Слайдер тарифы // Слайдер тарифы // Слайдер тарифы

let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  speed: 700,
  spaceBetween: 87,
  slidesPerView: "3",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button_next',
    prevEl: '.swiper-button_prev',
  }
});


let swiper_portfolio = new Swiper('.mySwiper_portfolio', {

  loop: true,
  slidesPerView: "2",
  spaceBetween: "101",
  speed: 1100,
  navigation: {
    nextEl: '.swiper-button_next-folio',
    prevEl: '.swiper-button_prev-folio',
  }

  
});








addEventListener("DOMContentLoaded", (  ) => {


let anchors1 = document.querySelector('.scrollbar_item-1');
let anchors2 = document.querySelector('.scrollbar_item-2');
let anchors3 = document.querySelector('.scrollbar_item-3');
let anchors4 = document.querySelector('.scrollbar_item-4');
let anchors5 = document.querySelector('.scrollbar_item-5');






// Навешивание класса active на активный scrollbar_item

function toggleActiveClass(event) {

  let links = document.querySelectorAll('.scrollbar_item');
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
    event.target.classList.add('active');
  }


  
}





// Навешивание класса open на open-menu

  

  document.querySelector('.open-menu').addEventListener('click', function(){
    document.querySelector('.header').classList.toggle('open');
  })
  



 

// инициализация полноэкранного скролла
        new fullpage('#fullpage', {
          
          navigation:true

        });


const observer = new MutationObserver(mt => {

  const head1 = document.querySelector('.fp-right a[href="#head1"]')
  const head2 = document.querySelector('.fp-right a[href="#head2"]')
  const head3 = document.querySelector('.fp-right a[href="#head3"]')
  const head4 = document.querySelector('.fp-right a[href="#head4"]')
  const head5 = document.querySelector('.fp-right a[href="#head5"]')



  if (head1.classList.contains('active')) {

    anchors1.classList.add('active')
    anchors2.classList.remove('active')
    
 

  }else{
    anchors1.classList.remove('active')
    anchors2.classList.add('active')
  } 

  if (head3.classList.contains('active')) {

    anchors3.classList.add('active')
    

  }else{
    anchors3.classList.remove('active')
  }

  if (head4.classList.contains('active')){

    anchors4.classList.add('active');
  }else{
    
    anchors4.classList.remove('active');
  }

  if (head5.classList.contains('active')){

    anchors5.classList.add('active');
    anchors4.classList.remove('active')
    anchors3.classList.remove('active')
    anchors3.classList.remove('active')
  }else{
    
    anchors5.classList.remove('active');
  }

})

const o = document.querySelector('.fp-right')
const config = {
  childList: true,
  subtree: true,
  attributes: true,
  attributeFilter: ['class']
}
observer.observe(o, config)










// Маски для формы

// При нажатии в любом месте курсор встаёт в начало  строки


$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};


$(function(){

  $("#af_tel").click(function(){

    $(this).setCursorPosition(2);

  }).mask("8(999) 999-99-99" ,{autoclear: false});


  $("#af_budget").mask("9?99", {
    completed: function(){ document.querySelector('.af_budget_mask').style.display = "block" }
  });
});


// Валидация формы

$("#form_validation").validate({
  rules:{
    name:{
      minlength: 2
    }
  },
  messages:{
        name:{
          minlength:"Минимальная длина 2 символа"
        }
  },

  submitHandler: function(form) {
    form.submit();
  }
 });  



});

