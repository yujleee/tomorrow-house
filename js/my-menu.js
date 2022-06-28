const myMenu = document.querySelector('.my-menu');
const myMenuButton = document.querySelector('.my-menu-button');

function toggleMyMenu() {
  if (!myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMyMenuOnClickingOutSide);
  }
  myMenu.classList.toggle('is-active');
}

function closeMyMenuOnClickingOutSide(e) {
  if (!myMenu.contains(e.target)) {
    myMenu.classList.remove('is-active');
    window.removeEventListener('click', closeMyMenuOnClickingOutSide);
  }
}

myMenuButton.addEventListener('click', toggleMyMenu);
