const btnalert = document.getElementById('btn-alert');
const btnconfirm = document.getElementById('btn-confirm');
const btnprompt = document.getElementById('btn-prompt');

    btnalert.addEventListener('click', function() {
        window.alert('Você clicou no teste do window alert');
    });

    btnconfirm.addEventListener('click', function() {
        let resposta = window.confirm('Você clicou no teste do window confirm');
        if (resposta) {
            window.alert('Você clicou em OK');
        } else {
            window.alert('Você clicou em Cancelar');
        }
    });

    btnprompt.addEventListener('click', function() {
        let nome = window.prompt('Você clicou no teste do window prompt');
        if (nome) {
            window.alert('Olá, ' + nome);
        } else {
            window.alert('Você clicou em Cancelar');
        }
    });