const horaDoDia = document.getElementById('hora-do-dia');
const horario = new Date();
const img = document.getElementById('div-img');

const time = horario.getHours();

if (time > 12 && time < 18) {

    document.body.style.backgroundColor = '#A47660';
    img.innerHTML = '<img id="img-1" src="img-exercicios/img-tarde.jpg" alt="Boa Tarde!">';
    horaDoDia.innerHTML += `${time} horas da tarde.`;

} else if (time >= 18 && time < 24) {
    document.body.style.backgroundColor = '#2C3E50';
    img.innerHTML = '<img id="img-2" src="img-exercicios/img-noite.jpg" alt="Boa Noite!">';
    horaDoDia.innerHTML += `${time} horas da noite.`;

} else if (time >= 1 && time < 11) {
    document.body.style.backgroundColor = '#F39C12';
    img.innerHTML = '<img id="img-3" src="img-exercicios/img-manha.jpg" alt="Boa Dia!">';
    horaDoDia.innerHTML += `${time} horas da manhã.`;

} else if (time == 0o0) {
    document.body.style.backgroundColor = '#2C3E50';
    img.innerHTML = '<img id="img-3" src="img-exercicios/img-manha.jpg" alt="Boa Dia!">';
    horaDoDia.innerHTML = `Agora é meia-noite.`;
    
} else {
    document.body.style.backgroundColor = '#F39C12';
    img.innerHTML = '<img id="img-3" src="img-exercicios/img-manha.jpg" alt="Boa Dia!">';
    horaDoDia.innerHTML = `Agora é meio-dia.`;
}

// poderiamos ter criado também a tag img dentro da div, com um id, e depois setar o src da imagem
// img.src = 'caminho-da-imagem.jpg';