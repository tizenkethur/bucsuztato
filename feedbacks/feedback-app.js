const links = document.querySelectorAll('a');
links.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

function openNav() {
  const mainContainerWidth =
    document.getElementById('main-container').clientWidth;
  if (mainContainerWidth <= 600) {
    document.getElementById(
      'mySidenav'
    ).style.width = `${mainContainerWidth}px`;
  } else {
    document.getElementById('mySidenav').style.width = '300px';
  }
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');
var index = 0;

function prevSlide(n) {
  index += n;
  console.log('prevSlide is called');
  changeSlide();
}

function nextSlide(n) {
  index += n;
  changeSlide();
}

changeSlide();

function changeSlide() {
  if (index > slides.length - 1) index = 0;

  if (index < 0) index = slides.length - 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[index].style.display = 'block';
}
