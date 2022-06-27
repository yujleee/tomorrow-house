const productTab = document.querySelector('.product-tab');
const productTabList = productTab.querySelectorAll('button');
const TOP_HEADER_DESKTOP = 80 + 50 + 54;
const TOP_HEADER_MOBILE = 50 + 40 + 40;

let currentActiveTab = productTab.querySelector('.is-active');
let disableUpdating = false;

function activeTab() {
  const tabItem = this.parentNode;

  if (currentActiveTab !== tabItem) {
    disableUpdating = true;
    tabItem.classList.add('is-active');
    currentActiveTab.classList.remove('is-active');
    currentActiveTab = tabItem;

    setTimeout(() => {
      disableUpdating = false;
    }, 1000);
  }
}

function scrollToTabPanel() {
  const tabPanelId = this.parentNode.getAttribute('aria-labelledby');
  const tabPanel = document.querySelector(`#${tabPanelId}`);

  const scrollAmount =
    tabPanel.getBoundingClientRect().top -
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE);

  window.scrollBy({
    top: scrollAmount,
    behavior: 'smooth',
  });
}

productTabList.forEach((button) => {
  button.addEventListener('click', activeTab);
  button.addEventListener('click', scrollToTabPanel);
});

const productTabPanelIdList = [
  'product-spec',
  'product-review',
  'product-inquiry',
  'product-shipment',
  'product-recommendation',
];

const productTabPanelList = productTabPanelIdList.map((panelId) => {
  const tabPanel = document.querySelector(`#${panelId}`);
  return tabPanel;
});

const productTabPanelPositionMap = {};

function detectTabPanelPosition() {
  productTabPanelList.forEach((panel) => {
    const id = panel.getAttribute('id');
    const position = window.scrollY + panel.getBoundingClientRect().top;
    productTabPanelPositionMap[id] = position;
  });

  updateActiveTabOnScroll();
}

function updateActiveTabOnScroll() {
  // 스크롤 위치에 따라서 active tab 업데이트
  // 1. 현재 유저가 얼만큼 스크롤을 했는지? => window.scrollY
  // 2. 각 tabPanel의 y축 위치 => productTabPanelPositionMap

  if (disableUpdating) return;

  const scrolledAmount =
    window.scrollY +
    (window.innerWidth >= 768
      ? TOP_HEADER_DESKTOP + 80
      : TOP_HEADER_MOBILE + 8);
  let newActiveTab;

  if (scrolledAmount >= productTabPanelPositionMap['product-recommendation']) {
    newActiveTab = productTabList[4];
  } else if (scrolledAmount >= productTabPanelPositionMap['product-shipment']) {
    newActiveTab = productTabList[3];
  } else if (scrolledAmount >= productTabPanelPositionMap['product-inquiry']) {
    newActiveTab = productTabList[2];
  } else if (scrolledAmount >= productTabPanelPositionMap['product-review']) {
    newActiveTab = productTabList[1];
  } else {
    newActiveTab = productTabList[0];
  }

  // 페이지 끝까지 스크롤한 경우
  // window.innerWidth < 1200 -> orderCTA 존재. margin-bottom 56px 추가됨
  const bodyHeight =
    document.body.offsetHeight + (window.innerWidth < 1200 ? 56 : 0);

  if (window.scrollY + window.innerHeight === bodyHeight) {
    newActiveTab = productTabList[4];
  }

  if (newActiveTab) {
    newActiveTab = newActiveTab.parentNode;

    if (newActiveTab !== currentActiveTab) {
      newActiveTab.classList.add('is-active');

      if (currentActiveTab !== null) {
        currentActiveTab.classList.remove('is-active');
      }

      currentActiveTab = newActiveTab;
    }
  }
}

window.addEventListener('load', detectTabPanelPosition);
window.addEventListener('resize', detectTabPanelPosition);
window.addEventListener('scroll', updateActiveTabOnScroll);
