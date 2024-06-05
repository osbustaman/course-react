
export const getLogin = async ({ username, password }) => {

    const host_url = import.meta.env.VITE_API_URL;

    const url = `${host_url}/login-drf`;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "username": username,
        "password": password
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        const response = await fetch(url, requestOptions);
        const { status, ok } = response;
        if (status === 200 && ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.user.username);
            return {
                error: null,
                status: ok
            };
        } else {
            const data = await response.json();
            return {
                error: data,
                status: ok
            };
        }
    } catch (error) {
        return {
            error,
            status: false
        };
    }
}