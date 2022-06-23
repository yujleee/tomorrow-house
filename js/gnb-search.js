const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');
const gnbSearchHistoryList = gnbSearchHistory.querySelector(
  '.search-history-list'
);

const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
);

function openGnbSearchHistory() {
  if (gnbSearchHistoryList.children.length === 0) return;

  gnbSearchHistory.classList.add('is-active');
  window.addEventListener('click', closeGnbSearchHistory);
}

function closeGnbSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    gnbSearchHistory.classList.remove('is-active');
    window.removeEventListener('click', closeGnbSearchHistory);
  }
}

function deleteAllHistoryItems() {
  gnbSearchHistoryList.innerHTML = '';
  gnbSearchHistory.classList.remove('is-active');
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);
deleteAllButton.addEventListener('click', deleteAllHistoryItems);
