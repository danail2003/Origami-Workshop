import React from 'react';
import styles from './origami.module.css';
import logo from '../../images/blue-origami-bird.png';

const Origami = ({ description, author, index }) => {
    return (
        <div className={styles.post}>
            <img src={logo} alt="origami" className={styles['origami-img']} />
            <p className={styles.description}>
                <span>{` ${index} - `}</span>
                {description}
            </p>
            <div className={styles['post-div']}>
                <span className={styles.author}>
                    <small>Author: </small>
                    {author.username}
                </span>
            </div>
        </div>
    )
};

export default Origami;