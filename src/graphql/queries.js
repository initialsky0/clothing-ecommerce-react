import { gql } from 'apollo-boost';

export const GET_CART_HIDDEN = gql`
   {
      cartHidden @client
   }
`;

export const GET_CART_ITEMS = gql`
   {
      cartItems @client
   }
`;

export const GET_CART_TOTAL = gql`
   {
      cartTotal @client
   }
`;

export const GET_ITEM_COUNT = gql`
   {
      itemCount @client
   }
`;

export const GET_CURRENT_USER = gql`
   {
      currentUser @client
   }
`;


// Mutation Queries
export const TOGGLE_CART_HIDDEN = gql`
   mutation ToggleCartHidden {
      toggleCartHidden @client
   }
`;

export const ADD_ITEM_TO_CART = gql`
   mutation AddItemToCart($item: Item!) {
      addItemToCart(item: $item) @client
   }
`;

export const REMOVE_ITEM_FROM_CART = gql`
   mutation RemoveItemFromCart($item: Item!) {
      removeItemFromCart(item: $item) @client
   }
`;

export const CLEAR_ITEM_FROM_CART = gql`
   mutation ClearItemFromCart($item: Item!) {
      clearItemFromCart(item: $item) @client
   }
`;

export const EMPTY_CART_ITEMS = gql`
   mutation EmptyCartItems {
      emptyCartItems @client
   }
`;

export const UPDATE_CURRENT_USER = gql`
   mutation UpdateCurrentUser($user: User!) {
      updateCurrentUser(user: $user) @client
   }
`;

