import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import SignIn from './components/auth/signin';
import SignOut from './components/auth/signout';
import SignUp from './components/auth/signup';
import Feature from './components/feature';
import Welcome from './components/welcome';
import requireAuth from './components/auth/require_auth'
import reducers from './reducers';
import {AUTH_USER} from "./actions/type";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if(token) {
    store.dispatch({type: AUTH_USER});
}

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory}>
          <Route path="/" component={App}>
              <IndexRoute component={Welcome}/>
              <Route path="signin" component={SignIn}/>
              <Route path="signout" components={SignOut}/>
              <Route path="signup" components={SignUp}/>
              <Route path="feature" components={requireAuth(Feature)}/>
          </Route>
      </Router>
  </Provider>
  , document.querySelector('.container'));
