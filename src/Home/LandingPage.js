/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
import React from 'react';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';
import { MdOutlineStars } from 'react-icons/md';
// import Slider from 'react-slick';
import mobileBg from '../images/mobile_bg.png';
import styles from './LandingPage.module.scss';
// import Button from '../Component/Button';

const LandingPage = () => {
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
    <section className={styles.container} id="home">
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
      <div className={styles.date}>
        <MdOutlineStars className={styles.icon} />
        Since 2006
      </div>
      <article className={styles.titleDiv}>
        <h1 className={styles.title}>
          Brisbane hotel & suites
        </h1>
        <p className={styles.heroText}>
          Where luxury meets impeccable hospitality. Indulge in a world of
          comfort in the heart of Brisbane. You deserve the best!
        </p>
        <a href="#rooms" className={styles.button}>Book a Room</a>
      </article>
    </section>
  );
};

export default LandingPage;
