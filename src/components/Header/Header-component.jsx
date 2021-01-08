import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase-util';
// Below is method to import svg in React
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header-style.scss';

const Header = ({ currentUser }) => (
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
      </div>
   </div>
)

// state = rootReducer, currentUser: <= is what's passed in to the component
const mapStateToProps = state => ({
   currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);