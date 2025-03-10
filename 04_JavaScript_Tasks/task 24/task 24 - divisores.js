const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function encontrarDivisores(numero) {
  const divisores = [];
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores.push(i);
    }
  }
  return divisores;
}

rl.question('Digite um número para encontrar seus divisores: ', (input) => {
  const numero = parseInt(input, 10);

  if (isNaN(numero)) {
    console.log('Por favor, digite um número válido.');
  } else if (numero <= 0) {
    console.log('Por favor, digite um número positivo maior que zero.');
  } else {
    const divisores = encontrarDivisores(numero);

    console.log(`Os divisores de ${numero} são: ${divisores.join(', ')}`);
  }

  rl.close();
});


