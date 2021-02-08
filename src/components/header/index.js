import React from 'react';
import styles from './header.module.css';
import Link from '../link/index';
import logo from '../../images/white-origami-bird.png';
import getNavigation from '../../utils/navigation';

const Header = () => {
    const navigation = getNavigation();

    return (
        <nav className={styles.navigation}>
            <ul>
                <img src={logo} className={styles.logo} alt="origami" />
                {
                    navigation.map((nav, index)=>{
                        return <Link key={index} href={nav.link} title={nav.title} type='header' />
                    })
                }
            </ul>
        </nav>
    )
}

export default Header