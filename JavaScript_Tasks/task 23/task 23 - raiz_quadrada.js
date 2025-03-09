const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularRaizQuadrada(numero) {
  return Math.sqrt(numero); 
}

rl.question('Digite um número para calcular a raiz quadrada: ', (input) => {
  const numero = parseFloat(input);

  if (isNaN(numero)) {
    console.log('Por favor, digite um número válido.');
  } else if (numero < 0) {
    console.log('Não é possível calcular a raiz quadrada de um número negativo.');
  } else {
    const raizQuadrada = calcularRaizQuadrada(numero);

    console.log(`A raiz quadrada de ${numero} é: ${raizQuadrada}`);
  }

  rl.close();
});


