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

const detailsBoxes = document.getElementsByClassName('details-box');
const hiddenBoxes = document.getElementsByClassName('hide');

for (let i = 0; i < detailsBoxes.length; i++) {
  detailsBoxes[i].addEventListener('click', () => {
    for (let j = 0; j < hiddenBoxes.length; j++) {
      if (i !== j) {
        hiddenBoxes[j].style.display = 'none';
      } else {
        hiddenBoxes[j].style.display = 'block';
        detailsBoxes[i].style.width = '100%';
      }
    }
  });
}
