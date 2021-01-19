import React, { useContext } from 'react';
// Context API
import CurrentUserContext from '../../contexts/currentUser/currentUser-context';
import { CartContext } from '../../providers/cart/cart-provider';
// Below is method to import svg in React
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../CartIcon/CartIcon-component';
import CartDropdown from '../CartDropdown/CartDropdown-component';
import { auth } from '../../firebase/firebase-util';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header-styled';

const Header = () => {
   const currentUser = useContext(CurrentUserContext);
   const { hidden, emptyCart } = useContext(CartContext);

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
               currentUser 
               ? <OptionLink 
                  as='div' 
                  onClick={() => {
                     auth.signOut();
                     emptyCart();
                  }}
               >
                  SIGN OUT
               </OptionLink>
               : <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon />
         </OptionsContainer>
         {hidden ? null : <CartDropdown />}
      </HeaderContainer>
);}

export default Header;