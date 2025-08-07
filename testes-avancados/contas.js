function soma(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

const person = {
    name: "Murilo",
    age: 20
}

module.exports = { soma, sub, person } // exporta as funções e a variavel desejada

// podemos exportar usando o this também
// this.person = person => também daria certo se estiver no escopo global