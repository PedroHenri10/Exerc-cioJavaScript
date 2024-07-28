//  obter o resultado da multiplicação de dois numeros, sem usar o operador*

const Numero1 = 7;
const numero2 = 20;
let i = 1;
let resultado = 0;

while(i <= numero2){
  resultado += Numero1;
  i++;
}

console.log(`a multiplicação do ${Numero1} com ${numero2} sem usar * é = ${resultado}`)
