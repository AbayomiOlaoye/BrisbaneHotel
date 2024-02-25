import React, { useState, useEffect } from 'react';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import styles from './Guests.module.scss';
import reviews from '../HotelInfo/reviews';

const Guests = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const renderStars = (rating) => {
  //   const stars = [];
  //   for (let i = 0; i < rating; i + 1) {
  //     stars.push(<span key={i} className={styles.star}>&#9733;</span>);
  //   }
  //   return stars;
  // };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const renderReviewCard = (review) => (
    <div className={styles.reviewCard} key={review.id}>
      <div className={styles.reviewContent}>
        <MdOutlineKeyboardArrowLeft onClick={handlePrev} className={styles.arrow} />
        <MdOutlineKeyboardArrowRight onClick={handlePrev} className={styles.arrow} />
        <img src={review.image} alt="review" className={styles.reviewImage} />
        <div className={styles.reviewInfo}>
          <h3 className={styles.reviewName}>{review.name}</h3>
          <p className={styles.reviewRating}>
            {review.rating.map((star) => (
              <span
                key={star.id}
                className={styles.star}
                dangerouslySetInnerHTML={{ __html: star }}
              />
            ))}
          </p>
          <p className={styles.reviewText}>{review.review}</p>
        </div>
      </div>
    </div>
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
    <section className={styles.reviewsContainer}>
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
    </section>
  );
};

export default Guests;
