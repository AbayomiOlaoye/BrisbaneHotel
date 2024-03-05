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

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  //   }, 10000);

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     clearInterval(interval);
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // // const handleNext = () => {
  // //   setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  // // };

  // const handlePrev = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  // };

  // const renderReviewCard = (review) => (
  //   <>
  //     <div className={styles.reviewContent} key={review.id}>
  //       <img src={review.image} alt="review" className={styles.reviewImage} />
  //       <div className={styles.reviewInfo}>
  //         <article className={styles.divider}>
  //           <h4 className={styles.reviewName}>{review.name}</h4>
  //           <div className={styles.spanner} />
  //           <p className={styles.location}>
  //             {review.location}
  //           </p>
  //           <p className={styles.reviewRating}>
  //             {review.rating.map((star) => (
  //               <span
  //                 key={star.id}
  //                 data-aos="zoom-in"
  //                 className={styles.star}
  //                 dangerouslySetInnerHTML={{ __html: star }}
  //               />
  //             ))}
  //           </p>
  //         </article>
  //         <p className={styles.reviewText}>{review.review}</p>
  //       </div>
  //     </div>
  //     <div className={styles.reviewContentB} key={review.id}>
  //       <div className={styles.reviewInfo}>
  //         <img src={review.image} alt="review" className={styles.reviewImage} />
  //         <article className={styles.divider}>
  //           <h4 className={styles.reviewName}>{review.name}</h4>
  //           <div className={styles.spanner} />
  //           <p className={styles.location}>
  //             {review.location}
  //           </p>
  //           <p className={styles.reviewRating}>
  //             {review.rating.map((star) => (
  //               <span
  //                 key={star.id}
  //                 data-aos="zoom-in"
  //                 className={styles.star}
  //                 dangerouslySetInnerHTML={{ __html: star }}
  //               />
  //             ))}
  //           </p>
  //         </article>
  //       </div>
  //       <p data-aos="zoom-in" className={styles.reviewText}>{review.review}</p>
  //     </div>
  //   </>
  // );

  // const renderSlider = () => (
  //   <div className={styles.slider}>
  //     {reviews.map((review, index) => (
  //       <div key={review.id} style={{ display: index === currentIndex ? 'block' : 'none' }}>
  //         {renderReviewCard(review)}
  //       </div>
  //     ))}
  //   </div>
  // );

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
