import React, { useState } from 'react';
import {
  MdOutlineRestaurant,
  MdBed,
  MdOutlineWifi,
  MdEventAvailable,
} from 'react-icons/md';
import { FaBed } from 'react-icons/fa';
import { SlScreenDesktop } from 'react-icons/sl';
import { TbCurrencyNaira } from 'react-icons/tb';
import styles from './Rooms.module.scss';
import rooms from '../HotelInfo/roomDetails';

const Rooms = () => {
  const [displayedRooms, setDisplayedRooms] = useState(4);
  const [showAllRooms, setShowAllRooms] = useState(false);

  const handleSeeMoreRooms = () => {
    setShowAllRooms(true);
  };

  const handleCollapseRooms = () => {
    setShowAllRooms(false);
    setDisplayedRooms(4);
  };

  return (
    <section className={styles.roomDiv}>
      <h2 className={styles.subtitleA}>ROOMS & SUITES</h2>
      <article className={styles.introDiv}>
        <p className={styles.introText}>
          All room decoration were made with ecological certified and safe materials.
        </p>
        <h2 className={styles.subtitleB}>ROOMS & SUITES</h2>
      </article>
      <div className={styles.rooms}>
        {
          rooms.slice(0, showAllRooms ? rooms.length : displayedRooms).map((room) => (
            <article className={styles.room} key={room.id}>
              <img
                src={room.image[0]}
                alt="room"
                className={styles.roomImg}
              />
              <div className={styles.roomInfo}>
                <div className={styles.desc}>
                  <h4 className={styles.roomName}>{room.info}</h4>
                  {room.name === 'Standard Room' ? <FaBed /> : <MdBed />}
                </div>
                <div className={styles.roomDesc}>
                  <div className={styles.roomFeatures}>
                    <div className={styles.feature}>
                      <MdOutlineRestaurant className={styles.icon} />
                      <p className={styles.text}>
                        Free Breakfast
                      </p>
                    </div>
                    <div className={styles.feature}>
                      <SlScreenDesktop className={styles.icon} />
                      <p className={styles.text}>
                        Smart TV
                      </p>
                    </div>
                    <div className={styles.feature}>
                      <MdOutlineWifi className={styles.icon} />
                      <p className={styles.text}>
                        Free WiFi
                      </p>
                    </div>
                    <div className={styles.feature}>
                      <MdEventAvailable className={styles.icon} />
                      <p className={styles.text}>
                        Available
                      </p>
                    </div>
                    <div className={styles.priceDiv}>
                      <TbCurrencyNaira />
                      <p className={styles.price}>
                        {room.price}
                      </p>
                    </div>
                  </div>
                  <div className={styles.roomBtn}>
                    <h3 className={styles.roomName}>
                      {room.name}
                    </h3>
                    <button
                      type="button"
                      className={styles.bookBtn}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))
        }
      </div>
      {!showAllRooms && (
        <button type="button" className={styles.seeMoreBtn} onClick={handleSeeMoreRooms}>
          See more Rooms
        </button>
      )}
      {showAllRooms && (
        <button type="button" className={styles.seeMoreBtn} onClick={handleCollapseRooms}>
          See less Rooms
        </button>
      )}
    </section>
  );
};

export default Rooms;
