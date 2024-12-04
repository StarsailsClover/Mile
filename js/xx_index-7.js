// 	$(document).ready(function() {  
// 		var height = $('.xx_biao').outerHeight(); // 获取 xxdiv 的高度  
// 		var h2=$(".biaopan").outerHeight();
// 		var kgb=1564/3282;
// 		//var gd=(height - h2/4); // 在控制台打印高度  
// 		//$(".biaopan").css("top","-"+gd);
// 		setTimeout(function(){
// 		     console.log("BBBBBBBBBBB");
// 		     var canshu=$(".xx_biao").outerHeight()*0.8;
//     // 		var p2=$(".paixu2").offset().top-$(".paixu1").offset().top-canshu;
//     // 		var p3=$(".paixu3").offset().top-$(".paixu1").offset().top-canshu;
//     // 		var p4=$(".paixu4").offset().top-$(".paixu1").offset().top-canshu;
//     // 		var p5=$(".paixu5").offset().top-$(".paixu1").offset().top-canshu;
//     // 		$(".paixu2").css("transform","translate(0px,-"+p2+"px)");
//     // 		$(".paixu3").css("transform","translate(0px,-"+p3+"px)");
//     // 		$(".paixu4").css("transform","translate(0px,-"+p4+"px)");
//     // 		$(".paixu5").css("transform","translate(0px,-"+p5+"px)");
    
//             var jiange_px=$(".paixu3").height();
//             var p1=2*jiange_px;
//             var p2=jiange_px;
//             var p4=-jiange_px;
//             var p5=-2*jiange_px;
//     		$(".paixu1").css("transform","translate(0px,"+p1+"px)");
//     		$(".paixu2").css("transform","translate(0px,"+p2+"px)");
//     		$(".paixu4").css("transform","translate(0px,"+p4+"px)");
//     		$(".paixu5").css("transform","translate(0px,"+p5+"px)");
    		
//     // 	    console.log("p2=>"+p2+"..."+"p3=>"+p3+"..."+"p4=>"+p4+"..."+"p5=>"+p5);
    	    
//     	   // $(".guntitle").css("opacity",1);
//     	   // var guntitle_gao=$(".biaopan").offset().top-$(".xx_biao").height()-$(".biaopan_jpg").height();
//         //     $(".guntitle").css("transform","translate(0px,"+guntitle_gao+"px)")
    	    
// 		},1000)


		
		
		
		
		
		
		
// 		var j1=$(".xx_biao").outerHeight()*0.1;
//         var h2=$(".xx_hh_span").height();
// 		var  j2=j1+h2+$(".guntitle_span").height();
		
		
// 		var  j2=j1+h2+$(".guntitle_span").height();
// 		var  j3=j1+h2+2*$(".guntitle_span").height();
// 		var  j4=j1+h2+3*$(".guntitle_span").height();
// 		var  j5=j1+h2+4*$(".guntitle_span").height();
        
//         var j3=$(".guntitle_span3").offset().top;
//         var jiange=j3-$(".guntitle_span2").offset().top;
        
        
//         if($(window).width()>1333){
//             console.log("AAAAAAAAAAAA");
//           // .biaopan_jpg
//           var biaopan_jpg_kd=0;
//           if($(window).width()*0.175>=1642*0.205){
//               biaopan_jpg_kd=1642*0.205;
//           }else{
//               biaopan_jpg_kd=$(window).width()*0.175;
//           }
//           $(".biaopan_jpg").width(biaopan_jpg_kd);
//             $(".biaopan").css("margin-top","-"+((5*$(".biaopan_jpg").height()+$(".xx_biao").outerHeight())/2+0.5*$(".biaopan_jpg").height())+"px"); 
//             var j2=jiange;
//             var j1=2*jiange; 
//             var j4=-jiange;
//             var j5=-2*jiange;
//     		$(".guntitle_span1").css("transform","translate(0px,"+j1+"px");
//     		$(".guntitle_span2").css("transform","translate(0px,"+j2+"px");
//     		$(".guntitle_span4").css("transform","translate(0px,"+j4+"px");
//     		$(".guntitle_span5").css("transform","translate(0px,"+j5+"px");
    		
//     	//	$(".biaopan_jpg").width($(".xx_biao").width()*0.19);
    		
    		
//     		var jiange_px=$(".paixu3").height();
//             var p1=2*jiange_px;
//             var p2=jiange_px;
//             var p4=-jiange_px;
//             var p5=-2*jiange_px;
//     		$(".paixu1").css("transform","translate(0px,"+p1+"px)");
//     		$(".paixu2").css("transform","translate(0px,"+p2+"px)");
//     		$(".paixu4").css("transform","translate(0px,"+p4+"px)");
//     		$(".paixu5").css("transform","translate(0px,"+p5+"px)");
    		
    		
    		
