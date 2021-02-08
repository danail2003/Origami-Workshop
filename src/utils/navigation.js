const getNavigation = (userId) => {
    const links = [
        {
            title: 'Publications',
            link: '/'
        },
        {
            title: 'Share your thoughts',
            link: '/share'
        },
        {
            title: 'Register',
            link: '/register/'
        },
        {
            title: 'Login',
            link: '/login/'
        },
        {
            title: 'Profile',
            link: `/profile/${userId}`
        },
        {
            title: '#######',
            link: '########'
        },
        {
            title: '#######',
            link: '########'
        },
        {
            title: '#######',
            link: '########'
        },
        {
            title: '#######',
            link: '########'
        },
        {
            title: '#######',
            link: '########'
        },
        {
            title: '#######',
            link: '########'
        }
    ];

    return links;
};

export default getNavigation;