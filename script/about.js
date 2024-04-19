window.addEventListener('scroll', function() {
    var navbar = document.getElementById('bar');
    var scrollDistance = window.scrollY || document.documentElement.scrollTop;

    // 计算透明度
    var opacity = 0.85 + scrollDistance / 1000; // 500是一个透明度变化的阈值，根据需要调整

    // 更新透明度
    navbar.style.opacity = opacity.toString();
});

var navRightClick = document.getElementById('nav_trigger');
var sideBar = document.querySelector('nav');

window.addEventListener('click', e => {
    var target = e.target;
    if(!target.contains(sideBar) && !target.contains(navRightClick)){
        sideBar.classList.remove('show');
    }
});

navRightClick.addEventListener('click', function(){
    sideBar.classList.add('show');
});

