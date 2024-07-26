let cidades = ["Barueri", "Santana de Parnaíba", "Osasco", "São Paulo"];
for (let x in cidades){
  console.log(cidades[x]);
}

console.log("");

let n = 1
while(n <=100){
  console.log(n);
  n++;
}
console.log("");

// pegar um numero e ficar somando de 1 ate o próprio o numero
let number = 50;

let i = 1;
let soma = 0;
while(i <= number){
    soma += i;
    i++;
    console.log(soma)
}
