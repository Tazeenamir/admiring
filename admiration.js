const slideshow = document.querySelector('.slideshow');
    const aboutSection = document.querySelector('#about-section');
    const listenLink = document.getElementById('listen-link');
    const audioElement = new Audio('Most-inspirational-speech-by-Muniba-Mazari.mp3'); 
    let isPlaying = false;

    let slideIndex = 0;

    function showSlides() {
      const slides = slideshow.querySelectorAll('img');

      slides.forEach(slide => {
        slide.style.display = 'none';
      });

      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      slides[slideIndex - 1].style.display = 'block';

      setTimeout(showSlides, 2000); 
    }

    showSlides();

    document.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowDown') {
        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        aboutSection.classList.add('focused');
      } else if (event.key === 'ArrowUp') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        aboutSection.classList.remove('focused');
      }
    });

    listenLink.addEventListener('click', function (event) {
      event.preventDefault(); 
      if (isPlaying) {
        audioElement.pause();
        isPlaying = false;
      } else {
        audioElement.play();
        isPlaying = true;
      }
    });

    listenLink.addEventListener('dblclick', function (event) {
      event.preventDefault();
      audioElement.pause();
      isPlaying = false;
    });

    // Animation when scrolling down
    const animatedText = document.querySelector('.animated-text');

    function animateText() {
      const position = animatedText.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight - 100) {
        animatedText.classList.add('animate');
      }
    }

    window.addEventListener('scroll', animateText);