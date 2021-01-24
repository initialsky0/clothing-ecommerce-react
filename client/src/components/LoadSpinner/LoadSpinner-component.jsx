import React from 'react';
import Spinner from './Spinner-component';

const LoadSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => (
   isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />
);

export default LoadSpinner;