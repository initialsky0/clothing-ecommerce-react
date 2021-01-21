import { gql } from 'apollo-boost';
import { GET_CART_HIDDEN, 
         GET_CART_ITEMS,
         GET_CART_TOTAL,
         GET_ITEM_COUNT,
         GET_CURRENT_USER } from './queries';
import { updateCartItem, 
         removeCartItem, 
         getCartItemCount,
         getCartTotal,
         clearCartItem } from './cart-util';

export const typeDefs = gql`
   extend type Item {
      quantity: Int
   }

   extend type Date {
      nanoseconds: Int!
      seconds: Int!
   }

   extend type User {
      createdDate: Date!
      displayName: String!
      email: String!
      id: ID!
   }

   extend type Mutation {
      ToggleCartHidden: Boolean!
      AddItemToCart(item: Item!): [Item]!
      RemoveItemFromCart(item: Item!): [Item]!
      ClearItemFromCart(item: Item!): [Item]!
      EmptyCartItems: [Item]!
      UpdateCurrentUser(user: User!): User!
   }
`;

const cacheCartItems = (currentCartItems, cache) => {
   cache.writeQuery({
      query: GET_ITEM_COUNT,
      data: { itemCount : getCartItemCount(currentCartItems) }
   });

   cache.writeQuery({
      query: GET_CART_TOTAL,
      data: { cartTotal: getCartTotal(currentCartItems) }
   });

   cache.writeQuery({
      query: GET_CART_ITEMS,
      data: { cartItems: currentCartItems }
   });
}

export const resolvers = {
   Mutation: {
      // parameters: _root, _args, _context, _info
      toggleCartHidden: (_root, _args, { cache }) => {
         const { cartHidden } = cache.readQuery({
            query: GET_CART_HIDDEN
         });

         cache.writeQuery({
            query: GET_CART_HIDDEN,
            data: {
               cartHidden: !cartHidden
            }
         });
         return !cartHidden;
      },

      addItemToCart: (_root, { item }, { cache }) => {
         const { cartItems } = cache.readQuery({
            query: GET_CART_ITEMS
         });
         const updatedCartItems = updateCartItem(cartItems, item);
         cacheCartItems(updatedCartItems, cache);
         return updatedCartItems;
      },

      removeItemFromCart: (_root, { item }, { cache }) => {
         const { cartItems } = cache.readQuery({
            query: GET_CART_ITEMS
         });
         const updatedCartItems = removeCartItem(cartItems, item);
         cacheCartItems(updatedCartItems, cache);
         return updatedCartItems;
      },

      clearItemFromCart: (_root, { item }, { cache }) => {
         const { cartItems } = cache.readQuery({
            query: GET_CART_ITEMS
         });
         const updatedCartItems = clearCartItem(cartItems, item);
         cacheCartItems(updatedCartItems, cache);
         return updatedCartItems;
      },

      emptyCartItems: (_root, _args, { cache }) => {
         const emptyCart = [];
         cacheCartItems(emptyCart, cache);
         return emptyCart;
      },

      updateCurrentUser: (_root, { user }, { cache }) => {
         cache.writeQuery({
            query: GET_CURRENT_USER,
            data: { currentUser: user }
         });
         return user;
      }
   }
}