import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './index';
import UserContext from '../../context';
import { Route, BrowserRouter } from 'react-router-dom';

describe('Footer', () => {
    it('should render authenticated routes', () => {
        const component = renderer.create(
            <BrowserRouter>
                <Route>
                    <UserContext.Provider value={{
                        user: {
                            loggedIn: true,
                            id: '456'
                        }
                    }}>
                        <Footer />
                    </UserContext.Provider>
                </Route>
            </BrowserRouter>
        ).toJSON();
        expect(component).toMatchSnapshot()
    });

    it('should render non-authenticated routes', () => {
        const component = renderer.create(
            <BrowserRouter>
                <Route>
                    <UserContext.Provider value={{
                        user: {
                            loggedIn: false
                        }
                    }}>
                        <Footer />
                    </UserContext.Provider>
                </Route>
            </BrowserRouter>
        ).toJSON();
        expect(component).toMatchSnapshot()
    });
});