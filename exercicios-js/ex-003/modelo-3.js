const contar = document.getElementById('envio');
const msg = document.getElementById('resultado');
const input = document.querySelectorAll('input');

contar.addEventListener("click", function (event) {
    event.preventDefault();

    const inicio = Number(document.getElementById('inicio').value);
    const fim = Number(document.getElementById('fim').value);
    let passo = Number(document.getElementById('passo').value);

    if (inicio == '0' || fim == '0') {
        msg.innerHTML = '[ERRO] Impossível contar!'
        return
    } else if (passo == '0') {
        alert('Passo inválido! Considerando Passo = 1')

        passo = 1;
    }

    input.forEach(input => {
        if (inicio > fim) {
            msg.innerHTML = 'Dados inválidos. Tente novamente!'

            input.style.border = "2px solid red"
            return
        }
    });

    msg.innerHTML = ''

    for (let i = inicio; i <= fim; i += passo) {
        if (i + passo >= fim) {
            msg.innerHTML += `${i} - fim`
            return
        }

        msg.innerHTML += `${i}, `
    }
});