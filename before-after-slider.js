(function( $ ) {
    
       $.fn.hanBeforeAfterSlider = function(c) {
            //console.log(c);
            var point = parseInt(c.width)/2;
            $(this).css("width",c.width);
            $(this).css("height",c.height);
            $(this).css("margin","0 auto");
            $(this).css("position","relative");


            var i1 = document.createElement("img");
            var i2 = document.createElement("div");

            $(i1).attr("id","firstImage");
            $(i1).attr("src",c.firstImage);
            $(i1).css({
                "width":c.width,
                "height":"auto",
                "position":"absolute",
            });

            

            $(i2).css({
                "background-image":"url("+c.secondImage+")",
                "background-size":"cover",
                "width":point+"px",
                "position":"absolute",
                "background-repeat": "no-repeat",
                "border-right":"1px solid gray"
            });

            
            $(this).append(i1);
            var h = document.getElementById('firstImage').getBoundingClientRect();;
            console.log(h);

            //var height = $(i1).height();
            console.log("height",h);
            //$(i2).css("height",h+"px");
            $(this).append(i2);

            console.log("point",point);
            
        };
    
   }( jQuery ));