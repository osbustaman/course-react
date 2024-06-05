export const getLogin = async (data_user) => {

    const url = `${process.env.REACT_APP_API_URL}/login-drf`;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
        "username": data_user.user,
        "password": data_user.pass
    });
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    
    const response = await fetch(url, requestOptions)
    const { data } = await response.json();
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
    console.log(data);

    return data;
    

}
