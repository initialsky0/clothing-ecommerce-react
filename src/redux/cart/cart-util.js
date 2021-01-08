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