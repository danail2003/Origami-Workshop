import React from 'react';
import styles from './link.module.css'

const Link = ({ href, title, type }) => {
    return (
        <li className={styles[`${type}-list-item`]}>
            <a href={href} className={styles[`${type}-link`]}>{title}</a>
        </li>
    )
};

export default Link;