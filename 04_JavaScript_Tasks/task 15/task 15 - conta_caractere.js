const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarCaractere(frase, caractere) {
  let contador = 0;
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === caractere) {
      contador++;
    }
  }
  return contador;
}

rl.question('Digite uma frase: ', (frase) => {
  rl.question('Digite o caractere que deseja contar: ', (caractere) => {
    if (caractere.length !== 1) {
      console.log('Por favor, digite apenas um caractere.');
    } else {
      const quantidade = contarCaractere(frase, caractere);

      console.log(`O caractere "${caractere}" aparece ${quantidade} vezes na frase.`);
    }

    rl.close();
  });
});

