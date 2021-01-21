import React from 'react';
import { CheckoutItemContainer, 
         ImageContainer, 
         SectionContainer, 
         QuantityContainer, 
         ValueContainer, 
         ArrayContainer, 
         RemoveBtnContainer } from './CheckoutItem-styled';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
   const {name, imageUrl, price, quantity} = cartItem;

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
         <RemoveBtnContainer onClick={() => clearItem(cartItem)}>
            &#10005;
         </RemoveBtnContainer>
      </CheckoutItemContainer>
);}

export default CheckoutItem;