
export const getLogout = async (id) => {

    const host_url = import.meta.env.VITE_API_URL;
    
        const url = `${host_url}/logout-drf`;
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("token", `${localStorage.getItem('refresh_token')}`);

        const raw = JSON.stringify({
            "id": id
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            body: raw
        };
    
        try {
            const response = await fetch(url, requestOptions);
            const { status, ok } = response;
            if (status === 200 && ok) {
                const data = await response.json();
                return {
                    error: null,
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
