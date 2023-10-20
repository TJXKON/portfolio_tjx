
const items = document.querySelectorAll('.trans-item');

function checkScroll() {
  const screenPosition = window.innerHeight;

  items.forEach((item) => {
    const elementPosition = item.getBoundingClientRect().top;

    if (elementPosition < screenPosition * 0.85) {
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';

    }
  });
}

window.addEventListener('scroll', checkScroll);