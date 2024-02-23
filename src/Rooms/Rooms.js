/* eslint-disable arrow-body-style */
import React from 'react';
import {
  MdOutlineRestaurant,
  MdBed, MdOutlineWifi,
  MdEventAvailable,
} from 'react-icons/md';
import { FaBed } from 'react-icons/fa';
import { SlScreenDesktop } from 'react-icons/sl';
import { TbCurrencyNaira } from 'react-icons/tb';
import styles from './Rooms.module.scss';
import rooms from '../HotelInfo/roomDetails';

const Rooms = () => {
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
          rooms.map((room) => {
            return (
              <article className={styles.room} key={room.id}>
                <img
                  src={room.img[0]}
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
                        <MdOutlineRestaurant />
                        <p className={styles.text}>
                          Free Breakfast
                        </p>
                      </div>
                      <div className={styles.feature}>
                        <SlScreenDesktop />
                        <p className={styles.text}>
                          Smart TV
                        </p>
                      </div>
                      <div className={styles.feature}>
                        <MdOutlineWifi />
                        <p className={styles.text}>
                          Free WiFi
                        </p>
                      </div>
                      <div className={styles.feature}>
                        <MdEventAvailable />
                        <p className={styles.text}>
                          Available
                        </p>
                      </div>
                    </div>
                    <div className={styles.price}>
                      <TbCurrencyNaira />
                      <p className={styles.price}>
                        {room.price}
                      </p>
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
            );
          })
        }
      </div>
    </section>
  );
};

export default Rooms;
