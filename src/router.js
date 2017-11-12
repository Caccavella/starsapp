import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/main/main';
import Stars from './components/stars/stars';
import Login from './components/login/login';

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/main' component={Main} />
        <Route path='/stars' component={Stars} />
    </Switch>
)