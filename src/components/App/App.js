import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import Navigation from '../Navigation/Navigation';
import HomePage from '../HomePage/HomePage';
import SignInPage from '../SignInPage/SignInPage';
import SignUpPage from '../SignUpPage/SignUpPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      </div>
    </Router>
  );
}

export default App;
