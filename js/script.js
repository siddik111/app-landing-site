$('.main').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,



  
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
});

var typed = new Typed(".typed",{
  strings: ["","  Way to Download","Way to Use","Way  Promote","Way to Enjoy","Way to Learn"],
 

		// typing speed
		typeSpeed: 60,
		// time before typing starts
		startDelay:20,
		// backspacing speed
		backSpeed: 60,
		// time before backspacing
		backDelay: 20,
		// loop
		loop: true,
		// false = infinite
		loopCount: 6,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
})
        new kursor({
            type: 1
			
        })
    

		


		//about==========

		$('.counter').counterUp({
    delay: 10,
    time: 1000
});



const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
	faq.addEventListener("click", () => {
		faq.classList.toggle("active");
		document.getElementById("ami").style="display:block";
		
	});
	
		
	
});


$('.my_slider_t').slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true,
	autoplay: true,
	autoplaySpeed: 800,
	cssEase: 'linear',
	prevArrow:false,
	nextArrow:false,
  
	
  });





	