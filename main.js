const btnalert = document.getElementById('btn-alert');
const btnconfirm = document.getElementById('btn-confirm');
const btnprompt = document.getElementById('btn-prompt');
const n = document.getElementById('n');
const mat = document.getElementById('mat');

let n1 = 0;
let n2 = 0;

btnalert.addEventListener('click', function () {
    window.alert('Você clicou no teste do window alert');
});

btnconfirm.addEventListener('click', function () {
    let resposta = window.confirm('Você clicou no teste do window confirm');
    if (resposta) {
        window.alert('Você clicou em OK');
    } else {
        window.alert('Você clicou em Cancelar');
    }
});

btnprompt.addEventListener('click', function () {
    let nome = window.prompt('Você clicou no teste do window prompt, digite qual é o seu nome');
    if (nome) {
        window.alert('Olá, ' + nome);
    } else {
        window.alert('Você clicou em Cancelar');
    }
});

mat.addEventListener('click', function () {
    n1 = window.prompt("Digite o primeiro número entre 1 e 10");
    n2 = window.prompt("Digite o segundo número entre 1 e 10");
    
    n.style.display = 'block';
    n.innerHTML = `A soma dos números é: ${parseInt(n1) + parseInt(n2)}`;

    /*Podemos fazer de outra forma também:
      n1 = Number.parseInt(window.prompt("Digite o primeiro número entre 1 e 10: "));
      n2 = Number.parseInt(window.prompt("Digite o segundo número entre 1 e 10: "));
    */
});

// Ínicio do módulo C

function exibirExemplo() {
    const img = document.getElementsByTagName('img')[0];

    img.src = 'https://github.com/DevMuriloSantos/uso-de-js/img/uso-de-DOM.png'
};
