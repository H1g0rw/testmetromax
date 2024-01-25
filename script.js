let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  let touchStartX;

  document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    updateSlider();
  });

  document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = totalSlides - 1;
    }
    updateSlider();
  });

  document.getElementById('slider-container').addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });

  document.getElementById('slider-container').addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchDiff = touchStartX - touchEndX;

    if (touchDiff > 50) {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
      } else {
        currentSlide = 0;
      }
    } else if (touchDiff < -50) {
      if (currentSlide > 0) {
        currentSlide--;
      } else {
        currentSlide = totalSlides - 1;
      }
    }
    updateSlider();
  });

  function updateSlider() {
    const sliderWrapper = document.getElementById('slider-wrapper');
    const newTransformValue = -currentSlide * 100 + '%';
    sliderWrapper.style.transform = 'translateX(' + newTransformValue + ')';
  }