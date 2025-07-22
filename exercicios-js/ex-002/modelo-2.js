const body = document.querySelector('body');
let section = document.querySelector('section');
const msg = document.getElementById("resultado");
const submit = document.getElementById("submit");


submit.addEventListener("click", function (event) {
    event.preventDefault(); // Impede o envio do formulário, garantindo que o resultado apareça
    const an = Number(document.getElementById('an').value); /*Lê apenas quando o formulário é enviado*/
    const sexo = document.querySelector('input[name="sexo"]:checked').value;

    const date = new Date();
    const at = date.getFullYear();
    const idade = at - an;

    if (an == 0 || an > at) {
        alert("[ERRO] Verifique os dados e tente novamente!")
        return
    }

    // ...existing code...
    const img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (sexo == "masculino") {
        body.style.backgroundColor = "#3F85D8"
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'img-exercicio-2/m-bebe.jpg');
        } else if (idade < 21) {
            img.setAttribute('src', 'img-exercicio-2/jovem-h.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'img-exercicio-2/h-adulto.jpg');
        } else {
            img.setAttribute('src', 'img-exercicio-2/idoso-h.jpg');
        }
    } else {
        body.style.backgroundColor = "#ec17c1"
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'img-exercicio-2/f-bebe.jpg');
        } else if (idade < 21) {
            img.setAttribute('src', 'img-exercicio-2/jovem-m.jpg');
        } else if (idade < 50) {
            img.setAttribute('src', 'img-exercicio-2/m-adulta.jpg');
        } else {
            img.setAttribute('src', 'img-exercicio-2/idosa-m.jpg');
        }
    }

    msg.innerHTML = `Você tem ${idade} anos de idade e é do sexo ${sexo}.`;
    msg.appendChild(img);
    msg.innerHTML += "<p id='aviso'>Imagem meramente ilustrativa!</p>";
});
