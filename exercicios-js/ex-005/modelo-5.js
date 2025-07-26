const add = document.getElementById('add')
const list = document.getElementById('list')
const atualizar = document.getElementById('finalizar')
const resul = document.getElementById('resultado')
const nadd = [];

add.addEventListener('click', function (event) {
    event.preventDefault()

    const input = document.getElementById('numero').value

    if (input == '') {
        alert('[ERRO] Digite um número!')
        return
    }

    const numero = Number(input);

    for (let i = 0; i < list.children.length; i++) {
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
    nadd.sort(function (a, b) {
        return a - b;

    });

    document.getElementById('numero').value = ''; // limpa o campo

});

atualizar.addEventListener('click', function (event) {
    event.preventDefault();

    const pos = nadd.length

    const p = document.createElement('p')
    p.setAttribute('class', 'msg')

    p.innerHTML = `Ao todo, temos ${nadd.length} números cadastrados; <br>`
    p.innerHTML += `O maior número informado foi o ${nadd[pos - 1]}; <br>`
    resul.appendChild(p)
});