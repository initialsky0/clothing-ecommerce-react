import React from 'react';
import './CustomBtn-style.scss';

const CustomBtn = ({ children, isGoogleSignIn, ...otherProps }) => (
   <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-btn`} {...otherProps}>
      {children}
   </button>
);

export default CustomBtn;