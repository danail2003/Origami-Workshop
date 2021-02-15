import React, { useState, useEffect, useContext } from 'react';
import PageWrapper from '../../components/page-wrapper/index';
import RenderOrigamis from '../../utils/render-origamis';
import styles from './profile.module.css';
import UserContext from '../../context';

const Profile = (props) => {
    const [username, setUsername] = useState(null);
    const [posts, setPosts] = useState(null);
    const context = useContext(UserContext);

    const getUser = async (id) => {
        const promise = await fetch(`http://localhost:9999/api/user?id=${id}`);

        if (!promise.ok) {
            props.history.push('/error');
        }

        const user = await promise.json();

        setUsername(user.username);
        setPosts(user.posts.length);
    }

    useEffect(() => {
        getUser(props.match.params.userId)
    });

    const logOut = () => {
        context.logOut();
        props.history.push('/');
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