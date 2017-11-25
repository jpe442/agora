import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './navbar/nav_bar_container';
import Home from './home/home';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';




const App = () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={Home} />
  </div>
);

export default App;