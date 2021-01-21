import React from 'react';
import { auth } from '../../firebase/firebase-util';
// Below is method to import svg in React
import { ReactComponent as Logo } from '../../assets/crown.svg';
// etc.
import { default as CartIcon } from '../CartIcon/CartIcon-container';
import { default as CartDropdown } from '../CartDropdown/CartDropdown-container';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header-styled';

const Header = ({ currentUser, hidden, emptyCart }) => (
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
            <OptionLink 
               as='div' 
               onClick={() => {
                  auth.signOut();
                  emptyCart();
               }}
            >
               SIGN OUT
            </OptionLink>
            :
            <OptionLink to='/signin'>SIGN IN</OptionLink>
         }
         <CartIcon />
      </OptionsContainer>
      {hidden ? null : (<CartDropdown />)}
   </HeaderContainer>
);


export default Header;