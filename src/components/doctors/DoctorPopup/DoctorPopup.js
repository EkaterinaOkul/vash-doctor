import React from "react";
import styles from "./DoctorPopup.module.css";

const DoctorPopup = ({ doctor, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <img src={doctor.photo} alt={doctor.name} className={styles.photo} />
        <div className={styles.name}>{doctor.name}</div>
        <div className={styles.specialty}>{doctor.specialty}</div> {/* Исправлено */}
        <div className={styles.experience}>{doctor.experience}</div>
        <div className={styles.description}>{doctor.description}</div>
        <a 
                      href="https://online-vash-doctor.medods.ru"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.bookButton}
                    >
                      Записаться
                    </a>
      </div>
    </div>
  );
};

export default DoctorPopup;
