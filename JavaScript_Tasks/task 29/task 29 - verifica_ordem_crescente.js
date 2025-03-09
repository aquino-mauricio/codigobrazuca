const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function estaEmOrdemCrescente(lista) {
  for (let i = 0; i < lista.length - 1; i++) {
    if (lista[i] > lista[i + 1]) { 
      return false; 
    }
  }
  return true; 
}

function solicitarNumeros() {
  const numeros = [];

  function solicitarNumero(i) {
    if (i < 5) {
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
      const ordemCrescente = estaEmOrdemCrescente(numeros);

      if (ordemCrescente) {
        console.log('A lista está em ordem crescente.');
      } else {
        console.log('A lista NÃO está em ordem crescente.');
      }

      rl.close();
    }
  }

  solicitarNumero(0);
}

solicitarNumeros();

