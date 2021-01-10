import React from 'react';
import './App.css';

// Redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user-selectors';
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from './firebase/firebase-util';
import HomePage from './pages/HomePage/HomePage-component';
import ShopPage from './pages/ShopPage/Shop-component';
import UserForms from './pages/UserForms/UserForms-component';
import CheckoutPage from './pages/Checkout/Checkout-component';
import Header from './components/Header/Header-component';
// import { render } from '@testing-library/react';

class App extends React.Component {
  // constructor no longer required with redux
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({ currentUser : user });
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      } else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* 
          // example for rendering all 
          <Route exact path='/' component={HomePage} /> 
          <Route path='/hats' component={HatsPage}>
        */}

        <Header />

        {/* //Example of only rendering matched path once */}
        <Switch>
            <Route exact path='/' component={HomePage} /> 
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage}/>
            <Route exact path='/signin' 
              render={() => this.props.currentUser ? 
                (<Redirect to='/' />) : 
                  (<UserForms />)} />
        </Switch>
      </div>
  );}
}

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser
// })

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
