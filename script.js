// Инициализация слайдера после загрузки DOM
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.gallery-slider', {
        // Основные настройки
        loop: false,
        spaceBetween: 30,
        slidesPerView: 1,
        centeredSlides: false,
        
        // Пагинация
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: false,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
        
        // Навигация
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Эффекты перехода
        speed: 600,
        
        // Адаптивность
        breakpoints: {
            // Мобильные устройства (до 767px) - 1 слайд
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // Планшеты (768px - 1023px) - 2 слайда
            768: {
                slidesPerView: 2,
                spaceBetween: 25
            },
            // Десктоп (1024px и выше) - 3 слайда
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },
        
        // События
        on: {
            init: function () {
                console.log('Слайдер инициализирован');
            },
            slideChange: function () {
                console.log('Текущий слайд:', this.activeIndex + 1);
            }
        }
    });
});
