import React from 'react';
import CustomBtn from '../CustomBtn/CustomBtn-component';
import { connect } from 'react-redux';
import { clearDBCartStart } from '../../redux/cart/cart-actions';
import { EmptCartConfContainer, ConfirmBtnsContainer } from './EmptyCartConfirm-styled';

const EmptyCartConfirm = ({ closePopup, emptyCartItems }) => (
   <EmptCartConfContainer>
      <h2>You are clearing all items in you shopping cart!</h2>
      <p>You will not be able to restore the items in your cart once cleared. Are you sure you want to empty the shopping cart?</p>
      <ConfirmBtnsContainer>
         <CustomBtn 
            onClick={() => {
               emptyCartItems();
               closePopup();
            }}
         >
            Yes, Clear My Cart
         </CustomBtn>
         <CustomBtn onClick={closePopup}>No, Keep My Items</CustomBtn>
      </ConfirmBtnsContainer>
   </EmptCartConfContainer>
);

const mapDispatchToProps = dispatch => ({
   emptyCartItems: () => dispatch(clearDBCartStart())
});

export default connect(null, mapDispatchToProps)(EmptyCartConfirm);