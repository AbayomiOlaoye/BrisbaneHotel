import React, { useEffect } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import Navigation from '../Header/Navigation';
import LandingPage from './LandingPage';
import About from '../About/About';
import Rooms from '../Rooms/Rooms';

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
      <About />
      <Rooms />
    </>
  );
};

export default Home;
