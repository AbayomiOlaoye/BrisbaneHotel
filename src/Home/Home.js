import React, { useEffect } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import Navigation from '../Header/Navigation';
import LandingPage from './LandingPage';

const Home = () => {
  useEffect(() => {
    aos.init({
      duration: 500,
    });
  }, []);
  return (
    <>
      <Navigation />
      <LandingPage />
    </>
  );
};

export default Home;
