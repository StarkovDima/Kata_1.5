document.addEventListener("DOMContentLoaded", () => {
    if (window.matchMedia('(max-width: 767px)').matches) {
        const swiper = new Swiper('.swiper', {

            direction: 'horizontal',
            loop: true,
            spaceBetween: 16,
            width: 240,

            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }

        });
    }


    const brandsShowMore = document.querySelector('.show-more__btn');
    const brandsContainer = document.querySelector('.brands__list-items');
    const brandsShowMoreTxt = brandsShowMore.querySelector('.show-more__text');

    const toggleBrandsShowMore = () => {
        brandsContainer.classList.toggle('brands__list-items--show-more');
        brandsShowMoreTxt.classList.toggle('show-more__text--hide');

        if (brandsContainer.classList.contains('brands__list-items--show-more')) {

            brandsShowMoreTxt.textContent = 'Скрыть';
        } else {
            brandsShowMoreTxt.textContent = 'Показать все';
        }
    }

    brandsShowMore.addEventListener('click', toggleBrandsShowMore);
});