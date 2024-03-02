/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './RoomModal.module.scss';

const RoomModal = ({ room, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % room.image.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? room.image.length - 1 : prevIndex - 1));
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };
  return (
    <section className={styles.modalContainer} onClick={onClose}>
      <article className={styles.modalImages} onClick={(e) => e.stopPropagation()}>
        <img src={room.image[currentImageIndex]} alt={room.info} className={styles.modalImg} />
        <div className={styles.thumbnail}>
          {room.image.map((img, index) => (
            <img
              src={img}
              alt={room.info}
              key={room.id}
              className={styles.modalImg}
              onClick={() => handleImageClick(index)}
            />
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
        <h3 className={styles.modalTitle}>{room.name}</h3>
        <p className={styles.modalDesc}>{room.description}</p>
        <p className={styles.modalTitle}>Room Features</p>
        <ul className={styles.modalFeatures}>
          {room.features.map((feature) => (
            <li key={feature} className={styles.feature}>
              {feature}
            </li>
          ))}
        </ul>
        <p className={styles.modalPrice}>
          <span className={styles.price}>Price: </span>
          {room.price}
        </p>
        <p className={styles.modalTitle}>Let’s Reserve a Space For You</p>
        <button type="button" className={styles.modalBtn} onClick={onClose}>
          Close
        </button>
        <button
          type="button"
          className={styles.bookBtn}
          // onClick={() => handleSubmit(room)}
        >
          Book Now
        </button>
      </article>
    </section>
  );
};

RoomModal.defaultProps = {
  room: {},
  onClose: () => {},
};

RoomModal.propTypes = {
  room: PropTypes.objectOf(PropTypes.any),
  onClose: PropTypes.func,
};

export default RoomModal;
