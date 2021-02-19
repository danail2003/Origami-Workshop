import React from 'react';
import renderer from 'react-test-renderer';
import PageWrapper from './index';
import UserContext from '../../context';
import { Route, BrowserRouter } from 'react-router-dom';

describe('PageWrapper', () => {
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
                        <PageWrapper />
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
                        <PageWrapper />
                    </UserContext.Provider>
                </Route>
            </BrowserRouter>
        ).toJSON();
        expect(component).toMatchSnapshot()
    });
});