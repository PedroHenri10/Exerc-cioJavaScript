const novoparagrafo = document.getElementById('myElement');

alertnaTela() {
 let name = prompt("Qual é o seu nome?");
 let idade = prompt("qual a sua idade?");

 if (idade >= 18){
   novoparagrafo.innerHTML = "Olá, " + name + "! Você pode dirigir.";
 }else{
   novoparagrafo.innerHTML = "Olá, " + name + "! Você não pode dirigir.";
     }
