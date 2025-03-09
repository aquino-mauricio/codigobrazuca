const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarVogais(str) {
  const vogais = 'aeiouAEIOU';
  let contador = 0;

  for (let char of str) {
    if (vogais.includes(char)) {
      contador++;
    }
  }

  return contador;
}

rl.question('Digite uma frase: ', (input) => {
  const numeroVogais = contarVogais(input);

  console.log(`Número de vogais na frase: ${numeroVogais}`);

  rl.close();
});