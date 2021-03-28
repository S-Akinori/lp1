// const swiper = new Swiper('.swiper-container', { 
//     // Optional parameters
//     // loop: true,
    
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

  $(function() {
      var $header = $('header');
      var $win = $(window);
      var $cloneHeader = $header.clone().addClass('fixed-header').appendTo('body');
      var showClass = 'is-show';

      $win.on('load scroll', function() {
          var value = $(this).scrollTop();
          var triggerPos = 300;
          if(value > triggerPos) {
              $cloneHeader.addClass(showClass);
          } else {
              $cloneHeader.removeClass(showClass)
          }
      })

      var $scrollTop = $('#scrollTop');
      $scrollTop.on('click', function() {
          $('body, html').animate({scrollTop: 0}, 500);
      })
  });