
export const getUserData = async () => {

    const host_url = import.meta.env.VITE_API_URL;

    const url = `${host_url}/data-user`;
    const myHeaders = new Headers();
    myHeaders.append("token", localStorage.getItem('token'));


    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const response = await fetch(url, requestOptions);
        const { status, ok } = response;
        const data = await response.json();

        if (status === 200 && ok) {

            const { mail, name, first_name, last_name } = data.message;

            return {
                error: null,
                status: ok,
                mail: mail,
                username: name,
                first_name: first_name,
                last_name: last_name
            };
        } else if (status === 401 && !ok) {
            return {
                error: data.error,
                status: ok
            };
        } else {
            const data = await response.json();
            return {
                error: data.error,
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
