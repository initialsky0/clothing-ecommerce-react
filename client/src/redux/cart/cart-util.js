export const updateCartItem = (cartItems, cartItemToAdd) => {
   const cartItemExist = cartItems.find(
      item => item.id === cartItemToAdd.id
   );

   if(cartItemExist) {
      return cartItems.map(item => 
         item.id === cartItemToAdd.id 
         ? { ...item, quantity: item.quantity + 1 } 
         : item
      );
   }

   return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const removeCartItem = (cartItems, cartItemToRemove) => {
   const existingCartItem = cartItems.find(
      item => item.id === cartItemToRemove.id
   );
   if(existingCartItem.quantity === 1) {
      return cartItems.filter(item => item.id !== cartItemToRemove.id)
   } else {
      return cartItems.map(item => 
         item.id === cartItemToRemove.id 
         ? { ...item, quantity: item.quantity - 1 } 
         : item
      );
   }
}

export const clearCartItem = (cartItems, cartItemToClear) => (
   cartItems.filter(item => item.id !== cartItemToClear.id)
);