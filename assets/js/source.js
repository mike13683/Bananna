$(document).ready(function(){

    gsap.defaults({
        delay: 0.5,
        ease: "power2.in",
        transformOrigin:"left"
    })

    let infoController = new ScrollMagic.Controller()

    let infoTween = gsap.timeline()

    infoTween.fromTo(".info__header-js-1", {autoAlpha:0, x:-150}, {autoAlpha:1, x:0})
    infoTween.fromTo(".info__media-one", {autoAlpha:0,  scaleX:0}, {autoAlpha:1, scaleX:1})
    infoTween.fromTo(".info__media-two", {autoAlpha:0,  scaleX:0}, {autoAlpha:1, scaleX:1})
    infoTween.fromTo(".info__media-three", {autoAlpha:0,  scaleX:0}, {autoAlpha:1, scaleX:1})
    infoTween.fromTo(".info__header-js-2", {autoAlpha:0,  scaleX:0}, {autoAlpha:1, scaleX:1})

    let infoScene = new ScrollMagic.Scene({
        triggerElement: "#info"
    })



        .setTween(infoTween)
        .addIndicators({
            name: "info"
        })
        .addTo(infoController)



    let newsController = new ScrollMagic.Controller()

    let newsTimeline = gsap.timeline()


    newsTimeline.fromTo(".news__header h2", {autoAlpha:0, y:-25}, {autoAlpha:1, y:0})
    newsTimeline.fromTo(".card", {autoAlpha:0, x:-25}, {autoAlpha:1, y:0, stagger: 0.7})

    let newsScene = new ScrollMagic.Scene({
        triggerElement: "#news-js",
        triggerHook: 1,
        offset: "-50px"
    })

        .setTween(newsTimeline)
        .addIndicators({
            name: "news"
        })

        .addTo(newsController)


    // MONITOR
    // let monitorController = new ScrollMagic.Controller()
    //
    // let monitorTimeLine = gsap.timeline()
    //
    // monitorTimeLine.from("#Shape", {autoAlpha:0, fill:"none", stagger: 0.2})
    // monitorTimeLine.from("#Oval", {autoAlpha:0})
    // monitorTimeLine.fromTo("#Oval", {x:"-20px"}, {x:"0", ease:Elastic.easeIn.config( 1, 1)  })
    // monitorTimeLine.fromTo("#Oval1", {fill:"#fff"}, {fill:"yellow", repeat: -1, yoyo: true})
    //
    // let monitorScene = new ScrollMagic.Scene({
    //     triggerElement: "#monitor"
    // })
    //
    //     .setTween(monitorTimeLine)
    //     .addIndicators({
    //         name: "monitor"
    //     })
    //     .addTo(monitorController)

    let monitorController = new ScrollMagic.Controller()

    let monitorTimeLine = gsap.timeline()

    monitorTimeLine.from("#Shape", {autoAlpha:0, fill:"none", stagger: 0.2})
    monitorTimeLine.from("#Oval", {autoAlpha:0})
    monitorTimeLine.fromTo("#Oval", {x:"-20px"}, {x:"0", ease:Elastic.easeIn.config( 1, 1)  })
    monitorTimeLine.fromTo("#Oval1", {fill:"#fff"}, {fill:"yellow", repeat: -1, yoyo: true})

    let monitorScene = new ScrollMagic.Scene({
        triggerElement: "#monitor"
    })

        .setTween(monitorTimeLine)
        .addIndicators({
            name: "monitor"
        })
        .addTo(monitorController)


    // phone

    let phoneController = new ScrollMagic.Controller()

    let phoneTimeLine = gsap.timeline()

    phoneTimeLine.to(".phone-media-2 img",1, {rotation:-200})


    let phoneScene = new ScrollMagic.Scene({
        triggerElement: "#phone",
        triggerHook:0.5,
        // duration:"100%"
        offset:"-300px"

    })

        .setPin(".phone-media-2 img")
        .setTween(phoneTimeLine)
        .addIndicators({
            name: "phone"
        })
        .addTo(phoneController)



    let blimpController = new ScrollMagic.Controller()

    let blimpTimeLine = gsap.timeline()

    blimpTimeLine.fromTo(".blimp", 7, {autoAlpha:0.5, x:"-930"}, {autoAlpha:1, x:"930",  repeat:true})
    blimpTimeLine.fromTo(".bombs", 4, {autoAlpha:0, y:-40, x:"-425"}, {autoAlpha:1, y:20, x:"215"}, "-=5")
    blimpTimeLine.to(".bombs", 0, {autoAlpha:0},"-=1")


    let blimpScene = new ScrollMagic.Scene({
        triggerElement: "#blimp"
    })

        .setTween(blimpTimeLine)
        .addIndicators({
            name: "blimp"

        })
        .addTo(blimpController)


    // carousel-wrapper-bar
    let carouselWrapperBar = gsap.timeline()

    // carouselWrapperBar.set(".carousel-wrapper-bar",{repeat:-1})

    carouselWrapperBar.fromTo(".carousel-wrapper-bar", 5, {scaleX:"0", backgroundColor:"red",repeat:-1},{scaleX :"1",backgroundColor:"red",repeat:-1})

    $('#carouselOne').carousel({
       pause: false
    })
    //
    // $('#carouselTwo').carousel({
    //     interval: false
    // })

    $(".services__content .one").hover(function(){
        $(".carousel-item.active").removeClass("active")
        $(".carousel-item.one").addClass("active")
        gsap.to(".services__media--bg-colour",0.3, {backgroundColor: "#E94C6F"})

    })

   $(".services__content .two").hover(function(){
       $(".carousel-item.active").removeClass("active")
       $(".carousel-item.two").addClass("active")
       gsap.to(".services__media--bg-colour",0.3, {backgroundColor: "#F2AE72"})

   })

});
