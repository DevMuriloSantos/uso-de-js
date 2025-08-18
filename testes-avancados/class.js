const person = {
    name : "Murilo",
    age: 20,
    talk: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
}

console.log(person.talk())