//         }else if($(window).width()>1024){
            
//             $(".xx_biao").height($(".xx_biao").width()*kgb);    
            
//           $(".biaopan").css("margin-top","-"+((5*$(".biaopan_jpg").height()+$(".xx_biao").outerHeight())/2+0.5*$(".biaopan_jpg").height())+"px"); 
//             var j2=jiange;
//             var j1=2*jiange; 
//             var j4=-jiange;
//             var j5=-2*jiange;
//     		$(".guntitle_span1").css("transform","translate(0px,"+j1+"px");
//     		$(".guntitle_span2").css("transform","translate(0px,"+j2+"px");
//     		$(".guntitle_span4").css("transform","translate(0px,"+j4+"px");
//     		$(".guntitle_span5").css("transform","translate(0px,"+j5+"px");
    		
    		
//     // 		var y1=-pianyi*(1/2)+2*jiange;
//     // 		var y2=-pianyi*(1/2)+jiange;
//     // 		var y3=-pianyi*(1/2)-jiange;
//     // 		var y4=-pianyi*(1/2)-2*jiange;
//     // 		var y5=-pianyi*(1/2)-2*jiange;
    		
    		
//         }else if($(window).width()>768 && $(window).width()<1024){
//             $(".xx_biao").height($(".xx_biao").outerWidth()*0.4765);
//             //$(".biaopan").css("margin-top","-"+$(".xx_biao").outerHeight()*0.8658+"px");
//             $(".biaopan").css("margin-top","-"+((5*$(".biaopan_jpg").height()+$(".xx_biao").outerHeight())/2+0.5*$(".biaopan_jpg").height())+"px");
//             var j2=jiange;
//             var j1=2*jiange;
//             var j4=-jiange;
//             var j5=-2*jiange;
//     		$(".guntitle_span1").css("transform","translate(0px,"+j1+"px");
//     		$(".guntitle_span2").css("transform","translate(0px,"+j2+"px");
//     		$(".guntitle_span4").css("transform","translate(0px,"+j4+"px");
//     		$(".guntitle_span5").css("transform","translate(0px,"+j5+"px");
//         }else{
//             $(".biaopan").css("margin-top","-"+$(".xx_biao").outerHeight()*1.5658+"px");
//             var j2=jiange;
//             var j1=2*jiange;
//             var j4=-jiange;
//             var j5=-2*jiange;
//     		$(".guntitle_span1").css("transform","translate(0px,"+j1+"px");
//     		$(".guntitle_span2").css("transform","translate(0px,"+j2+"px");
//     		$(".guntitle_span4").css("transform","translate(0px,"+j4+"px");
//     		$(".guntitle_span5").css("transform","translate(0px,"+j5+"px");
    		
    		
    		
//     		var jiange_px=$(".paixu3").height();
//             var p1=2*jiange_px;
//             var p2=jiange_px;
//             var p4=-jiange_px;
//             var p5=-2*jiange_px;
//     		$(".paixu1").css("transform","translate(0px,"+p1+"px)");
//     		$(".paixu2").css("transform","translate(0px,"+p2+"px)");
//     		$(".paixu4").css("transform","translate(0px,"+p4+"px)");
//     		$(".paixu5").css("transform","translate(0px,"+p5+"px)");
//         }
        
// // 		window.addEventListener('resize', function(event) { 
// // 			$(".biaopan").css("margin-top","-"+$(".xx_biao").outerHeight()*0.8658+"px");
// // 			console.log("aaaaaaaaaaaaaaaa");
// // 			$(".paixu2").css("transform","translate(0px,-"+p2+"px)");
// //     		$(".paixu3").css("transform","translate(0px,-"+p3+"px)");
// //     		$(".paixu4").css("transform","translate(0px,-"+p4+"px)");
// //     		$(".paixu5").css("transform","translate(0px,-"+p5+"px)");
// //     		console.log("bbbbbbbbbbbbb");
// // 		})
		
		
		
		
		
		
		
// //	//	guntitle
// // 		var pianyi=$(".guntitle").height();
// // 	    var chazhi=$(".guntitle_span1").height();
	    
	    
	    
// // 		var y1=-pianyi*(1/2)+2*jiange;
// // 		var y2=-pianyi*(1/2)+jiange;
// // 		var y3=-pianyi*(1/2)-jiange;
// // 		var y4=-pianyi*(1/2)-2*jiange;
// // 		var y5=-pianyi*(1/2)-2*jiange;
	    
	    
// // 		console.log(pianyi);
// //         var viewportHeight = window.innerHeight;  
// //         gsap.registerPlugin(ScrollTrigger); // 假设您这里使用的是 gsap 或 gsap 的正确引用  
          
// //         $(".guntitle_span1").css("transform","translate(0px,="+pianyi*(1/2)+")")  
          
