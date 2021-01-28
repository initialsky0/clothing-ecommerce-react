import { firestore, auth } from "../../firebase/firebase-util";

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

export const updateItemToDB = async (cartItemsRef, cartItems, item, quantity = false) => {
   try {
      // Obtain snapshot
      const snapshot = await cartItemsRef.get();
      // Create item in DB if doesn't exist
      if(!snapshot.exists)  await cartItemsRef.set({  ...item });
      // getting item quantity for update
      const quantityUpdate = (typeof quantity === 'number' && quantity > 0) 
         ? quantity
         : cartItems.reduce((acc, cartItem) => 
            (cartItem.id === item.id ? acc + cartItem.quantity : acc),
            0
         );
      // Update quantity, if 0 delete the item from DB
      if(quantityUpdate > 0) {
         await cartItemsRef.update({ quantity: quantityUpdate });
      } else {
         await cartItemsRef.delete();
      }
   } catch (error) {
      console.log('Update encountered error:', error);
      throw error;
   }
}

export const getCartItemsFromDB = dbItemsSnapshots => (
   // map only works with .docs, snapshot only allow forEach
   dbItemsSnapshots.docs.map(itemSnapshot => itemSnapshot.data())
);

export const updateItemsBatchToDB = async (cartRef, localCartItems) => {
   // Update firebase DB with multiple cartItems
   const batch = firestore.batch();
   localCartItems.forEach(item => {
      const newCartDocRef = cartRef.doc(`${item.id}`);
      batch.set(newCartDocRef, item);
   });
   return await batch.commit();
}

export const mergeLocalAndRemoteCartItems = async (cartRef, localCartItems, remoteCartItems) => {
   const batch = firestore.batch();
   const cartItems = localCartItems.reduce((acc, item) => {
      remoteCartItems.forEach(remoteItem => {
         if(item.id === remoteItem.id) {
            // When both item exist, update remote quantity then local
            const quantitySum = item.quantity + remoteItem.quantity;
            batch.update(
               cartRef.doc(`${item.id}`), 
               { quantity: quantitySum }
            );
            acc[item.id] = {
               ...item,
               quantity: quantitySum
            };
         } else if(!acc[remoteItem.id]) {
            // Add remote item to the object set if it does not exist,
            // this will ensure only one item will be added to the set, 
            // else it would be updated before reaching here
            acc[remoteItem.id] = remoteItem;
         }
      });
      if(!acc[item.id]) {
         // The item is not in remote cartItems, will be added to the set
         acc[item.id] = item;
         // Update new item to remote cartItems
         batch.set(cartRef.doc(`${item.id}`), item);
      }
      return acc
   }, {}
   );
   await batch.commit();
   return cartItems;
}

export const handleRemoteLocalCartItems = async (cartRef, localCartItems) => {
   // Obtain snapshot for items with quantity greater than 0
   const remoteSnapshots = await cartRef.where('quantity', '>', 0).get();
   if(localCartItems.length && remoteSnapshots.size) {
      // When both cartItems exist, merge both list
      const remoteCartItems = getCartItemsFromDB(remoteSnapshots);
      const cartItems = await mergeLocalAndRemoteCartItems(cartRef, localCartItems, remoteCartItems);
      // return the list of items
      return Object.values(cartItems);
   } else if(remoteSnapshots.size) {
      // Return remote cartItems when only remote cartItems exists
      return getCartItemsFromDB(remoteSnapshots);
   } else if(localCartItems.length) {
      // Update remote cartItems when only local cartItems exists
      updateItemsBatchToDB(cartRef, localCartItems);
   }
   return localCartItems;
}

export const clearCartItem = (cartItems, cartItemToClear) => (
   cartItems.filter(item => item.id !== cartItemToClear.id)
);

export const emptyCartItemsCollection = async () => {
   const unsubscribe = auth.onAuthStateChanged(async userAuth => {
     if(!userAuth) return;
     const collectionRef = firestore.collection(`users/${userAuth.uid}/cartItems`);
     const itemsDocSnapshot = await collectionRef.get();
     const batch = firestore.batch();
     itemsDocSnapshot.docs.forEach(itemSnapshot => batch.delete(itemSnapshot.ref));
     return await batch.commit();
   });
   unsubscribe();
 };