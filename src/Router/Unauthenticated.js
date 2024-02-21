import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';

const Unauthenticated = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default Unauthenticated;
