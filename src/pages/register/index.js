import React, { Component } from 'react';
import styles from './register.module.css';
import PageWrapper from '../../components/page-wrapper/index';
import Title from '../../components/title/index';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            rePassword: ""
        };
    }

    onChange = (e, type) => {
        const newState = {};
        newState[type] = e.target.value;

        this.setState(newState);
    }

    render() {
        const { email, password, rePassword } = this.state;

        return (
            <PageWrapper>
                <div className={styles.register}>
                    <Title title='Register Page' />
                    <form>
                        <div className={styles['form-control']}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={(e) => this.onChange(e, "email") } value={email} />
                        </div>
                        <div className={styles['form-control']}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={(e) => this.onChange(e, "password") } value={password} />
                        </div>
                        <div className={styles['form-control']}>
                            <label htmlFor="rePassword">Re-password</label>
                            <input type="password" id="rePassword" onChange={(e) => this.onChange(e, 'rePassword') } value={rePassword} />
                        </div>
                        <div className={styles['form-control']}>
                            <button className={styles.button}>Register</button>
                        </div>
                    </form>
                </div>
            </PageWrapper>
        );
    }
};

export default Register;