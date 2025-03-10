const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contemSubstring(frase, substring) {
  return frase.includes(substring);
}

rl.question('Digite uma frase: ', (frase) => {
  rl.question('Digite a substring que deseja buscar: ', (substring) => {
    const resultado = contemSubstring(frase, substring);

    if (resultado) {
      console.log(`A substring "${substring}" foi encontrada na frase.`);
    } else {
      console.log(`A substring "${substring}" NÃO foi encontrada na frase.`);
    }

    rl.close();
  });
});


