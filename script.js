// Ждем, пока весь DOM будет загружен
document.addEventListener('DOMContentLoaded', function () {
    // Инициализируем новый экземпляр Swiper после загрузки DOM
    const swiper = new Swiper('.gallery-slider', {
        loop: false, // Отключаем бесконечный цикл для правильного отображения пагинации
        spaceBetween: 30, // Устанавливаем расстояние между слайдами
        slidesPerView: 1, // По умолчанию 1 слайд
        centeredSlides: false,
        
        // Пагинация
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: false, // Отключаем для показа всех буллетов
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
        
        // Навигация
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Адаптивность
        breakpoints: {
            // При ширине экрана >= 768px
            768: {
                slidesPerView: 2, // Показываем 2 слайда
                spaceBetween: 20
            },
            // При ширине экрана >= 1024px
            1024: {
                slidesPerView: 3, // Показываем 3 слайда
                spaceBetween: 30
            }
        }
    });
});
