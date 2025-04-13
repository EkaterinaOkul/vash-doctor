import React, { useEffect, useState } from "react";
import styles from "./QuotaBanner.module.css";

const QuotaBanner = () => {
  

  return (
    <section id="banner" className={styles.services}>
    <div className={styles.quotaBanner}>
      <div className={styles.quotaBannerText}>Наши врачи сопровождают вас на пути к мечте о родительстве, предлагая современные подходы и индивидуальный подход.</div>
    </div>
    </section>
  );
};

export default QuotaBanner;
