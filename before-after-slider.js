(function( $ ) {
    
       $.fn.hanBeforeAfterSlider = function(c) {
            //console.log(c);
            var point = c.width/2;
            $(this).css("width",c.width);
            $(this).css("height",c.height);
            $(this).css("margin","0 auto");

            var i1 = document.createElement("div");
            var i2 = document.createElement("div");

            $(i1).css({
                "background-image":"url("+c.firstImage+")",
                "background-size":"cover",
                "width":c.width,
                "height":c.height,
                "position":"absolute",
                "background-repeat": "no-repeat",
            });

            $(i2).css({
                "background-image":"url("+c.secondImage+")",
                "background-size":"cover",
                "width":c.width,
                "height":c.height,
                "position":"absolute",
                "background-repeat": "no-repeat",
                "background-position-x": 200+"px",
            });

            $(this).append(i1);
            $(this).append(i2);
            
        };
    
   }( jQuery ));