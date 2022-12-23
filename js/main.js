const langBtn = document.querySelector('.lang-select-btn');
const langOptions = document.querySelector('.lang-select__options');

langBtn.onclick = function () {
    langOptions.classList.toggle('none');
}