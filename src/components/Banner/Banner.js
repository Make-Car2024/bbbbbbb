import React from "react";
import styles from './Banner.module.css';
import sliderImage1 from '../../assets/home/gambar 1.jpg';
import sliderImage2 from '../../assets/home/gambar 2.jpg';
import sliderImage3 from '../../assets/home/gambar 3.jpg';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <div className={styles.bannerWrapper}>
      <div className={styles.bannerContainer} style={{ position: 'relative' }}>
        <Carousel controls={true} indicators={true} interval={4000} fade>
          <Carousel.Item className={styles.carouselItem}>
            <img className="d-block w-100" src={sliderImage1} alt="Slider 1" />
          </Carousel.Item>
          <Carousel.Item className={styles.carouselItem}>
            <img className="d-block w-100" src={sliderImage2} alt="Slider 2" />
          </Carousel.Item>
          <Carousel.Item className={styles.carouselItem}>
            <img className="d-block w-100" src={sliderImage3} alt="Slider 3" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
