import React from 'react';
import { connect } from 'react-redux';
import { clearDBCartStart } from '../../redux/cart/cart-actions';
// import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutBtn = ({ price, clearRemoteCart }) => {
   const priceInCent = price * 100;
   const publishableKey = process.env.REACT_APP_STRIPE_PUB_KEY;

   const onToken = token => {
      // axios({
      //    url: 'payment',
      //    method: 'post',
      //    data: {
      //       amount: priceInCent,
      //       token
      //    }
      // })
      // .then(response => alert('Payment successful'))
      // .catch(error => {
      //    console.log('Payment error', JSON.parse(error));
      //    alert('An error occured during the transaction. Please ensure you provided the correct credit card info.')
      // });

      // Use fetch method
      fetch(encodeURI(`${window.location.origin}/payment`), {
         method: 'post',
         mode: 'cors',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({
            amount: priceInCent,
            token
         })
      })
      .then(response => {
         if(response.ok) {
            clearRemoteCart();
            alert('Payment successful');
         };
      })
      .catch(error => {
         console.log('Payment error', JSON.parse(error));
         alert('An error occured during the transaction. Please ensure you provided the correct credit card info.')
      });
   }

   return (
      <StripeCheckout 
         label='Pay Now'
         name='Mock Clothing Shop Ltd.'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is $${price}`}
         amount={priceInCent}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
      />
   );
};

const mapDispatchToProps = dispatch => ({
   clearRemoteCart: () => dispatch(clearDBCartStart())
});

export default connect(null, mapDispatchToProps)(StripeCheckoutBtn);