/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import styles from './Facilities.module.scss';
import facilities from '../HotelInfo/facilities';
import Popup from './Popup';

const Facilities = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: 'ease-in',
    });
  }, []);

  const [showAllFacilities, setShowAllFacilities] = useState(false);
  const [currentFacilityIndex, setCurrentFacilityIndex] = useState(0);
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(null);
  const isLargeScreen = window.innerWidth > 768;

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

  const handleRoomClick = (index) => {
    setSelectedRoomIndex(index);
  };

  const handleSeeMore = () => {
    setShowAllFacilities(true);
  };

  const handleCollapseFacilities = () => {
    setShowAllFacilities(false);
    setCurrentFacilityIndex(0);
  };

  return (
    <section className={styles.container} id="facilities" style={{ overflow: 'hidden' }}>
      <h2 className={styles.subtitle}>OUR FACILITIES</h2>
      <div className={styles.facilities}>
        {facilities
          .slice(0, showAllFacilities ? facilities.length : (isLargeScreen ? 3 : 1))
          .map((facility, index) => (
            <article key={facility.id} onClick={() => handleRoomClick(index)} className={`${styles.facility} ${styles.fade} ${index === currentFacilityIndex ? styles.active : ''}`} data-aos="fade-right">
              <img src={facility.views[0]} className={styles.img} alt={facility.name} />
              <div className={styles.text}>
                <h4>
                  {isLargeScreen ? `${facility.id}` : `${facility.id}/${facilities.length}`}
                </h4>
                <h3>{facility.name}</h3>
                <FaLongArrowAltRight className={styles.arrow} />
                {!isLargeScreen && (
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
      {selectedRoomIndex !== null && (
        <Popup fac={facilities[selectedRoomIndex]} onClose={() => setSelectedRoomIndex(null)} />
      )}
    </section>
  );
};

export default Facilities;
