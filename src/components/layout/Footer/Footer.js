import React from "react";
import styles from "./Footer.module.css";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          {/* Левая часть с логотипом */}
          <div className={styles.footerLogo}>
            <div className={styles.footerTitle}>
              ООО Медицинская клиника <br />
              Ваш доктор
            </div>
            <div className={styles.footerSubtitle}>
              Современные методы лечения и индивидуальный подход к каждому пациенту.
            </div>
          </div>

          {/* Средняя часть – навигация */}
          <div className={styles.footerNav}>
            <div className={styles.footerNavTitle}>Меню</div>
            <ul>
              <li><button onClick={() => scrollToSection("about")}>О Нас</button></li>
              <li><button onClick={() => scrollToSection("specialists")}>Врачи</button></li>
              <li><button onClick={() => scrollToSection("services")}>Услуги</button></li>
              <li><button onClick={() => scrollToSection("gallery")}>Галерея</button></li>
              <li><button onClick={() => scrollToSection("contacts")}>Контакты</button></li>
            </ul>
          </div>

          {/* Правая часть – контакты */}
          <div className={styles.footerContacts}>
            <div className={styles.footerContactsTitle}>Контакты</div>
            <div className={styles.footerContactsText}>ул. Жильцовой, 4, Симферополь</div>
            <div className={styles.footerContactsText}>
              <a href="tel:+79780961180">+7 (978) 096-11-80</a>
            </div>
            <div className={styles.footerContactsText}>
              <a href="mailto:issue@vash-doktor.com">issue@vash-doktor.com</a>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomTitle}>
            ИМЕЮТСЯ ПРОТИВОПОКАЗАНИЯ. НЕОБХОДИМО ПРОКОНСУЛЬТИРОВАТЬСЯ СО СПЕЦИАЛИСТОМ
          </div>
          <div className={styles.footerBottomText}>
            2025 ООО МК «Ваш доктор» Все права защищены. Запрещено использование материалов
            сайта без согласия его авторов и обратной ссылки
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
