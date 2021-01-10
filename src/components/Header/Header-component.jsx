import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase-util';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
// Below is method to import svg in React
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon-component';
import CartDropdown from '../CartDropdown/CartDropdown-component';
import './Header-style.scss';

const Header = ({ currentUser, hidden }) => (
   <div className="header">
      <Link className='logo-container' to='/'>
         <Logo className='logo' />
      </Link>
      <div className="options">
         <Link className="option" to='/shop'>
            SHOP
         </Link>
         <Link className="option" to='/shop'>
            CONTACT
         </Link>
         {
            currentUser ? 
            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
            :
            <Link className="option" to='/signin'>SIGN IN</Link>
         }
         <CartIcon />
      </div>
      {hidden ? null : (<CartDropdown />)}
   </div>
)

// state = rootReducer, currentUser: <= is what's passed in to the component
// const mapStateToProps = ({ user: {currentUser}, cart: {hidden} }) => ({
//    currentUser,
//    hidden
// });

// Using selectors from reselect
const mapStateToProps = createStructuredSelector ({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);