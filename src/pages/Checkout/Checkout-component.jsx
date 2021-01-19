import React, {useContext} from 'react';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem-component';
import StripeCheckoutBtn from '../../components/StripeBtn/StripeBtn-component';
import { CartContext } from '../../providers/cart/cart-provider';
import { CheckoutPageContainer,
         CheckoutHeaderContainer, 
         HeaderBlockContainer, 
         WarningTextContainer, 
         TotalPriceContainer } from './Checkout-styled';

const CheckoutPage = () => {

   const { cartItems, cartTotal } = useContext(CartContext)

   return (
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
};

export default CheckoutPage;