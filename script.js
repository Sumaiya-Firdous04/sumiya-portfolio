/*==================== toggle icon navbar ====================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
// let closeIcon = document.getElementById("close-icon");


menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*==================== scroll reveal ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      })

    };
  });

  /*==================== sticky navbar ====================*/
  let header = document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY > 100);

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};
/*==================== scroll sections active link ====================*/
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text',{
  strings: ['Software Developer','Frontend Developer', 'Full Stack Developer', 'JavaDeveloper'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true

});

// const circle = document.querySelectorAll('.circle');
// circles.forEach(elem=>{
//   var dots = elem.getAttribute('data-dots');
//   var marked = elem.getAttribute('data-percent');
//   var percent = Math.floor(dots*marked/100);
//   var points ="";
//   var rotate = 360/dots;

//   for(let i=0;i<dots;i++){
//     points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
//   }
//   elem.innerHTML = points;
// })



  let current = 0;
  const slides = document.querySelectorAll('.img-item');
  const details = document.querySelectorAll('.portfolio-detail');

  function updateSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    details.forEach((detail, i) => {
      detail.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    updateSlide(current);
  }

  function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    updateSlide(current);
  }

  // Initial display
  updateSlide(current);

function resetFormAfterSubmit() {
    setTimeout(() => {
      document.getElementById("contactForm").reset();
    }, 500); // Delay to ensure Web3Forms submission
  }


  const contactSection = document.getElementById('contact');
  const backToTopBtn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    const rect = contactSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      backToTopBtn.style.display = 'flex';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });


// const cardWidth = certCards[0].offsetWidth + 48; // Adjusted for new gap


  const certCarousel = document.getElementById("certCarousel");
  const leftArrow = document.getElementById("leftCertArrow");
  const rightArrow = document.getElementById("rightCertArrow");

  const cardWidth = 330 + 32; // card width + margin
  let scrollPosition = 0;

  leftArrow.addEventListener("click", () => {
    scrollPosition = Math.max(scrollPosition - cardWidth * 3, 0);
    certCarousel.style.transform = `translateX(-${scrollPosition}px)`;
  });

  rightArrow.addEventListener("click", () => {
    const maxScroll = certCarousel.scrollWidth - certCarousel.parentElement.offsetWidth;
    scrollPosition = Math.min(scrollPosition + cardWidth * 3, maxScroll);
    certCarousel.style.transform = `translateX(-${scrollPosition}px)`;
  });


// Example using Swiper.js or similar:

  // let currentIndex = 0;

  // function moveSlide(direction) {
  //   const carousel = document.getElementById("certCarousel");
  //   const cards = carousel.querySelectorAll(".certification-card");
  //   const total = cards.length;

  //   currentIndex += direction;
  //   if (currentIndex < 0) currentIndex = 0;
  //   if (currentIndex >= total) currentIndex = total - 1;

  //   const cardWidth = cards[0].offsetWidth + 20; // width + margin
  //   carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  // }



const carousel = document.getElementById("certCarousel");
// const leftArrow = document.getElementById("leftCertArrow");
// const rightArrow = document.getElementById("rightCertArrow");

let currentIndex = 0;
const totalCards = document.querySelectorAll(".cert-card").length;

function getCardWidth() {
  const card = document.querySelector(".cert-card");
  const style = window.getComputedStyle(card);
  return card.offsetWidth + parseInt(style.marginRight || 0);
}

function getVisibleCardsCount() {
  const containerWidth = document.querySelector(".cert-carousel-container").offsetWidth;
  return Math.floor(containerWidth / getCardWidth());
}

function updateCarousel() {
  const cardWidth = getCardWidth();
  const visibleCards = getVisibleCardsCount();
  const maxIndex = Math.max(0, totalCards - visibleCards);

  currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
  carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  // Adjust arrow visibility
  leftArrow.style.opacity = currentIndex === 0 ? "0.5" : "1";
  leftArrow.style.pointerEvents = currentIndex === 0 ? "none" : "auto";

  rightArrow.style.opacity = currentIndex === maxIndex ? "0.5" : "1";
  rightArrow.style.pointerEvents = currentIndex === maxIndex ? "none" : "auto";
}

rightArrow.addEventListener("click", () => {
  const visibleCards = getVisibleCardsCount();
  const maxIndex = Math.max(0, totalCards - visibleCards);
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
});

leftArrow.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

// window.addEventListener("resize", updateCarousel);
// updateCarousel();


// window.addEventListener("resize", updateCarousel);

// // Initial render
// updateCarousel();




  // Recalculate and reposition on resize
  window.addEventListener('resize', () => {
    updateCarousel();
  });

  // Initial position fix
  window.addEventListener('load', updateCarousel);

