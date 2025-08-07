/*
THIS

this em inglês significa => este, esta, isto...

No JS, o this faz referência:

Node => module.exports
Web => window

Escopo:
    => Global - Quando começamos a escrever a nossa aplicação.
    No contexto global, o this faz referência ao objeto global,
    que é o objeto window no navegador e o objeto global no Node.

    => Local - Por exemplo, dentro de uma função!
*/

const person = {
    name: "Murilo",
    age: 18,
    talk: function() {
        console.log(this.age) // escopo local -- faz referência a quem está no nível acima dele
    }
}

function myFunction() {
    console.log(this) // faz parte do escopo global
}

myFunction()