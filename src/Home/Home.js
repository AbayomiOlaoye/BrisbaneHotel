import React, { useEffect } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import './Home.module.scss';
import Navigation from '../Header/Navigation';

const Home = () => {
  useEffect(() => {
    aos.init({
      duration: 500,
    });
  }, []);
  return (
    <div>
      <Navigation />
    </div>
  );
};

export default Home;
