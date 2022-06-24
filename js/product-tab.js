const productTab = document.querySelector('.product-tab');
const productTabList = productTab.querySelectorAll('button');

let currentActiveTab = productTab.querySelector('.is-active');

function activeTab() {
  const tabItem = this.parentNode;

  if (currentActiveTab !== tabItem) {
    tabItem.classList.add('is-active');
    currentActiveTab.classList.remove('is-active');
    currentActiveTab = tabItem;
  }
}

productTabList.forEach((button) => button.addEventListener('click', activeTab));
