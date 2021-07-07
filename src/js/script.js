'use strict';

//$ получение класса

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        swipe: false,
        swipeToSlide: false,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"> <img src="../icons/left_arrow.png"> </button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="../icons/right_arrow.png"> </button>',
        responsive: [
            {    
            //от нуля до 1024, выше этого значения код выше
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    swipe: true,
                    swipeToSlide: true,
                    autoplay: true,
                    autoplaySpeed: 1500
              }
            }
        ]
    });
  });
