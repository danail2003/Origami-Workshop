import React, { useContext } from 'react';
import Link from '../link/index';
import styles from './footer.module.css';
import logo from '../../images/blue-origami-bird-flipped.png';
import getNavigation from '../../utils/navigation';
import UserContext from '../../context';

const Footer = () => {

    const { user } = useContext(UserContext);
    const navigation = getNavigation(user);

    return (
        <footer className={styles.footer}>
            <ul>
                {
                    navigation.map((nav, index) => {
                        return <Link key={index} href={nav.link} title={nav.title} type='footer' />
                    })
                }
                <img src={logo} alt="origami" className={styles.logo} />
            </ul>
            <p className={styles.paragraph}>Software University &copy; 2019</p>
        </footer>
    )
};

export default Footer;