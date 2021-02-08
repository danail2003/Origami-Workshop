import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../src/pages/homePage/home-page';
import Share from '../src/pages/share/index';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/share' component={Share} />
            </Switch>
        </BrowserRouter>
    )
};

export default Navigation;