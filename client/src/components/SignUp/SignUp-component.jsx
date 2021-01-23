import React, {useState} from 'react';
import FormInput from '../FormInput/FormInput-component';
import CustomBtn from '../CustomBtn/CustomBtn-component';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user-actions';
import { SignUpContainer } from './SignUp-styled';

const SignUp = ({ signUpStart }) => {

   const [signUpCredential, setSignUpCredential] = useState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
   });
   
   const { displayName, email, password, confirmPassword } = signUpCredential;

   const handleSubmit = event => {
      event.preventDefault();

      if(password !== confirmPassword) {
         alert('Password entered not matching.');
         return;
      }
      signUpStart({ displayName, email, password });
   }

   const handleChange = event => {
      const { name, value } = event.target;
      setSignUpCredential({...signUpCredential, [name]: value });
   }


   return (
      <SignUpContainer>
         <h2 className="title">I do not have a account</h2>
         <span>Sign up with your email and password</span>
         <form className="sign-up-form" onSubmit={handleSubmit}>
            <FormInput
               type='text'
               name='displayName'
               value={displayName}
               onChange={handleChange}
               label='Display Name'
               required
            />
            <FormInput
               type='email'
               name='email'
               value={email}
               onChange={handleChange}
               label='Email'
               required
            />
            <FormInput
               type='password'
               name='password'
               value={password}
               onChange={handleChange}
               label='Password'
               required
            />
            <FormInput
               type='password'
               name='confirmPassword'
               value={confirmPassword}
               onChange={handleChange}
               label='Confirm Password'
               required
            />
            <div>
            <CustomBtn type='submit'> Sign Up </CustomBtn>
            </div>
         </form>
      </SignUpContainer>
   );
};

const mapDispatchToProps = dispatch => ({
   signUpStart: credential => dispatch(signUpStart(credential))
});

export default connect(null, mapDispatchToProps)(SignUp);
