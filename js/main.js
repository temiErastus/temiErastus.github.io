$(document).ready(function(){
   
    // Owl Carousel
    $(".site-main .about-area .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive:{
            0: {
                items: 1
            },
            544: {
                items: 2
            }
        }
    })
    
    // Sticky Navigation menu
   let nav_offset_top = $(".header_area").height() + 50;
    
    function navbarFixed() {
        if($(".header_area").length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top) {
                    $(".header_area .main-menu").addClass("navbar_fixed");
                } else {
                    $(".header_area .main-menu").removeClass("navbar_fixed");
                }
            })
        }
    }
    navbarFixed();
    
          
  $("button.navbar-toggler").click(function(){
      $("#navbarNav").toggle("hide");
  });
    
    /* Get CV */
    $("#request").click(function() {
    // // hope the server sets Content-Disposition: attachment!
    window.location = 'documents/techCV.odt';
   });
    
    $("#downloadcv").click(function() {
    // // hope the server sets Content-Disposition: attachment!
    window.location = 'documents/techCV.odt';
   });
    
    /* Send to my mail */
    $("#mybutton").click(function() {
        ("#form").attr('action', 'mailto:temifolami@aol.com?subject=' + $("#txtemail").val());
        $("#form").submit();
    })
    

    
});