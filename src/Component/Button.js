/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

// const PHONE_NUMBER = '2348031391167';

// const handleOrder = (name) => {
//   const message = `Hello, I would like to place an order for ${name}`;
//   window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
// };

const Button = ({ text }) => {
  return (
    <button
      type="button"
      className={styles.button}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: 'Book Now',
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
