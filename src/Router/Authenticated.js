import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';

const Authenticated = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="settings" element={<Settings />} />
    </Routes>
  );
}

export default Authenticated;