import './main.scss';
import '/node_modules/bootstrap-icons/font/bootstrap-icons.css';

window.onload = () => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  
  let selectTheme = document.querySelector(".selectTheme");
  selectTheme.addEventListener('change', () => {
    console.log(selectTheme.value)
    if ( selectTheme.value === 'light') {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light';
    } else  {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark';
    }
  })
}

// const darkTheme = localStorage.getItem('theme');
// let selectedTheme = darkTheme === "default" ? 'media' : 'class';
