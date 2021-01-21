import React from 'react';
import { Mutation, Query } from 'react-apollo';
import CartDropdown from './CartDropdown-component';
import { GET_CART_ITEMS, TOGGLE_CART_HIDDEN } from '../../graphql/queries';


const CartDropdownContainer = () => (
   <Mutation mutation={TOGGLE_CART_HIDDEN}>
      {
         toggleCartHidden => (
            <Query query={GET_CART_ITEMS}>
               {
                  ({data: { cartItems }}) => (
                     <CartDropdown 
                        toggleCartHidden={toggleCartHidden} 
                        cartItems={cartItems}
                     />
               )}
            </Query>
         )
      }
   </Mutation>
);

export default CartDropdownContainer;