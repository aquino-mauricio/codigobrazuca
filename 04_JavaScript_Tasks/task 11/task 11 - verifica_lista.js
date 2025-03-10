const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function verificarNumeroNaLista(lista, numero) {
  return lista.includes(numero);
}

function gerarLista(inicio, fim) {
  const lista = [];
  for (let i = inicio; i <= fim; i++) {
    lista.push(i);
  }
  return lista;
}

rl.question('Usuário 1, digite o número inicial da lista: ', (inicio) => {
  rl.question('Usuário 1, digite o número final da lista: ', (fim) => {
    const inicioNum = parseInt(inicio, 10);
    const fimNum = parseInt(fim, 10);

    const lista = gerarLista(inicioNum, fimNum);

    rl.question('Usuário 2, digite o número que deseja procurar: ', (numero) => {
      const numeroProcurado = parseInt(numero, 10);

      const numeroEncontrado = verificarNumeroNaLista(lista, numeroProcurado);

      if (numeroEncontrado) {
        console.log(`O número ${numeroProcurado} está na lista.`);
      } else {
        console.log(`O número ${numeroProcurado} NÃO está na lista.`);
      }

      rl.close();
    });
  });
});