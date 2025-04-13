import React from "react";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (

    <section id="contacts" className={styles.contacts}>
      <div className="container">
        <div className={styles.title}>Контакты</div>
        <div className={styles.subtitle}>Свяжитесь с нами удобным для вас способом</div>

        <div className={styles.contactWrapper}>
          {/* Левый блок с контактами */}
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <div className={styles.contactItemTitle}>Адрес</div>
              <div className={styles.contactItemText}>ул. Жильцовой, 4, Симферополь</div>
              </div>

            <div className={styles.contactItem}>
            <div className={styles.contactItemTitle}>Телефон</div>
                <div className={styles.contactItemText}>+7 (978) 096-11-80</div>
            </div>

            <div className={styles.contactItem}>
            <div className={styles.contactItemTitle}>Электронная почта</div>
            <div className={styles.contactItemText}>issue@vash-doktor.com</div>
            </div>
          </div>

            {/* Правый блок с картой */}
            <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2740.4481342542535!2d34.09449841578895!3d44.949829279098576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40eb3d8df57f57c7%3A0xe69915837849cf02!2z0YPQuy4g0JbQuNGC0YLRgdC60LDRjywgNCwg0KHQtdCy0LXRgNC90Y8sINCf0YDQuNC90L7Qu9C-0LrQsCDQvtCx0LsuLCA5NTAwMA!5e0!3m2!1sru!2sru!4v1713017789981!5m2!1sru!2sru"
              width="100%"
              height="300"
              frameBorder="0"
              title="Карта"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
