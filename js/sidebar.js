const sidebarMenuButton = document.querySelector('.gnb-icon-button.is-menu');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

function handleSidebar() {
  sidebar.classList.toggle('is-active');
  overlay.classList.toggle('is-active');
}

sidebarMenuButton.addEventListener('click', handleSidebar);
overlay.addEventListener('click', handleSidebar);
