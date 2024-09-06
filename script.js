var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end:"50% 50%",
    scrub:true,
    // markers:true,
}})

tl.to("#sundae",{
    top:"100%",
    left:"4%",
})

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end:"20% 50%",
    scrub:true,
    // markers:true,
}})

tl2.to("#sundae",{
    top:"195%",
    left:"31%",
})
