import React, { useState } from "react";
import styles from "./DoctorPage.module.css";
import DoctorCard from "../DoctorCard/DoctorCard";
import DoctorPopup from "../DoctorPopup/DoctorPopup";

const doctors = [
  {
    id: 1,
    name: "Безуглый Михаил Юрьевич",
    specialty: " Врач-хирург",
    experience: "Опыт работы: 15 лет",
    description: "Специалист в области женского здоровья и репродуктивной медицины.",
    photo: "/images/doctors/bezugly.png",
  },
  {
    id: 2,
    name: "Джерад Зиед",
    specialty: "Гастроэнтеролог",
    experience: "Опыт работы: 10 лет",
    description: "Диагностика и лечение заболеваний мочеполовой системы.",
    photo: "/images/doctors/jerad.png",
  },
  {
    id: 3,
    name: "Евтушенко Татьяна Михайловна",
    specialty: "Эмбриолог",
    experience: "Опыт работы: 12 лет",
    description: "Диагностика и лечение эндокринных заболеваний.",
    photo: "/images/doctors/evtushenko.png",
  },
  {
    id: 4,
    name: "Жуган Геннадий Витальевич",
    specialty: "Врач УЗД",
    experience: "Опыт работы: 12 лет",
    description: "Диагностика и лечение эндокринных заболеваний.",
    photo: "/images/doctors/djugan.png",
  },
  {
    id: 5,
    name: "Селиванова Адександра Владимировна",
    specialty: "Врач-акушер-гинеколог",
    experience: "Опыт работы: 12 лет",
    description: "Диагностика и лечение эндокринных заболеваний.",
    photo: "/images/doctors/selivanova.png",
  },
  {
    id: 6,
    name: "Сулима Анна Николаевна",
    specialty: "Врач-акушер-гинеколог",
    experience: "Опыт работы: 12 лет",
    description: "Диагностика и лечение эндокринных заболеваний.",
    photo: "/images/doctors/sulima.png",
  },
 
];

const DoctorsPage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div className={styles.doctorsPage}>
      <div className={styles.container}>
        <div className={styles.title}>Наши врачи</div>
        <div className={styles.intro}>
          <div className={styles.subtitle}>Квалифицированные специалисты</div>
          <div className={styles.description}>
            Мы гордимся нашими профессионалами, которые имеют большой опыт и помогают нашим пациентам.
          </div>
        </div>

        <div className={styles.doctorList}>
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} onClick={() => setSelectedDoctor(doctor)} />
          ))}
        </div>
      </div>

      {selectedDoctor && <DoctorPopup doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} />}
    </div>
  );
};

export default DoctorsPage;
