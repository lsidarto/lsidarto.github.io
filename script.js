// var vid = document.getElementById("vid");
// vid.playbackRate = 0.6;
// gsap.registerPlugin(, DrawSVGPlugin, MotionPathPlugin);
gsap.registerPlugin(MotionPathPlugin);

var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

gsap.to(".b1", {
duration: 3, 
repeat: -1,
repeatDelay: 2,
ease: "power1.inOut",
motionPath:{
    path: ".path1",
    align: ".path1",
    autoRotate: 90,
    alignOrigin: [0.5, 0.5]
}
});
gsap.to(".b2", {
duration: 5, 
repeat: -1,
repeatDelay: 3,
ease: "power1.inOut",
motionPath:{
    path: ".path2",
    align: ".path2",
    autoRotate: 90,
    alignOrigin: [0.5, 0.5]
}
});
gsap.to(".b3", {
duration: 4, 
repeat: -1,
repeatDelay: 4,
ease: "power1.inOut",
motionPath:{
    path: ".path3",
    align: ".path3",
    autoRotate: 90,
    alignOrigin: [0.5, 0.5]
}
});

console.clear();

gsap.registerPlugin(ScrollTrigger);

gsap.to(".b4", {
    x: w,
    duration: 4,
    // autoAlpha:0,
    scale: 0.8,
    scrollTrigger: {
        trigger:".b4",
        start: "center 90%",
        end: "center top",
        toggleActions: "restart pause resume reset",
        // markers: true,
    }, motionPath:{
        path: ".path4",
        align: ".path4",
        autoRotate: 90,
        alignOrigin: [0.5, 0.5]
    }
    });

// const path = document.querySelector('#longpath');
// const circle = document.querySelector('.circle');

// let pathPosition = path.getBoundingClientRect();
// let documentPosition = document.body.getBoundingClientRect();
// const pathTotalLength = path.getTotalLength();

// function positionElements() {
// 		// SVG passes center of screen
// 		const relativePageOffset = -pathPosition.top +
// 					(window.pageYOffset + window.innerHeight * .5);
		
// 		const pointPercentage = relativePageOffset / pathPosition.height;
// 		const pointOnPath = pointPercentage * pathTotalLength;
// 		const pathPoint = path.getPointAtLength(pointOnPath);

// 		circle.style.transform = `translate(
// 			${ pathPosition.left + pathPoint.x }px,
// 			${ pathPosition.top + pathPoint.y }px
// 		)`;
// }

// window.addEventListener('scroll', () => {
// 	positionElements();
// })

// window.addEventListener('resize', () => {
// 	pathPosition = path.getBoundingClientRect();
// 	documentPosition = document.body.getBoundingClientRect();
	
// 	positionElements();
// });

// positionElements();