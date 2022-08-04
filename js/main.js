
    $(document).ready(function(){
      $('.slider__box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode:true,
        lazyLoad: 'ondemand',
        centerPadding: 14,
        responsive: [
          {
            breakpoint: 811,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });

    let s = new Date(2022, 07, 03, 11);
console.log(s);

    });
