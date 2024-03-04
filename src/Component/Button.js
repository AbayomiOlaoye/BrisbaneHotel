/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

// const PHONE_NUMBER = '2348031391167';

// const handleOrder = (name) => {
//   const message = `Hello, I would like to place an order for ${name}`;
//   window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
// };

const Button = ({ text, action }) => {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={action}
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
  action: PropTypes.func.isRequired,
};

export default Button;
