function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  const numeroAleatorio = gerarNumeroAleatorio();
  console.log('Número aleatório entre 1 e 100:', numeroAleatorio);

  