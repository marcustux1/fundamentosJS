// parametros de função

             //5    //50
function soma(num1, num2){
    return num1 + num2;
}

console.log(soma(5,50))
console.log(soma(245,20))
console.log(soma(-500,60))

// parâmetros x argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade){
    return `Meu Nome é ${nome} e minha idade é ${idade}.`;
}

console.log(nomeIdade("Marcus", 40))

function multiplica(numero1, numero2) {
    return numero1 * numero2;
}

console.log(multiplica(soma(2,3), soma(3,3)))