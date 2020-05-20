$(function () {
    TweenMax.from($('.bgBox~*'), 3, { scale: 5, opacity: 0, delay: 0 });
    TweenMax.from($('.bgBox'), 3, { scale: 1, opacity: 0, delay: 0 });
    TweenMax.to($('.bgBox'), 3, { scale: 1, opacity: 1, delay: 0 });
    TweenMax.from($('.theNum'), 3, { scale: 4, y: "-400%", x: "10%", opacity: 0, ease: Power3.easeInOut, delay: 0 });
    TweenMax.to($('.theNum'), 3, { opacity: 1, ease: Power3.easeInOut, delay: 0 });
    TweenMax.from($('.theRefer'), 3, { scale: 4, y: "-380%", x: "-10%", opacity: 0, ease: Power3.easeOut, delay: 2 });
    TweenMax.to($('.theRefer'), 3, { opacity: 1, ease: Power3.easeOut, delay: 2 });
    TweenMax.from($('.theTitle'), 3.5, { scale: 5, y: "0%", x: "10%", opacity: 0, ease: Power3.easeOut, delay: 3 });
    TweenMax.to($('.theTitle'), 3.5, { opacity: 1, ease: Power3.easeOut, delay: 3 });
    TweenMax.from($('.theScarf'), 4.2, { scale: 5, y:"200%",x:"0", opacity:0,ease: Power2.easeOut,delay:4 });
    TweenMax.to($('.theScarf'), 4.2, { opacity:1, ease: Power2.easeOut,delay:4 });
    TweenMax.to($('.bgBox~*'), 3, { scale: 1, opacity: 1, delay: 6 });
})
