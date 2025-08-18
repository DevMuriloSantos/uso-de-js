/* const person = {
    name : "Murilo",
    age: 20,
    talk: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
}

console.log(person.talk())
*/


// uma classe pode ter um método chamado de constructor

class Person { // deve-se destacar que uma classe sempre deve aparecer com letra maiúscula

    // ele é chamado assim que a classe inicia-se, executando o que estiver dentro
    constructor (name, age) {
        console.log(`Hello, my name is ${name}`)
        // não precisa de this pois a variavle já está sendo chamada dentro do método.

        this.name = name // torna o "name" e "age" acessíveis em qualquer método
        this.age = age
    }

    talk() { // isso não é uma função, mas sim um método
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`)
        // escopo local
    }
} // criação de uma classe

const newperson = new Person("Murilo", 20);
// instancia um objeto da classe Person (cria um novo objeto)

newperson.talk(); // chama o método talk da classe Person, que imprime a mensagem no console