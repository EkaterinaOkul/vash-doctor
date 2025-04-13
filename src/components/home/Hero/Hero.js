import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Левый блок */}
        <div className={styles.content}>
          <h1 className={styles.title}>Клиника, которой <br></br> доверяют семьи</h1>
          <div className={styles.subtitle}>Путь к родительству может быть<br></br> непростым, но вы не одни. </div>
          <a 
            href="https://online-vash-doctor.medods.ru" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.button}
          >
            Записаться на приём
          </a>
        </div>

        {/* Правый блок (Видео) */}
        <div className={styles.videoContainer}>
          <video autoPlay loop muted className={styles.video}>
            <source src="/images/hero/herovideo.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
        </div>
      </div>

      {/* Карточки под Hero */}
      <div className={styles.stats}>
        <div className={styles.card}>
          <span className={styles.cardNumber}>25 лет</span>
          <span className={styles.cardText}>Опыт оказания медицинских услуг</span>
        </div>
        <div className={styles.card}>
          <span className={styles.cardNumber}>5000+</span>
          <span className={styles.cardText}>Счастливых семей</span>
        </div>
        <div className={styles.card}>
          <span className={styles.cardBigText}>
            Визит в нашу клинику гарантирует, что вы находитесь в руках профессионалов
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
