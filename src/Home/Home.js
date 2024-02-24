import React, { useEffect } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import Navigation from '../Header/Navigation';
import LandingPage from './LandingPage';
import About from '../About/About';
import Rooms from '../Rooms/Rooms';
import Facilities from '../Facilities/Facilities';

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
      <Facilities />
    </>
  );
};

export default Home;
