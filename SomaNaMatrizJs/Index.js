function criarMatrizAleatoria() {
  const matriz = [];

  // Cria a matriz 10x10
  for (let i = 0; i < 10; i++) {
    matriz[i] = [];
    for (let j = 0; j < 10; j++) {
      // Gera um número aleatório entre 1 e 99
      matriz[i][j] = Math.floor(Math.random() * 99) + 1; 
    }
  }

  return matriz;
}

// Chama a função e imprime a matriz
const matrizAleatoria = criarMatrizAleatoria();
console.log(matrizAleatoria);
