import React, { useState, useEffect } from 'react';
import UserContext from './context';
import getCookie from './utils/getCookie';

const App = (props) => {
    const [user, setUser] = useState(props.user ? {
        ...props.user,
        loggedIn: true
    } : null);

    const logIn = (user) => {
        setUser({
            ...user,
            loggedIn: true
        });
    };

    const origamis = props.origamis || [];

    const logOut = () => {
        document.cookie = 'x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';

        setUser({
            loggedIn: false,
        });
    }

    useEffect(() => {
        const token = getCookie('x-auth-token');

        if (!token) {
            logOut();
            return;
        }

        fetch('http://localhost:9999/api/user/verify', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
            .then(promise => {
                return promise.json();
            })
            .then(res => {
                if (res.status) {
                    logIn({
                        username: res.user.username,
                        id: res.user._id
                    });
                }
                else {
                    logOut();
                }
            })
    }, [])

    return (
        <UserContext.Provider value={{
            user,
            origamis,
            logIn,
            logOut
        }}>
            {props.children}
        </UserContext.Provider>
    )
};

export default App;