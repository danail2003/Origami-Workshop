import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../src/pages/homePage/home-page';
import Share from '../src/pages/share/index';
import Register from '../src/pages/register/index';
import Login from '../src/pages/login/index';
import Profile from './pages/profile/index';
import Error from './pages/error/index';
import UserContext from './context';

const Navigation = () => {
    const context = useContext(UserContext);
    const loggedIn = context.user && context.user.loggedIn;

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/share'>
                    {loggedIn ? (<Share />): (<Redirect to='/login' />)}
                </Route>
                <Route path='/register'>
                    {loggedIn ? (<Redirect to='/' />): (<Register />)}
                </Route>
                <Route path='/login'>
                    {loggedIn ? (<Redirect to='/' />): (<Login />)}
                </Route>
                <Route path='/profile/:userId'>
                    {loggedIn ? (<Profile />): (<Redirect to='/' />)}
                </Route>
                <Route component={Error} />
            </Switch>
        </BrowserRouter>
    )
};

export default Navigation;