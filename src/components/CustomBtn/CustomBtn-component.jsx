import React from 'react';
import './CustomBtn-style.scss';

const CustomBtn = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
   <button 
      className={`
         ${inverted ? 'inverted' : ''}
         ${isGoogleSignIn ? 'google-sign-in' : ''} 
         custom-btn
      `} 
      {...otherProps}>
      {children}
   </button>
);

export default CustomBtn;