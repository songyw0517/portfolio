/*global $, console*/
var slider = document.querySelector('.items'),
    body = document.querySelector('body'),
    isDown = false,
    startX,
    scrollLeft;

slider.scrollLeft = 1970;

slider.onmousedown = function (e) {
    'use strict';
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};

slider.onmouseup = function () {
    'use strict';
    isDown = false;
    slider.classList.remove('active');
};
body.onmouseup=function(){
    'use strict'
    isDown = false;
}
slider.onmouseleave = function () {
    'use strict';
    if (!isDown) {return;}
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    isDown = false;
};

slider.onmousemove = function (e) {
    'use strict';
    if (!isDown) { return; }
    e.preventDefault();
    var x = e.pageX - slider.offsetLeft,
        walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
};

function controlsSlider(num) {
    'use strict';
    var smooth = setInterval(function () {
        slider.scrollLeft += num;
    }, 10);
    setTimeout(function () {
        clearInterval(smooth);
    }, 210);
}

/*방향키를 누르면 이동함*/
window.onkeydown = function (e) {
    'use strict';
    var key = e.keyCode;
    if (key === 39) {
        controlsSlider(10);
    }
    if (key === 37) {
        controlsSlider(-10);
    }
};



