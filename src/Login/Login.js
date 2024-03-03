/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.overlay} />
        <article className={styles.title}>
          <p className={styles.intro}>Welcome to</p>
          <h1 className={styles.subtitle}>BRISBANE HOTEL & SUITES</h1>
          <p className={styles.desc}>A place where luxury and privacy becomes your property.</p>
        </article>
        <form className={styles.form}>
          <input type="email" id="email" className={styles.input} placeholder="Email address" required />
          <input type="password" id="password" className={styles.input} placeholder="Password" required />
          <button type="submit" className={styles.btn}>
            Login
          </button>
          <p className={styles.link}>
            Don&apos;t have an account?
            <Link to="/Register"> Register</Link>
          </p>
        </form>

      </section>
    </>
  );
};

export default Login;
