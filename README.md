# JQuery slider plugin for "before vs after" comparison 
see live example here:
https://hanumanum.github.io/jquery-before-after-slider/index.html

![JQuery slider plugin before vs after comparison](https://raw.githubusercontent.com/hanumanum/before-after-slider/master/thumbnail.png)

## Installation

### Step 1
Include jquery and plugin file

```html
 <script src="node_modules/jquery/dist/jquery.js"></script>
 <script src="jquery-before-after-slider.min.js"></script>
```


### Step 2
Create wrapper for plugin

```html
     <div id="slider">
    </div>
```

### Step 3
Configure plugin and run it 

```javascript
var config = {
          "width": "700px",
          "height": "600px",
          "start": "25%",
          "firstImage": "images/IMG_6474_1.jpg",
          "secondImage": "images/IMG_6474_2.jpg"
      }

$(document).ready(function() {
    $("#slider").hanBeforeAfterSlider(config);
});
```

