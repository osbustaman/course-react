const getImagen = async() => {

    try {
        const api_key = 'ywOlTsHNDAFrrx9NxZAUFu1Ls0cKEZYR';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`);
        const { data } = await resp.json();

        const { url } = data.images.original
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
        console.log(url);
    } catch (error) {
        console.error(error)
    }

}

getImagen();