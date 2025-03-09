const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function substituirVogais(frase) {
  const vogais = 'aeiouAEIOU';

  let fraseModificada = '';
  for (let char of frase) {
    if (vogais.includes(char)) {
      fraseModificada += '*'; 
    } else {
      fraseModificada += char; 
    }
  }

  return fraseModificada;
}

rl.question('Digite uma frase: ', (input) => {
  const fraseModificada = substituirVogais(input);

  console.log('Frase com vogais substituídas:', fraseModificada);

  rl.close();
});


