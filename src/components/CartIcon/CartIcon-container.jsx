import React from 'react';
import { TOGGLE_CART_HIDDEN, GET_ITEM_COUNT } from '../../graphql/queries';
// import { Mutation, Query } from 'react-apollo';
import CartIcon from './CartIcon-component';
// Compose import
import { flowRight } from 'lodash';
import { graphql } from 'react-apollo';


// Component Query Method
// const CartIconContainer = () => (
//    <Query query={GET_ITEM_COUNT} >
//       {({data: {itemCount}}) => (
//             <Mutation mutation={TOGGLE_CART_HIDDEN}>
//                {
//                   toggleCartHidden => (
//                      <CartIcon 
//                         toggleCartHidden={toggleCartHidden} 
//                         itemCount={itemCount}
//                      />
//                   )
//                }
//             </Mutation>
//          )
//       }
//    </Query>
// );

// export default CartIconContainer;

// Compose Method
const CartIconContainer = ({data: {itemCount}, toggleCartHidden}) => (
   <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
);

export default flowRight(
   graphql(GET_ITEM_COUNT),
   graphql(TOGGLE_CART_HIDDEN, { name: 'toggleCartHidden' })
)(CartIconContainer);