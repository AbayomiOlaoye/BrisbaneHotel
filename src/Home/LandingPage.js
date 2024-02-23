/* eslint-disable arrow-body-style */
import React from 'react';
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi';
import styles from './LandingPage.module.scss';
import Button from '../Component/Button';

const LandingPage = () => {
  return (
    <section className={styles.container}>
      <div className={styles.overlay} />
      <div className={styles.date}>
        Since 2006
      </div>
      <article className={styles.titleDiv}>
        <h1 className={styles.title}>Brisbane hotel & suites</h1>
        <div className={styles.slider}>
          <HiOutlineChevronRight />
          <HiOutlineChevronLeft />
        </div>
      </article>
      <p className={styles.heroText}>
        Where luxury meets impeccable hospitality Indulge in a world of
        comfort in the heart of Brisbane.
      </p>
      <Button />
    </section>
  );
};

export default LandingPage;
