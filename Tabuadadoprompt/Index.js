const tabuadausuario = document.getElementById('tabuada');

function promptdatabuada(){
   let number = parseInt(prompt("Digite um número de 1 a 10"));
   let i = 1

   while(i <= 10){
      let result = number * i;
      tabuada.innerHTML += `<li>${number} * ${i} = ${result}</li>`;
      i++;
   }
}

promptdatabuada()
