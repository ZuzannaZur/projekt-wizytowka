
const button = document.querySelector('.page-header__button--js');
const clickFunction = (e) => {
    const header = document.querySelector('.person__name--js');
    header.innerHTML = 'klik, klik!'
    
}

button.addEventListener('click', clickFunction)