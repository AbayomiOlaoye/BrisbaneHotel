/* eslint-disable arrow-body-style */
import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import styles from './Facilities.module.scss';
import facilities from '../HotelInfo/facilities';

const Facilities = () => {
  return (
    <section className={styles.container}>
      <h2>OUR FACILITIES</h2>
      <div className={styles.facilities}>
        {facilities.map((facility) => (
          <div key={facility.id} className={styles.facility}>
            <img src={facility.views[0]} alt={facility.name} />
            <div className={styles.text}>
              <p>{facility.id}</p>
              <h3>{facility.name}</h3>
              <FaLongArrowAltRight className={styles.arrow} />
            </div>
            <MdOutlineKeyboardArrowLeft className={styles.arrow} />
            <MdOutlineKeyboardArrowRight className={styles.arrow} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
