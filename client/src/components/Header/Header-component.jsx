import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { signOutStart } from '../../redux/user/user-actions';
// Below is method to import svg in React
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon-component';
import CartDropdown from '../CartDropdown/CartDropdown-component';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header-styled';

// const passRefToChild = (Component, actualRef) => (
//    React.forwardRef(
//       () => <Component ref={actualRef} />
// ));

const Header = ({ currentUser, hidden, signOutStart }) => {
   // Created a ref for icon and used in dropdown
   const iconRef = React.createRef();
   return (
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
               <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
               :
               <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon iconRef={iconRef} />
         </OptionsContainer>
         {hidden ? null : (<CartDropdown iconRef={iconRef} />)}
      </HeaderContainer>
   );
};

// Using selectors from reselect
const mapStateToProps = createStructuredSelector ({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
   signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);