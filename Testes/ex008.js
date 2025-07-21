const agora = new Date();
const diaSem = agora.getDay();

switch (diaSem) {
    case 0:
        console.log('Hoje é domingo');
        break;
    
    case 1:
        console.log('Hoje é segunda-feira');
        break;

    case 2:
        console.log('Hoje é terça-feira');
        break;

    case 3:
        console.log('Hoje é quarta-feira');
        break;

    case 4:
        console.log('Hoje é quinta-feira');
        break;

    case 5:
        console.log('Hoje é sexta-feira');
        break;

    case 6:
        console.log('Hoje é sábado');
        break;

    default:
        console.log('Dia inválido');
        break;
}

/*const day = {0 : 'Domingo', 1: 'Segunda-feira', 2: 'Terça-feira', 3: 'Quarta-feira', 4: 'Quinta-feira', 5: 'Sexta-feira', 6: 'Sábado'};

console.log(`Hoje é ${day[diaSem]}.`); => podemos fazer assim também, fazendo com que o valor seja comparado dentro de um 'objeto'*/