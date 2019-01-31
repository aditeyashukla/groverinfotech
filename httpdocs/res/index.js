/**
 * Created by webfoss on 2016/9/8.
 */
$(function(){
    function index_gd(){
        var $window = $(window);

        var $windowWidth = function() {
            return $window.width();
        };
        var $windowHeight = function() {
            return $window.height();
        };
        $window.fssResize(function() {
            var width = $windowWidth();
            var height = $windowHeight();

            $('.lunbo_wrap').each(function() {
                $this = $(this);
                $this.height(height).width(width);
                $this.triggerHandler("configuration", {height: height, width: width, items: {width: width}});
                $this.triggerHandler("updateSizes");
            });
            
            
           
            
            
        });
//      $('.section2').each(function() {
//          $(this).fullscreenstage({'width': 1920, 'height': 1080});
//      });
		 $('.lunbo_wrap .img_wrap').each(function() {
            
            if($(window).width()<=640){
                $(this).fullscreenstage({'width': 640, 'height': 1080});
//                   $(".home .section2 .img_wrap").eq(0).html('<img src="/en/themes/basic/skin/images/mobile01.jpg"/>');
//                   $(".home .section2 .img_wrap").eq(1).html('<img src="/en/themes/basic/skin/images/mobile03.jpg"/>');
//                   $(".home .section2 .img_wrap").eq(2).html('<img src="/en/themes/basic/skin/images/mobile02.jpg"/>')
            }else{
                $(this).fullscreenstage({'width': 1920, 'height': 1080});
            }
            $(".home .section2").css({"visibility":"visible"});
        });
        
        $(window).fssResize();
        
        //$('.banner-items').carouFredSel({'responsive': true, items: {visible: 1}, 'scroll': {'duration': 1000, 'items': 1}, 'auto': {'duration': 1000}, 'pagination': '.banner-pagination'});
       
       
       
       if($(window).width()<=640){
           home_banner_slider('.mobile_lunbo');
        }else{
            home_banner_slider('.pc_lunbo');
        }
       
       
      function home_banner_slider(slider){
          $(slider).carouFredSel({
	        responsive: true,
                items: {
                        visible: 1
                },
                scroll: {
                        duration: 1000, items: 1,'fx': 'crossfade'
                }, 
                 swipe:{
                        onTouch:true
                },
                auto: {
                        duration: 1200
                },
//			auto:true,
                pagination: '.banner-pagination'

            });
      } 
       

	    
	    
       $(window).fssResize(); 

         $('html').css({height:"100%"});
    };

    index_gd();
    //$('.swiper-chose').carouFredSel({'responsive': true, items: {visible: 1}, 'scroll': {'duration': 1000, 'items': 1}, 'auto': {'duration': 1000}, 'pagination': '.icon'});

});
