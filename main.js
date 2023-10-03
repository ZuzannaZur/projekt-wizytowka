
const button = document.querySelector('.page-header__button--js');
const clickCountElement = document.getElementById('clickCount');
let clickCount = 0;

const clickFunction = (e) => {
    const header = document.querySelector('.person__name--js');
    header.innerHTML = 'klik, klik!';
    clickCount++;

    clickCountElement.textContent = clickCount;
}

button.addEventListener('click', clickFunction);