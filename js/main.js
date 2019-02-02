// Init controller
var controller = new ScrollMagic.Controller();

// loop through each layer element
var elements = document.querySelectorAll('.layer');
elements.forEach(function(el){
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

/*
// build sphinx tween
var tweenSphinx = TweenMax.to(".sphinx", 1, {className: "+=active"});
// build sphinx scene
var sceneSphinx = new ScrollMagic.Scene({
    duration: "100%", // the scene should last for a scroll distance of  100% = Window Height
    offset: 100, // start this scene after scrolling for 10px
    // triggerElement: '.sphinx'
}) 
.setTween(tweenSphinx)
// .addIndicators({name: 'Sphinx scene'})
.addTo(controller); // assign the scene to the controller

// build pyramid1 tween
var tweenPyramid1 = TweenMax.to(".pyramids-1", 1, {className: "+=active"});
// build pyramid1 scene
var scenePyramid1 = new ScrollMagic.Scene({
    duration: "100%", // the scene should last for a scroll distance of  100% = Window Height
    offset: 100, // start this scene after scrolling for 10px
    // triggerElement: '.pyramids-1'
})
.setTween(tweenPyramid1)
// .addIndicators({name: 'Pyramid1 scene'})
.addTo(controller); // assign the scene to the controller

// build pyramid2 tween
var tweenPyramid2 = TweenMax.to(".pyramids-2", 1, {className: "+=active"});
// build pyramid2 scene
var scenePyramid2 = new ScrollMagic.Scene({
    duration: "100%", // the scene should last for a scroll distance of  100% = Window Height
    offset: 100, // start this scene after scrolling for 10px
    // triggerElement: '.pyramids-2'
})
.setTween(tweenPyramid2)
// .addIndicators({name: 'Pyramid2 scene'})
.addTo(controller); // assign the scene to the controller

// build pyramid3 tween
var tweenPyramid3 = TweenMax.to(".pyramids-3", 1, {className: "+=active"});
// build pyramid3 scene
var scenePyramid3 = new ScrollMagic.Scene({
    duration: "100%", // the scene should last for a scroll distance of  100% = Window Height
    offset: 100, // start this scene after scrolling for 10px
    // triggerElement: '.pyramids-3'
})
.setTween(tweenPyramid3)
// .addIndicators({name: 'Pyramid3 scene'})
.addTo(controller); // assign the scene to the controller

// build desert2 tween
var tweenDesert2 = TweenMax.to(".desert-2", 1, {className: "+=active"});
// build desert2 scene
var sceneDesert2 = new ScrollMagic.Scene({
    duration: "100%", // the scene should last for a scroll distance of  100% = Window Height
    offset: 100, // start this scene after scrolling for 10px
    // triggerElement: '.desert-3'
})
.setTween(tweenDesert2)
// .addIndicators({name: 'Desert2 scene'})
.addTo(controller); // assign the scene to the controller

// build desert3 tween
var tweenDesert3 = TweenMax.to(".desert-3", 1, {className: "+=active"});
// build desert3 scene
var sceneDesert3 = new ScrollMagic.Scene({
    duration: "100%", // the scene should last for a scroll distance of  100% = Window Height
    offset: 100, // start this scene after scrolling for 10px
    // triggerElement: '.desert-3'
})
.setTween(tweenDesert3)
// .addIndicators({name: 'Desert3 scene'})
.addTo(controller); // assign the scene to the controller

// build cloud1 tween
var tweenCloud1 = TweenMax.to(".cloud-1", 1, {className: "+=active"});
// build cloud1 scene
var sceneCloud1 = new ScrollMagic.Scene({
    duration: "100%", // the scene should last for a scroll distance of  100% = Window Height
    offset: 100, // start this scene after scrolling for 10px
    // triggerElement: '.cloud-1'
})
.setTween(tweenCloud1)
// .addIndicators({name: 'Cloud1 scene'})
.addTo(controller); // assign the scene to the controller

// build cloud2 tween
var tweenCloud2 = TweenMax.to(".cloud-2", 1, {className: "+=active"});
// build cloud2 scene
var sceneCloud2 = new ScrollMagic.Scene({
    duration: "100%", // the scene should last for a scroll distance of  100% = Window Height
    offset: 100, // start this scene after scrolling for 10px
    // triggerElement: '.cloud-2'
})
.setTween(tweenCloud2)
// .addIndicators({name: 'Cloud2 scene'})
.addTo(controller); // assign the scene to the controller

// build sky tween
var tweenSky = TweenMax.to(".sky", 1, {className: "+=active"});
// build sky scene
var sceneSky = new ScrollMagic.Scene({
    duration: "100%", // the scene should last for a scroll distance of  100% = Window Height
    offset: 100, // start this scene after scrolling for 10px
    // triggerElement: '.sky'
})
.setTween(tweenSky)
// .addIndicators({name: 'Sky scene'})
.addTo(controller); // assign the scene to the controller

// build mountains tween
var tweenMountains = TweenMax.to(".mountains", 1, {className: "+=active"});
// build mountains scene
var sceneMountains = new ScrollMagic.Scene({
    duration: "100%", // the scene should last for a scroll distance of  100% = Window Height
    offset: 100, // start this scene after scrolling for 10px
    // triggerElement: '.mountains'
})
.setTween(tweenMountains)
// .addIndicators({name: 'Mountains scene'})
.addTo(controller); // assign the scene to the controller


// build GEM Word tween
var tweenGEM = TweenMax.to(".gem", 1, {className: "+=active"});
// build GEM Word scene
var sceneGEM = new ScrollMagic.Scene({
    duration: "100%", // the scene should last for a scroll distance of  100% = Window Height
    offset: 100, // start this scene after scrolling for 10px
    // triggerElement: '.gem'
})
.setTween(tweenGEM)
// .addIndicators({name: 'GEM word scene'})
.addTo(controller); // assign the scene to the controller
*/

// build Scroll Word tween
var tweenScrollWord = TweenMax.to(".scroll", 1, {className: "+=active"});
// build Scroll Word scene
var sceneScrollWord = new ScrollMagic.Scene({
    duration: "200%", // the scene should last for a scroll distance of  100% = Window Height
    offset: window.innerHeight, // start this scene after scrolling for 10px
    triggerHook: 1,
    // triggerElement: '.scroll'
})
.setTween(tweenScrollWord)
// .addIndicators({name: 'Scroll word scene'})
.addTo(controller); // assign the scene to the controller


// build Overlay tween
var tweenOverlay = TweenMax.to(".overlay", 1, {className: "+=active"});
// build Overlay scene
var sceneOverlay = new ScrollMagic.Scene({
    duration: "150%", // the scene should last for a scroll distance of  100% = Window Height
    offset: window.innerHeight, // start this scene after scrolling for 10px
    triggerHook: 1
})
.setTween(tweenOverlay)
// .addIndicators({name: 'Overlay scene'})
.addTo(controller); // assign the scene to the controller


// build Button tween
//var tweenButton = TweenMax.to(".overlay a", 1, {className: "+=active"});
// build Button scene
var sceneButton = new ScrollMagic.Scene({
    duration: "100%", // the scene should last for a scroll distance of  100% = Window Height
    offset: window.innerHeight, // start this scene after scrolling for 10px
    triggerHook: 0.9,
    triggerElement: '.overlay a'
})
.setClassToggle('.overlay a', 'active')
//.setTween(tweenButton)
.addIndicators({name: 'Button scene'})
.addTo(controller); // assign the scene to the controller