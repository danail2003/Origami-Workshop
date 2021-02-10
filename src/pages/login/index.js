import React, { Component } from 'react';
import PageWrapper from '../../components/page-wrapper/index';
import Title from '../../components/title/index';
import styles from './login.module.css';

class Login extends Component {
    constructor(props){
        super(props);

        this.state={
            email: "",
            password: ""
        };
    }

    onChange = (e, type) => {
        const newState={};
        newState[type]=e.target.value;

        this.setState(newState);
    }

    render(){
        const {email, password}=this.state;

        return(
            <PageWrapper>
                <div className={styles.login}>
                    <Title title='Login' />
                    <form>
                        <div className={styles['form-control']}>
                            <label htmlFor="email">Email</label>
                            <input type='email' id="email" onChange={(e) => this.onChange(e, 'email')} value={email} />
                        </div>
                        <div className={styles['form-control']}>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' onChange={(e) => this.onChange(e, 'password')} value={password} />
                        </div>
                        <div className={styles['form-control']}>
                            <button className={styles.button}>Login</button>
                        </div>
                    </form>
                </div>
            </PageWrapper>
        );
    }
};

export default Login;