const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function inverterString(str) {
  return str.split('').reverse().join('');
}

rl.question('Digite uma string: ', (input) => {
  const stringInvertida = inverterString(input);

  console.log('String invertida:', stringInvertida);

  rl.close();
});