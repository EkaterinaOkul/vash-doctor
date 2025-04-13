import React from "react";
import styles from "./Reviews.module.css";

const reviewsData = [
  {
    name: "Екатерина У.",
    text: "Хорошая клиника,в которой работают профессионалы своего дела. Вежливый персонал,приятная обстановка",
    rating: 5,
  },
  {
    name: "Мария К.",
    text: "Долго искала куда пойти в Симферополе, по отзывам выбрала «Ваш Доктор» и не пожалела. Чисто, аккуратно, без очередей. Также мне очень повезло со специалистом: Ольга Александровна — ТОП!",
    rating: 4,
  },
  {
    name: "Татьяна С.",
    text: "Хочу сказать большое спасибо, Сулиме Анне Николаевне, за исполнение нашей мечты, за рождение нашего сыночка. Это просто чудо, на которое мы смотрим каждый день и не верим в наше счастье.",
    rating: 5,
  },
];



const Reviews = () => {
  return (
    <section reviews className={styles.reviews}>
      <div className="container">
        <div className={styles.title}>
          Больше, чем просто<br></br> слова благодарности
        </div>
        <div className={styles.reviewList}>
          {reviewsData.map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <div className={styles.reviewName}>{review.name}</div>
              <div className={styles.reviewText}>{review.text}</div>
              <div className={styles.reviewRating}>
                Пациент Клиники Ваш Доктор
              </div>
            </div>
          ))}
        </div>
        <a
          href="https://yandex.ru/maps/org/vash_doktor/1119274437/reviews/?ll=34.105457%2C44.955338&z=15"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.allReviewsButton}
        >
          Смотреть все отзывы
        </a>
      </div>
    </section>
  );
};

export default Reviews;
