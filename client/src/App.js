import React, {lazy, useEffect, Suspense} from 'react';
import { GlobalStyle } from './global-styles';

// Redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user-selectors';
import { checkUserSession } from './redux/user/user-actions';

// Other Utilities
import { Switch, Route, Redirect } from "react-router-dom";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary-component';
import Spinner from './components/LoadSpinner/Spinner-component';
import Header from './components/Header/Header-component';

// Lazy import
const HomePage = lazy(() => import('./pages/HomePage/HomePage-component'));
const ShopPage = lazy(() => import('./pages/ShopPage/Shop-component'));
const UserForms = lazy(() => import('./pages/UserForms/UserForms-component'));
const CheckoutPage = lazy(() => import('./pages/Checkout/Checkout-component'));


const App = ({ checkUserSession, currentUser }) => {

  useEffect(checkUserSession, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path='/' component={HomePage} /> 
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage}/>
            <Route 
              exact path='/signin' 
              render={() => currentUser ? 
                (<Redirect to='/' />) : 
                (<UserForms />)} 
            />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
