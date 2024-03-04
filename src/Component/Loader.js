import React, { useState, useEffect } from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Loader.module.scss';
import logo from '../images/big_logo.svg';

const Loader = () => {
  AOS.init({
    duration: 400,
    easing: 'ease-in',
    once: true,
  });

  const [text, setText] = useState('');
  const textContent = 'Hoospitality at its best...';

  const [scale, setScale] = useState(1);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText((prevText) => {
        if (index === textContent.length) {
          clearInterval(intervalId);
          return prevText;
        }
        return prevText + textContent[index];
      });
      index += 1;
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScale((prevScale) => (prevScale === 1 ? 0.8 : 1));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.spinner} style={{ overflow: 'hidden' }}>
      <img
        src={logo}
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos="zoom-in"
        alt="Brisbane logo"
        className={styles.logo}
        style={{ transform: `scale(${scale})` }}
      />
      <p className={styles.para} data-aos="fade-left">{text}</p>
    </section>
  );
};

export default Loader;
