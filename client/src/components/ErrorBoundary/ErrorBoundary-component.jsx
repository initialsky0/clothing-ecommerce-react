import React from 'react';
import { ErrorImageContainer, 
         ErrorImageOverlay,
         ErrorImageText } from './ErrorBoundary-styled';
class ErrorBoundary extends React.Component {

   constructor() {
      super();
      this.state = {
         hasErrored: false
      }
   }
   static getDerivedStateFromError(error) {
      //  process the error
      return { hasErrored: true }
   }

   componentDidCatch(error, info) {
      console.log(error, info);
   }

   render() {
      return this.state.hasErrored 
         ? (
               <ErrorImageOverlay>
                  <ErrorImageContainer imageUrl={'https://i.imgur.com/oCkEbrA.png'} />
                  <ErrorImageText>This page cannot be reached because an error occurred.</ErrorImageText>
               </ErrorImageOverlay>
            ) 
         : this.props.children;
   }
}

export default ErrorBoundary;