import React, { Component } from 'react';
import PageWrapper from '../../components/page-wrapper/index';
import RenderOrigamis from '../../utils/render-origamis';
import Title from '../../components/title/index';
import styles from './profile.module.css';

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: null,
            posts: null
        }
    }

    componentDidMount() {
        this.getUser(this.props.match.params.userId);
    }

    getUser = async (id) => {
        const promise = await fetch(`http://localhost:9999/api/user?id=${id}`);

        if (!promise.ok) {
            this.props.history.push('/error');
        }

        const user = await promise.json();

        this.setState({
            username: user.username,
            posts: user.posts.length
        });
    }

    render() {
        const { username, posts } = this.state;

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
                    </div>
                    <h2>3 of your recent posts</h2>
                </div>
                <RenderOrigamis length={3} />
            </PageWrapper>
        )
    }
};

export default Profile;