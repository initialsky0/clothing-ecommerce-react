import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectHeaderFixed, selectHeaderHidden } from '../../redux/header/header-selectors';
import { signOutStart } from '../../redux/user/user-actions';
// Below is method to import svg in React
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon-component';
import CartDropdown from '../CartDropdown/CartDropdown-component';
import { HeaderContainer, 
         LogoContainer, 
         OptionsContainer, 
         OptionLink, 
         HeaderPlaceholder } from './Header-styled';


const Header = ({ currentUser, hidden, signOutStart, 
                  headerFixed, headerHidden }) => {

   // Created a ref for icon and used in dropdown
   const iconRef = React.createRef();
   return (
      <Fragment>
         <HeaderPlaceholder headerFixed={headerFixed} />
         <HeaderContainer headerFixed={headerFixed} headerHidden={headerHidden} >
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
      </Fragment>
   );
};

// Using selectors from reselect
const mapStateToProps = createStructuredSelector ({
   currentUser: selectCurrentUser,
   hidden: selectCartHidden,
   headerFixed: selectHeaderFixed,
   headerHidden: selectHeaderHidden
});

const mapDispatchToProps = dispatch => ({
   signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);