let numero = document.getElementById('numero');

const btnincremento = document.getElementById('incremento');
const btndecremento = document.getElementById('decremento');

function incremento(){
   let resultado = parseInt(numero.textContent);
   resultado++;
   numero.textContent = resultado;
}

function decremento(){
   let resultado = parseInt(numero.textContent);
   resultado--;
   numero.textContent = resultado;
}

btnincremento.addEventListener('click', incremento);

btndecremento.addEventListener('click', decremento);
