// JavaScript cho thanh trượt
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(index) {
    const totalSlides = dots.length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    
    // Di chuyển thanh trượt
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Cập nhật điểm điều khiển
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

// Thiết lập sự kiện cho các điểm điều khiển
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        showSlide(i);
    });
});

// Tự động chuyển slide mỗi 3 giây
setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);