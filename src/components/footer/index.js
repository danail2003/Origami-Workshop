import React from 'react';
import Link from '../link/index';
import styles from './footer.module.css';
import logo from '../../images/blue-origami-bird-flipped.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <Link href="#" title="Going to 1" type="footer" />
                <Link href="#" title="Going to 2" type="footer" />
                <Link href="#" title="Going to 3" type="footer" />
                <Link href="#" title="Going to 4" type="footer" />
                <Link href="#" title="Going to 5" type="footer" />
                <Link href="#" title="Going to 6" type="footer" />
                <Link href="#" title="Going to 7" type="footer" />
                <Link href="#" title="Going to 8" type="footer" />
                <Link href="#" title="Going to 9" type="footer" />
                <Link href="#" title="Going to 10" type="footer" />
                <Link href="#" title="Going to 11" type="footer" />
                <img src={logo} alt="origami" className={styles.logo}/>
            </ul>
            <p className={styles.paragraph}>Software University &copy; 2019</p>
        </footer>
    )
};

export default Footer;