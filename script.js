
(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
		}else{
            $('.navbar').removeClass("sticky");
		}
	});

	// Toggle menu/navbar script
	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});

	//owl carousel script
	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplayTimeOut: 2000,
		autoplayHoverpause: true,
		responsive: {
			0:{
				items: 1,
				nav: false
			},
			600:{
				items: 2,
				nav: false
			},
			1000:{
				items: 3,
				nav: false
			}
		}
	})
});


// //Animation typing
// var typed = new Typed(".typing",{
// 	strings: ["Freudian", "Information Age", "Meso-America", "Asian", "Middle East", "African"],
// 	typeSpeed: 100,
// 	backSpeed: 60,
// 	loop: true
// })

//Vid
//Vid
let anchors = document.querySelectorAll('div .btn');
let links = [...anchors];

for (let i=0; i<links.length; i++) {
	links[i].onclick = handler;
}
function handler(e) {
	e.preventDefault();
	let videotarget = this.getAttribute("href");
	let filename = videotarget.substr(0, videotarget.lastIndexOf('.'));
	let video = document.getElementById("video");
	video.removeAttribute("poster");
	let source = document.querySelectorAll("#video_player video source");
	source[0].src = filename + ".mp4";
	source[1].src = filename + ".m4v";
	video.load();
	video.play();
}
