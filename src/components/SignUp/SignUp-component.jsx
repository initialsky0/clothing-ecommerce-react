import React from 'react';
import FormImnput from '../FormInput/FormInput-component';
import CustomBtn from '../CustomBtn/CustomBtn-component';
import { auth, createUserProfileDocument } from '../../firebase/firebase-util';
import './SignUp-style.scss';

class SignUp extends React.Component {
   constructor() {
      super();

      this.state = {
         displayName: '',
         email: '',
         password: '',
         confirmPassword: ''
      }
   }
}
