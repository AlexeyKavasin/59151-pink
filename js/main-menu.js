var menuItems = document.querySelector('.main-menu__items');
var toggleBtn = document.querySelector('.hamburger-menu__btn');
var crossIcon = document.querySelector('.hamburger-menu__cross-icon');
var hamIcon = document.querySelector('.hamburger-menu__ham-icon');

menuItems.classList.remove('no-js');
hamIcon.classList.remove('no-js');
hamIcon.classList.remove('hidden');

crossIcon.classList.add('hidden');
menuItems.classList.add('hidden');

toggleBtn.addEventListener('click', function() {
  menuItems.classList.toggle('hidden');
  crossIcon.classList.toggle('hidden');
  hamIcon.classList.toggle('hidden');
});
