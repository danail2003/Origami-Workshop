import React from 'react';
import styles from './link.module.css';
import { Link } from 'react-router-dom';

const LinkComponent = ({ href, title, type }) => {
    return (
        <li className={styles[`${type}-list-item`]}>
            <Link to={href} className={styles[`${type}-link`]}>{title}</Link>
        </li>
    )
};

export default LinkComponent;