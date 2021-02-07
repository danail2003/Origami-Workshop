import React from 'react';
import styles from './origami.module.css';

const Origami = ({ description, author }) => {
    return (
        <div className={styles.post}>
            <p className={styles.description}>{description}</p>
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