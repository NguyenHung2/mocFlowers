document.addEventListener('scroll', function() {
    const headerMain = document.getElementById('header-main');
    if (window.scrollY > 0) {
        headerMain.style.boxShadow = '0px 2px 4px 0px #0D1E251A'; // Hiện box-shadow khi cuộn
    } else {
        headerMain.style.boxShadow = 'none'; // Ẩn box-shadow khi không cuộn
    }
});