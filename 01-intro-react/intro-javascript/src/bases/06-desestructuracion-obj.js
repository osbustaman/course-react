// Desestructuración
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
//
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ({ clave, nombre, edad, rango = 'Capitan' }) => {
    // console.log(nombre, edad, rango)
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
};

//const avenger = retornaPersona(persona);
const { nombreClave, anios, latlng: { lat, lng } } = retornaPersona(persona);
console.log(nombreClave, anios)
console.log(lat, lng)