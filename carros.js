$('.limites').slick({
    rows: 2,
    slidesPerRow: 2,
    slidesToShow:1,
    slidesToScroll:1,
    mobileFirst: true,
    arrows:false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          rows: 3,
          slidesPerRow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          rows: 3,
          slidesPerRow: 4
        }
      },
      {
        breakpoint: 1280,
        settings: {
          rows: 3,
          slidesPerRow: 6
        }
      }
    ]
  });


// $(document).ready(function(){
//     $('.limites').slick({
//         slidesToShow:2,
//         slidesToScroll:2,
//         autoplay: false,
//         autoplaySpeed: 1500,
//         arrows: false,
//         dots: false,
//         pauseOnHover: true,
//         variableWidth: true,
//         responsive: [{
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 4
//             }
//         }, {
//             breakpoint: 520,
//             settings: {
//                 slidesToShow: 3
//             }
//         }]
//     });
// });