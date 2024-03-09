import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Register.module.scss';
import logo from '../images/brisbaneDeep.svg';

const Register = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      once: true,
      easing: 'ease-in',
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/register', formData)
      .then(() => {
        setSuccess(true);
      })
      .catch(() => {
        setError('Kindly ensure a password longer than 6 characters');
      });
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.overlay} />
        <article className={styles.title}>
          <img src={logo} alt="logo" className={styles.logo} />
          <p className={styles.intro}>Welcome to</p>
          <h1 className={styles.subtitle}>BRISBANE HOTEL & SUITES</h1>
          <p className={styles.desc}>A place where luxury and privacy becomes your property.</p>
        </article>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            placeholder="Full name"
            onChange={(event) => handleInputChange(event)}
            value={formData.name}
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            placeholder="Email address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            className={styles.input}
            placeholder="Password"
            value={formData.password}
            minLength={6}
            onChange={(event) => handleInputChange(event)}
            required
          />
          <button type="submit" className={styles.btn}>
            Register
          </button>
          <p className={styles.link}>
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        {success && (
          <article className={styles.success}>
            <iframe
              src="https://lottie.host/embed/6bc5cd40-a59b-4dae-a8b4-89bedc2cb175/aVQdT5lnd1.json"
              title="Successful Registration"
              frameBorder="none"
            />
            <p>
              <Link to="/login">Now let&apos;s Login</Link>
            </p>
          </article>
        )}
      </section>
    </>
  );
};

export default Register;
