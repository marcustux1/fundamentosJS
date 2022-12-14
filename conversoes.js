// tipo de dado
// booleanos

// conversão implicita
const numero = 456;
const numeroString = "456";

console.log(numero + numeroString);

// conversão explicita

//Number()
//String()

const numeroString2 = "456a"
console.log(numero + Number(numeroString))

//gera erro
console.log(numero + Number(numeroString2))