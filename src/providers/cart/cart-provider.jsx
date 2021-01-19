import React, { createContext, useState, useEffect } from 'react';
import { updateCartItem, 
         removeCartItem, 
         filterItemFromCart,
         calcCartTotal,
         trackItemCount } from './cart-util';

export const CartContext = createContext({
   hidden: true,
   toggleCartHidden: () => {},
   cartItems: [],
   addItem: () => {},
   removeItem: () => {},
   clearCartItem: () => {},
   cartItemsCount: 0,
   cartTotal: 0,
   emptyCart: () => {}
});

const CartProvider = ({children}) => {
   
   const [hidden, setHidden] = useState(true);
   const [cartItems, setCartItems] = useState([]);
   const [cartItemsCount, setCartItemsCount] = useState(0);
   const [cartTotal, setCartTotal] = useState(0);

   useEffect(() => {
      setCartTotal(calcCartTotal(cartItems));
      setCartItemsCount(trackItemCount(cartItems));
   }, [cartItems]);

   const addItem = item => setCartItems(updateCartItem(cartItems, item));
   const removeItem = item => setCartItems(removeCartItem(cartItems, item));
   const toggleCartHidden = () => setHidden(!hidden);
   const clearCartItem = item => setCartItems(filterItemFromCart(cartItems, item));
   const emptyCart = () => setCartItems([]);

   return (
      <CartContext.Provider value={{
         hidden, 
         toggleCartHidden, 
         cartItems, 
         addItem, 
         removeItem, 
         cartItemsCount, 
         cartTotal,
         clearCartItem,
         emptyCart
      }}>
         {children}
      </CartContext.Provider>
   );

};

export default CartProvider;