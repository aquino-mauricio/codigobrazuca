// Importa o módulo 'readline' para ler a entrada do usuário
const readline = require('readline');

// Cria uma interface para ler a entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para somar os dígitos de um número
function somarDigitos(numero) {
  let soma = 0;
  const digitos = numero.toString().split(''); // Converte o número em uma lista de dígitos
  for (let digito of digitos) {
    soma += parseInt(digito, 10); // Converte cada dígito de volta para número e soma
  }
  return soma;
}

// Solicita ao usuário um número com mais de dois dígitos
rl.question('Digite um número com mais de dois dígitos: ', (input) => {
  // Converte a entrada para número
  const numero = parseInt(input, 10);

  // Verifica se a entrada é um número válido e tem mais de dois dígitos
  if (isNaN(numero)) {
    console.log('Por favor, digite um número válido.');
  } else if (numero.toString().length <= 2) {
    console.log('O número deve ter mais de dois dígitos.');
  } else {
    // Soma os dígitos e exibe o resultado
    const soma = somarDigitos(numero);
    console.log(`A soma dos dígitos de ${numero} é: ${soma}`);
  }

  // Fecha a interface de leitura
  rl.close();
});

