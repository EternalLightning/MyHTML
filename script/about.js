window.addEventListener('scroll', function() {
    var navbar = document.getElementById('bar');
    var scrollDistance = window.scrollY || document.documentElement.scrollTop;

    // 计算透明度
    var opacity = 0.85 + scrollDistance / 1000; // 500是一个透明度变化的阈值，根据需要调整

    // 更新透明度
    navbar.style.opacity = opacity.toString();
});

var sideBar = document.querySelector('nav');
var navRightClick = document.getElementById('nav_trigger');
var mask = document.getElementById('mask');

window.addEventListener('click', function(e) {
    var target = e.target;
    console.log(target);
    if (target.contains(mask)) {
        sideBar.classList.remove('showNav');
        mask.classList.remove('showMask');
    }
});

navRightClick.addEventListener('click', function() {
    console.log(1);
    sideBar.classList.add('showNav');
    mask.classList.add('showMask');
});