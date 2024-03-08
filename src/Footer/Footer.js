/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import axios from 'axios';
import React, { useState } from 'react';
import { MdAddLocationAlt, MdAttachEmail } from 'react-icons/md';
import {
  FaPhoneSquareAlt,
  FaInstagramSquare,
} from 'react-icons/fa';
import { FaSquareXTwitter, FaSquareFacebook } from 'react-icons/fa6';
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

  const openTerms = (e) => {
    if (e.target.href === 'Brisbane_terms_&_conditions.pdf') {
      window.open('Brisbane_terms_&_conditions.pdf', '_blank');
    }
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
    <>
      <footer className={styles.footerContainer} id="contact">
        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <h2 className={styles.titleMob}>SUBSCRIBE TO GET FREE PROMO & EVENTS NOTIFICATION</h2>
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
        <div className={styles.footerContent}>
          <img
            src={logo}
            alt="Brisbane Deep Logo"
            className={styles.footerLogoDesk}
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
            <div className={styles.comboDiv}>
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
                  href="mailto:info@brisbanehotel.ng"
                  className={styles.email}
                >
                  info@brisbanehotel.ng
                </a>
              </article>
            </div>
          </small>
        </div>
        <article className={styles.map}>
          <div className={styles.socialPage}>
            <form
              className={styles.formDesk}
              onSubmit={handleSubmit}
            >
              <h2>SUBSCRIBE TO GET FREE PROMO & EVENTS NOTIFICATION</h2>
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
            <img
              src={logo}
              alt="Brisbane Deep Logo"
              className={styles.footerLogo}
            />
            <div className={styles.socialMedia}>
              <h5>CONNECT WITH US</h5>
              <div className={styles.socialLinkDiv}>
                <a
                  href="https://www.instagram.com/brisbaneclub45?igsh=OGQ5ZDc2ODk2ZA=="
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                >
                  <FaInstagramSquare className={styles.icon} />
                </a>
                <a
                  href="https://twitter.com/Brisbanehotelng"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                >
                  <FaSquareXTwitter className={styles.icon} />
                </a>
                <a
                  href="https://www.facebook.com/BrisbaneHotelsLimited/"
                  target="_blank"
                  rel="noreferrer"
                  title="Ask us anything on Facebook"
                  className={styles.socialLink}
                >
                  <FaSquareFacebook className={styles.icon} />
                </a>
              </div>
            </div>
          </div>
          <iframe
            title="Brisbane Hotels Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.07903040665!2d6.811069775823325!3d6.120064527718361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043934fc46d69fb%3A0x98c5c111bb30a74f!2sBrisbane%20Hotels%20Awada%20Anambra%20State!5e0!3m2!1sen!2sng!4v1708872515394!5m2!1sen!2sng"
            width="100%"
            height="100%"
            className={styles.mapIframe}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </article>
        <div className={styles.footerBottom}>
          <a href="Brisbane_terms_&_conditions.pdf" target="_blank" rel="noreferrer" onClick={(e) => openTerms(e)} className={styles.terms}>Terms & Conditions</a>
          <p className={styles.copyRight}>
            &copy;
            {` ${currentYear} `}
            Brisbane Hotel & Suites. All Rights Reserved.
          </p>
        </div>
      </footer>
      <footer className={styles.footerDesktop} id="contact">
        <div className={styles.footerContent}>
          <img
            src={logo}
            alt="Brisbane Deep Logo"
            className={styles.footerLogoDesk}
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
            <div className={styles.comboDiv}>
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
                  href="mailto:info@brisbanehotel.ng"
                  className={styles.email}
                >
                  info@brisbanehotel.ng
                </a>
              </article>
            </div>
          </small>
          <article className={styles.map}>
            <iframe
              title="Brisbane Hotels Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.07903040665!2d6.811069775823325!3d6.120064527718361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043934fc46d69fb%3A0x98c5c111bb30a74f!2sBrisbane%20Hotels%20Awada%20Anambra%20State!5e0!3m2!1sen!2sng!4v1708872515394!5m2!1sen!2sng"
              width="100%"
              height="100%"
              className={styles.mapIframe}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className={styles.socialPage}>
              <form
                className={styles.formDesk}
                onSubmit={handleSubmit}
              >
                <h2>Subscribe to get promo offers & event notification</h2>
                <div className={styles.separator}>
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
                </div>
              </form>
              <div className={styles.socialMedia}>
                <h5>Connect With Us</h5>
                <div className={styles.socialLinkDiv}>
                  <a
                    href="https://www.instagram.com/brisbaneclub45?igsh=OGQ5ZDc2ODk2ZA=="
                    target="_blank"
                    rel="noreferrer"
                    title="Ask us anything on Instagram"
                    className={styles.socialLink}
                  >
                    <FaInstagramSquare className={styles.icon} />
                  </a>
                  <a
                    href="https://twitter.com/Brisbanehotelng"
                    target="_blank"
                    rel="noreferrer"
                    title="Ask us anything on Twitter"
                    className={styles.socialLink}
                  >
                    <FaSquareXTwitter className={styles.icon} />
                  </a>
                  <a
                    href="https://www.facebook.com/BrisbaneHotelsLimited/"
                    target="_blank"
                    rel="noreferrer"
                    title="Ask us anything on Facebook"
                    className={styles.socialLink}
                  >
                    <FaSquareFacebook className={styles.icon} />
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className={styles.footerBottom}>
          <a href="Brisbane_terms_&_conditions.pdf" target="_blank" rel="noreferrer" onClick={openTerms} className={styles.terms}>Terms & Conditions</a>
          <p className={styles.copyRight}>
            &copy;
            {` ${currentYear} `}
            Brisbane Hotel & Suites. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
