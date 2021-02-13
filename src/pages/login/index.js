import React, { Component } from 'react';
import PageWrapper from '../../components/page-wrapper/index';
import Title from '../../components/title/index';
import styles from './login.module.css';
import authenticate from '../../utils/authenticate';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    onChange = (e, type) => {
        const newState = {};
        newState[type] = e.target.value;

        this.setState(newState);
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { username, password } = this.state;

        if (!username || !password) {
            return;
        }

        await authenticate('http://localhost:9999/api/user/login', {
            username,
            password
        }, this.props);
    };

    render() {
        const { username, password } = this.state;

        return (
            <PageWrapper>
                <div className={styles.login}>
                    <Title title='Login' />
                    <form onSubmit={this.handleSubmit}>
                        <div className={styles['form-control']}>
                            <label htmlFor="username">Username</label>
                            <input type="username" id="username" onChange={(e) => this.onChange(e, 'username')} value={username} />
                        </div>
                        <div className={styles['form-control']}>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' onChange={(e) => this.onChange(e, 'password')} value={password} />
                        </div>
                        <div className={styles['form-control']}>
                            <button type="submit" className={styles.button}>Login</button>
                        </div>
                    </form>
                </div>
            </PageWrapper>
        );
    }
};

export default Login;