import React from 'react';
import styles from './header.module.css';
import Link from '../link/index';

const Header = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <Link href='#' title='Going to 1' />
                <Link href='#' title='Going to 2' />
                <Link href='#' title='Going to 3' />
                <Link href='#' title='Going to 4' />
                <Link href='#' title='Going to 5' />
                <Link href='#' title='Going to 6' />
                <Link href='#' title='Going to 7' />
                <Link href='#' title='Going to 8' />
                <Link href='#' title='Going to 9' />
                <Link href='#' title='Going to 10' />
                <Link href='#' title='Going to 11' />
            </ul>
        </nav>
    )
}

export default Header