const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function saoMultiplos(num1, num2) {
  return num1 % num2 === 0 || num2 % num1 === 0;
}

rl.question('Digite o primeiro número: ', (input1) => {
  rl.question('Digite o segundo número: ', (input2) => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
      console.log('Por favor, digite números válidos.');
    } else {
      if (saoMultiplos(num1, num2)) {
        console.log(`${num1} e ${num2} são múltiplos.`);
      } else {
        console.log(`${num1} e ${num2} NÃO são múltiplos.`);
      }
    }

    rl.close();
  });
});

