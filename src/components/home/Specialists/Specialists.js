import React from "react";
import Slider from "react-slick";
import styles from "./Specialists.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const specialists = [
  {
    name: "Безуглый Михаил Юрьевич",
    role: "Врач-хирург",
    image: "/images/doctors/bezugly.png",
  },
  {
    name: "Жуган Геннадий Витальевич",
    role: "Врач УЗД",
    image: "/images/doctors/djugan.png",
  },
  {
    name: "Евтушенко Татьяна Михайловна",
    role: "Эмбриолог",
    image: "/images/doctors/evtushenko.png",
  },
  {
    name: "Сулима Анна Николаевна",
    role: "Врач-акушер-гинеколог",
    image: "/images/doctors/sulima.png",
  },
  {
    name: "Селиванова Александра Владимировна",
    role: "Врач-акушер-гинеколог",
    image: "/images/doctors/selivanova.png",
  },
  {
    name: "Джерад Зиед",
    role: "Врач-гастроэнтеролог",
    image: "/images/doctors/jerad.png",
  },
];

const Specialists = () => {
  const settings = {
    dots: true, // Показывать точки под слайдером
    infinite: true, // Бесконечная прокрутка
    speed: 500,
    slidesToShow: 3, // Показываем по 3 специалиста за раз
    slidesToScroll: 1,
    autoplay: true, // Авто-прокрутка
    autoplaySpeed: 3000, // Интервал в мс
    arrows: false, // ❌ Отключаем стрелки
    responsive: [
      {
        breakpoint: 1024, // Для планшетов
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Для мобильных
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="specialists" className={styles.specialists}>
      <div className="container">
        <div className={styles.title}>Специалисты</div>
        <div className={styles.intro}>
          <div className={styles.subtitle}>Команда квалифицированных врачей</div>
          <div className={styles.description}>
            Наша команда состоит из высококвалифицированных специалистов с
            многолетним опытом работы, которые помогают нашим пациентам
            ежедневно.
          </div>
        </div>
        <div className={styles.sliderWrapper}>
          <Slider {...settings}>
            {specialists.map((spec, index) => (
              <div key={index} className={styles.card}>
                <img src={spec.image} alt={spec.name} className={styles.image} />
                <div className={styles.name}>{spec.name}</div>
                <div className={styles.role}>{spec.role}</div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Specialists;
