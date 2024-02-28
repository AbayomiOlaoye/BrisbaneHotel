import React, { useState } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import styles from './Facilities.module.scss';
import facilities from '../HotelInfo/facilities';

const Facilities = () => {
  const [showAllFacilities, setShowAllFacilities] = useState(false);
  const [currentFacilityIndex, setCurrentFacilityIndex] = useState(0);

  const handleNextFacility = () => {
    if (currentFacilityIndex < facilities.length - 1) {
      setCurrentFacilityIndex(currentFacilityIndex + 1);
    }
  };

  const handlePrevFacility = () => {
    if (currentFacilityIndex > 0) {
      setCurrentFacilityIndex(currentFacilityIndex - 1);
    }
  };

  const handleSeeMore = () => {
    setShowAllFacilities(true);
  };

  const handleCollapseFacilities = () => {
    setShowAllFacilities(false);
    setCurrentFacilityIndex(0);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.subtitle}>OUR FACILITIES</h2>
      <div className={styles.facilities}>
        {facilities
          .slice(0, showAllFacilities ? facilities.length : currentFacilityIndex + 1)
          .map((facility, index) => (
            <article key={facility.id} className={`${styles.facility} ${styles.fade} ${index === currentFacilityIndex ? styles.active : ''}`}>
              <img src={facility.views[0]} className={styles.img} alt={facility.name} />
              <div className={styles.text}>
                <h4>
                  {facility.id}
                  /12
                </h4>
                <h3>{facility.name}</h3>
                <FaLongArrowAltRight className={styles.arrow} />
                {window.innerWidth < 768 && (
                  <article className={styles.pointer}>
                    <MdOutlineKeyboardArrowLeft
                      className={styles.arrowLeft}
                      onClick={handlePrevFacility}
                    />
                    <MdOutlineKeyboardArrowRight
                      className={styles.arrowRight}
                      onClick={handleNextFacility}
                    />
                  </article>
                )}
              </div>
            </article>
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
