/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './RoomFinder.module.scss';
import Button from '../Component/Button';

const RoomFinder = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      easing: 'ease-in',
    });
  }, []);

  const [formData, setFormData] = useState({
    category: 'none',
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
    <section className={styles.finderContainer} id="finder" style={{ overflow: 'hidden' }}>
      <article className={styles.finderContent}>
        <h2 className={styles.finderTitle}>FIND A ROOM</h2>
        <p className={styles.finderText} data-aos="fade-left">
          Not sure what you want? Check availability now and secure your dream
          getaway in the heart of Brisbane Hotel & Suites with just a click.
        </p>
      </article>
      <form className={styles.finderForm} data-aos="fade-right">
        <article className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="Category" className={styles.formLabel}>
              Category:
            </label>
            <select
              id="category"
              name="category"
              className={`${styles.formInput} ${styles.formSelect}`}
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="none">Select a Room</option>
              <option value="Standard Room">Standard Room - #20,000</option>
              <option value="Deluxe Room">Deluxe Room - #30,000</option>
              <option value="Executive Room">Executive Room - #40,000</option>
              <option value="Executive Suite">Executive Suite - #50,000</option>
              <option value="Royal Suite">Royal Suite - #60,000</option>
              <option value="Presidential Suite">Presidential Suite - #80,000</option>
            </select>
          </div>
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
