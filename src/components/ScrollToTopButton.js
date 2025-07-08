import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from './ScrollToTopButton.module.css';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={styles.scrollToTopBtn}
      style={{ display: visible ? 'flex' : 'none' }}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={22} />
    </button>
  );
};

export default ScrollToTopButton;
