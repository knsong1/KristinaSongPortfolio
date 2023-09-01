const contactAnimation = document.querySelectorAll('.slide-animation');

// Create an Intersection Observer
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
});

// Observe each projects-cards element
contactAnimation.forEach((card) => {
  observer2.observe(card);
});
