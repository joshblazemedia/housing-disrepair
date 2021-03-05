document.addEventListener('DOMContentLoaded', function() {
   // Hide Header on on scroll down
  var prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

    
  if (prevScrollpos > currentScrollPos) {
     document.getElementById("logoholder").style.top = "0";
       // document.getElementById("navmenu").style.top = "0";

      
  } else {
    document.getElementById("logoholder").style.top = "-140px";
    // document.getElementById("navmenu").style.top = "-80px"; 
      
  }

    
   if (prevScrollpos <= 0) {
       document.getElementById("logoholder").style.top = "0";
       // document.getElementById("navmenu").style.top = "0";     
    }

  prevScrollpos = currentScrollPos;
} 

//Change Logo Colour
var logonav = document.getElementById("header-nav-logo");

document.querySelector('.openmenu').addEventListener('click', function() {
  document.querySelector('body').classList.add('deactivatescroll');
  document.getElementById("logoholder").style.top = "-140px";
  document.getElementById("navmenu").classList.add('openmenu');
  document.getElementById("navmenu").classList.remove('closedmenu');
});

document.querySelector('.closemenu').addEventListener('click', function() {
  document.getElementById("logoholder").style.top = "-0px";
  document.getElementById("navmenu").classList.remove('openmenu');
  document.getElementById("navmenu").classList.add('closedmenu');
  document.querySelector('body').classList.remove('deactivatescroll');
});

var width = window.screen.width;
window.addEventListener('resize', function(){
  if (window.screen.width !== width) {
    document.getElementById("logoholder").style.top = "-0px";
    document.getElementById("navmenu").classList.remove('openmenu');
    document.getElementById("navmenu").classList.add('closedmenu');
    document.querySelector('body').classList.remove('deactivatescroll');
  }
});

//ANIMATION RELATED STUFF, WE MIGHT NOT NEED IT
// const childWrapper = document.querySelector('.childWrapper');
// childWrapper.addEventListener('mouseover', function() {
//   // .bgImage elements styles 
//   Object.assign(childWrapper.querySelector('.bgImage').style, {
//     'animation-play-state': 'paused',
//     'width': '100%',
//     'height': '100%',
//     'transiton': 'width 0.3s ease-out, height 0.3s ease-out',
//   })

//   // svg elements styles 
//   Object.assign(childWrapper.querySelector('svg').style, {
//     'animation-play-state': 'paused',
//     'width': '220%',
//     'transiton': 'width 0.3s ease-out',
//   });
// });

// childWrapper.addEventListener('mouseout', function() {
//   // .bgImage elements styles 
//   Object.assign(childWrapper.querySelector('.bgImage').style, {
//     'animation-play-state': 'paused',
//     'width': '110%',
//     'height': '110%',
//     'transiton': 'width 0.3s ease-out, height 0.3s ease-out',
//   })

//   // svg elements styles 
//   Object.assign(childWrapper.querySelector('svg').style, {
//     'animation-play-state': 'paused',
//     'width': '0%',
//     'transiton': 'width 0.3s ease-out',
//   })
// });


  // when the selected element is closed to something  
  // $('#').on('hidden.bs.modal', function () {
  //       $('.myVideoClass').each(function(){
  //         $(this).stopVideo();
  //      });
  // });

  const fadeDelayOne = document.querySelectorAll('.fade-delay-1');
  fadeDelayOne.forEach(function(el) {
    el.classList.add('visible');
  });

  const fadeDelayTwo = document.querySelectorAll('.fade-delay-2');
  fadeDelayTwo.forEach(function(el) {
    el.classList.add('visible');
  });

  const fadeDelayThree = document.querySelectorAll('.fade-delay-3');
  fadeDelayThree.forEach(function(el) {
    el.classList.add('visible');
  });

  const fadeDelayFour = document.querySelectorAll('.fade-delay-4');
  fadeDelayFour.forEach(function(el) {
    el.classList.add('visible');
  });

  /* BANNER */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let cw = canvas.width = window.innerWidth;
let ch = canvas.height = window.innerHeight;

const rand = (min, max) => (min + Math.random()*(max-min));

class SpeedLine {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    
    this.speed = rand(2, 4);
    this.life = this.curLife = rand(500, 900);
    this.alpha = rand(0.25, 1);
    this.angle = Math.PI * rand(0, 2);
    this.size = rand(20, 40);
    this.inRadius = rand(200, 400);
    this.outRadius = cw; 
  }
  
  update() {
    this.curLife -= this.speed;
    this.inRadius += this.speed*4;
    
    this.alpha *= (this.curLife / this.life);
    this.size *= (this.curLife / this.life);
    
    this.draw();
  }
  
  draw() {
    const { x, y, size, angle, alpha } = this,
          { inRadius, outRadius } = this;
    
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    
    ctx.beginPath();
    ctx.moveTo(0, inRadius);
    ctx.lineTo(size, outRadius);
    ctx.lineTo(-size, outRadius);
    ctx.closePath();
    
    ctx.fillStyle = `rgba(251, 245, 249, ${alpha})`;
    ctx.fill();
    ctx.restore();
  }  
}


// Animation
const lines = [];
const MAX_LINES = 300;

function updateLines() {
  lines.forEach((line, i) => {
    if (!line || line.curLife < 0) lines[i] = new SpeedLine(cw/2, ch/2);
    lines[i].update();
  });
}

for (let i = 0; i < MAX_LINES; i++) {
  lines[i] = new SpeedLine(cw/2, ch/2);  
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,cw,ch); 
  updateLines();
}


