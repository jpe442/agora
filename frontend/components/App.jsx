import React from 'react';
import { Route } from 'react-router-dom';
import NavBarContainer from './navbar/nav_bar_container';
import Home from './home/home';
import {HomePage} from './homepage/homepage'
import QuestionIndexContainer from './homepage/question_index_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={Home} />
    <ProtectedRoute path="/homepage" component={HomePage} />
  </div>
);

export default App;