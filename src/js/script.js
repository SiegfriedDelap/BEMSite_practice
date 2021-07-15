window.addEventListener('DOMContentLoaded', ()=> {

//SLIDER

    const slider = tns({
        items: 1,
        slideBy: 'page',
        autoplay: false,
        container: '.carousel__inner',
        controls: false,
        nav: false
    });
     
    document.querySelector('.prev').addEventListener('click', () => {
        slider.goTo('prev');
        console.log(123);
    });
    
    document.querySelector('.next').addEventListener('click', () => {
        slider.goTo('next');
    });


//TABS
    
$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

//CARD INFO

function toggleSlide(className) {

    $(className).each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
            $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
        });
    });
};

toggleSlide(".catalog-item__link");
toggleSlide(".catalog-item__back");

//Modal

$('[data-modal=consultation]').on('click', function(){
    $('.overlay, #consultation').fadeIn('slow');
});

$('.modalwindow__close').on('click', function(){
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
});

$('.button_buy').each(function(i){
    $(this).on('click', function(){
        $('#order .modalwindow__descr').text($('.catalog-item__subtitle').eq(i).text()); //вытаскиваем текст из любой карты товара
        $('.overlay, #order').fadeIn('slow');
    });
});

// Validate

function validateForms(form){
    $(form).validate({
        rules:{
            name:"required",
            phone:"required",
            email:{
                required:true,
                email: true
            }
        },
        messages: {
            name:"Пожалуйста, введите свое имя",
            phone:"Пожалуйста, введите свой номер телефона",
            email:{
                required:"Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
            }
        }
    });
};

validateForms('#consultation-form');
validateForms('#consultation form');
validateForms('#order form');

//MASK FOR INPUT

$('input[name="phone"]').mask("+7 (999) 999-99-99");


//EMAIL SENDING

$('form').submit(function(e){
    e.preventDefault();
    $.ajax({
        type: 'POST',
        url: 'mailer/smart.php',
        data: $(this).serialize()
    }).done(function(){
        $(this).find('input').val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});

});
//$ получение класса Slick Slider

// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 1000,
//         swipe: false,
//         swipeToSlide: false,
//         autoplay: false,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"> <img src="../icons/left_arrow.png"> </button>',
//         nextArrow: '<button type="button" class="slick-next"> <img src="../icons/right_arrow.png"> </button>',
//         responsive: [
//             {    
//             //от нуля до 1024, выше этого значения код выше
//                 breakpoint: 992,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     arrows: false,
//                     swipe: true,
//                     swipeToSlide: true,
//                     autoplay: true,
//                     autoplaySpeed: 1500
//               }
//             }
//         ]
//     });
//   });