// //         var tl2 = gsap.timeline(); // 确保您使用的是 gsap 而不是 gsap  
// //         tl2.fromTo('.biaopan .paixu1',500, { // 通常不需要设置 to，因为 from 会自动处理到初始状态的过渡  
// //             autoAlpha: 1,  
// //             ease: "linear",
// //         },{
// //             autoAlpha: 0, 
// //             ease: "linear",
// //         }, 100)
// //         .fromTo('.biaopan .paixu2',500, { // 通常不需要设置 to，因为 from 会自动处理到初始状态的过渡  
// //             autoAlpha: 0,  
// //             ease: "linear",
// //         },{
// //             autoAlpha: 1,  
// //             ease: "linear",
// //         }, 400)
// //         .fromTo('.biaopan .paixu3',500, { // 通常不需要设置 to，因为 from 会自动处理到初始状态的过渡  
// //             autoAlpha: 0,  
// //             ease: "linear",
// //         },{
// //             autoAlpha: 1,  
// //             ease: "linear",
// //         }, 800)
// //         .fromTo('.biaopan .paixu4',500, { // 通常不需要设置 to，因为 from 会自动处理到初始状态的过渡  
// //             autoAlpha: 0,  
// //             ease: "linear",
// //         },{
// //             autoAlpha: 1,  
// //             ease: "linear",
// //         }, 1200)
// //         .fromTo('.biaopan .paixu5',500, { // 通常不需要设置 to，因为 from 会自动处理到初始状态的过渡  
// //             autoAlpha: 0,  
// //             ease: "linear",
// //         },{
// //             autoAlpha: 1,  
// //             ease: "linear",
// //         }, 1700)
// //         .to('.guntitle_span1',400, { // 通常不需要设置 to，因为 from 会自动处理到初始状态的过渡  
// //             autoAlpha: 1,
// //             y:y1,
// //             ease: "linear",
// //         }, 100)
// //         .to('.guntitle_span1',200, { // 通常不需要设置 to，因为 from 会自动处理到初始状态的过渡  
// //             autoAlpha: 0,
// //             y:-50-pianyi*(1/2),
// //             ease: "linear",
// //         }, 500)
// //         .to('.guntitle_span2',400, { // 通常不需要设置 to，因为 from 会自动处理到初始状态的过渡  
// //             autoAlpha: 1,
// //             y:y2,
// //             ease: "linear",
// //         }, 410)
// //         .to('.guntitle_span2',200, { // 通常不需要设置 to，因为 from 会自动处理到初始状态的过渡  
// //             autoAlpha: 0,
// //             y:-50-pianyi*(1/2),
// //             ease: "linear",
// //         }, 800)
// //         .to('.guntitle_span3',400, { // 通常不需要设置 to，因为 from 会自动处理到初始状态的过渡  
// //             autoAlpha: 1,
// //             y:y3,
// //             ease: "linear",
// //         }, 910)
// //         .to('.guntitle_span3',200, { // 通常不需要设置 to，因为 from 会自动处理到初始状态的过渡  
// //             autoAlpha: 0,
// //             y:-50-pianyi,
// //             ease: "linear",
// //         }, 1300)
// //         .to('.guntitle_span4',400, { // 通常不需要设置 to，因为 from 会自动处理到初始状态的过渡  
// //             autoAlpha: 1,
// //             y:y4,
// //             ease: "linear",
// //         }, 1310)
// //         .to('.guntitle_span4',400, { // 通常不需要设置 to，因为 from 会自动处理到初始状态的过渡  
// //             autoAlpha: 0,
// //             y:-50-pianyi,
// //             ease: "linear",
// //         }, 1700)
        
// //         .to('.guntitle_span5',400, { // 通常不需要设置 to，因为 from 会自动处理到初始状态的过渡  
// //             autoAlpha: 1,
// //             y:y5,
// //             ease: "linear",
// //         }, 1510)
// //         //.to(".biankuang", 400,{"margin-top": "-100px",position:"absolute", ease: "linear"},3500);
        
// //         // //guntitle_span
// //         var xxstart="";
// //         var xxend="";
// //         if($(window).width()<768){
// //             xxstart="top center";
// //             xxend="bottom top +=500";
// //         }else if($(window).width()>=768 && $(window).width()<1024){
// //             xxstart="-30%";
// //             xxend="bottom top +=500";
// //         }else if($(window).width()>=1300){
// //             xxstart="-30%";
// //             xxend="bottom top +=500";
// //         }
        
// // 		ScrollTrigger.create({
// // 				trigger: '.guding',
// // 				animation: tl2,
// // 				start: xxstart,
// // 				end: xxend,
// // 				pin: true,
// // 				scrub: 1,
// // 			    markers: true
// // 			});
		
// 	})