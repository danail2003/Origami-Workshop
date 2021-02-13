import React, { Component } from 'react';
import Link from '../link/index';
import styles from './aside.module.css';
import getNavigation from '../../utils/navigation';
import UserContext from '../../context';

class Aside extends Component {
    static contextType = UserContext;

    render() {
        const {loggedIn, user}=this.context;
        const navigation = getNavigation(loggedIn, user);

        return (
            <aside className={styles.aside}>
                <ul>
                    {
                        navigation.map((nav, index)=>{
                            return <Link key={index} href={nav.link} title={nav.title} type='aside' />
                        })
                    }
                </ul>
            </aside>
        )
    }
};

export default Aside;