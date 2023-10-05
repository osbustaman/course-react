const nombre = 'Osvaldo';
const apellido = 'Bustamante';

const nombreCompleto = ` 
${nombre} 
${apellido} 
${ 1 + 1 }
`;


function getSaludo(nombre) {
    return `Hola ${nombre}`
}

console.log(getSaludo(`Este es un texto: ${ getSaludo(nombre) }`));

console.log(nombreCompleto);