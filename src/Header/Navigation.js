/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {
  useEffect,
  useState,
} from 'react';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animateScroll as scroll } from 'react-scroll';
import { Link, Outlet } from 'react-router-dom';
import { BsArrowUpCircleFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import styles from './Navigation.module.scss';
import menu from '../images/menu.png';
import brisbaneDeep from '../images/brisbaneDeep.svg';
import bigLogo from '../images/big_logo.svg';

const Navigation = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in',
      once: true,
    });
  }, []);

  const loggedIn = false;

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
    <header className={`${hasScrolled ? styles.scrolled : ''} ${styles.header}`}>
      <nav className={styles.navBar}>
        <div className={styles.navPre}>
          <a href="#home" className={styles.navLink}>
            <img
              src={brisbaneDeep}
              alt="Brisbane logo"
              className={styles.navLogo}
            />
          </a>
          <a href="#home" className={styles.navLink}>
            <img src={bigLogo} alt="Brisbane logo" className={styles.navLogoDesk} />
          </a>
          <div className={styles.dividerDiv}>
            <button type="button" className={styles.button}>
              <a href="#finder" className={styles.navLinkItem} onClick={handleMenuClose}>
                Book Now
              </a>
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
          <article className={styles.navLister}>
            <ul className={styles.navList}>
              <li className={styles.navListItem}>
                <a href="#home" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                  Home
                </a>
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
                <a href="#reviews" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                  Reviews
                </a>
              </li>
              <li className={styles.navListItem}>
                <a href="#facilities" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
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
              {loggedIn === false && (
                <Link to="/register" className={styles.navPointer}>
                  <button
                    type="button"
                    className={styles.button}
                  >
                    Join
                  </button>
                </Link>
              )}
              {loggedIn ? (
                <button
                  type="button"
                  className={styles.button}
                  onClick={handleMenuClose}
                >
                  Log Out
                </button>
              ) : (
                <Link to="/login" className={styles.navPointer}>
                  <button
                    type="button"
                    className={styles.button}
                  >
                    Log In
                  </button>
                </Link>
              )}
            </div>
          </article>
        </div>
        )}
        <div className={styles.navLinksDesk}>
          <article className={styles.navLister}>
            <ul className={styles.navList}>
              <li className={styles.navListItem}>
                <a href="#home" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                  Home
                </a>
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
                <a href="#reviews" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                  Reviews
                </a>
              </li>
              <li className={styles.navListItem}>
                <a href="#facilities" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                  Gallery
                </a>
              </li>
              <li className={styles.navListItem}>
                <a href="#contact" className={styles.navLinkItem} data-aos="fade-up" onClick={handleMenuClose}>
                  Contact
                </a>
              </li>
            </ul>
            <button type="button" className={styles.btn}>
              <a href="#finder" className={styles.navLinkItem} onClick={handleMenuClose}>
                Book Now
              </a>
            </button>
            <div className={styles.logger}>
              {loggedIn === false && (
                <Link to="/register" className={styles.navPointer}>
                  <button
                    type="button"
                    className={styles.button}
                  >
                    Join
                  </button>
                </Link>
              )}
              {loggedIn ? (
                <button
                  type="button"
                  className={styles.button}
                  onClick={handleMenuClose}
                >
                  Log Out
                </button>
              ) : (
                <Link to="/login" className={styles.navPointer}>
                  <button
                    type="button"
                    className={styles.button}
                  >
                    Log In
                  </button>
                </Link>
              )}
            </div>
          </article>
        </div>
        <BsArrowUpCircleFill onClick={scrollToTop} className={styles.scroll} />
      </nav>

      <Outlet />
    </header>
  );
};

export default Navigation;
