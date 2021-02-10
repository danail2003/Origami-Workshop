import React from 'react';
import PageWrapper from '../../components/page-wrapper/index';
import Title from '../../components/title/index';
import Button from '../../components/button/index';
import styles from './login.module.css';

const Login = () => {
    return(
        <PageWrapper>
            <div className={styles.login}>
                <Title title='Login' />
                <form>
                    <div className={styles['form-control']}>
                        <label>Email</label>
                        <input type='email' />
                    </div>
                    <div className={styles['form-control']}>
                        <label>Password</label>
                        <input type='password' />
                    </div>
                    <div className={styles['form-control']}>
                        <button className={styles.button}>Login</button>
                    </div>
                </form>
            </div>
        </PageWrapper>
    );
};

export default Login;