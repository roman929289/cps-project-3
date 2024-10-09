const hideDivs = document.querySelectorAll('.hide-div')
const hiderBtn = document.querySelector('.hider')
const input = document.querySelector('.input-hide')

hiderBtn.addEventListener('click', () => {
    hideDivs.forEach(hideDiv => {
        if (hideDiv.classList.contains('nodisplay')){
            hideDiv.classList.remove('nodisplay')
            input.classList.add('rotate');
            hiderBtn.value = 'Скрыть';
        } else {
            hideDiv.classList.add('nodisplay');
            input.classList.remove('rotate');
            hiderBtn.value = '      Показать все';
            
        }
    })
    

})

const swiper = new Swiper('.swiper', {
    slidesPerView: 1.2,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});