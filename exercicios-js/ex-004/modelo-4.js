const gerar = document.getElementById('enviar');
const tabuada = document.getElementById('tabuada');

gerar.addEventListener('click', function (event) {
    event.preventDefault();

    const input = document.getElementById('numero').value;

    if (input.length == '') {
        alert('Por favor, digite um número!');
        return;
    }

    const numero = Number(input);
    
    tabuada.innerHTML = ""

    for (let i = 0; i <= 10; i++) {

        const option = document.createElement('option');
        option.setAttribute('value', i); // nesse caso não influência em nada
        option.innerHTML = `${numero} x ${i} = ${i * numero}`

        tabuada.appendChild(option);
    }
});