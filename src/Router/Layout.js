import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Authenticated from './Authenticated';
import Unauthenticated from './Unauthenticated';

const Layout = () => {
  const isAuth = true;
  return (
    <BrowserRouter>
      !isAuth ? <Authenticated /> : <Unauthenticated />
    </BrowserRouter>
  );
}

export default Layout;