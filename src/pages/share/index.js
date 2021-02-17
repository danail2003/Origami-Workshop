import React, { useState } from 'react';
import PageWrapper from '../../components/page-wrapper/index';
import Title from '../../components/title/index';
import styles from './share.module.css';
import Button from '../../components/button/index';
import RenderOrigamis from '../../utils/render-origamis';
import getCookie from '../../utils/getCookie';

const Share = (props) => {
    const [publication, setPublication] = useState('');

    const handleSubmit = async () => {
        const request = await fetch('http://localhost:9999/api/origami', {
            method: 'POST',
            body: JSON.stringify({
                description: publication
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            }
        });

        const response = await request.json();
        console.log(response);

        props.history.push('/');
    };

    return (
        <PageWrapper>
            <div className={styles.input}>
            <div>
                <Title title='Share your thoughts...' />
                <textarea value={publication} onChange={e => setPublication(e.target.value)}></textarea>
                <Button title='Post' onClick={handleSubmit} />
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