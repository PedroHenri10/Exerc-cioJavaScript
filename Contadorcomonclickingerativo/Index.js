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

// html 
// <p id="numero">1</p>
// <button onclick="incremento()" type="submit" id="incremento">+</button>
// <button onclick="decremento()" type="submit" id="decremento">-</button>
