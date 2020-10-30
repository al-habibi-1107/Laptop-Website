// This timeline allows us to animate diffrent
// things at diffrent instances of time
const tl = gsap.timeline({defaults:{ease:"power1.out"}});

// pattern: [timeline].[the time ]("[name of object]",{animation,duration,stagger(one after the other)})
// to makes from the initial position already specified to the given position
// fromto can make both form and to attributes
tl.to('.text',{y:"0%",duration:1,stagger:0.25});
tl.to('.slider',{y:"-100%",duration:1.5});
tl.to('.intro',{y:"-100%",duration:1},"-=1");

tl.fromTo('nav',{opacity:0},{opacity:1,duration: 1});
tl.fromTo('.big-text',{opacity:0},{opacity:1,duration:1});
