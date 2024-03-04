/* eslint-disable arrow-body-style */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Loader from '../Component/Loader';

const Authenticated = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="loader" element={<Loader />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default Authenticated;
