import React from 'react';
import FormInput from '../FormInput/FormInput-component';
import CustomBtn from '../CustomBtn/CustomBtn-component';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user-actions';
import { SignUpContainer } from './SignUp-styled';

class SignUp extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         displayName: '',
         email: '',
         password: '',
         confirmPassword: ''
      }
   }

   handleSubmit = event => {
      event.preventDefault();
      const { displayName, email, password, confirmPassword } = this.state;
      const { signUpStart } = this.props

      if(password !== confirmPassword) {
         alert('Password entered not matching.');
         return;
      }
      signUpStart({ displayName, email, password });
   }

   handleChange = event => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   }

   render() {
      const { displayName, email, password, confirmPassword } = this.state;

      return (
         <SignUpContainer>
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
               <FormInput
                  type='text'
                  name='displayName'
                  value={displayName}
                  onChange={this.handleChange}
                  label='Display Name'
                  required
               />
               <FormInput
                  type='email'
                  name='email'
                  value={email}
                  onChange={this.handleChange}
                  label='Email'
                  required
               />
               <FormInput
                  type='password'
                  name='password'
                  value={password}
                  onChange={this.handleChange}
                  label='Password'
                  required
               />
               <FormInput
                  type='password'
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange={this.handleChange}
                  label='Confirm Password'
                  required
               />
               <CustomBtn type='submit'> Sign Up </CustomBtn>
            </form>
         </SignUpContainer>
      );
   }
}

const mapDispatchToProps = dispatch => ({
   signUpStart: credential => dispatch(signUpStart(credential))
});

export default connect(null, mapDispatchToProps)(SignUp);
