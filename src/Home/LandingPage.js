/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';
import { MdOutlineStars } from 'react-icons/md';
import mobileBg from '../images/mobile_bg.png';
import styles from './LandingPage.module.scss';

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    mobileBg,
    'https://res.cloudinary.com/dn1ko8lbn/image/upload/q_auto:best/v1709732348/reception_uwo8eg.webp',
    'https://res.cloudinary.com/dn1ko8lbn/image/upload/q_auto:best/v1709732336/recep_two_kmmtnn.webp',
    'https://res.cloudinary.com/dn1ko8lbn/image/upload/q_auto:best/v1709560616/club_b7ctps.jpg',
    'https://res.cloudinary.com/dn1ko8lbn/image/upload/v1709560618/premium_pool_nuqaua.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 4000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  return (
    <section className={styles.container} id="home" style={{ overflow: 'hidden' }}>
      <img src={slides[currentSlide]} alt="Brisbane views" className={styles.bgImg} />
      <div className={styles.slider}>
        <button type="button" className={styles.sliderBtn} onClick={nextSlide}>
          <HiOutlineChevronRight className={styles.icon} />
        </button>
        <button type="button" className={styles.sliderBtn} onClick={prevSlide}>
          <HiOutlineChevronLeft className={styles.icon} />
        </button>
      </div>

      <div className={styles.overlay} />
      <div className={styles.date} data-aos-delay="800" data-aos-duration="800" data-aos="zoom-in">
        <MdOutlineStars className={styles.icon} />
        Since 2018
      </div>
      <article className={styles.titleDiv}>
        <h1 className={styles.title} data-aos="zoom-out">
          Brisbane hotel & suites
        </h1>
        <p className={styles.heroText} data-aos="fade-left">
          Where luxury meets impeccable hospitality. Indulge in a world of
          comfort in the heart of Brisbane. You deserve the best!
        </p>
        <a href="#rooms" className={styles.button}>Book a Room</a>
      </article>
    </section>
  );
};

export default LandingPage;
