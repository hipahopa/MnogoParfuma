$(function () {
    /*inits*/
    initProductSliders();

    $(document).on("click", ".main_slider_block .prev", function () {
        var button = $(this);
        var visible_obj_img = $(".main_slider_block .slides_wrapper .slide:visible");
        var visible_obj_content = $(".main_slider_block .slides_content .slide:visible");
        var total_slides = $(".main_slider_block .slides_content .slide").length;
        $(".main_slider_block .slide:visible").fadeOut(500);
        if (visible_obj_img.data("number") > 1)
        {
            var new_visible_obj_img = $(".main_slider_block .slides_wrapper .slide.slide" + parseInt(visible_obj_img.data("number") - 1));
            var new_visible_obj_content = $(".main_slider_block .slides_content .slide.slide" + parseInt(visible_obj_img.data("number") - 1));
        }
        else
        {
            var new_visible_obj_img = $(".main_slider_block .slides_wrapper .slide.slide" + total_slides);
            var new_visible_obj_content = $(".main_slider_block .slides_content .slide.slide" + total_slides);

        }
        new_visible_obj_img.fadeIn(500);
        new_visible_obj_content.fadeIn(500);
         return false;
    });
    $(document).on("click", ".main_slider_block .next", function () {
        var button = $(this);
        var visible_obj_img = $(".main_slider_block .slides_wrapper .slide:visible");
        var visible_obj_content = $(".main_slider_block .slides_content .slide:visible");
        var total_slides = $(".main_slider_block .slides_content .slide").length;
        $(".main_slider_block .slide:not(.hide)").fadeOut(500);
        if (visible_obj_img.data("number") < total_slides )
        {
            var new_visible_obj_img = $(".main_slider_block .slides_wrapper .slide.slide" + parseInt(visible_obj_img.data("number") + 1));
            var new_visible_obj_content = $(".main_slider_block .slides_content .slide.slide" + parseInt(visible_obj_img.data("number") + 1));
        }
        else
        {
            var new_visible_obj_img = $(".main_slider_block .slides_wrapper .slide.slide" + 1);
            var new_visible_obj_content = $(".main_slider_block .slides_content .slide.slide" + 1);

        }
        new_visible_obj_img.fadeIn(500);
        new_visible_obj_content.fadeIn(500);
        return false;
    });

    $(document).on('click',".item_slider_block .prev",function(){
        var wrapper = $(this).parent(".products_slider");
        var in_wrapper = wrapper.find(".in_wrapper");
        var logo_wrap_inner_count = in_wrapper.find(".slide").length;
        var logo_visible_elements = 4;
        if(in_wrapper.css('margin-left')!=='0px')
        {
            var firsNotMuted = in_wrapper.find(".slide:not(.muted):eq(0)");
            var lastNotMuted = in_wrapper.find(".slide:not(.muted):eq(3)");
            firsNotMuted.prev(".slide").removeClass("muted");
            lastNotMuted.addClass("muted");
            in_wrapper.animate({
                marginLeft:'+=255'
            },100);
        }
        else{
            in_wrapper.find(".slide").addClass('muted');
            in_wrapper.find(".slide:gt("+(logo_wrap_inner_count - 5)+")").removeClass("muted");
            in_wrapper.animate({
                marginLeft:-(logo_wrap_inner_count-logo_visible_elements)*255
            },100);
        }
        return false;
    });
    $(document).on('click',".item_slider_block .next",function(){
        var wrapper = $(this).parent(".products_slider");
        var in_wrapper = wrapper.find(".in_wrapper");
        var logo_wrap_inner_count = in_wrapper.find(".slide").length;
        var logo_visible_elements = 4;
        if(in_wrapper.css('margin-left')!=="-"+(logo_wrap_inner_count-logo_visible_elements)*255+"px")
        {
            var firsNotMuted = in_wrapper.find(".slide:not(.muted):eq(0)");
            var lastNotMuted = in_wrapper.find(".slide:not(.muted):eq(3)");
            firsNotMuted.addClass("muted");
            lastNotMuted.next(".slide").removeClass("muted");
            in_wrapper.animate({
                marginLeft:'-=255'
            },100);
        }
        else{
            in_wrapper.find(".slide").addClass('muted');
            in_wrapper.find(".slide:lt(4)").removeClass("muted");
            in_wrapper.animate({
                marginLeft:0
            },100);
        }
        return false;
    });




});

function initProductSliders(){
    $(".item_slider_block").each(function(){
        var wrap = $(this);
        var inwrap = wrap.find(".in_wrapper");
        inwrap.width(inwrap.find(".slide").length * 255);
        inwrap.find(".slide::gt(3)").addClass("muted");
    });
}

