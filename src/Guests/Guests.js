/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import AOS from 'aos';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import 'aos/dist/aos.css';
// import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import styles from './Guests.module.scss';
import reviews from '../HotelInfo/reviews';
import configure from './config';
// import logo from '../images/brisbaneDeep.svg';

const Guests = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-in',
    });
  }, []);

  return (
    <section className={styles.reviewsContainer} id="reviews">
      <h2 className={styles.heading}>WHAT OUR GUESTS SAY</h2>
      <article className={styles.reviewDiv}>
        <Carousel
          autoPlay
          autoPlaySpeed={5000}
          infinite
          showArrows={false}
          showDots
          className={styles.carousel}
          keyBoardControl
          responsive={configure([2, 2, 1])}
        >
          {reviews.map((review) => (
            <Card className={styles.reviewCard} key={review.id}>
              <Card.Body className={styles.reviewInfo}>
                <Card.Img variant="top" src={review.image} className={styles.reviewImage} />
                <Card.Body>
                  <Card.Title className={styles.reviewName}>{review.name}</Card.Title>
                  <div className={styles.spanner} />
                  <Card.Text className={styles.location}>{review.location}</Card.Text>
                  <Card.Text className={styles.reviewRating}>
                    {review.rating.map((star) => (
                      <span
                        key={star.id}
                        data-aos="zoom-in"
                        className={styles.star}
                        dangerouslySetInnerHTML={{ __html: star }}
                      />
                    ))}
                  </Card.Text>
                </Card.Body>
              </Card.Body>
              <Card.Text className={styles.reviewText}>{review.review}</Card.Text>
            </Card>
          ))}
        </Carousel>
      </article>
    </section>
  );
};

export default Guests;
