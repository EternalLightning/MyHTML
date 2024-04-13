window.addEventListener('scroll', function() {
    var navbar = document.getElementById('bar');
    var scrollDistance = window.scrollY || document.documentElement.scrollTop;

    // 计算透明度
    var opacity = scrollDistance / 1300; // 500是一个透明度变化的阈值，根据需要调整

    // 更新透明度
    navbar.style.backgroundColor = ;
});