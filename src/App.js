import React from 'react';
import './App.css';

// Context
import CurrentUserContext from './contexts/currentUser/currentUser-context';

// Other Utilities
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from './firebase/firebase-util';
import HomePage from './pages/HomePage/HomePage-component';
import ShopPage from './pages/ShopPage/Shop-component';
import UserForms from './pages/UserForms/UserForms-component';
import CheckoutPage from './pages/Checkout/Checkout-component';
import Header from './components/Header/Header-component';
// import { render } from '@testing-library/react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }})
        });
      } else {
        this.setState({currentUser: userAuth});
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  // make sure to wrap the provider on the correct hierarchy so the component can access the context dynamically
  render() {
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header />
        </CurrentUserContext.Provider>
        <Switch>
            <Route exact path='/' component={HomePage} /> 
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage}/>
            <Route exact path='/signin' 
              render={() => this.state.currentUser ? 
                (<Redirect to='/' />) : 
                  (<UserForms />)} />
        </Switch>
      </div>
  );}
}

export default App;
