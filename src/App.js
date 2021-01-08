import React from 'react';
import './App.css';

// Redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';

import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from './firebase/firebase-util';
import HomePage from './pages/HomePage/HomePage-component';
import ShopPage from './pages/ShopPage/Shop-component';
import UserForms from './pages/UserForms/UserForms-component';
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
            <Route path='/signin' component={UserForms} />
        </Switch>
      </div>
  );}
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
