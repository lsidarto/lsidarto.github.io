var vid = document.getElementById("vid");
vid.playbackRate = 0.6;

gsap.registerPlugin(MotionPathPlugin);


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