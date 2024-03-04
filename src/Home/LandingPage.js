/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';
import { MdOutlineStars } from 'react-icons/md';
// import Slider from 'react-slick';
import mobileBg from '../images/mobile_bg.png';
import styles from './LandingPage.module.scss';
// import Button from '../Component/Button';

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const slides = [
  //   mobileBg,
  //   mobileBg,
  //   mobileBg,
  //   mobileBg,
  //   mobileBg,
  // ];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 200,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  // const nextSlide = () => {
  //   setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  // };
  // <Slider {...settings}>
  //         {slides.map((image, index) => (
  //           <div key={image} className={styles.sliderImg}>
  //             <img src={image} alt={`Brisbane views ${index + 1}`} />
  //           </div>
  //         ))}
  //       </Slider>

  // const prevSlide = () => {
  //   setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  // };

  return (
    <section className={styles.container} id="home" style={{ overflow: 'hidden' }}>
      <img src={mobileBg} alt="Brisbane views" className={styles.bgImg} />
      <div className={styles.slider}>
        <button type="button" className={styles.sliderBtn} onClick={() => {}}>
          <HiOutlineChevronRight className={styles.icon} />
        </button>
        <button type="button" className={styles.sliderBtn} onClick={() => {}}>
          <HiOutlineChevronLeft className={styles.icon} />
        </button>
      </div>

      <div className={styles.overlay} />
      <div className={styles.date} data-aos-delay="1000" data-aos-duration="1000" data-aos="zoom-in">
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
