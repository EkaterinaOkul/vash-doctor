import React, { useState } from "react";import styles from "./AboutPage.module.css";
import teamPhoto from "../../../assets/command.png";
import videoPreview from "../../../assets/video-preview.jpg"; // Добавь свою картинку в папку assets



const AboutPage = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false); // ✅ Объявляем состояние

  return (
    <div className={styles.aboutPage}>
      <div className="container">
        <div className={styles.title}>О Нас</div>
        <div className={styles.intro}>
          Мы – современный медицинский центр, предоставляющий широкий спектр услуг по диагностике, лечению и профилактике различных заболеваний.  
          
        </div>

        <section className={styles.teamBlock}>
          <div className={styles.textBlock}>
            <div className={styles.teamTitle}>Наша команда</div>
            <div className={styles.teamDescription}>
              В нашей клинике работают профессионалы своего дела. Опытные врачи, внимательные медсестры и заботливый персонал – мы создаем комфортные условия для каждого пациента.
            </div>
          </div>
          <div className={styles.imageBlock}>
            <img src={teamPhoto} alt="Наша команда" className={styles.teamImage} />
          </div>
        </section>

    

        {/* Блок "Почему выбирают нас" */}
        <section className={styles.advantagesSection}>
          <div className={styles.subtitle}>Почему выбирают нас?</div>
          <div className={styles.advantagesGrid}>
            <div className={styles.advantageItem}> Высокоточное оборудование</div>
            <div className={styles.advantageItem}> Врачи с многолетним опытом</div>
            <div className={styles.advantageItem}> Удобное расположение центра</div>
            <div className={styles.advantageItem}> Доступные цены и акции</div>
          </div>
        </section>
  {/* Блок "Видео о нас" */}
  <section className={styles.videoSection}>
          <div className={styles.videoWrapper} onClick={() => setIsVideoLoaded(true)}>
            {isVideoLoaded ? (
              <iframe
                src="https://vk.com/video_ext.php?oid=-205510375&id=456239060&hd=2"
                width="100%"
                height="400"
                frameBorder="0"
                allowFullScreen
                className={styles.video}
                title="Видео о клинике"
              ></iframe>
            ) : (
              <div className={styles.preview}>
                <img src={videoPreview} alt="Превью видео" className={styles.previewImage} />
                <div className={styles.playButton}>▶</div>
              </div>
            )}
          </div>
        </section>
       
       
      </div>
    </div>
  );
};

export default AboutPage;
