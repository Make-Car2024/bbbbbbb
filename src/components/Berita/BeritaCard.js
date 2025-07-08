import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Berita.module.css';

const BeritaCard = ({ image, category, title, date, excerpt, link, index = 0 }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={
        styles.beritaCard +
        ' ' +
        (visible ? styles.animated + ' ' + styles.fadeInUp : '')
      }
      style={visible ? { animationDelay: `${index * 0.12}s` } : {}}
    >
      <div className={styles.beritaImageWrapper}>
        <img src={image} alt={title} className={styles.beritaImage} />
        <span className={styles.beritaCategory}>{category}</span>
      </div>
      <div className={styles.beritaContent}>
        <div className={styles.beritaDate}>{new Date(date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
        <h3 className={styles.beritaTitle}>{title}</h3>
        <div className={styles.beritaExcerpt}>{excerpt}</div>
        <Link to={link} className={styles.beritaReadMore}>
          Baca Selengkapnya &rarr;
        </Link>
      </div>
    </div>
  );
};

export default BeritaCard;
