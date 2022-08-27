const burger = document.getElementById('js-burger'),
  headerNavigation = document.getElementById('js-header-navigation'),
  navigationItems = document.getElementsByClassName('js-navigation-item');

burger.addEventListener('click', () => {
  headerNavigation.classList.toggle('header__navigation--show');
  burger.classList.toggle('burger--show');
});

for (const item of navigationItems) {
  item.addEventListener('click', () => {
    headerNavigation.classList.remove('header__navigation--show');
    burger.classList.remove('burger--show');
  });
}

export { burger, headerNavigation, navigationItems };
