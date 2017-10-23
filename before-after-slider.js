(function($) {

    $.fn.hanBeforeAfterSlider = function(c) {
        //console.log(c);
        var point = parseInt(c.width) / 2;
        $(this).css({
            "width": c.width,
            "height": c.height
        });

        var i1 = document.createElement("img");
        var i2 = document.createElement("div");

        $(i1).attr("src", c.firstImage);
        $(i1).css({
            "height": c.height,
            "position": "absolute",
        });

        $(i2).css({
            "background-image": "url(" + c.secondImage + ")",
            "background-size": "cover",
            "width": c.start,
            "height": c.height,
            "position": "absolute",
            "background-repeat": "no-repeat",
            "border-right": "1px solid gray"
        });

        var offset = $(i2).offset();
        $(this).mousemove(function(event) {
            offset = $(i2).offset();
            $(i2).css("width", event.pageX - offset.left);
        });

        $(this).append(i1);
        $(this).append(i2);
    };

}(jQuery));