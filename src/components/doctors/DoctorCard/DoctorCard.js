import React from "react";
import styles from "./DoctorCard.module.css";

const DoctorCard = ({ doctor, onClick }) => {
  if (!doctor) {
    return <p>Данные о враче не загружены</p>;
  }

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageContainer}>
        <img src={doctor.photo} alt={doctor.name} className={styles.image} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{doctor.name}</div>
        <div className={styles.specialty}>{doctor.specialty}</div>
      </div>
    </div>
  );
};

export default DoctorCard;
