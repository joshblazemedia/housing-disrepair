
var TweenMax = require( "./TweenMax.min.js");
import {gsap} from "gsap";

var ScrollMagic = require('../../../node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic');
var addIndicators = require('../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');
var animation = require('../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');

var controller = new ScrollMagic.Controller();


	// build scenes
	var revealElements = document.getElementsByClassName("reveal-up");
	for (var i=0; i<revealElements.length; i++) { // create a scene for each element
		new ScrollMagic.Scene({
						triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
						offset: 50,												 // start a little later
						triggerHook: 0.9,
					})
					.setClassToggle(revealElements[i], "visible") // add class toggle
					//.addIndicators({name: "reveal-up " + (i+1) }) // add indicators (requires plugin)
					.addTo(controller);
	}

	// build scenes
	var revealElements = document.getElementsByClassName("reveal-down");
	for (var i=0; i<revealElements.length; i++) { // create a scene for each element
		new ScrollMagic.Scene({
						triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
						offset: 50,												 // start a little later
						triggerHook: 0.9,
					})
					.setClassToggle(revealElements[i], "visible") // add class toggle
					//.addIndicators({name: "reveal-up " + (i+1) }) // add indicators (requires plugin)
					.addTo(controller);
	}

	// build scenes
	var revealElements = document.getElementsByClassName("reveal-left");
	for (var i=0; i<revealElements.length; i++) { // create a scene for each element
		new ScrollMagic.Scene({
						triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
						offset: 50,												 // start a little later
						triggerHook: 0.9,
					})
					.setClassToggle(revealElements[i], "visible") // add class toggle
					//.addIndicators({name: "reveal-left " + (i+1) }) // add indicators (requires plugin)
					.addTo(controller);
	}

	// build scenes
	var revealElements = document.getElementsByClassName("reveal-right");
	for (var i=0; i<revealElements.length; i++) { // create a scene for each element
		new ScrollMagic.Scene({
							triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
							offset: 50,												 // start a little later
							triggerHook: 0.9,
						})
						.setClassToggle(revealElements[i], "visible") // add class toggle
						//.addIndicators({name: "reveal-left " + (i+1) }) // add indicators (requires plugin)
						.addTo(controller);
	}


//LOGO PIN
/*
var animateElem = document.getElementById("header-text");
	var scene = new ScrollMagic.Scene({triggerElement: "#logo-pin"})
    		         .setPin("#header-logo-container")
				     .addIndicators({name: "logo-pin"}) // add indicators (requires plugin)
                    .triggerHook(0)
					.addTo(controller);
*/
//L
	var scene = new ScrollMagic.Scene({triggerElement: "#navTrigger"})
                     .on("enter", function () {
                         
                         //$('#logoholder').addClass('bg-primary');
                         // $(logonav).find('.fill-primary').addClass('fill-secondary');
                         //$('#logoholder').removeClass('bg-secondary');
                         // $(logonav).find('.fill-secondary').removeClass('fill-primary');
                     }).on("leave", function () {
                         //$('#logoholder').removeClass('bg-primary');
                         //$(logonav).find('.fill-secondary').addClass('fill-primary');
                         // $(logonav).find('.fill-primary').removeClass('fill-secondary');
                     })
                    //.triggerHook(2)
					// trigger animation by adding a css class
					//.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
					.addTo(controller);




//BANNER ANIMATIONS
var animateElem = document.getElementById("header-logo");
var scene = new ScrollMagic.Scene({triggerElement: "#topLogoTrigger"})
				.on("enter", function () {
				
				})
				.triggerHook(0)
				.addTo(controller);

const scrollableElements = document.querySelectorAll('[data-scroll-speed');
scrollableElements.forEach(function (currentElement) {
	const speed = currentElement.dataset.scrollSpeed;
	const tl = new TimelineMax();
	const target = currentElement;
	tl.to(target, 1, { y: speed, ease: Linear.easeNone });

	const attr = currentElement.dataset.trigger;
	let trigger = attr ? ('#' + attr) : currentElement;

   const scene = new ScrollMagic.Scene({
	triggerElement: trigger,
	triggerHook: 0.1,
	duration: "100%"
  })
	.setTween(tl)
	.addTo(controller);  
});

