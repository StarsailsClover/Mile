;(function($, window, document,undefined) {

    "use strict";
	var Tfn = function() {
        this.header            = $('header'),
        this.center            = $('#wrapper'),
        this.footer            = $('footer'),
        this.IEnum             = null;//如果是ie浏览器，ie的版本数
        this.isAnimating       = false,//判断轮播动画是否进行中
        this.isAnimating1      = false,//判断下拉动画是否进行中
        this.aniTime           = 600,  //动画时间
        this.isMobile  		   = false, //区分移动端与PC端
		this.mobile            = false, //区分手机端与平板
		this.windowWidth       = ('innerWidth' in window) ? window.innerWidth : document.documentElement.clientWidth,
		this.windowHeight      = ('innerHeight' in window) ? window.innerHeight : document.documentElement.clientHeight,
        this.rowNode           = [],//页面块节点存储
        this.appDirection      = null;//手机端触摸滑动方向
        
    };
	Tfn.prototype = {
        //初始化
        init: function() {
            var self = this;
            if (!!window.ActiveXObject || "ActiveXObject" in window){
                $('body').addClass("ie");
                this.IEnum = parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""));
                if(this.IEnum<9){
                    alert("您的浏览器版本过低，请下载IE9及以上版本");return false;
                }else if(this.IEnum==9){
                    $('body').addClass("ie9");
                }else if(this.IEnum==10){
                    $('body').addClass("ie10");
                }else if(this.IEnum==11){
                    $('body').addClass("ie11");
                }
            }
            // this.storage();
            imagesLoaded(document.querySelectorAll('img'), function () {
                
            });
			self.getWorknet();
            self.version();
			self.getSroll();
			self.getverificate();
			self.setScroll();
			self.getMenuHover();
			self.setInnerBanner();
			self.setPopUp($('.weix'), "微信公众号");
        },
		// 浏览器版本
		getWorknet: function(){
		},
		version:function(){
            var explorer = window.navigator.userAgent ;
            if (explorer.indexOf("MSIE") >= 0||explorer.indexOf("Trident")>0 ) {
                if(explorer.indexOf("MSIE 5")>0||explorer.indexOf("MSIE 6")>0||explorer.indexOf("MSIE 7")>0||explorer.indexOf("MSIE 8")>0) {
                    return 'LowerIEVersion';
                }else{
                    return 'EdgeOrTrident';
                }
            }
            else if (explorer.indexOf("Maxthon") >= 0) {return 'Maxthon';}
            else if (explorer.indexOf("Firefox") >= 0) {return 'FireFox';}
            else if(explorer.indexOf("Chrome") >= 0){ return 'Chrome';}
            else if(explorer.indexOf("Opera") >= 0){ return 'Opera';}
            else if(explorer.indexOf("Safari") >= 0){ return 'Safari';}
        },
		getSroll: function(){
			var hash = location.hash;
			
			jQuery(".leval-menu-li li a,.navs-menus li a,.product-menu-li li a").click(function(e){
				var hash=jQuery(this).attr("href").split("#")[1];
				if(hash && jQuery("#"+hash).length==1){
					setScroll("#"+hash);
				}
			});
			function getHashs(){
				if(hash){
					setScroll(hash);
				}
			};
			var scnum=0;
			function setScroll(anchorCur){
				$("body").stop().removeClass("slideDown");
				scnum=$('.header').outerHeight();
				//var pos = jQuery(anchorCur).offset().top -scnum;
				jQuery("html,body").animate({ scrollTop: parseInt(jQuery(anchorCur).offset().top)},600);
			};
			window.onload = function(){
				getHashs();
			}
			$('.scroll-top').bind('click', function(e){
				e.preventDefault();
				$('html, body').animate({ scrollTop:'0' },1200, 'easeInOutExpo');		      
				return false;
			});
		},
		getverificate: function(){

		},
		setScroll: function() {
			var self = this;
			if (this.windowWidth <= 1024) {
				this.isMobile = true;
			} else if (this.windowWidth > 1024) {
				this.isMobile = false;
			};
			//区分手机端和平板
			if (this.windowWidth <= 640) {
				this.mobile = true;
			} else if (this.windowWidth > 640) {
				this.mobile = false;
			};
			if (!this.mobile) {
			$(window).bind('resize', function(e)
				{
					if (window.RT) clearTimeout(window.RT);
					if (window.document.fullscreenElement !== null) {
						return false
					}
					window.RT = setTimeout(function () {
						 this.location.reload(false); /* false to get page from cache */
					}, 100);
					
				});
			}

			function initBox() {
				self.windowWidth  = ('innerWidth' in window) ? window.innerWidth : document.documentElement.clientWidth,
				self.windowHeight = ('innerHeight' in window) ? window.innerHeight : document.documentElement.clientHeight;
				// $('.pbanner,.pbanner figure').css('height',self.windowHeight);
				// setImgMax($('.pbanner figure img'), 1920, 1080, self.windowWidth, self.windowHeight);
			};
			initBox();
			jQuery(window).resize(function () {
				initBox();
			});
			function a(){
				var scrollTop = $(window).scrollTop();
				scrollTop > 20 ? $(".header").addClass("scroll"): $(".header").removeClass("scroll");
				scrollTop > 20 ? $(".scroll-top").addClass("show"): $(".scroll-top").removeClass("show");
			}	
			$(window).scroll(a);
			a();	
		},
		getMenuHover: function() {
			var _index = $(".navs > li.active").index();
			$(".navs > li").hover(function(){
				if($(this).find(".product-menu").length > 0 || $(this).find(".common-menu").length > 0 || $(this).find(".brand-menu").length > 0){
					$(".navs-bg").stop().fadeIn();
				}
				$(this).addClass("active").siblings().removeClass("active");
				$(this).find(".product-menu").stop(0,true).slideDown();
				$(this).find(".brand-menu").stop(0,true).slideDown();
			},function(){
				$(".navs > li").removeClass("active");
				if(_index >= 0){
					$(".navs > li").eq(_index).addClass("active")
				}
				
				$(this).find(".product-menu").hide();
				$(this).find(".brand-menu").hide();
				$(".navs-bg").stop().hide();
			});
			$(".product-menu-item").hover(function(){
				$(this).addClass("active").siblings().removeClass("active");
				$(".product-menu-items").eq($(this).index()).show().siblings().hide();
				$(".navs-bg").stop().fadeIn();
			},function(){
				$(".navs-bg").stop().fadeOut();
			});

			$(".search-btn").click(function(){
				$(".search-box").stop().fadeIn();
			});

			$(".search-close").click(function(){
				$(".search-box").stop().fadeOut();
			});
			$(".header-search .search-defaul .text").focus(function(){
				$(".hot-search").stop().fadeIn();
			});
			$(".search-defaul .text").blur(function(){
				$(".hot-search").stop().fadeOut();
			});

			$(".menubtn").click(function(){
				$(this).toggleClass("active");
				$("body").toggleClass("show");
			});
			$(".mobile-defaul").click(function(){
				$(this).parents("li").toggleClass("active").siblings().removeClass("active");
				$(this).parents("li").find(".mobile-down").stop().slideToggle();
				$(this).parents("li").siblings().find(".mobile-down").stop().slideUp();
			});
		},
		setInnerBanner: function() {
			// jQuery(window).scroll(function () {
			// 	var windowTop = jQuery(window).scrollTop();
			// 	if (windowTop < self.innerHeight) {
			// 		jQuery('.community-wr ').css('transform', "translate(0px,-" + (windowTop) / 3.8 + "px)");
			// 	};
			// });
			
			if($("img.lazy").length > 0){
				$("img.lazy").lazyload({
					effect: "fadeIn",
					placeholder: "images/loading.gif"
				})
			}
		
		},
		setPopUp: function(obj, title) {
			obj.click(function() {
				var str = '<div class="popUpblack"><div class="popUp"><div class="t">' + title +
					'<span class="close">关闭</span></div><div class="img"><img src="' + obj.attr("href") + '"/></div></div></div>';
				$("body").append(str);
				jQuery(".popUpblack").fadeIn();
				jQuery(".popUp").animate({
					marginTop: "-127"
				}, 400);
				$(".popUp .close").click(function() {
					$(".popUpblack").remove();
				});
				jQuery(".popUpblack").click(function() {
					$(".popUpblack").remove();
				});
				return false;
			});
		}
	}
	$.fn.myFn = function() {
		new Tfn().init();
	};
})(jQuery, window, document);
	
// $(document).myFn();
// jQuery(window).load(function() {
// 	jQuery('.article-block').scrollClass();
// });


function setImgMax(img, imgW, imgH, tW, tH) {
	var tWidth = tW || w_width;
	var tHeight = tH || w_height;
	var coe = imgH / imgW;
	var coe2 = tHeight / tWidth;
	if (coe < coe2) {
		var imgWidth = tHeight / coe;
		img.css({
			height: tHeight,
			width: imgWidth,
			left: -(imgWidth - tWidth) / 2,
			top: 0
		});
	} else {
		var imgHeight = tWidth * coe;
		img.css({
			height: imgHeight,
			width: tWidth,
			left: 0,
			top: -(imgHeight - tHeight) / 2
		});
	};

};
