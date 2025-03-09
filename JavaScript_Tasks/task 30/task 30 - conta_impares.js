const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function contarNumerosImpares(lista) {
  let contador = 0;
  for (let numero of lista) {
    if (numero % 2 !== 0) { 
      contador++;
    }
  }
  return contador;
}

function solicitarNumeros() {
  const numeros = [];

  function solicitarNumero(i) {
    if (i < 10) {
      rl.question(`Digite o número ${i + 1}: `, (input) => {
        const numero = parseFloat(input);

        if (isNaN(numero)) {
          console.log('Por favor, digite um número válido.');
          solicitarNumero(i); 
        } else {
          numeros.push(numero); 
          solicitarNumero(i + 1); 
        }
      });
    } else {
      const quantidadeImpares = contarNumerosImpares(numeros);

      console.log(`A lista contém ${quantidadeImpares} números ímpares.`);

      rl.close();
    }
  }

  solicitarNumero(0);
}

solicitarNumeros();


