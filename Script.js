document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const images = sliderContainer ? sliderContainer.querySelectorAll('img') : [];
    let currentIndex = 0;

    if (images.length > 0 && prevBtn && nextBtn) {
        function showImage(index) {
            images.forEach((img, i) => {
                img.style.display = i === index ? 'block' : 'none';
            });
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        showImage(currentIndex); // Show the first image initially
        nextBtn.addEventListener('click', nextImage);
        prevBtn.addEventListener('click', prevImage);
    }
});

