import React from 'react';
import FormInput from '../FormInput/FormInput-component';
import CustomBtn from '../CustomBtn/CustomBtn-component';
import { auth, signInWithGoogle } from '../../firebase/firebase-util';
import './SignIn-style.scss';

class SignIn extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         email: '',
         password: ''
      }
   }

   handleSubmit = async event => {
      event.preventDefault();
      const { email, password } = this.state;
      try {
         await auth.signInWithEmailAndPassword(email, password);
         this.setState({email: '', password: ''});
      } catch (error) {
         console.error(error)
      }
   }

   handleOnChange = event => {
      const { value, name }= event.target;
      this.setState({ [name]: value });
   }

   render() {
      return (
         <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
               <FormInput 
                  type="email" 
                  name="email"
                  label='Email' 
                  value={this.state.email} 
                  handleChange={this.handleOnChange} 
                  required 
               />
               <FormInput 
                  type="password" 
                  name="password" 
                  label='Password' 
                  value={this.state.password} 
                  handleChange={this.handleOnChange}
                  required 
               />
               <div className="buttons">
                  <CustomBtn type="submit"> Sign In </CustomBtn>
                  <CustomBtn onClick={signInWithGoogle} isGoogleSignIn={true}> Sign in with Google </CustomBtn>
               </div>
            </form>
         </div>
      )
   }
}

export default SignIn