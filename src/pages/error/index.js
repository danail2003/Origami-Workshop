import React from 'react';
import PageWrapper from '../../components/page-wrapper/index';
import Title from '../../components/title/index';
import styles from './error.module.css';

const Error = () => {
    return(
        <PageWrapper>
            <div className={styles.fourOFour}>
            <Title title='Something went wrong...' />
            </div>
        </PageWrapper>
    );
};

export default Error;