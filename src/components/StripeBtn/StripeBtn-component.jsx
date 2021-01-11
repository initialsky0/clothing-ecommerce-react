import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutBtn = ({ price }) => {
   const priceInCent = price * 100;
   const publishableKey = 'provide you own test key';

   const onToken = token => {
      console.log(token);
      alert('Payment Successful');
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

export default StripeCheckoutBtn;