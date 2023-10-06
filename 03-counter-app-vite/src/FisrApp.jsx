// const newMessage = {
//     message: 'Hola Mundo',
//     title: 'Fernando'
// }

import PropTypes from 'prop-types'

const Saludo = () => ( <><h1>Hola Osvaldo</h1></> );

const TITLE2 = "TITULONGOOO";

export const FisrApp = ( { title, subTitle } ) => {

    return (
        // forma de fragmentar sin agregar un tag padre y sin importar Fragment
        <>
            <h1>{ title }</h1>
            {/*<h1><code> JSON.stringify( newMessage ) </code></h1>*/}
            <p>{ subTitle }</p>
            <Saludo />
        </>
    )
}

FisrApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

FisrApp.defaultProps = {
    // title: 'No hay titulo',
    title: TITLE2,
    subTitle: 'No hay sub-titulo',
    name: 'Osvaldo Bustamante'
}
