/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import styles from './Facilities.module.scss';
import facilities from '../HotelInfo/facilities';

const Facilities = () => {
  const [displayedFacilities, setDisplayedFacilities] = useState(3);
  const [showAllFacilities, setShowAllFacilities] = useState(false);

  const handleSeeMore = () => {
    setShowAllFacilities(true);
  };

  const handleCollapseFacilities = () => {
    setShowAllFacilities(false);
    setDisplayedFacilities(3);
  };
  return (
    <section className={styles.container}>
      <h2>OUR FACILITIES</h2>
      <div className={styles.facilities}>
        {facilities.slice(0, showAllFacilities ? facilities.length : displayedFacilities)
          .map((facility) => (
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
      {!showAllFacilities && (
        <button type="button" className={styles.seeMoreBtn} onClick={handleSeeMore}>
          See more Facilities
        </button>
      )}
      {showAllFacilities && (
        <button type="button" className={styles.collapseBtn} onClick={handleCollapseFacilities}>
          See less Facilities
        </button>
      )}
    </section>
  );
};

export default Facilities;
