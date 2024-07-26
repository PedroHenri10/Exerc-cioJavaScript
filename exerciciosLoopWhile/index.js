let cidades = ["Barueri", "Santana de Parnaíba", "Osasco", "São Paulo"];
for (let x in cidades){
  console.log(cidades[x]);
}

console.log("");
console.log("contador de 1 até 100");

let n = 1
while(n <=100){
  console.log(n);
  n++;
}

console.log("");
console.log("pegar um numero e ficar somando de 1 ate o próprio o numero");

let number = 50;

let i = 1;
let soma = 0;
while(i <= number){
    soma += i;
    i++;
    console.log(soma)
}

console.log("");
console.log("verificar se o número é primo");
let numero = 53;
let divisores = 0;
let i = 1;

while(i <= numero){
  if(numero % i === 0){
    console.log(i);
    divisores++;
  }else{
    divisores;
  }
  i++;
}

if(divisores === 2){
  console.log(`O número: ${numero} é primo pois tem apenas dois divisores positivos 1 e ${numero}`)
}else{
  console.log(`O número: ${numero} não é primo pois tem mais de dois divisores positivos`)
}
