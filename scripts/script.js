// Variables

const english = document.querySelectorAll ('.en');

const spanish = document.querySelectorAll ('.es');

const language = document.querySelector ('#language');

const light_1 = document.querySelector ('#light-switch-1');

const light_2 = document.querySelector ('#light-switch-2');

const theme = document.querySelector ('#theme');

const github = document.querySelector ('#github');

const linkedin = document.querySelector ('#linkedin');

const body = document.querySelector ('body');

const menu = document.querySelector ('.menu');

const logo = document.querySelector ('#logo');

const menu_colapse = document.querySelector ('#colapse-menu-1');

const hidden_menu = document.querySelector ('.hidden-menu');

const imgOpacity = [
    {opacity: '0%'},
    {opacity: '50%'},
    {opacity: '100%'}
];

const imgTime_1 = {
    duration: 2000,
    iterations: 1,
}

const imgTime_2 = {
    duration: 100,
    iterations: 1,
}

// Function declarations

light_1.addEventListener ('click', () => {
    theme.href = "styles/dark-theme.css";
    body.animate(imgOpacity, imgTime_1);
    language.src = 'images/language-2.png';
    github.src = 'images/github-2.png';
    linkedin.src = 'images/linkedin-2.png';
    logo.href = 'images/logo-2.png'
    menu_colapse.src = 'images/menu-2.png'
});

light_2.addEventListener ('click', () => {
    theme.href = "styles/light-theme.css";
    body.animate(imgOpacity, imgTime_1);
    language.src = 'images/language-1.png';
    github.src = 'images/github-1.png';
    linkedin.src = 'images/linkedin-1.png';
    logo.href = 'images/logo-1.png'
    menu_colapse.src = 'images/menu-1.png'
});

language.addEventListener ('click', () => {
    spanish.forEach(spanish => {
        spanish.classList.toggle('active');
        body.animate(imgOpacity, imgTime_2);
    })
    english.forEach(english => {
        english.classList.toggle('active');
        body.animate(imgOpacity, imgTime_2);
    })
});

menu_colapse.addEventListener ('click', () => {
    hidden_menu.classList.toggle('active');
    hidden_menu.style.padding = '15px';
    hidden_menu.style.alignItems = 'flex-end';
    hidden_menu.style.position = 'fixed';
    hidden_menu.style.top = '7%';
    hidden_menu.style.right = '9%';
    hidden_menu.style.borderRadius = '4px';
    hidden_menu.style.textDecoration = 'none';
    hidden_menu.style.gap = '15px';
});