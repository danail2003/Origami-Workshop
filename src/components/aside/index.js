import React from 'react';
import Link from '../link/index';
import styles from './aside.module.css';
import getNavigation from '../../utils/navigation';

const Aside = () => {
    const navigation = getNavigation();

    return (
        <aside className={styles.aside}>
            <ul>
                {
                    navigation.map(nav=>{
                        return <Link href={nav.link} title={nav.title} type='aside' />
                    })
                }
            </ul>
        </aside>
    )
};

export default Aside;