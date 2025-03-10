const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ehPalindromo(str) {
  const strFormatada = str.replace(/\s+/g, '').toLowerCase();

  return strFormatada === strFormatada.split('').reverse().join('');
}

rl.question('Digite uma string para verificar se é um palíndromo: ', (input) => {
  if (ehPalindromo(input)) {
    console.log(`"${input}" é um palíndromo!`);
  } else {
    console.log(`"${input}" NÃO é um palíndromo.`);
  }

  rl.close();
});

