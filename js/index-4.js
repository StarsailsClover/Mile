jQuery(function () {
    var isMobile, mobile = false;
    function initBox() {
        w_width = jQuery(window).width();
        w_height = jQuery(window).height();

        $('.banner-slide,.banner-slide figure').css('height', w_height);
        setImgMax($('.banner-slide figure img'), 1920, 960, w_width, w_height);
        if (w_width <= 1024) {
            isMobile = true;
        } else if (w_width > 1024) {
            isMobile = false;
        };
        //区分手机端和平板
        if (w_width <= 740) {
            mobile = true;
        } else if (w_width > 740) {
            mobile = false;
        };
        
    };
    initBox();
    jQuery(window).resize(function () {
        initBox();
    });

    

    $(".banner-swiper").slick({
        fade: true,
        slide:".item",
        autoplay: true,
        arrows: true,
        dots: false,
        infinite: true,
        speed: 0,
        autoplaySpeed: 6000,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        prevArrow: $('.banner-prev.prev'),
        nextArrow: $('.banner-prev.next'),
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive:[
            {
                breakpoint: 1024,
                settings:{
                    speed: 600,
                    dots: true,
                    autoplay: true,
                }
            }
        ]
    });

    
    var cureentIndex = 0;
    $('.banner-swiper').init('init',function(event, slick, currentSlide, nextSlide){
        $(".banner-items").eq(0).addClass("active");
        // if(!mobile){
        //     indexBannerVideo(0);
        // }
        if(!$('.item').eq(0).find("video")[0]){
            return false;
        }
        $('.item').eq(0).find("video")[0].currentTime = 0;
        $('.item').find("video").load();
        $('.item').eq(0).find("video")[0].play();

        $(".item").first().removeClass("slick-current");
		setTimeout(function(){
			$(".item").first().addClass("slick-current");
		},300);
    })
    $('.banner-swiper').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".banner-items").eq(nextSlide).addClass("active").siblings().removeClass("active");
        // if(!mobile){
        //     indexBannerVideo(nextSlide); 
        // }
        $('.item').eq(nextSlide).find("video")[0].currentTime = 0;
        //$('.item').find("video").load();
        $('.item').eq(nextSlide).find("video")[0].play();
        cureentIndex = nextSlide;
        if(mobile){
            // $(".banner-icon").removeClass("play");
            // $(".item").find("video").fadeOut()
            //$(".video2")[0].play();
            $(".video2")[nextSlide].play();
        }
    });
    
    var offOn=false;
    $(document).on("click",".banner-play",function(){
        if(!offOn)
        {
            $(".banner-play").addClass("stop");
            $(".banner-items").addClass("pause")
            $(".banner-swiper").slick('slickPause');
            $('.item').eq(cureentIndex).find("video")[0].pause();
            offOn=true;
        }else{
            $(".banner-play").removeClass("stop");
            $(".banner-items").removeClass("pause")
            $(".banner-swiper").slick('slickPlay');
            $('.item').eq(cureentIndex).find("video")[0].play();
            offOn=false;
        }
    });

    

    $(".banner-items").click(function(){
        $('.banner-swiper').slick('slickGoTo', $(this).index());
    });
    if(mobile){
        $(".banner-icon").click(function(){
            if(!$(this).hasClass("play")){
                $(".banner-swiper").slick('slickPause');
                $(this).addClass("play");
                $(this).parents(".item").find("video").fadeIn()
                $(this).parents(".item").find("video")[0].play()
                $(this).parents(".item").find("video")[0].addEventListener("ended",function(){
                 //   $(this).parents(".item").find("video").fadeOut()
                    $(".banner-swiper").slick('slickPlay');
                    $(this).removeClass("play");
                    
                },false);
            }else{
                $(this).removeClass("play");
              //  $(this).parents(".item").find("video").fadeOut()
                $(".banner-swiper").slick('slickPlay');
            }
            
        });
    }
    

    new Swiper('.brand-swiper', {
        speed: 1000,
        slidesPerView: 1,
        spaceBetween : 30,
        loop: false,
        autoHeight: true,
        grabCursor : true,
        autoplay: false,
        // slideToClickedSlide:true,
        pagination : '.swiper-pagination',
        paginationType : 'progress',
        prevButton:'.brand-btn .prev',
        nextButton:'.brand-btn .next',
        breakpoints: { 
            750: {
                speed: 500,
                paginationType : 'bullets',
            }
        }
    });
   
    
    new Swiper('.xxswiper-container', {
        speed: 1000,
        slidesPerView: 1,
        spaceBetween : 30,
        loop: true,
        autoHeight: true,
        grabCursor : true,
        autoplay: 3000,
        autoplaySpeed: 1000,
        prevButton:'.xswiper-button-prev',
        nextButton:'.xswiper-button-next',
        pauseOnHover: false,
        pauseOnFocus: false,
        responsive:[
            {
                breakpoint: 1024,
                settings:{
                    speed: 600,
                    dots: true,
                    autoplay: true,
                }
            }
        ]
    });
    
    

    // var swiper1 = new Swiper('.xxswiper-container', {  
    //     slidesPerView: 1,  
    //     spaceBetween: 30,  
    //     loop: false,  
    //     navigation: {  
    //         nextEl: '.xxswiper-container .swiper-button-next',  
    //         prevEl: '.xxswiper-container .swiper-button-prev',  
    //     },  
    //     pagination: {  
    //         el: '.swiper1 .swiper-pagination',  
    //         clickable: true,  
    //     },  
    //     autoplay: {  
    //         delay: 3000,  
    //         disableOnInteraction: false,  
    //     },  
    //     // 其他配置项...  
    // });  



    // setTimeout(function(){
    //     const video = document.getElementById('ivideo');
    // video.pause();
    // },100)

    // var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "100%"}});

    // new ScrollMagic.Scene({triggerElement: ".home-iphone"})
    // .setTween(".imove", {y: "20%", ease: Linear.easeNone})
    // .addTo(controller);

    // var offOn = true
    // ScrollTrigger.create({
    //     trigger: ".home-iphone",
    //     start: "top top",
    //     end: "bottom 100%",
    //     onEnter: function() {
    //         $(".iphone-hide").addClass("show");
    //         $(".iphone-text").addClass("show");
    //         $(".ivideo")[0].play();
    //         if($(".iphone-hide .ivideo").css('display') == 'block'){
    //             $(".iph-iconfont").addClass("play")
    //         }
            
    //     }, // 滚动到进入
    //     onLeave: () => {
    //         $(".iphone-hide").removeClass("show"); 
    //         $(".iphone-text").removeClass("show");
    //         $(".ivideo")[0].pause();
    //         $(".iph-iconfont").removeClass("play")
    //     }, // 滚动到退出
    //     onEnterBack: () => {
    //         $(".iphone-hide").addClass("show");
    //         $(".iphone-text").addClass("show");
    //         $(".ivideo")[0].play();
    //         if($(".iphone-hide .ivideo").css('display') == 'block'){
    //             $(".iph-iconfont").addClass("play")
    //         }
    //     }, // 滚动到进入位置
    //     onLeaveBack: () => {
    //         $(".iphone-hide").removeClass("show"); 
    //         $(".iphone-text").removeClass("show");
    //         $(".iph-iconfont").removeClass("play")
    //         $(".ivideo")[0].pause();
    //     }, // 滚动到退出位置
    //     onUpdate: (self) => {
    //         $(".iphone-hide").addClass("show");
    //         $(".iphone-text").addClass("show");
    //         // setTimeout(()=>{
    //         //     $(".ivideo")[0].play();
    //         // }, 200)
    //     }, // 开始-结束之间滚动
    //     onToggle: (self) => {
    //         if(!self.isActive){
    //           setTimeout(()=>{
    //             $(".ivideo")[0].pause();
    //           }, 200)
    //         }else{
    //             setTimeout(()=>{
    //                 $(".ivideo")[0].play();
    //             }, 200)
    //         }
    //     }, // 从开始开结束为 true
    //     toggleClass: "active", 
    // });

    $(".iph-iconfont").click(function(){
        if(!$(this).hasClass("play")){
            $(".iphone-hide .ivideo").fadeIn()
            $(this).addClass("play");
            setTimeout(()=>{
                $(".iphone-hide .ivideo")[0].play()
            }, 400) 
            $(".iphone-hide .ivideo")[0].addEventListener("ended",function(){
                $(".iphone-hide .ivideo").fadeOut()
            },false);
        }else{
            $(".iphone-hide .ivideo").fadeOut()
            $(this).removeClass("play");
        }
    });
    
    
    $(".menubtn").click(function(){
        if($(this).hasClass("active")==true){
            $("body").removeClass("show");
            $(this).removeClass("active");
        }else{
            $("body").addClass("show");
            $(this).addClass("active");
            $("html, body").animate({ scrollTop: 1000 }, "slow");
        }
    })
    
    $(".mobile-menu-list li").click(function(){
       // console.log($(this).hasClass("active"));
        if($(this).hasClass("active")==false){
            $(".mobile-menu-list li").removeClass("active")
            $(".mobile-down").hide();
            $(this).addClass("active")
            $(this).children(".mobile-down").show();
        }else{
            $(".mobile-menu-list li").removeClass("active")
            $(".mobile-down").hide();
        }    
        
    })
    
    
})