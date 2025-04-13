import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.navBar}>
        <div className={styles.logo}>
          <Link to="/">Ваш Доктор</Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            
            <li><Link to="/about">О Нас</Link></li>
            <li><Link to="/doctors">Врачи</Link></li>
            <li><Link to="/services">Услуги</Link></li>
            <li>
              <Link to="/licenses">Лицензии</Link>
                  </li>
          </ul>
        </nav>
        <a
          href="https://online-vash-doctor.medods.ru"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Записаться
        </a>
      </div>
    </header>
  );
};

export default Header;