/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Loader from './Component/Loader';

const root = ReactDOM.createRoot(document.getElementById('root'));

if (window.innerWidth < 768) {
  root.render(
    <React.StrictMode>
      <Loader />
    </React.StrictMode>,
  );

  setTimeout(() => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  }, 3000);
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
