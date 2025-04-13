import React from "react";
import styles from "./LicensesPage.module.css";
import QRCode from "react-qr-code";  // Импортируем библиотеку для генерации QR-кодов

const LicensesPage = () => {
  const licenseLink = "https://roszdravnadzor.gov.ru/services/licenses?qrguid=271fc3c4a5e7823de71b8c2adbbab4dd"; 

  return (
    <div className={styles.licensesPage}>
      <div className="container">
        <h1 className={styles.title}>Лицензии и правовая информация</h1>

        <section className={styles.section}>
          <h2>ПРАВОВАЯ ИНФОРМАЦИЯ</h2>
          <p>
            Мы осуществляем деятельность на основании медицинской лицензии № ЛО-82-01-000940 от 05 ноября 2019 г., уведомления №173 от 14.05.2015.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Проверка лицензии</h2>
          <p>Сканируйте QR-код, чтобы проверить подлинность нашей лицензии:</p>
          <div className={styles.qrCodeContainer}>
            <QRCode value={licenseLink} size={128} /> {/* Генерация QR-кода */}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Обязательная информация</h2>
          <p><strong>Полное наименование:</strong> Общество с ограниченной ответственностью «Медицинская клиника «Ваш доктор»</p>
          <p><strong>Сокращенное наименование:</strong> ООО «МК «Ваш доктор»</p>
          <p><strong>Юридический адрес:</strong> 295017, Республика Крым, г. Симферополь, ул. Жильцовой, 4, оф. 4Б</p>
          <p><strong>Внесено в ЕГРЮЛ:</strong> Свидетельство серия № 1149102118879 от 12.12.2014г.</p>
        </section>

        <section className={styles.section}>
          <h2>График приема граждан</h2>
          <p><strong>Время приема:</strong> Понедельник с 12:00 до 13:00, пятница с 15:00 до 16:00</p>
          <p><strong>График приема врачей:</strong> По факту записи пациентов на прием</p>
        </section>

        <section className={styles.section}>
          <h2>Лекарственные препараты</h2>
          <p>Перечень жизненно необходимых и важнейших лекарственных препаратов для медицинского применения на 2025 год.</p>
        </section>

        <section className={styles.section}>
          <h2>Контакты контролирующих органов</h2>
          <p><strong>Министерство здравоохранения РФ:</strong> +7 (495) 628-44-53, info@rosminzdrav.ru</p>
          <p><strong>Министерство здравоохранения Республики Крым:</strong> +7 (3652) 605-878, minzdrav2014@mzdrav.rk.gov.ru</p>
          <p><strong>Росздравнадзор по Республике Крым:</strong> +7 (3652) 60-16-86, roszdravkrimsev@yandex.ru</p>
          <p><strong>Роспотребнадзор:</strong> +7 (3652) 27-33-12, crimea_ses@crimeainfo.com</p>
        </section>

        <section className={styles.section}>
          <h2>Скачиваемые документы</h2>
          <ul>
            <li><a href="/docs/rules.pdf" download>Правила внутреннего распорядка</a></li>
            <li><a href="/docs/anticorruption.pdf" download>Антикоррупционная политика</a></li>
            <li><a href="/docs/ethics.pdf" download>Кодекс этики</a></li>
            <li><a href="/docs/sout.pdf" download>СОУТ</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default LicensesPage;
