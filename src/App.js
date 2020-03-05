import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import Header from './components/header/header.component';

import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/home-page/home-page.component';
import ShopPage from './pages/shop-page/shop-page.component';
import CheckoutPage from './pages/checkout-page/checkout-page.component';

import {auth, createUserProfileDocument } from './firebase/firebase.utils';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

class App extends Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
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
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
            exact 
            path='/sign-in' 
            render={() => 
              this.props.currentUser ? (
                <Redirect to='/' /> 
              ) : (
                <SignInAndSignUp />
              )
            } 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
