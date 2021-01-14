import React from 'react';
import SignIn from '../../components/SignIn/SignIn-component';
import SignUp from '../../components/SignUp/SignUp-component';
import { UserformContainer } from './UserForms-styled';

const UserForms = () => (
   <UserformContainer>
      <SignIn />
      <SignUp />
   </UserformContainer>
)

export default UserForms;