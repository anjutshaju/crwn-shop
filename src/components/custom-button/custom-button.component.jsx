import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...Props }) => (
  <button
    className={`${inverted ? 'inverted' : ''}  ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...Props}
  >
    {children}
  </button>
);
export default CustomButton;
