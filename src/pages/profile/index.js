import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PageWrapper from '../../components/page-wrapper/index';
import RenderOrigamis from '../../utils/render-origamis';
import styles from './profile.module.css';
import UserContext from '../../context';

const Profile = () => {
    const [username, setUsername] = useState(null);
    const [posts, setPosts] = useState(null);
    const context = useContext(UserContext);
    const params = useParams();
    const history = useHistory();

    const getUser = useCallback(async () => {
        const id = params.userId
        const promise = await fetch(`http://localhost:9999/api/user?id=${id}`);

        if (!promise.ok) {
            history.push('/error');
        }
        else {
            const user = await promise.json();

            setUsername(user.username);
            setPosts(user.posts && user.posts.length);
        }
    }, [params.userId, history]);

    useEffect(() => {
        getUser()
    }, [getUser]);

    const logOut = () => {
        context.logOut();
        history.push('/');
    }

    if (!username) {
        return (
            <PageWrapper>
                <div>Loading...</div>
            </PageWrapper>
        )
    }

    return (
        <PageWrapper>
            <div className={styles.profile}>
                <div className={styles['personal-info']}>
                    <p>
                        <span>Email:</span>
                        {username}
                    </p>
                    <p>
                        <span>Posts:</span>
                        {posts}
                    </p>
                    <button className={styles.button} onClick={logOut}>Logout</button>
                </div>
                <h2>3 of your recent posts</h2>
            </div>
            <RenderOrigamis length={3} />
        </PageWrapper>
    )
};

export default Profile;