import React from 'react';
import styles from './HeaderBar.module.css';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const HeaderBar = () => (
  <div className={styles.headerBar}>
    <div className={styles.left}>
      <span>📞 (024) 6921013</span>
      <span>✉️ ppid@semarangkab.go.id</span>
    </div>
    <div className={styles.right}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`${styles.icon} ${styles.facebook}`}>
        <FaFacebook />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`${styles.icon} ${styles.instagram}`}>
        <FaInstagram />
      </a>
      <a href="https://x.com" target="_blank" rel="noopener noreferrer" className={`${styles.icon} ${styles.twitter}`}>
        <FaXTwitter />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={`${styles.icon} ${styles.youtube}`}>
        <FaYoutube />
      </a>
    </div>
  </div>
);

export default HeaderBar; 