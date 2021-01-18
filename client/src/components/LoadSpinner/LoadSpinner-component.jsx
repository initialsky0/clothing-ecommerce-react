import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './LoadSpinner-styled';

const LoadSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
   return isLoading ? (
      <SpinnerOverlay>
         <SpinnerContainer />
      </SpinnerOverlay>
   ) : (
      <WrappedComponent {...otherProps} />
   );
};

export default LoadSpinner;