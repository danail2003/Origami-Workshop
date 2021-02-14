import React, { useContext } from 'react';
import styles from './header.module.css';
import Link from '../link/index';
import logo from '../../images/white-origami-bird.png';
import getNavigation from '../../utils/navigation';
import UserContext from '../../context';

const Header = () => {
    const { user } = useContext(UserContext);
    const navigation = getNavigation(user);

    return (
        <nav className={styles.navigation}>
            <ul>
                <img src={logo} className={styles.logo} alt="origami" />
                {
                    navigation.map((nav, index) => {
                        return <Link key={index} href={nav.link} title={nav.title} type='header' />
                    })
                }
            </ul>
        </nav>
    )
}

export default Header