import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase-util';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
// Below is method to import svg in React
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon-component';
import CartDropdown from '../CartDropdown/CartDropdown-component';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header-styled';

const Header = ({ currentUser, hidden }) => (
   <HeaderContainer>
      <LogoContainer to='/'>
         <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
         <OptionLink to='/shop'>
            SHOP
         </OptionLink>
         <OptionLink to='/shop'>
            CONTACT
         </OptionLink>
         {
            currentUser ? 
            <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
            :
            <OptionLink to='/signin'>SIGN IN</OptionLink>
         }
         <CartIcon />
      </OptionsContainer>
      {hidden ? null : (<CartDropdown />)}
   </HeaderContainer>
)

// Using selectors from reselect
const mapStateToProps = createStructuredSelector ({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);