animate();

// Resize
window.addEventListener('resize', () => {
  cw = canvas.width = window.innerWidth;
  ch = canvas.height = window.innerHeight;
  updateLines();
});

});





// //old code
// $(document).ready(function(){

//  // Hide Header on on scroll down
// var prevScrollpos = window.pageYOffset;

// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;

    
//   if (prevScrollpos > currentScrollPos) {
//      document.getElementById("logoholder").style.top = "0";
//        // document.getElementById("navmenu").style.top = "0";

      
//   } else {
//     document.getElementById("logoholder").style.top = "-140px";
//     // document.getElementById("navmenu").style.top = "-80px"; 
      
//   }

    
//    if (prevScrollpos <= 0) {
//        document.getElementById("logoholder").style.top = "0";
//        // document.getElementById("navmenu").style.top = "0";     
//     }

//   prevScrollpos = currentScrollPos;
// } 

// //Change Logo Colour
// var logonav = document.getElementById("header-nav-logo");
// //$(logonav).find('.fill-primary').addClass('fill-secondary');
// // $(logonav).find('.fill-primary').removeClass('fill-primary');

    
// // Hide Header on on scroll down
// var prevScrollpos = window.pageYOffset;
//      $(".openmenu").click(function(){
//           $("body").addClass('deactivatescroll');
//          document.getElementById("logoholder").style.top = "-140px";
//          $('#navmenu').addClass('openmenu');
//          $('#navmenu').removeClass('closedmenu');
         
         
//    });
    
//      $(".closemenu").click(function(){
//          document.getElementById("logoholder").style.top = "-0px";
//           $('#navmenu').removeClass('openmenu');
//          $('#navmenu').addClass('closedmenu');
//           $("body").removeClass('deactivatescroll');
//           document.getElementById("logoholder").style.top = "-0px";
//     });

//     var width = $(window).width();
//        $(window).on('resize', function() {
//          if ($(this).width() != width) {
//            document.getElementById("logoholder").style.top = "-0px";
//                  $('#navmenu').removeClass('openmenu');
//                 $('#navmenu').addClass('closedmenu');
//                  $("body").removeClass('deactivatescroll');
//                  document.getElementById("logoholder").style.top = "-0px";
//          }
//        });
    
    

  $( ".childWrapper" ).mouseover(function() {
    $(this).find('.bgImage').stop().animate({width:'100%', height: '100%'});
    $(this).find('svg').stop().animate({width:'220'});
  }).mouseout(function() {
    $(this).find('.bgImage').stop().animate({width:'110%', height: '110%'});
      $(this).find('svg').stop().animate({width:'0'});
  });
    
    $('#popupvideo').on('hidden.bs.modal', function () {
          $('.myVideoClass').each(function(){
            $(this).stopVideo();
         });
     
});
    

// $('.fade-delay-1').each(function(){
//     $(this).addClass('visible');
// });

//     $('.fade-delay-2').each(function(){
//     $(this).addClass('visible');
// });

//     $('.fade-delay-3').each(function(){
//     $(this).addClass('visible');
// });

// $('.fade-delay-4').each(function(){
//     $(this).addClass('visible');
// });

    
// /* BANNER */
// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// let cw = canvas.width = window.innerWidth;
// let ch = canvas.height = window.innerHeight;

// const rand = (min, max) => (min + Math.random()*(max-min));

// class SpeedLine {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
    
//     this.speed = rand(2, 4);
//     this.life = this.curLife = rand(500, 900);
//     this.alpha = rand(0.25, 1);
//     this.angle = Math.PI * rand(0, 2);
//     this.size = rand(20, 40);
//     this.inRadius = rand(200, 400);
//     this.outRadius = cw; 
//   }
  
//   update() {
//     this.curLife -= this.speed;
//     this.inRadius += this.speed*4;
    
//     this.alpha *= (this.curLife / this.life);
//     this.size *= (this.curLife / this.life);
    
//     this.draw();
//   }
  
//   draw() {
//     const { x, y, size, angle, alpha } = this,
//           { inRadius, outRadius } = this;
    
//     ctx.save();
//     ctx.translate(x, y);
//     ctx.rotate(angle);
    
//     ctx.beginPath();
//     ctx.moveTo(0, inRadius);
//     ctx.lineTo(size, outRadius);
//     ctx.lineTo(-size, outRadius);
//     ctx.closePath();
    
//     ctx.fillStyle = `rgba(251, 245, 249, ${alpha})`;
//     ctx.fill();
//     ctx.restore();
//   }  
// }


// // Animation
// const lines = [];
// const MAX_LINES = 300;

// function updateLines() {
//   lines.forEach((line, i) => {
//     if (!line || line.curLife < 0) lines[i] = new SpeedLine(cw/2, ch/2);
//     lines[i].update();
//   });
// }

// for (let i = 0; i < MAX_LINES; i++) {
//   lines[i] = new SpeedLine(cw/2, ch/2);  
// }

// function animate() {
//   requestAnimationFrame(animate);
//   ctx.clearRect(0,0,cw,ch); 
//   updateLines();
// }


// animate();

// // Resize
// window.addEventListener('resize', () => {
//   cw = canvas.width = window.innerWidth;
//   ch = canvas.height = window.innerHeight;
//   updateLines();
// });
//  });


var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap ease-in">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
              if(this.loopNum >= this.toRotate.length-1) {
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0em solid #fff}";
            document.body.appendChild(css);
        return;
      }
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };


    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
             new TxtType(elements[i], JSON.parse(toRotate), period);
            } 
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };


