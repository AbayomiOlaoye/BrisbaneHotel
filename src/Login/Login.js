/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Login.module.scss';

const Login = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      easing: 'ease-in',
    });
  }, []);

  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/login', formData)
      .then((response) => {
        const { token } = response.data;
        localStorage.setItem('token', token);
        return setIsAuthenticated(true);
      })
      .catch(() => {
        setError('Invalid email or password');
      });
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.overlay} />
        <article className={styles.title}>
          <p className={styles.intro}>Welcome to</p>
          <h1 className={styles.subtitle}>BRISBANE HOTEL & SUITES</h1>
          <p className={styles.desc}>A place where luxury and privacy becomes your property.</p>
        </article>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="Email address"
            onChange={(e) => handleInputChange(e)}
            value={formData.email}
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            placeholder="Password"
            onChange={(e) => handleInputChange(e)}
            value={formData.password}
            required
          />
          <button type="submit" className={styles.btn}>
            Login
          </button>
          <p className={styles.link}>
            Don&apos;t have an account?
            <Link to="/Register"> Register</Link>
          </p>
          { error && <p className={styles.error}>{error}</p>}
        </form>
        {isAuthenticated && (
          <article className={styles.success}>
            <iframe
              src="https://lottie.host/embed/fc537770-7799-491f-9185-f5dd6eedcb72/qh65HuyBX2.json"
              title="Welcome"
              frameBorder="none"
            />
            <p>Login successful</p>
            <Link to="/">Continue to Home</Link>
          </article>
        )}

      </section>
    </>
  );
};

export default Login;
