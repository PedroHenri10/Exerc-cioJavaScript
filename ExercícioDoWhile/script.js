/* let positivos = 0;
let negativos = 0;

do{
   let numeros = parseInt(prompt("Digite varios numeros positivos e negativos até pressionar 0 para sair do programa"));

   if(numeros > 0){
      positivos++;
  } else if(numeros < 0){
      negativos++;
}while(numeros != 0 && numeros = "");

alert(`Quantidade de números positivos: ${positivos}\nQuantidade de números negativos: ${negativos}`)
*/
const consoleSelect = document.getElementById('consoleSelect');
let gameSelect = null;

consoleSelect.addEventListener('change', function() {
  let console = consoleSelect.value;

  if (gameSelect) {
    gameSelect.remove(); 
    gameSelect = null; 
  }

  if (console === "Xbox") {
    gameSelect = document.createElement('select');
    gameSelect.innerHTML = `
      <option value="">Selecione uma opção</option>
      <option value="Forza">Forza</option>
      <option value="Gears of War">Gears of War</option>
      <option value="Halo">Halo</option>
    `;
    consoleSelect.parentNode.appendChild(gameSelect);
  } else if (console === "PlayStation") {
    gameSelect = document.createElement('select');
    gameSelect.innerHTML = `
      <option value="">Selecione uma opção</option>
      <option value="Bloodborne">Bloodborne</option>
      <option value="Spider-Man">Spider-Man</option>
      <option value="Uncharted">Uncharted</option>
    `;
    consoleSelect.parentNode.appendChild(gameSelect);
  }
});
