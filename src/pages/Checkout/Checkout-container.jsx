import React from 'react';
import { GET_CART_ITEMS, GET_CART_TOTAL } from '../../graphql/queries';
import { graphql } from 'react-apollo';
import { flowRight } from 'lodash';
import CheckoutPage from './Checkout-component';

const CheckoutContainer = ({data: {cartItems}, dataCartTotal: {cartTotal}}) => (
   <CheckoutPage cartItems={cartItems} cartTotal={cartTotal} />
);

export default flowRight(
   graphql(GET_CART_ITEMS),
   graphql(GET_CART_TOTAL, { name: 'dataCartTotal' })
)(CheckoutContainer);