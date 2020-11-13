import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...Props }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...Props}>
    {children}
  </button>
);
export default CustomButton;
