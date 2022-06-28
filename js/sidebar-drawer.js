const drawerMenuButtonList = document.querySelectorAll('.drawer-menu-button');

function handleDrawMenu() {
  const drawMenu = this.parentNode;
  drawMenu.classList.toggle('is-open');
}

drawerMenuButtonList.forEach((button) => {
  button.addEventListener('click', handleDrawMenu);
});
