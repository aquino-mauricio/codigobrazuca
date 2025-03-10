const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ordenarLista(lista) {
  return lista.sort((a, b) => a - b); 
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
      const listaOrdenada = ordenarLista(numeros);
      console.log('Lista ordenada:', listaOrdenada.join(', '));

      rl.close();
    }
  }

  solicitarNumero(0);
}

solicitarNumeros();

