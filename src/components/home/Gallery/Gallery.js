import React from "react";
import Slider from "react-slick";
import styles from "./Gallery.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const galleryImages = [
  "/images/gallery/clinic1.jpeg",
  "/images/gallery/clinic2.jpeg",
  "/images/gallery/cliinic3.jpeg",
  "/images/gallery/cliinic4.jpeg",
  "/images/gallery/cliinic5.jpeg",
  "/images/gallery/cliinic6.jpeg",
  "/images/gallery/cliinic7.jpeg",
  "/images/gallery/cliinic8.jpeg",
  "/images/gallery/cliinic9.jpeg",
];

const Gallery = () => {
  const settings = {
    dots: true, // Показывать точки под слайдером
    infinite: true, // Бесконечная прокрутка
    speed: 500,
    slidesToShow: 2, // Показываем по 2 фото
    slidesToScroll: 1,
    autoplay: true, // Авто-прокрутка
    autoplaySpeed: 3000, // Интервал в мс
    arrows: false, // ❌ Отключаем стрелки
  };

  return (
    <section id="gallery" className={styles.gallery}>
      <div className="container">
        <div className={styles.title}>Галерея клиники</div>
        <div className={styles.sliderWrapper}>
          <Slider {...settings}>
            {galleryImages.map((image, index) => (
              <div key={index} className={styles.slide}>
                <img
                  src={image}
                  alt={`Фото клиники ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
