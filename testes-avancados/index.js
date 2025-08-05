const { soma, sub, person } = require('./contas') // importa tudo do arquivo contas.js

console.log(soma(2, 4))
console.log(sub(5, 4))
console.log(`Hello ${person.name}, you are ${person.age} years old`)