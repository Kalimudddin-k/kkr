gsap.registerPlugin(ScrollTrigger);

const timeline1 = gsap.timeline({
    scrollTrigger:{
        trigger: ".main",
        start: "top top", //element position , viewport posion
        end: "bottom top", //element position, viewport posion
        scrub: true,
    }
});
//Animate Header 
timeline1.to("header",{
    y: 350,
    scale:0.2,
    duration:1.5
});


timeline1.to('.mountain .cloud-1, .mountain .cloud-2', {
    x: 500,
    scale: 0.5,
    duration:2
},"<=");

//Animate section-2
const timeline2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.section-2',
        start: "top 80%",
        end: "bottom 80%",
        scrub: true,
    }
});

timeline2.from(".section-2 .left",{
    x:-150,
    scale:0.5,
    opacity:0,
    duration:1.5
});


timeline2.from(".section-2 .right",{
    x:-150,
    scale:0.5,
    opacity:0,
    duration:1.5
},"<=");

//Animate section-3
gsap.from('.section-3 .content .left',{
    x:-550,
    duration:1,
    scrollTrigger:{
        trigger:'.section-3',
        start: "top 20%",
        end: "bottom 90%",
        scrub: true,
    }
});

//Animate section-4
gsap.to('.section-4 .title',{
    x:-1000,
    duration:1,
    ease:"power2.out",
    scrollTrigger:{
        trigger:'.section-4',
        start: "top 0%",
        end: "bottom 0%",
        scrub: true,
        pin:true
    }
});
//Animate section-7
gsap.from('.section-7 .contact_form',{
    scale:0.5,
    duration:1,
    ease:"power2.out",
    scrollTrigger:{
        trigger:'.section-7',
        start: "top 50%",
        end: "bottom 100%",
        scrub: true
    }
});