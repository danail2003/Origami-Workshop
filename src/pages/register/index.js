import React from 'react';
import styles from './register.module.css';
import PageWrapper from '../../components/page-wrapper/index';
import Title from '../../components/title/index';

const Register = () => {
    return (
        <PageWrapper>
        <div className={styles.register}>
            <Title title='Register Page' />
            <form>
                <div className={styles['form-control']}>
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div className={styles['form-control']}>
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div className={styles['form-control']}>
                    <label>Re-password</label>
                    <input type="password" />
                </div>
                <div className={styles['form-control']}>
                    <button className={styles.button}>Register</button>
                </div>
            </form>
        </div>
        </PageWrapper>
    );
};

export default Register;