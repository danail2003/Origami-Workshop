import React, { Component } from 'react';
import styles from './register.module.css';
import PageWrapper from '../../components/page-wrapper/index';
import Title from '../../components/title/index';
import authenticate from '../../utils/authenticate';
import UserContext from '../../context';

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

    static contextType = UserContext;

    handleSubmit = async (e) => {
        e.preventDefault();

        const { username, password, rePassword } = this.state;

        if (!username || !password || !rePassword || password !== rePassword) {
            return;
        }

        await authenticate('http://localhost:9999/api/user/register', {
            username, password, rePassword }, (user) => {
                this.context.logIn(user);
                this.props.history.push('/');
            });
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
                            <input type="text" id="username" onChange={(e) => this.onChange(e, "username")} value={username} />
                        </div>
                        <div className={styles['form-control']}>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={(e) => this.onChange(e, "password")} value={password} />
                        </div>
                        <div className={styles['form-control']}>
                            <label htmlFor="rePassword">Re-password</label>
                            <input type="password" id="rePassword" onChange={(e) => this.onChange(e, 'rePassword')} value={rePassword} />
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