const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function valorAbsoluto(numero) {
  return Math.abs(numero);
}

rl.question('Digite um número: ', (input) => {
  const numero = parseFloat(input);

  if (isNaN(numero)) {
    console.log('Por favor, digite um número válido.');
  } else {

    const absoluto = valorAbsoluto(numero);

    console.log(`O valor absoluto de ${numero} é: ${absoluto}`);
  }

  rl.close();
});


