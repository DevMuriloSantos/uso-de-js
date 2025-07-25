const add = document.getElementById('add')
const list = document.getElementById('list')
const atualizar = document.getElementById('finalizar')
const nadd = [];

add.addEventListener('click', function (event) {
    event.preventDefault()

    const input = document.getElementById('numero').value

    if (input == '') {
        alert('[ERRO] Digite um número!')
        return
    }

    const numero = Number(input);

    for (let i = 0; i < list.children.length; i++){
        if (numero == list.children[i].getAttribute('value')) {
            alert('Valor já existente na lista!')
            return
        }
    }

    const opt = document.createElement('option')
    opt.setAttribute("value", numero)
    opt.innerHTML = `Valor ${numero} adicionado.`

    list.appendChild(opt)
    nadd.push(numero)
    console.log(nadd)

    atualizar.addEventListener('click', function (event) {
        event.preventDefault()

        
        console.log(nadd.sort())
    });
});