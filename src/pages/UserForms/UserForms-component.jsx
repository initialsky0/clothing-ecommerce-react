import React from 'react';
import SignIn from '../../components/SignIn/SignIn-component';
import SignUp from '../../components/SignUp/SignUp-component';
import './UserForms-style.scss';

const UserForms = () => (
   <div className="user-form">
      <SignIn />
      <SignUp />
   </div>
)

export default UserForms;