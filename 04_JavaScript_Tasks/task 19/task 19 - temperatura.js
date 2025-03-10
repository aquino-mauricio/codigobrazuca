const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function celsiusParaFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

rl.question('Digite a temperatura em Celsius: ', (input) => {
  const celsius = parseFloat(input);

  if (isNaN(celsius)) {
    console.log('Por favor, digite um número válido.');
  } else {
    const fahrenheit = celsiusParaFahrenheit(celsius);

    console.log(`${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F.`);
  }

  rl.close();
});

