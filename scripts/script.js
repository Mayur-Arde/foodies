'use strict';
// active navbar
const nav = document.querySelector('.navigation-wrap');
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add('scroll-on');
  } else {
    nav.classList.remove('scroll-on');
  }
};

// nav hide
const navBar = document.querySelectorAll('.nav-link');
const navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
  a.addEventListener('click', function () {
    navCollapse.classList.remove('show');
  });
});

// counter design
document.addEventListener('DOMContentLoaded', () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter('count1', 600, 1287, 3000);
  counter('count2', 3800, 5505, 2500);
  counter('count3', 300, 2040, 3000);
  counter('count4', 5600, 7110, 3000);
});