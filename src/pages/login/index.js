import React, { useState, useContext } from 'react';
import PageWrapper from '../../components/page-wrapper/index';
import Title from '../../components/title/index';
import styles from './login.module.css';
import authenticate from '../../utils/authenticate';
import UserContext from '../../context';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const context = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            return;
        }

        await authenticate('http://localhost:9999/api/user/login', {
            username,
            password
        }, (user) => {
            context.logIn(user);
            props.history.push('/');
        });
    };

    return (
        <PageWrapper>
            <div className={styles.login}>
                <Title title='Login' />
                <form onSubmit={handleSubmit}>
                    <div className={styles['form-control']}>
                        <label htmlFor="username">Username</label>
                        <input type="username" id="username" onChange={(e) => {setUsername(e.target.value)}} value={username} />
                    </div>
                    <div className={styles['form-control']}>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={(e) => {setPassword(e.target.value)}} value={password} />
                    </div>
                    <div className={styles['form-control']}>
                        <button type="submit" className={styles.button}>Login</button>
                    </div>
                </form>
            </div>
        </PageWrapper>
    );
};

export default Login;