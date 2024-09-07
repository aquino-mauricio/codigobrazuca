3. Desafio: Bingo da Adivinhação na Rede Polkadot

-Explicando-

      - O código começa chamando o módulo "random" para criar uma cartela de bingo. 

      - A função "gerar_certela" gera cinco números aleatórios diferentes dentro do intervalo
   estabelecido nas regras do desafio.

      - A função "sortear_numero" sorteia um número aleatório entre 1 e 75 e garante que o mesmo
   número não seja sorteado mais de uma vez, adicionando os os números já sorteados ao
   conjunto "numeros_sorteados".

      - A função "jogar_bingo" inicia gerando a cartela do jogador e exibe os 5 números e então inicia o jogo.
   A variável "numeros_sorteados" armazena os números já sorteados e a variável "tentativas" é usada
   como um contator que rastreia o número de sorteios que ocorreram.

      - A cada iteração, um número é sorteado. Se ele estiver na cartela, ele é removido da mesma, e se não estiver na cartela uma tentativa é adicionada ao contador "tentativas" e o loop reinicia.

      - Quando todos os números da cartela estiverem removidos, o jogo termina e exibe na tela o
   número total de tentativas necessárias para concluir a partida.


      obs.: por questões de justiça com o restante dos colegas e de todos os professores, 
      sinalizo aqui que para auxílio da elaboração deste scrit, fiz uso de ferramentas
      de IA como chatGPT.