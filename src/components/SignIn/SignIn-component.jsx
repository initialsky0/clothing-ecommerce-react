import React, {useState} from 'react';
import FormInput from '../FormInput/FormInput-component';
import CustomBtn from '../CustomBtn/CustomBtn-component';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user-actions';
import { SignInContainer, SignInBtnsContainer } from './SignIn-styled';

const SignIn = ({ signInWithEmail, signInWithGoogle }) => {
   const [credential, setCredential] = useState({email: '', password: ''});
   const {email, password} = credential;

   const handleSubmit = event => {
      event.preventDefault();
      signInWithEmail(email, password);
   }

   const handleOnChange = event => {
      const { value, name }= event.target;
      setCredential({ ...credential, [name]: value })
   }

   return (
      <SignInContainer>
         <h2>I already have an account</h2>
         <span>Sign in with your email and password</span>

         <form onSubmit={handleSubmit}>
            <FormInput 
               type="email" 
               name="email"
               label='Email' 
               value={email} 
               handleChange={handleOnChange} 
               required 
            />
            <FormInput 
               type="password" 
               name="password" 
               label='Password' 
               value={password} 
               handleChange={handleOnChange}
               required 
            />
            <SignInBtnsContainer>
               <CustomBtn type="submit"> Sign In </CustomBtn>
               <CustomBtn type='button' onClick={signInWithGoogle} isGoogleSignIn={true}> Sign in with Google </CustomBtn>
            </SignInBtnsContainer>
         </form>
      </SignInContainer>
   );
}

const mapDispatchToProps = dispatch => ({
   signInWithGoogle: () => dispatch(googleSignInStart()),
   signInWithEmail: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);