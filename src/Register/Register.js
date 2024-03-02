/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.scss';
import Navigation from '../Header/Navigation';
import logo from '../images/brisbaneDeep.svg';

const Register = () => {
  return (
    <>
      <Navigation />
      <section className={styles.container}>
        <article className={styles.title}>
          <img src={logo} alt="logo" className={styles.logo} />
          <p className={styles.subtitle}>Welcome to</p>
          <h1 className={styles.subtitle}>BRISBANE HOTEL & SUITES</h1>
          <p className={styles.desc}>A place where luxury and privacy becomes your property.</p>
        </article>
        <form className={styles.form}>
          <input type="text" id="name" className={styles.input} placeholder="Full name" required />
          <input type="email" id="email" className={styles.input} placeholder="Email address" required />
          <input type="password" id="password" className={styles.input} placeholder="Password" required />
          <button type="submit" className={styles.btn}>
            Register
          </button>
          <p className={styles.text}>
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default Register;
