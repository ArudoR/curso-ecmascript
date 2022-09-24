let hello =  'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world + '!';
// console.log(epicPhrase); impresion de Hello World! usando concatenación antigua.

// Template literals
let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2);

// Multi-line string

let lorem = 'esto es un string \n' + 'esto es otra linea';

let lorem2 = `Esta es una frase epica
    La continuación de  esa frase epica.
`;

console.log(lorem);
console.log(lorem2);