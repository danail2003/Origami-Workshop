const getCookie = (name) => {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');

    return value ? value[2] : null;
}

export default getCookie;