import PropTypes from 'prop-types';

const newMessage = {
    message: 'Hola Mundo',
    title: 'Osvaldo'
};

const getResult = (a, b) => {
    return a + b;
}

export const FirstApp = ( { title = "No hay titulo", sub_title = 0 } ) => {
//export const FirstApp = ( props ) => {

    return (
        <>
            <h1>{ title }</h1>
            <p>{/* getResult(1, 5) */}</p>
            {/*<code> JSON.stringify(newMessage) </code>*/}
            <p>{ sub_title }</p>
        </>
    )
}


// con esto puedo validar el tipo de datos que se le envia a la propiedad
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    sub_title: PropTypes.number.isRequired
};
