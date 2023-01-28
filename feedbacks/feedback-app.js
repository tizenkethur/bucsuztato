const links = document.querySelectorAll('a');
links.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

function openNav() {
  document.getElementById('mySidenav').style.width = '300px';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

const slidesContainer = document.getElementById('slides-container');
const slide = document.querySelector('.slide');
const prevButton = document.getElementById('slide-arrow-prev');
const nextButton = document.getElementById('slide-arrow-next');

nextButton.addEventListener('click', () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener('click', () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
