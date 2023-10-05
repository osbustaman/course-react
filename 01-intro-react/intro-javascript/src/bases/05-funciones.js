//Funciones

const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABC123',
    username: 'Osbustaman',
});

// Tarea
// 1. Tranformar a funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas
const getUserActivo = (nombre) => ({
    uid: 'ABC123',
    username: nombre,
});


console.log(getUser());
const usuarioActivo = getUserActivo('Andres');
console.log(usuarioActivo);