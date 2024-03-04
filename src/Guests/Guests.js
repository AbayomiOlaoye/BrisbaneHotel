/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import styles from './Guests.module.scss';
import reviews from '../HotelInfo/reviews';
// import logo from '../images/brisbaneDeep.svg';

const Guests = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in',
    });
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 6000);

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const renderReviewCard = (review) => (
    <>
      <div className={styles.reviewContent} key={review.id}>
        <img src={review.image} alt="review" className={styles.reviewImage} />
        <div className={styles.reviewInfo}>
          <article className={styles.divider}>
            <h4 className={styles.reviewName}>{review.name}</h4>
            <div className={styles.spanner} />
            <p className={styles.location}>
              {review.location}
            </p>
            <p className={styles.reviewRating}>
              {review.rating.map((star) => (
                <span
                  key={star.id}
                  data-aos="zoom-in"
                  className={styles.star}
                  dangerouslySetInnerHTML={{ __html: star }}
                />
              ))}
            </p>
          </article>
          <p className={styles.reviewText}>{review.review}</p>
        </div>
      </div>
    </>
  );

  const renderSlider = () => (
    <div className={styles.slider}>
      <button type="button" className={styles.arrowLeft} onClick={handlePrev}>
        &#10094;
      </button>
      {reviews.map((review, index) => (
        <div key={review.id} style={{ display: index === currentIndex ? 'block' : 'none' }}>
          {renderReviewCard(review)}
        </div>
      ))}
      <button type="button" className={styles.arrowRight} onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );

  return (
    <section className={styles.reviewsContainer} id="reviews">
      <h2 className={styles.heading}>WHAT OUR GUESTS SAY</h2>
      <article className={styles.reviewDiv}>
        {windowWidth < 768
          ? renderReviewCard(reviews[currentIndex])
          : (
            <>
              {renderReviewCard(reviews[currentIndex])}
              {renderReviewCard(reviews[(currentIndex + 1) % reviews.length])}
            </>
          )}
        {windowWidth >= 768 && renderSlider()}
      </article>
      <button type="button" className={styles.slidePrev} onClick={handlePrev}>
        <MdOutlineKeyboardArrowLeft className={styles.prev} />
      </button>
      <button type="button" className={styles.slideNext} onClick={handlePrev}>
        <MdOutlineKeyboardArrowRight className={styles.next} />
      </button>
    </section>
  );
};

export default Guests;
