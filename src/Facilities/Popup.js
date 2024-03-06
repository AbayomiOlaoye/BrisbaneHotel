/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';
import styles from './RoomModal.module.scss';

const Popup = ({ fac, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % fac.image.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? fac.image.length - 1 : prevIndex - 1));
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleSubmit = (detail) => {
    const message = `Hello, I would like to ask for a reservation with the following information: Type of Room ${detail.name}`;
    window.open(`https://wa.me/${2348031391167}?text=${message}`, '_blank');
  };

  return (
    <section className={styles.modalContainer} onClick={onClose}>
      <div className={styles.white}>
        <article className={styles.modalImages} onClick={(e) => e.stopPropagation()}>
          <img src={fac.image[currentImageIndex]} alt={fac.info} className={styles.modalImg} />
          <div className={styles.thumbnail}>
            {fac.image.map((img, index) => (
              <div className={styles.tag} key={img}>
                <img
                  src={img}
                  alt={fac.info}
                  key={fac.id}
                  className={styles.modalThumb}
                  onClick={() => handleImageClick(index)}
                />
                <div className={styles.liner} />
              </div>
            ))}
            <button type="button" className={styles.prevButton} onClick={handlePrevImage}>
              &lt;
            </button>
            <button type="button" className={styles.nextButton} onClick={handleNextImage}>
              &gt;
            </button>
          </div>
        </article>
        <article className={styles.modalInfo}>
          <h3 className={styles.modalTitle}>{fac.name}</h3>
          <p className={styles.modalDesc}>{fac.description}</p>
          <p className={styles.modalText}>Let’s Reserve a Space For You</p>
          <AiFillCloseCircle onClick={onClose} className={styles.exitMenu} />
          <button
            type="button"
            className={styles.bookBtn}
            onClick={() => handleSubmit(fac)}
          >
            Book Now
          </button>
        </article>
      </div>
    </section>
  );
};

Popup.defaultProps = {
  fac: {},
  onClose: () => {},
};

Popup.propTypes = {
  fac: PropTypes.objectOf(PropTypes.any),
  onClose: PropTypes.func,
};

export default Popup;
