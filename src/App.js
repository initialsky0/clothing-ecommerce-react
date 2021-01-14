import React from 'react';
import './App.css';

// Redux
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user-selectors';

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
        // Below code was used to add collection data to firebase database
        // addCollectionAndDocs('collections', collectionsArray.map(({title, items}) => ({title, items})));
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsPreview
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
