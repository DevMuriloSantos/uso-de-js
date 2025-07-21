const body = document.querySelector('body');
let section = document.querySelector('section');
const msg = document.getElementById("resultado");
const imagem = document.getElementById("foto");
const submit = document.getElementById("submit");


submit.addEventListener("click", function(event) {
    event.preventDefault(); // Impede o envio do formulário, garantindo que o resultado apareça
    const an = document.getElementById('an').value; /*Lê apenas quando o formulário é enviado*/
    const sexo = document.querySelector('input[name="sexo"]:checked').value;

    const date = new Date();
    const at = date.getFullYear();
    const idade = at - an;

    if (an == 0 || an > at) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    }

    imagem.style.display = "block"

    if (sexo == "masculino") {
        body.style.backgroundColor = "#3F85D8"

        if (idade >= 0 && idade < 10) {
            imagem.src = 'img-exercicio-2/m-bebe.jpg';

        } else if (idade < 21){
            imagem.src = 'img-exercicio-2/jovem-h.jpg';
            
        } else if (idade < 50) {
            imagem.src = 'img-exercicio-2/h-adulto.jpg';

        } else {
            imagem.src = 'img-exercicio-2/idoso-h.jpg';
        }

    } else {
        body.style.backgroundColor = "#ec17c1"

        if (idade >= 0 && idade < 10) {
            imagem.src = 'img-exercicio-2/f-bebe.jpg';
        } else if (idade < 21){
            imagem.src = 'img-exercicio-2/jovem-m.jpg';
        } else if (idade < 50) {
            imagem.src = 'img-exercicio-2/m-adulta.jpg';
        } else {
            imagem.src = 'img-exercicio-2/idosa-m.jpg';
        }
    }

    msg.innerHTML = `Você tem ${idade} anos de idade e é do sexo ${sexo}.`;
    section.innerHTML += "<p id='aviso'>Imagem meramente ilustrativa!</p>";
});