// $('[data-scroll-speed]').each(function() {
//           var speed = $( this ).attr( 'data-scroll-speed' );
//           var tl = new TimelineMax();
//           var target = $(this);
//           tl.to(target, 1, { y: speed, ease: Linear.easeNone });
          
//         var attr = $(this).attr('data-trigger');
//           if (typeof attr !== typeof undefined && attr !== false) {
//                var trigger =  $( this ).attr('data-trigger');
//                var trigger = ('#'+trigger);
//                // var trigger = ('"'+trigger+'"');
//                console.log(trigger);
              
//           }else{
//               var trigger = this;
//               // console.log(trigger);
//           }
//           var scene = new ScrollMagic.Scene({
//             triggerElement: trigger,
//             triggerHook: 0.1,
//             duration: "100%"
//           })
//             .setTween(tl)
//              /* .addIndicators({
//               colorTrigger: "red",
//               colorStart: "blue",
//               colorEnd: "black",
//               indent: 10
//             }) */
//             .addTo(controller);
          
          
//          // console.log(speed);   
          
//       });


// VANILLA JS
// wait for document ready
document.addEventListener('DOMContentLoaded', function() {
	// build scene
	const scene = new ScrollMagic.Scene({
			triggerElement: "#topLogoTrigger", 
			triggerHook: 0})
		.setPin("#topLogoPin")
		//.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
		.addTo(controller);
	
});

	
const tween = TweenMax.staggerFromTo("#bannerBg", 2, {filter: "blur(0px)"}, {filter: "blur(50px)", ease: Back.easeOut}, 0.55);

new ScrollMagic.Scene({triggerElement: this, duration: 500})
				.setTween(tween)
				// .addIndicators({name: "staggering"}) // add indicators (requires plugin)
				.addTo(controller);

const slides = document.querySelectorAll(".pin1");

// create scene for every slide
for (const i=0; i<slides.length; i++) {
	new ScrollMagic.Scene({
			triggerElement: slides[i],
			triggerHook: 0.0,
		})
		.setPin(slides[i], {pushFollowers: false})
		.addIndicators() // add indicators (requires plugin)
		.addTo(controller);
}



// OLD CODE
// $(function () { // wait for document ready
// 		// build scene
// 		var scene = new ScrollMagic.Scene({triggerElement: "#topLogoTrigger", triggerHook: 0})
// 						.setPin("#topLogoPin")
// 						//.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
// 						.addTo(controller);
// 	});

// 	var tween = TweenMax.staggerFromTo("#bannerBg", 2, {filter: "blur(0px)"}, {filter: "blur(50px)", ease: Back.easeOut}, 0.55);

// 	var scene = new ScrollMagic.Scene({triggerElement: this, duration: 500})
// 					.setTween(tween)
// 					// .addIndicators({name: "staggering"}) // add indicators (requires plugin)
// 					.addTo(controller);


// 	/*$(function () { // wait for document ready
// 		// build scene
//         var slides = document.getElementsByClassName("pin1");
// 		var scene = new ScrollMagic.Scene({
// 								triggerElement: slides[i], // y value not modified, so we can use element as trigger as well
// 								offset: 50,												 // start a little later
// 								triggerHook: 0.0,
// 							})
//                         .triggerHook(0.0)
// 						.setPin(slides[i], {pushFollowers: false})
// 						.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
// 						.addTo(controller);
// 	});*/

// // get all slides
// 		var slides = document.querySelectorAll(".pin1");

// 		// create scene for every slide
// 		for (var i=0; i<slides.length; i++) {
// 			new ScrollMagic.Scene({
// 					triggerElement: slides[i],triggerHook: 0.0,
// 				})
// 				.setPin(slides[i], {pushFollowers: false})
// 				.addIndicators() // add indicators (requires plugin)
// 				.addTo(controller);
// 		}