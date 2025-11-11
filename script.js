* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #260101;
}

.container {
    width: 100%;
    max-width: 1200px;
    padding: 20px;
}

.gallery-slider {
    width: 100%;
    padding: 20px 0;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
}

.gallery-image {
    width: 100%;
    height: 100%;
    max-width: 400px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Стили для кнопок навигации */
.swiper-button-prev,
.swiper-button-next {
    color: #d9b991;
    background: rgba(0, 0, 0, 0.5);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: -25px;
}

.swiper-button-prev:after,
.swiper-button-next:after {
    font-size: 20px;
    font-weight: bold;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
    background: rgba(0, 0, 0, 0.7);
}

/* Стили для пагинации */
.swiper-pagination {
    position: relative;
    margin-top: 30px;
}

.swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: #d9b991;
    opacity: 0.5;
    margin: 0 6px;
}

.swiper-pagination-bullet-active {
    opacity: 1;
    background: #5372f0;
}

/* Адаптивность */
@media (max-width: 768px) {
    .container {
        padding: 10px;
    }
    
    .swiper-slide {
        height: 250px;
    }
    
    .swiper-button-prev,
    .swiper-button-next {
        width: 40px;
        height: 40px;
        margin-top: -20px;
    }
    
    .swiper-button-prev:after,
    .swiper-button-next:after {
        font-size: 16px;
    }
}
