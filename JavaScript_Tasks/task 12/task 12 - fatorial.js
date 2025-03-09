const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularFatorial(numero) {
  if (numero < 0) {
    return "Erro: Fatorial não é definido para números negativos.";
  }
  if (numero === 0 || numero === 1) {
    return 1;
  }
  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }
  return fatorial;
}

rl.question('Digite um número para calcular o fatorial: ', (input) => {
  const numero = parseInt(input, 10);

  if (isNaN(numero)) {
    console.log('Por favor, digite um número válido.');
  } else {
    const resultado = calcularFatorial(numero);

    console.log(`O fatorial de ${numero} é: ${resultado}`);
  }

  rl.close();
});

