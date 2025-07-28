let amigo = {nome: 'Murilo', 
    sexo: "m", 
    peso: 50, 
    engordar(p = 0){
        this.peso += p // this é necessário para acessar a propriedade dentro do object
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)

/*

const carro = new Object();

carro.marca = "Ferrari"
carro.modelo = 488

carro.hasOwnProperty('marca') - verifica se existe a propriedade

console.log(carro)

*/
