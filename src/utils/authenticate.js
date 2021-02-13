const authenticate = async (url, body, onSuccess) => {
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

        onSuccess({
            username: response.username,
            id: response._id
        })
    }
    catch (e) {
        alert(e);
    }
};

export default authenticate;