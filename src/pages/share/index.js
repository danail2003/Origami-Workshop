import React from 'react';
import PageWrapper from '../../components/page-wrapper/index';
import Title from '../../components/title/index';
import styles from './share.module.css';
import Button from '../../components/button/index';
import RenderOrigamis from '../../utils/render-origamis';

const Share = () => {
    return (
        <PageWrapper>
            <div className={styles.input}>
            <div>
                <Title title='Share your thoughts...' />
                <textarea></textarea>
                <Button title='Post' />
            </div>
            <div>
                <h2 className={styles['last-posts']}>Last 3 post on your wall</h2>
                <RenderOrigamis length={3} />
            </div>
            </div>
        </PageWrapper>
    )
};

export default Share;