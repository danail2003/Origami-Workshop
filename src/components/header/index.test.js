import React from 'react';
import renderer from 'react-test-renderer';
import Header from './index';
import UserContext from '../../context';
import { Route, BrowserRouter } from 'react-router-dom';
import getNavigation from '../../utils/navigation';

describe('Header', () => {
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
                        <Header />
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
                        <Header />
                    </UserContext.Provider>
                </Route>
            </BrowserRouter>
        ).toJSON();
        expect(component).toMatchSnapshot()
    });

    it('should return authenticated links', () => {
        const links = getNavigation({
            loggedIn: true,
            id: '123'
        });

        const userLinks = [
            {
                title: 'Publications',
                link: '/'
            },
            {
                title: 'Share your thoughts',
                link: '/share'
            },
            {
                title: 'Profile',
                link: `/profile/123`
            },
        ];

        expect(links).toStrictEqual(userLinks);
    });
});