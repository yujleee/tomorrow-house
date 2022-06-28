const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');
const gnbSearchHistoryList = gnbSearchHistory.querySelector(
  '.search-history-list'
);

const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
);
const deleteButtonList =
  gnbSearchHistoryList.querySelectorAll('.button-delete');

function closeGnbSearch() {
  gnbSearchHistory.classList.remove('is-active');
  window.removeEventListener('click', closeGnbSearchHistory);
}

function openGnbSearchHistory() {
  if (gnbSearchHistoryList.children.length === 0) return;

  gnbSearchHistory.classList.add('is-active');
  window.addEventListener('click', closeGnbSearchHistory);
}

function closeGnbSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) closeGnbSearch();
}

function deleteAllHistoryItems() {
  gnbSearchHistoryList.innerHTML = '';
  closeGnbSearch();
}

function deleteSearchHistoryItem(e) {
  e.stopPropagation();
  const itemToDelete = this.parentNode;
  gnbSearchHistoryList.removeChild(itemToDelete);

  if (gnbSearchHistoryList.children.length === 0) closeGnbSearch();
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);
deleteAllButton.addEventListener('click', deleteAllHistoryItems);

deleteButtonList.forEach((button) => {
  button.addEventListener('click', deleteSearchHistoryItem);
});
