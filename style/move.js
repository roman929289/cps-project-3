const hideDiv = document.querySelector('.hide-div')
const hiderBtn = document.querySelector('.hider')
const input = document.querySelector('.input-hide')

hiderBtn.addEventListener('click', () => {
    if (hideDiv.classList.contains('nodisplay') == true){
        hideDiv.classList.remove('nodisplay')
        input.classList.add('rotate');
        hiderBtn.value = 'Скрыть';
    } else {
        hideDiv.classList.add('nodisplay');
        input.classList.remove('rotate');
        hiderBtn.value = '      Показать все';
        
    }

})

const swiper = new Swiper('.swiper', {
    slidesPerView: 1.2,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});