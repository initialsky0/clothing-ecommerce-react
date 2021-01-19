import React, {useContext} from 'react';
import { CartContext } from '../../providers/cart/cart-provider';
import { CheckoutItemContainer, 
         ImageContainer, 
         SectionContainer, 
         QuantityContainer, 
         ValueContainer, 
         ArrayContainer, 
         RemoveBtnContainer } from './CheckoutItem-styled';

const CheckoutItem = ({ cartItem }) => {
   const {name, imageUrl, price, quantity} = cartItem;
   const { addItem, removeItem, clearCartItem } = useContext(CartContext);

   return (
      <CheckoutItemContainer>
         <ImageContainer>
            <img src={imageUrl} alt="item" />
         </ImageContainer>
         <SectionContainer>{name}</SectionContainer>
         <QuantityContainer>
            <ArrayContainer onClick={() => removeItem(cartItem)}>&#10094;</ArrayContainer>
            <ValueContainer>{quantity}</ValueContainer>
            <ArrayContainer onClick={() => addItem(cartItem)}>&#10095;</ArrayContainer>
         </QuantityContainer>
         <SectionContainer>{price}</SectionContainer>
         <RemoveBtnContainer onClick={() => clearCartItem(cartItem)}>
            &#10005;
         </RemoveBtnContainer>
      </CheckoutItemContainer>
);}


export default CheckoutItem;