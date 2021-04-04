import './main.scss';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

let selectTheme = document.querySelector(".selectTheme");

let valueTheme = selectTheme.value;
localStorage.theme = 'dark';

console.log(localStorage)