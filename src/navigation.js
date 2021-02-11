import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../src/pages/homePage/home-page';
import Share from '../src/pages/share/index';
import Register from '../src/pages/register/index';
import Login from '../src/pages/login/index';
import Profile from './pages/profile/index';
import Error from './pages/error/index';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/share' component={Share} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <Route path='/profile/:userId' component={Profile} />
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    )
};

export default Navigation;