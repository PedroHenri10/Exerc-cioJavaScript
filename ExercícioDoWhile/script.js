let positivos = 0;
let negativos = 0;

do{
   let numero = parseInt(prompt("Digite varios numeros positivos e negativos até pressionar 0 para sair do programa"));

   if(numero > 0)
      positivos++;
   if(numero < 0)
      negativos++;
}while(numero != 0)

alert(`Quantidade de números positivos: ${positivos}\nQuantidade de números negativos: ${negativos}`)
