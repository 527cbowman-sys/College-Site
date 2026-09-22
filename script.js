document.addEventListener('DOMContentLoaded', () => {
  const revealSection = document.querySelector('.reveal-section');
  const statNumbers = document.querySelectorAll('.stat-number');
  let animated = false;

  const animateNumbers = () => {
    statNumbers.forEach(num => {
      const target = +num.getAttribute('data-target');
      let current = 0;
      const increment = Math.ceil(target / 40);

      const updateCount = () => {
        current += increment;
        if (current < target) {
          num.innerText = current;
          setTimeout(updateCount, 30);
        } else {
          num.innerText = target;
        }
      };

      updateCount();
    });
  };

  // Safe reveal trigger
  const triggerReveal = () => {
    if (revealSection) {
      revealSection.classList.add('reveal-active');
      if (!animated) {
        animateNumbers();
        animated = true;
      }
    }
  };

  // Check if IntersectionObserver is supported
  if ('IntersectionObserver' in window && revealSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          triggerReveal();
        }
      });
    }, { threshold: 0.15 });

    observer.observe(revealSection);
  } else {
    // Fallback if observer is unsupported
    triggerReveal();
  }

  // Backup Safety Net: Make visible after 1 second if scroll event fails
  setTimeout(() => {
    triggerReveal();
  }, 1000);
});


document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      // Toggle menu visibility
      navMenu.classList.toggle('open');
      // Toggle hamburger to X animation
      hamburgerBtn.classList.toggle('open');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const exploreArrow = document.getElementById('explore-arrow');
  const targetSection = document.getElementById('by-the-numbers');
  const navbar = document.querySelector('.navbar');

  if (exploreArrow && targetSection) {
    exploreArrow.addEventListener('click', (e) => {
      e.preventDefault();

      // Account for the height of the fixed navbar header
      const navHeight = navbar ? navbar.offsetHeight : 0;
      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight;

      // Smooth scroll directly to the section
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  }
});




//ABOUT

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Hamburger Menu Toggle
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      hamburgerBtn.classList.toggle('open');
    });
  }

  // Smooth Scroll for Arrow Link
  const exploreArrow = document.getElementById('explore-arrow');
  const targetSection = document.getElementById('mission');
  const navbar = document.querySelector('.navbar');

  if (exploreArrow && targetSection) {
    exploreArrow.addEventListener('click', (e) => {
      e.preventDefault();
      
      const navHeight = navbar ? navbar.offsetHeight : 0;
      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  }
});


//ABOUT


