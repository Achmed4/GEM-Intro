// Init controller
var controller = new ScrollMagic.Controller();

// loop through each layer element
var elements = document.querySelectorAll('.layer');
// Set The Scale() Value for The Canvas
var scaleVlaue = window.innerWidth / 1920;
if(window.innerWidth < 768) {
    scaleVlaue = 0.71;
}
elements.forEach(function(el){
    el.style.transform = "scale(" + scaleVlaue + ")";
    // build layer tween
    var tweenLayer = TweenMax.to(String('.' + el.classList[1]), 1, {className: "+=active"});
    // build layer scene
    var sceneLayer = new ScrollMagic.Scene({
        duration: "100%", // the scene should last for a scroll distance of  100% = Window Height
        offset: 200 // start this scene after scrolling for 10px
    })
    .setTween(tweenLayer)
    .addTo(controller); // assign the scene to the controller
});

// build Scroll bar tween
var tweenScrollbar = TweenMax.to(".scroll-bar", 1, {className: "+=active"}, { autoAlpha: 1, ease: Quad.easeInOut});
// build Scroll Word scene
var sceneScrollbar = new ScrollMagic.Scene({
    duration: "100%",
    offset: window.innerHeight,
    triggerHook: 1
})
.setTween(tweenScrollbar)
.on("progress", function(event) {
    document.querySelector('.scroll-bar').style.opacity = '1';
})
.on("end", function(event) {
    document.querySelector('.scroll-bar').style.opacity = '0';
})
.addTo(controller);

// build Overlay tween
var tweenOverlay = TweenMax.to(".overlay", 1, {className: "+=active"});
// build Overlay scene
var sceneOverlay = new ScrollMagic.Scene({
    duration: "100%",
    offset: window.innerHeight,
    triggerHook: 1
})
.setTween(tweenOverlay)
.addTo(controller);


// build Button scene
var sceneButton = new ScrollMagic.Scene({
    duration: "200%",
    offset: window.innerHeight * 2,
})
.setClassToggle('.overlay a', 'active')
.addTo(controller);