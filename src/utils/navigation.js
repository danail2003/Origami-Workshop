const getNavigation = (loggedIn, user) => {
    const userLinks = [
        {
            title: 'Publications',
            link: '/'
        },
        {
            title: 'Share your thoughts',
            link: '/share'
        },
        {
            title: 'Profile',
            link: `/profile/${user && user.id}`
        },
    ];

    const guestLinks = [
        {
            title: 'Publications',
            link: '/'
        },
        {
            title: 'Register',
            link: '/register'
        },
        {
            title: 'Login',
            link: '/login'
        }
    ];

    return loggedIn ? userLinks : guestLinks;
};

export default getNavigation;