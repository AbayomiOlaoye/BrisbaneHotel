/* eslint-disable jsx-a11y/control-has-associated-label */
import axios from 'axios';
import React, { useState } from 'react';
import { MdAddLocationAlt, MdAttachEmail } from 'react-icons/md';
import {
  FaPhoneSquareAlt,
  FaInstagramSquare,
  FaFacebookSquare,
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import styles from './Footer.module.scss';
import logo from '../images/brisbaneDeep.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const FORM_ID = process.env.REACT_APP_FORM_ID;

  const feedBack = () => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 3000);

      return (
        <p className="success relative">* Thank you. We will be in touch!!!</p>
      );
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
    };

    try {
      const res = await axios.post(`https://formspree.io/f/${FORM_ID}/`, data);
      if (res.status === 200) {
        setEmail('');
        setStatus('SUCCESS');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <img
          src={logo}
          alt="Brisbane Deep Logo"
          className={styles.footerLogo}
        />
        <small className={styles.footerText}>
          <article className={styles.locationDiv}>
            <MdAddLocationAlt className={styles.icon} />
            <p className={styles.location}>
              No. 1 Brisbane Lane,
              <br />
              Awada Obosi,
              <br />
              Anambra State,
              <br />
              Nigeria.
            </p>
          </article>
          <article className={styles.contact}>
            <FaPhoneSquareAlt className={styles.icon} />
            <div className={styles.contactDiv}>
              <a href="tel:+2348037203086" className={styles.call}>+234 803 720 3086</a>
              <br />
              <a href="tel:+2348031391167" className={styles.call}>+234 803 139 1167</a>
            </div>
          </article>
          <article className={styles.emailDiv}>
            <MdAttachEmail className={styles.icon} />
            <a
              href="mailto:info@brisbanehotels.com"
              className={styles.email}
            >
              info@brisbanehotels.com
            </a>
          </article>
        </small>
      </div>
      <article className={styles.map}>
        <div className={styles.socialPage}>
          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <h2>SUBSCRIBE TO GET FREE PROMO & EVENTS NOTIFCATION</h2>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="youremail@gmail.com *"
              className={styles.emailInput}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              className={styles.submitButton}
            >
              Submit
            </button>
            { feedBack() }
          </form>
          <div className={styles.socialMedia}>
            <h2>CONNECT WITH US</h2>
            <a
              href="https://www.facebook.com/brisbanehotels"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <FaFacebookSquare className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/brisbanehotels"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <FaInstagramSquare className={styles.icon} />
            </a>
            <a
              href="https://www.twitter.com/brisbanehotels"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <FaSquareXTwitter className={styles.icon} />
            </a>
          </div>
        </div>
        <iframe
          title="Brisbane Hotels Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.07903040665!2d6.811069775823325!3d6.120064527718361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043934fc46d69fb%3A0x98c5c111bb30a74f!2sBrisbane%20Hotels%20Awada%20Anambra%20State!5e0!3m2!1sen!2sng!4v1708872515394!5m2!1sen!2sng"
          width="100%"
          height="100%"
          className={styles.mapIframe}
          allowfullscreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </article>
      <div className={styles.footerBottom}>
        <p className={styles.copyRight}>
          &copy;
          {` ${currentYear} `}
          Brisbane Hotel & Suites. All Rights Reserved.
        </p>
        <p className={styles.designer}>
          Designed by
          {' '}
          <a
            href="https://mindprep.tech/"
            target="_blank"
            rel="noreferrer"
            className={styles.designerLink}
          >
            MindByte Technologies
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;