import React from 'react';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem-component';
import CustomBtn from '../../components/CustomBtn/CustomBtn-component';
import EmptyCartConfirm from '../../components/EmptyCartConfirm/EmptyCartConfirm-component';
import Popup from '../../components/Popup/Popup-component';
import StripeCheckoutBtn from '../../components/StripeBtn/StripeBtn-component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors';
import { selectEmptyCartPopup } from '../../redux/popup/popup-selectors';
import { mountEmptyCartPopup, unmountEmptyCartPopup } from '../../redux/popup/popup-actions';
import { CheckoutPageContainer,
         CheckoutHeaderContainer, 
         HeaderBlockContainer, 
         WarningTextContainer, 
         TotalPriceContainer,
         ButtonsContainer } from './Checkout-styled';

const CheckoutPage = ({cartItems, cartTotal, emptyCartPopHidden, mountPopup, unmountPopup}) => (
   <CheckoutPageContainer> 
      <CheckoutHeaderContainer>
         <HeaderBlockContainer>
            <span>Product</span>
         </HeaderBlockContainer>
         <HeaderBlockContainer>
            <span>Description</span>
         </HeaderBlockContainer>
         <HeaderBlockContainer>
            <span>Quantity</span>
         </HeaderBlockContainer>
         <HeaderBlockContainer>
            <span>Price</span>
         </HeaderBlockContainer>
         <HeaderBlockContainer>
            <span>Remove</span>
         </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {
         cartItems.map(item => 
            <CheckoutItem key={item.id} cartItem={item} />
         )
      }
      <TotalPriceContainer>
         <span>TOTAL: ${cartTotal}</span>
      </TotalPriceContainer>
      <WarningTextContainer>
         *Please use the following test credit card for payments*
         <br/>
         Card#: 4242424242424242	
         <br/>
         CVC: Any 3 digits	
         <br/>
         Expire Date: Any future date
      </WarningTextContainer>
      <ButtonsContainer>
         <CustomBtn onClick={mountPopup} disabled={cartTotal ? false : true} >Empty Cart</CustomBtn>
         <StripeCheckoutBtn price={cartTotal} />
      </ButtonsContainer>
      { emptyCartPopHidden 
         ? null 
         : <Popup callUnmount={unmountPopup} requireClose >
               <EmptyCartConfirm />
            </Popup> 
      }
   </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
   cartTotal: selectCartTotal,
   emptyCartPopHidden: selectEmptyCartPopup
});

const mapDispatchToProps = dispatch => ({
   mountPopup: () => dispatch(mountEmptyCartPopup()),
   unmountPopup: () => dispatch(unmountEmptyCartPopup())
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);