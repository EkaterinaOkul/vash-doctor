import React, { useState } from "react";
import styles from "./Services.module.css"; 

const servicesData = [
  {
    title: "Гинекология",
    description: "Полный цикл — от диагностики заболевания до результатов лечения инфекционных, эндокринных (гормональных) заболеваний.",
  },
  {
    title: "ЭКО",
    description: "Используем все виды вспомогательных репродуктивных технологий — от базового ЭКО до ЭКО с ИКСИ или донорским материалом.",
  },
  {
    title: "Диагностика",
    description: "Сделать УЗИ внутренних органов, сдать клинические анализы, гормональное обследование, проверить проходимость маточных труб и провести другие исследования.",
  },
  {
    title: "Урология",
    description: "Уролог – это врач, который специализируется на диагностике и лечении всех заболеваний мочевыделительной системы (от почек и мочеточников до мочевого пузыря, уретры).",
  },
  {
    title: "Гастроэнтерология",
    description: "В ходе консультации гастроэнтеролога в клинике Ваш доктор будет правильно подобран метод обследования, что позволит правильно установить диагноз и назначить эффективное лечение.",
  },
  {
    title: "Эндокринология",
    description: "Диагностика, лечение сахарного диабета I и II типов и его осложнений: подбор инсулинотерапии и сахароснижающих препаратов.",
  },
];

const Services = () => {
  const [openService, setOpenService] = useState(null);

  const toggleService = (index) => {
    setOpenService(openService === index ? null : index);
  };

  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className={styles.servicesTitle}>Услуги</div>
        <div className={styles.servicesContent}>
          <div className={styles.servicesInfo}>
            <div className={styles.servicesInfoTitle}>Наша клиника предоставляет все виды услуг для лечения бесплодия</div>
            <span className={styles.badge}>Индивидуальная тактика достижения беременности</span>
          </div>
          <div className={styles.servicesList}>
            {servicesData.map((service, index) => (
              <div key={index} className={styles.serviceItem}>
                <button className={styles.serviceTitle} onClick={() => toggleService(index)}>
                  {service.title}
                </button>
                {openService === index && (
                  <div className={styles.serviceDescription}>
                    <div>{service.description}</div>
                    <a 
                      href="https://online-vash-doctor.medods.ru"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.bookButton}
                    >
                      Записаться
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
