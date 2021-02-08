import React from 'react';
import styles from './page-wrapper.module.css';
import Header from '../header/index';
import Aside from '../aside/index';
import Footer from '../footer/index';

function PageWrapper(props) {
    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.container}>
                <Aside />
                {props.children}
            </div>
            <Footer />
        </div>
    );
}

export default PageWrapper;