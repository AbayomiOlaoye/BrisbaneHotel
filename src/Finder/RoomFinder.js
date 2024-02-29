/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styles from './RoomFinder.module.scss';
import Button from '../Component/Button';

const RoomFinder = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 1,
    children: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (detail) => {
    const message = `Hello, I would like to ask for a reservation with the following information: Check-in date: ${detail.checkIn}, Check-out date: ${detail.checkOut}, ${detail.adults} Adults, and ${detail.children} children`;
    window.open(`https://wa.me/${2348031391167}?text=${message}`, '_blank');
  };

  return (
    <section className={styles.finderContainer}>
      <article className={styles.finderContent}>
        <h2 className={styles.finderTitle}>FIND A ROOM</h2>
        <p className={styles.finderText}>
          Not sure what you want? Check availability now and secure your dream
          getaway in the heart of Brisbane Hotel & Suites with just a click.
        </p>
      </article>
      <form className={styles.finderForm}>
        <article className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="checkIn" className={styles.formLabel}>
              Check In:
            </label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              placeholder="Check In"
              className={styles.formInput}
              value={formData.checkIn}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="checkOut" className={styles.formLabel}>
              Check Out:
            </label>
            <input
              type="date"
              id="checkOut"
              name="checkOut"
              placeholder="Check Out"
              className={styles.formInput}
              value={formData.checkOut}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="adults" className={styles.formLabel}>
              Adults:
            </label>
            <input
              type="number"
              id="adults"
              name="adults"
              placeholder="1"
              className={styles.formInput}
              value={formData.adults}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="children" className={styles.formLabel}>
              Children:
            </label>
            <input
              type="number"
              id="children"
              name="children"
              placeholder="0"
              className={styles.formInput}
              value={formData.children}
              onChange={handleInputChange}
            />
          </div>
        </article>
        <Button action={() => handleSubmit(formData)} />
      </form>
    </section>
  );
};

export default RoomFinder;
