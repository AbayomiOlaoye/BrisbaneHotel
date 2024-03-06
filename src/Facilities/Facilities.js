/* eslint-disable jsx-a11y/no-static-element-interactions */
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
      easing: 'ease',
    });
  }, []);

  const [showAllFacilities, setShowAllFacilities] = useState(false);
  const [currentFacilityIndex, setCurrentFacilityIndex] = useState(0);
  const [selectedFacilityIndex, setSelectedFacilityIndex] = useState(null);
  const isLargeScreen = window.innerWidth > 768;

  const handleNextFacility = (event) => {
    event.stopPropagation();
    if (currentFacilityIndex < facilities.length - 1) {
      setCurrentFacilityIndex(currentFacilityIndex + 1);
    }
  };

  const handlePrevFacility = (event) => {
    event.stopPropagation();
    if (currentFacilityIndex > 0) {
      setCurrentFacilityIndex(currentFacilityIndex - 1);
    }
  };

  const handleRoomClick = (index) => {
    setSelectedFacilityIndex(index);
  };

  const handleSeeMore = () => {
    setShowAllFacilities(true);
  };

  const handleCollapseFacilities = () => {
    setShowAllFacilities(false);
    setCurrentFacilityIndex(0);
  };

  return (
    <section className={styles.container} id="facilities">
      <h2 className={styles.subtitle}>OUR FACILITIES</h2>
      <div className={styles.facilities}>
        {facilities
          .slice(0, showAllFacilities ? facilities.length : (isLargeScreen ? 3 : 1))
          .map((facility, index) => (
            <article key={facility.id} onClick={() => handleRoomClick(index)} id={index === selectedFacilityIndex ? 'show' : ''} className={`${styles.facility} ${styles.fade} ${index === currentFacilityIndex ? styles.active : ''}`} data-aos="fade-right">
              <img src={facility.views[0]} className={styles.img} alt={facility.name} />
              <div className={styles.text}>
                <h4>
                  {isLargeScreen ? `${facility.id}` : `${facility.id}/${facilities.length}`}
                </h4>
                <h3>{facility.name}</h3>
                <FaLongArrowAltRight className={styles.arrow} />
                {!isLargeScreen && (
                  <div className={styles.pointer}>
                    <MdOutlineKeyboardArrowLeft
                      className={styles.arrowLeft}
                      onClick={(event) => handlePrevFacility(event)}
                    />
                    <MdOutlineKeyboardArrowRight
                      className={styles.arrowRight}
                      onClick={(event) => handleNextFacility(event)}
                    />
                  </div>
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
      {selectedFacilityIndex !== null && (
        <Popup
          fac={facilities[selectedFacilityIndex]}
          onClose={() => setSelectedFacilityIndex(null)}
        />
      )}
    </section>
  );
};

export default Facilities;
