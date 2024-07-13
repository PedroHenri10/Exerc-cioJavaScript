const novoparagrafo = document.getElementById('novoparagrafo');

function promptNaTela(){
 let name = prompt("Qual é o seu nome?");
 let idade = prompt("qual a sua idade?");

if (name == "" || idade == ""){
   alert("por favor preencha os campos");
}else if (idade >= 18){
   novoparagrafo.innerHTML = "Olá, " + name + "! Você tem " + idade + " e pode dirigir.";
 }else{
   novoparagrafo.innerHTML = "Olá, " + name + "! Você tem " + idade + " e não pode dirigir.";

}
}
