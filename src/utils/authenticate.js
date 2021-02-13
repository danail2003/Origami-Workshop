const authenticate = async (url, body, props) => {
    try {
        const promise = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const token = promise.headers.get('Authorization');
        document.cookie = `x-auth-token=${token}`;

        const response = await promise.json();

        if (!response.username || !token) {
            return;
        }

        props.history.push('/');
    }
    catch (e) {
        alert(e);
    }
};

export default authenticate;