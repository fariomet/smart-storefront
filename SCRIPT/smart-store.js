
let lastScrollTop = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      navbar.classList.remove('show');
    //   navbar.classList.add('hide');
    } else {
      // Scrolling up
    //   navbar.classList.remove('hide');
      navbar.classList.add('show');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Safari
  });


  document.querySelectorAll('.wishlist-btn').forEach((btn, index) => {
    // Load wishlist state from localStorage
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  
    // Set initial state
    if (wishlist.includes(index)) {
      btn.textContent = '❤️';
    }
  
    btn.addEventListener('click', () => {
      let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  
      if (wishlist.includes(index)) {
        wishlist = wishlist.filter(i => i !== index); // remove
        btn.textContent = '🤍';
      } else {
        wishlist.push(index); // add
        btn.textContent = '❤️';
      }
  
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    });
  });


  const track = document.querySelector('.carousel-track');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;

  // Function to move the carousel
  function updateCarousel() {
    const slideWidth = track.offsetWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  // Click next
  nextButton.addEventListener('click', () => {
    if (currentIndex < track.children.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  });

  // Click prev
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  });

  // Handle window resize
  window.addEventListener('resize', updateCarousel);

