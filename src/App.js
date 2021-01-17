import React from 'react';
import './App.css';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user-selectors';
import { checkUserSession } from './redux/user/user-actions';

// Other Utilities
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage-component';
import ShopPage from './pages/ShopPage/Shop-component';
import UserForms from './pages/UserForms/UserForms-component';
import CheckoutPage from './pages/Checkout/Checkout-component';
import Header from './components/Header/Header-component';
// import { render } from '@testing-library/react';

class App extends React.Component {
  // Observer pattern, listening to live streams of data
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  componentWillUnmount() {
    // this.unsubscribeFromAuth();
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
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
