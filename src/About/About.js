import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { enhance } from '@cloudinary/url-gen/actions/effect';
import styles from './About.module.scss';
import mobileBg from '../images/about.png';
import aboutBg from '../images/desk_about.png';
import benefits from '../HotelInfo/benefits';

// new CloudinaryImage('../images/about.png').effect(enhance());

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-in',
    });
  }, []);

  return (
    <section className={styles.aboutContainer} id="about" data-aos="fade-up" style={{ overflow: 'hidden' }}>
      <article className={styles.container}>
        <article className={styles.mobileDiv}>
          <h2 className={styles.subtitle}>HOSPITALITY AT ITS BEST</h2>
          <img
            src={mobileBg}
            data-aos="zoom-in"
            alt="nice views at Brisbane Hotel & Suites"
            className={styles.aboutImgMobile}
          />

          <h3 className={styles.heading} data-aos="fade-up">
            Welcome to Brisbane Hotel & Suites!
          </h3>
          <p className={styles.text} data-aos="fade-up">
            Your Oasis of Luxury and Relaxation in Anambra. Nestled amidst
            the breathtaking landscapes of Anambra state, Nigeria. Brisbane
            stands as a haven of tranquility and indulgence. More than just
            a hotel, we are a gateway to an unforgettable experience, where
            stunning scenery meets exceptional service and luxurious comfort.
          </p>
          <h3 className={styles.heading} data-aos="fade-up">
            More than just a stay, an experience:
          </h3>
          <p className={styles.text} data-aos="fade-up">
            We invite you to discover the true essence of relaxation and rejuvenation.
            Whether you seek adventure, exploration, or simply a chance to unwind,
            our attentive staff will curate an experience tailored to your unique desires.
          </p>
        </article>
        <img
          src={aboutBg}
          alt="nice views at Brisbane Hotel & Suites"
          className={styles.aboutImg}
        />
      </article>
      <article className={styles.benefits}>
        {
          benefits.map((benefit) => (
            <article className={styles.benefitDiv} data-aos="fade-left" key={benefit.id}>
              <img
                src={benefit.icon}
                alt="icon"
                className={styles.icon}
              />
              <p className={styles.benefitText}>{benefit.desciption}</p>
            </article>
          ))
        }
      </article>
    </section>
  );
};

export default About;
