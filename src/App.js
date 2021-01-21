import React from 'react';
import './App.css';

// GraphQL
import {default as Header} from './components/Header/Header-container';

// Other Utilities
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from './firebase/firebase-util';
import HomePage from './pages/HomePage/HomePage-component';
import ShopPage from './pages/ShopPage/Shop-component';
import UserForms from './pages/UserForms/UserForms-component';
import { default as CheckoutPage } from './pages/Checkout/Checkout-container';
// import { render } from '@testing-library/react';

class App extends React.Component {

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
        <Header />
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

export default App;
