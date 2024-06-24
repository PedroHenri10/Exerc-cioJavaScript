function criarMatrizAleatoria() {
  const matriz = [];

  for (let i = 0; i < 10; i++) {
    matriz[i] = [];
    for (let j = 0; j < 10; j++) {
      
      matriz[i][j] = Math.floor(Math.random() * 99) + 1; 
    }
  }

  return matriz;
}

const matrizAleatoria = criarMatrizAleatoria();
console.log(matrizAleatoria);

const divMatriz = document.getElementById('matriz'); 
    let tabelaHTML = '<table>';
    for (let i = 0; i < matrizAleatoria.length; i++) {
      tabelaHTML += '<tr>';
      for (let j = 0; j < matrizAleatoria[i].length; j++) {
        tabelaHTML += `<td>${matrizAleatoria[i][j]}</td>`;
      }
      tabelaHTML += '</tr>';
    }
    tabelaHTML += '</table>';
    divMatriz.innerHTML = tabelaHTML; 
