/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  useEffect,
  useState,
} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animateScroll as scroll } from 'react-scroll';
import { Link, Outlet } from 'react-router-dom';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import styles from './Navigation.module.scss';
import menu from '../images/menu.png';
import brisbaneDeep from '../images/brisbaneDeep.png';

const Navigation = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in',
      once: true,
    });
  }, []);

  const [toggle, setToggle] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY > window.innerHeight;
    setHasScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuOpen = () => {
    setToggle(!toggle);
  };

  const handleMenuClose = () => {
    setToggle(false);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header className={`${hasScrolled ? styles.scrolled : ''}`}>
      <nav className={styles.navBar}>
        <div className={styles.navPre}>
          <Link to="/" className={styles.navLink}>
            <img
              src={brisbaneDeep}
              alt="Brisbane logo"
              className={styles.navLogo}
            />
          </Link>
          <div className={styles.dividerDiv}>
            <button
              type="button"
              className={styles.button}
            >
              Book Now
            </button>
            {
              toggle ? (
                <AiFillCloseCircle onClick={handleMenuClose} className={styles.exitMenu} />
              ) : (
                <img
                  src={menu}
                  alt="menu icon"
                  onClick={handleMenuOpen}
                  className={styles.mobileMenuIcon}
                />
              )
            }
          </div>
        </div>
        {toggle && (
        <div className={styles.navLinksMob}>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <Link to="/" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                Home
              </Link>
            </li>
            <li className={styles.navListItem}>
              <a href="#about" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                About
              </a>
            </li>
            <li className={styles.navListItem}>
              <a href="#rooms" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                Rooms
              </a>
            </li>
            <li className={styles.navListItem}>
              <a href="#rooms" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                Reviews
              </a>
            </li>
            <li className={styles.navListItem}>
              <a href="#gallery" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                Gallery
              </a>
            </li>
            <li className={styles.navListItem}>
              <a href="#contact" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                Contact
              </a>
            </li>
          </ul>
          <div className={styles.logger}>
            <button
              type="button"
              className={styles.button}
              // onClick={onClick}
            >
              Join
            </button>
            <button
              type="button"
              className={styles.button}
              onClick={handleMenuClose}
            >
              Log In
            </button>
          </div>
        </div>
        )}
        <div className={styles.navLinks}>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <Link to="/" className={styles.navLinkItem} data-aos="fade-up">
                Home
              </Link>
            </li>
            <li className={styles.navListItem}>
              <a href="#about" className={styles.navLinkItem} data-aos="fade-up">
                About
              </a>
            </li>
            <li className={styles.navListItem}>
              <a href="#faqs" className={styles.navLinkItem} data-aos="fade-up">
                Rooms
              </a>
            </li>
            <li className={styles.navListItem}>
              <a href="#faqs" className={styles.navLinkItem} data-aos="fade-up">
                Reviews
              </a>
            </li>
            <li className={styles.navListItem}>
              <a href="#faqs" className={styles.navLinkItem} data-aos="fade-up">
                Gallery
              </a>
            </li>
            <li className={styles.navListItem}>
              <a href="#contact" className={styles.navLinkItem} data-aos="fade-up">
                Contact
              </a>
            </li>
          </ul>
          <button
            type="button"
            className={styles.button}
          >
            Book Now
          </button>
          <div className={styles.logger}>
            <button
              type="button"
              className={styles.button}
            >
              Join
            </button>
            <button
              type="button"
              className={styles.button}
              onClick={handleMenuClose}
            >
              Log In
            </button>
          </div>
        </div>
        <BsArrowUpCircleFill onClick={scrollToTop} className={styles.scroll} />
      </nav>

      <Outlet />
    </header>
  );
};

export default Navigation;
