function soma(valor1, valor2){
  return valor1 + valor2;
}

function subtracao(valor1, valor2){
  return valor1 - valor2;
}

function multiplicacao(valor1, valor2){
  return valor1 * valor2;
}

function divisao(valor1, valor2){
  return valor1 / valor2;
}

let valor1;
let valor2;

do{
valor1 = parseInt(prompt("Digite o primeiro valor: "));
valor2 = parseInt(prompt("Digite o segundo valor: "));

   if (isNaN(valor1) || isNaN(valor2)) {
    alert("Por favor, insira valores numéricos válidos.");
    continue;
}
}while(isNaN(valor1) || isNaN(valor2));

let operacao;

 do{operacao = prompt(`Digite a operação desejada:
  '+' para soma
  '-' para subtração
  '*' para multiplicação
  '/' para divisão`);

   let resultado;
   
  switch (operacao){
    case '+':
     resultado = soma(valor1, valor2);
     alert(`O resultado da soma é: ${resultado}`);
    break;

    case '-':
     resultado = subtracao(valor1, valor2);
     alert(`O resultado da substituição é: ${resultado}`);
    break;

    case `*`:
      resultado = multiplicacao (valor1, valor2)
      alert(`O resultado da multiplicação é: ${resultado}`)
    break;

    case `/`:
      if(valor2 != 0){
      resultado = divisao(valor1, valor2)
      alert(`O resultado da divisão é: ${resultado}`)
      }else{
        alert(`Não é possível dividir por 0`)
      }
    break;

  }
}while(operacao !='+' && operacao !='-' && operacao !='*' && operacao !='/')
