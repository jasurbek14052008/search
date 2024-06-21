let body = document.body;
let lightDark = document.querySelector('.nav_right');
let themeText = document.querySelector('.theme-text');
let themeLogo = document.querySelector('.fa-solid');
let btn = document.querySelector('.search');
let searchInput = document.querySelector('.search_input');
let avatar = document.querySelector('.avatar');
let userName = document.querySelector('.user_name');
let nik = document.querySelector('.nik');
let bio = document.querySelector('.bio');
let joined = document.querySelector('.joined');
let repos = document.querySelector('.repos');
let net  = document.querySelector('.net')




let theme = localStorage.getItem('theme');
if (theme != null) {
  body.classList.add(theme);
};

lightDark.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.toggle('light');
    localStorage.setItem('theme', 'dark');
    themeText.textContent = 'LIGHT';
    themeLogo.classList.toggle('fa-moon');
    themeLogo.classList.toggle('fa-sun');
  } else {
    body.classList.toggle('light');
    localStorage.setItem('theme', 'light');
    themeText.textContent = 'DARK';
    themeLogo.classList.toggle('fa-moon');
    themeLogo.classList.toggle('fa-sun');
  }
});

let BASE_URL = 'https://api.github.com/users/';

btn.addEventListener('click', getData);

function getData() {
  let devName = searchInput.value;
  if (devName == '') {
    alert('qiymat kiriting');
  } else {
    fetch(BASE_URL + devName)
      .then((res) => res.json())
      .then((data) => {
        avatar.setAttribute('src', data.avatar_url);
        userName.textContent = data.name;
        nik.textContent = data.login;
        bio.textContent = data.bio;
        joined.textContent = new Date(data.created_at).toDateString();
      });
    searchInput.value = '';
  }
};

body.addEventListener('keypress', (e) => {
  if (e.code == 'Enter') {
    getData();
  }
});

    
    
    
    
    
    