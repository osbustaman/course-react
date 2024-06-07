
export const getLogout = (id) => {

    const host_url = import.meta.env.VITE_API_URL;
    
        const url = `${host_url}/logout-drf`;
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Token ${id}`);
    
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };
    
        return fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                return {
                    error: null,
                    status: true
                };
            })
            .catch(error => {
                return {
                    error,
                    status: false
                };
            });
}
