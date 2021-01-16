import React from 'react';
import FormInput from '../FormInput/FormInput-component';
import CustomBtn from '../CustomBtn/CustomBtn-component';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user-actions';
import { SignInContainer, SignInBtnsContainer } from './SignIn-styled';

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
      const { signInWithEmail } = this.props;
      signInWithEmail(email, password);
   }

   handleOnChange = event => {
      const { value, name }= event.target;
      this.setState({ [name]: value });
   }

   render() {
      return (
         <SignInContainer>
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
               <SignInBtnsContainer>
                  <CustomBtn type="submit"> Sign In </CustomBtn>
                  <CustomBtn type='button' onClick={this.props.signInWithGoogle} isGoogleSignIn={true}> Sign in with Google </CustomBtn>
               </SignInBtnsContainer>
            </form>
         </SignInContainer>
      )
   }
}

const mapDispatchToProps = dispatch => ({
   signInWithGoogle: () => dispatch(googleSignInStart()),
   signInWithEmail: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);