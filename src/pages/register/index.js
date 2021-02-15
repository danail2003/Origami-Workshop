import React, { useState, useContext } from 'react';
import styles from './register.module.css';
import PageWrapper from '../../components/page-wrapper/index';
import Title from '../../components/title/index';
import authenticate from '../../utils/authenticate';
import UserContext from '../../context';

const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const context = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password || !rePassword || password !== rePassword) {
            return;
        }

        await authenticate('http://localhost:9999/api/user/register', {
            username, password, rePassword }, (user) => {
                context.logIn(user);
                props.history.push('/');
            });
    };

    return (
        <PageWrapper>
            <div className={styles.register}>
                <Title title='Register Page' />
                <form onSubmit={handleSubmit}>
                    <div className={styles['form-control']}>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" onChange={(e) => {setUsername(e.target.value)}} value={username} />
                    </div>
                    <div className={styles['form-control']}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={(e) => {setPassword(e.target.value)}} value={password} />
                    </div>
                    <div className={styles['form-control']}>
                        <label htmlFor="rePassword">Re-password</label>
                        <input type="password" id="rePassword" onChange={(e) => {setRePassword(e.target.value)}} value={rePassword} />
                    </div>
                    <div className={styles['form-control']}>
                        <button type="submit" className={styles.button}>Register</button>
                    </div>
                </form>
            </div>
        </PageWrapper>
    );
};

export default Register;