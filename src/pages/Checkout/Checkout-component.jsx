import React from 'react';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem-component';
import StripeCheckoutBtn from '../../components/StripeBtn/StripeBtn-component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors';
import './Checkout-style.scss';

const CheckoutPage = ({cartItems, cartTotal}) => (
   <div className='checkout-page'> 
      <div className="checkout-header">
         <div className="header-block">
            <span>Product</span>
         </div>
         <div className="header-block">
            <span>Description</span>
         </div>
         <div className="header-block">
            <span>Quantity</span>
         </div>
         <div className="header-block">
            <span>Price</span>
         </div>
         <div className="header-block">
            <span>Remove</span>
         </div>
      </div>
      {
         cartItems.map(item => 
            <CheckoutItem key={item.id} cartItem={item} />
         )
      }
      <div className='total'>
         <span>TOTAL: ${cartTotal}</span>
      </div>
      <div className="test-warning">
         *Please use the following test credit card for payments*
         <br/>
         Card#: 4242424242424242	
         <br/>
         CVC: Any 3 digits	
         <br/>
         Expire Date: Any future date
      </div>
      <StripeCheckoutBtn price={cartTotal} />
   </div>
);

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
   cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);