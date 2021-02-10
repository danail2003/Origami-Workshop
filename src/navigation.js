import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../src/pages/homePage/home-page';
import Share from '../src/pages/share/index';
import Register from '../src/pages/register/index';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/share' component={Share} />
                <Route path='/register' component={Register} />
            </Switch>
        </BrowserRouter>
    )
};

export default Navigation;