$(function(){
    // 레이어팝업
    if($(window).width() > 1024){
        $(".layer_popup").addClass("on");
    }else{
        $(".layer_popup").removeClass("on");
    }

    $(window).resize(function(){
       if($(window).width() > 1024){
           $(".layer_popup").addClass("on");
       }else{
           $(".layer_popup").removeClass("on");
       }
    });

    $(".close").click(function(){
        $(".layer_popup").hide();
        return false;
    });

    
    
    // 메뉴
    $(".burger-check").click(function(){
       $(".m_p").slideToggle("slow"); 
       $(".m_t").toggleClass("on");
    });
   


    
    // 오른쪽 퀵메뉴
    var quickBox = $('.quickbox');
    var quick_top = 300;
    quickBox.css('top', $(window).height() );
    $(document).ready(function(){
        quickBox.animate( { "top": $(document).scrollTop() + quick_top +"px" },  300 ); //숫자값을 변경하면 속도변화
         $(window).scroll(function(){
          quickBox.stop();
          quickBox.animate( { "top": $(document).scrollTop() + quick_top + "px" }, 300 ); //숫자값을 변경하면 속도변화
        });
    });
    
    
    // 메인비주얼 스와이퍼
    var swiper = new Swiper('.mv .swiper-container', {
        loop: true,
        autoplay: {
                    delay: 3000
                },
        speed: 1000,
        effect: 'fade',
        pagination: {
            el: '.mv .swiper-pagination',
            },
        });
    
    
    // best 스와이퍼
    var bestTablet = undefined;
    
    function bestSwiper(){
        var screenWidth = $(window).width();
         if(screenWidth > 375 && screenWidth < 1024){
            if(bestTablet == undefined){
                 bestTablet = new Swiper(".best .swiper-container", {
                    slidesPerView: 4,
                    spaceBetween: 20,
                    loop: true,
                    navigation: {
                        nextEl: '.best .swiper-button-next',
                        prevEl: '.best .swiper-button-prev',
                    },
                    breakpoints: {
                        1024:{
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        375:{
                            slidesPerView: 4,
                            spaceBetween: 10,
                        }
                    }
                });
            }
        //console.log("swiper");
        }else if((screenWidth > 375 || screenWidth < 1024) && bestTablet != undefined){
               bestTablet.destroy();
                bestTablet = undefined;
                $(".best .swiper-wrapper").removeAttr("style");
                $(".best .swiper-slide").removeAttr("style");   
             //console.log("none");
            }    
        }

    bestSwiper();

    $(window).on('resize', function(){
        bestSwiper();
    });

});