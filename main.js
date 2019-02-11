$(document).ready(function(){

  /**
   * Welcome animation
  */
  $('#welcome img').addClass('show');

  setTimeout(function(){
    $('#welcome img').removeClass('show');
    $('#welcome').addClass('show');
  },3000);


  /**
   * Materialize Inizialization
   */
  $('.sidenav').sidenav(
    { edge: 'right'}
  );

  /**
   * Slider animations
   */
  $('.slider-work').slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev custom-arrow"><i class="material-icons medium">keyboard_arrow_left</i></button>',
    nextArrow: '<button type="button" class="slick-next custom-arrow"><i class="material-icons medium">keyboard_arrow_right</i></button>',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]

  });

  /**
   * Scroll to section
   */
  $('.scroll-to').click(function(){
    $("html, body").animate({ scrollTop: $( $(this).data('section') ).offset().top }, 1000);
  });

});