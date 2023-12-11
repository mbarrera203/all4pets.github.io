let menu = document.querySelector('.navbar');

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#menu-icon').addEventListener('click', function () {
    menu.classList.toggle("open-menu");
  });
});