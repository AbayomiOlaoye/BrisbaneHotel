/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import React from 'react';
import styles from './RoomFinder.module.scss';
import Button from '../Component/Button';

const RoomFinder = () => {
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
            />
          </div>
        </article>
        <Button />
      </form>
    </section>
  );
};

export default RoomFinder;
