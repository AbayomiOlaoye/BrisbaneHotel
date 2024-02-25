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
        <article className={styles.formGroup}>
          <input
            type="date"
            id="checkIn"
            name="checkIn"
            placeholder="Check In"
            className={styles.formInput}
          />
          <input
            type="date"
            id="checkOut"
            name="checkOut"
            placeholder="Check Out"
            className={styles.formInput}
          />
          <input
            type="number"
            id="adults"
            name="adults"
            placeholder="1"
            className={styles.formInput}
          />
          <input
            type="number"
            id="children"
            name="0"
            placeholder="Children"
            className={styles.formInput}
          />
        </article>
        <Button />
      </form>
    </section>
  );
};

export default RoomFinder;
