const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function removerEspacos(frase) {
  return frase.replace(/\s+/g, '');
}

rl.question('Digite uma frase: ', (input) => {
  const fraseSemEspacos = removerEspacos(input);

  console.log('Frase sem espaços:', fraseSemEspacos);

  rl.close();
});

