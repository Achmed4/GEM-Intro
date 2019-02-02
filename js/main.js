// Set The Scale() Value for The Canvas
//document.querySelector('#intro .layers .layer').style

// Init controller
var controller = new ScrollMagic.Controller();

// loop through each layer element
var elements = document.querySelectorAll('.layer');
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
        offset: 100, // start this scene after scrolling for 10px
        // triggerElement: String('.' + el.classList[1])
    })
    .setTween(tweenLayer)
    .addTo(controller); // assign the scene to the controller
});

// build Scroll Word tween
var tweenScrollWord = TweenMax.to(".scroll", 1, {className: "+=active"});
// build Scroll Word scene
var sceneScrollWord = new ScrollMagic.Scene({
    duration: "200%",
    offset: window.innerHeight,
    triggerHook: 1,
    // triggerElement: '.scroll'
})
.setTween(tweenScrollWord)
// .addIndicators({name: 'Scroll word scene'})
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
// .addIndicators({name: 'Overlay scene'})
.addTo(controller);

// build Button tween
//var tweenButton = TweenMax.to(".overlay a", 1, {className: "+=active"});
// build Button scene
var sceneButton = new ScrollMagic.Scene({
    duration: "200%",
    offset: window.innerHeight * 2,
    // triggerHook: 1,
    // triggerElement: '.overlay a'
})
.setClassToggle('.overlay a', 'active')
//.setTween(tweenButton)
// .addIndicators({name: 'Button scene'})
.addTo(controller);