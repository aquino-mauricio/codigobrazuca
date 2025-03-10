const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function multiplicarElementos(lista) {
  return lista.reduce((acumulador, numero) => acumulador * numero, 1); 
}

function solicitarNumeros() {
  const numeros = [];


  function solicitarNumero(i) {
    if (i < 3) {
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
      const produto = multiplicarElementos(numeros);

      console.log('O produto dos números é:', produto);

      rl.close();
    }
  }

  solicitarNumero(0);
}

solicitarNumeros();


