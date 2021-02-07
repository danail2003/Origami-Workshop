import React from 'react';
import styles from './header.module.css';
import Link from '../link/index';
import logo from '../../images/white-origami-bird.png';

const Header = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <img src={logo} className={styles.logo} alt="origami" />
                <Link href='#' title='Going to 1' type="header" />
                <Link href='#' title='Going to 2' type="header" />
                <Link href='#' title='Going to 3' type="header" />
                <Link href='#' title='Going to 4' type="header" />
                <Link href='#' title='Going to 5' type="header" />
                <Link href='#' title='Going to 6' type="header" />
                <Link href='#' title='Going to 7' type="header" />
                <Link href='#' title='Going to 8' type="header" />
                <Link href='#' title='Going to 9' type="header" />
                <Link href='#' title='Going to 10' type="header" />
                <Link href='#' title='Going to 11' type="header" />
            </ul>
        </nav>
    )
}

export default Header