var BAnimate = {
	scrollToElement : function(selector, delay){
        if (delay == undefined || delay == null)
            delay = 1000;
        $('html, body').animate({
            scrollTop: $(selector).offset().top
        }, delay);
    }
}
module.exports=BAnimate;