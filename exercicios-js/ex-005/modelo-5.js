const add = document.getElementById('add')
const list = document.getElementById('list')
const atualizar = document.getElementById('finalizar')
const resul = document.getElementById('resultado')
const p = document.querySelector('.msg')
const nadd = [];

add.addEventListener('click', function (event) {
    event.preventDefault()

    const input = document.getElementById('numero').value

    if (input == '') {
        alert('[ERRO] Digite um número!')
        return
    }

    const numero = Number(input);

    for (let i in nadd) { // indicado apenas para arrays e objects
        if (numero == list.children[i].getAttribute('value')) {
            alert('Valor já existente na lista!')
            document.getElementById('numero').value = '';
            return
        }
    }

    if (numero > 100) {
        alert('Valor inválido!')
        document.getElementById('numero').value = '';
        return
    }

    const opt = document.createElement('option')
    opt.setAttribute("value", numero)
    opt.innerHTML = `Valor ${numero} adicionado.`

    list.appendChild(opt)
    nadd.push(numero);

    nadd.sort(function (a, b) { // deixa em ordem crescente
        return a - b;

    });

    document.getElementById('numero').value = ''; // limpa o campo
    p.innerHTML = ''

});

atualizar.addEventListener('click', (event) => { // forma diferente de declarar
    event.preventDefault();

    if (list.children.length == 0) {
        alert('[ERRO] Adicione valores antes de finalizar!')
        return
    }

    p.innerHTML = ''

    const pos = nadd.length

    let soma = 0;
    let media = 0;

    for (let i in nadd) {
        soma += nadd[i]
    }

    media = soma / pos

    p.innerHTML = `Ao todo, temos ${nadd.length} números cadastrados; <br>`
    p.innerHTML += `O maior valor informado foi o ${nadd[pos - 1]}; <br>`
    p.innerHTML += `O menor valor informado foi o ${nadd[0]}; <br>`
    p.innerHTML += `Somando todos os valores, temos ${soma}; <br>`
    p.innerHTML += `A média dos valores digitados é ${media};`
    resul.appendChild(p)
});