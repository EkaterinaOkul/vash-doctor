import React from "react";
import styles from "./About.module.css";

const About = () => {
    return (
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.title}>Качество – главный <br></br>принцип нашей работы</div>
            
            <div className={styles.advantages}>
              <div className={styles.advantage}>
                <span className={styles.number}>01</span>
                <p>Современное оборудование и материалы</p>
              </div>
              <div className={styles.advantage}>
                <span className={styles.number}>02</span>
                <p>Комфортная обстановка в клинике</p>
              </div>
              <div className={styles.advantage}>
                <span className={styles.number}>03</span>
                <p>Работаем круглосуточно</p>
              </div>
              <div className={styles.advantage}>
                <span className={styles.number}>04</span>
                <p>Опытные специалисты</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
