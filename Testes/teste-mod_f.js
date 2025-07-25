let num = [5, 8, 2, 9, 3]

num.push = 6 // acrescenta no final

// num [6] = 4 - podemos fazer dessa forma também

num.pop() // remove o último elemento do array

console.log(num.sort()) // deixa o array em ordem crescente

/* for (let i = 0; i < num.length; i++) {
    console.log(num[i])
} */

    for (let pos in num) { // 'para cada posição dentro de num'
        console.log(num[pos])
    } // forma mais atualizada de mostrar os elementos do array
    // essa forma funciona apenas para arrays e objects