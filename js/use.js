$(function () {
    TweenMax.from($('.header'), 4, { scale: 1, opacity: 0, delay: 0 });
    TweenMax.to($('.header'), 4, { scale: 1, opacity: 1, delay: 0 });
    TweenMax.from($('.theNum'), 4, { scale: 4, y: "-400%", x: "10%", opacity: 0, ease: Power3.easeInOut, delay: 0 });
    TweenMax.to($('.theNum'), 4, { opacity: 1, ease: Power3.easeInOut, delay: 0 });
    TweenMax.from($('.theRefer'), 4, { scale: 4, y: "-380%", x: "-10%", opacity: 0, ease: Power3.easeOut, delay: 2.8 });
    TweenMax.to($('.theRefer'), 4, { opacity: 1, ease: Power3.easeOut, delay: 2.8 });
    TweenMax.from($('.theTitle'), 4.5, { scale: 5, y: "0%", x: "10%", opacity: 0, ease: Power3.easeOut, delay: 4 });
    TweenMax.to($('.theTitle'), 4.5, { opacity: 1, ease: Power3.easeOut, delay: 4 });
    TweenMax.from($('.theScarf'), 6, { scale: 5, y:"200%",x:"0", opacity:0,ease: Power2.easeOut,delay:4 });
    TweenMax.to($('.theScarf'), 6, { opacity:1, ease: Power2.easeOut,delay:4 });
    TweenMax.from($('.dayList'), 4, { scale:2,y:"1100%",x:"0", opacity:0,ease: Power2.easeOut,delay:6 });
    TweenMax.to($('.dayList'), 4, { opacity:1, ease: Power2.easeOut,delay:6 });
})
