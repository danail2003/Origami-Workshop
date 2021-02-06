import React from 'react';
import styles from './link.module.css'

const Link = ({ href, title }) => {
    return (
        <li className={styles.listItem}>
            <a href={href}>{title}</a>
        </li>
    )
};

export default Link;