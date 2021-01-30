import React, { useState } from 'react';
import { PopupOverlayStyles, 
         PopupContainerStyles, 
         CloseBtnContainer,
         CloseBtnStyles} from './Popup-styled';

const Popup = ({ children, callUnmount, requireClose }) => {
   const [ animateState, setAnimateState ] = useState(true);

   const unmountPopup = () => {
      setAnimateState(false);
      document.addEventListener('animationend', () => {
            setAnimateState(true);
            callUnmount();
         }, { once: true }
      );
   }

   const createChildrenWithProps = (children, propsToPass) => React.Children.map(
      children, 
      child => React.cloneElement(child, propsToPass)
   );

   return (
      <PopupOverlayStyles >
         <PopupContainerStyles animateStart={animateState}>
            <CloseBtnContainer onClick={unmountPopup}>
               <CloseBtnStyles />
            </CloseBtnContainer>
            { requireClose ? createChildrenWithProps(children, { closePopup: unmountPopup }) : children }
         </PopupContainerStyles>
      </PopupOverlayStyles>
   );
};

export default Popup;