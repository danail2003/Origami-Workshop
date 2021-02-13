import React, { Component } from 'react';
import styles from './register.module.css';
import PageWrapper from '../../components/page-wrapper/index';
import Title from '../../components/title/index';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            rePassword: ""
        };
    }

    onChange = (e, type) => {
        const newState = {};
        newState[type] = e.target.value;

        this.setState(newState);
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { username, password, rePassword } = this.state;

        if(!username || !password || !rePassword || password !== rePassword) {
            return;
        }

        try {
            const promise = await fetch('http://localhost:9999/api/user/register', {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password,
                    rePassword
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const token = promise.headers.get('Authorization');
            document.cookie = `x-auth-token=${token}`;

            const response = await promise.json();

            if (!response.username || !token) {
                return;
            }

            this.props.history.push('/');
        }
        catch (e) {
            alert(e);
        }
    };

    render() {
        const { username, password, rePassword } = this.state;

        return (
            <PageWrapper>
                <div className={styles.register}>
                    <Title title='Register Page' />
                    <form onSubmit={this.handleSubmit}>
                        <div className={styles['form-control']}>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" onChange={(e) => this.onChange(e, "username") } value={username} />
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
                            <button type="submit" className={styles.button}>Register</button>
                        </div>
                    </form>
                </div>
            </PageWrapper>
        );
    }
};

export default Register;