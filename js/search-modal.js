const searchModal = document.querySelector('.search-modal');
const searchButton = document.querySelector('.gnb-icon-button.is-search');
const searchOverlay = document.querySelector('.overlay');
const searchModalCloseButton = searchModal.querySelector(
  '.search-modal-form .button-ghost'
);

function handleSearchModal() {
  searchModal.classList.toggle('is-active');
  searchOverlay.classList.toggle('is-active');
}

searchButton.addEventListener('click', handleSearchModal);
searchModalCloseButton.addEventListener('click', handleSearchModal);
