const spantemperatura = document.getElementById('temperatura-convertida');

function celsiusParaFahrenheit(celsius) {
  // Fórmula de conversão: Fahrenheit = (Celsius * 9/5) + 32
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

let tempCelsius = parseInt(prompt("Qual é a temperatura em graus Celsius na sua cidade?"));

let tempFahrenheit = celsiusParaFahrenheit(tempCelsius);

spantemperatura.innerHTML = `A temperatura da sua cidade em Fahrenheit é igual a: ${tempFahrenheit}`;
