const english = document.querySelectorAll ('.en');

const spanish = document.querySelectorAll ('.es');

const language = document.querySelector ('#language');

const light = document.querySelector ('#light-switch');

language.addEventListener ('click', () => {
    spanish.forEach(spanish => {
        spanish.classList.toggle('active');
    })
      english.forEach(english => {
        english.classList.toggle('active');
    })
});
