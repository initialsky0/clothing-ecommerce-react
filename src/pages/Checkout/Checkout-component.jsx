import React from 'react';
import { default as CheckoutItem } from '../../components/CheckoutItem/CheckoutItem-container';
import StripeCheckoutBtn from '../../components/StripeBtn/StripeBtn-component';
import { CheckoutPageContainer,
         CheckoutHeaderContainer, 
         HeaderBlockContainer, 
         WarningTextContainer, 
         TotalPriceContainer } from './Checkout-styled';

const CheckoutPage = ({cartItems, cartTotal}) => (
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
      <StripeCheckoutBtn price={cartTotal} />
   </CheckoutPageContainer>
);


export default CheckoutPage;