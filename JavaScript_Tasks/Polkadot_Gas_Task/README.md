#Projeto Prático do Curso de JavaScript CodigoBrazuca
##Simulador de Preço de Gas na Polkadot 

**Objetivo:** 
Desenvolver uma aplicação web interativa que permita ao usuário calcular o custo de "gas" 
(taxa de transação) para diferentes valores e níveis de complexidade de transações na rede 
Polkadot. A interface será simples e intuitiva, composta por um formulário onde o usuário 
poderá inserir os dados da transação e obter o custo estimado do gas em tempo real. Além 
disso, sua missão será implementar os desafios e melhorias propostos, elevando a 
funcionalidade da aplicação e tornando-a ainda mais completa e dinâmica. 

**Funcionalidades do Projeto:** 
• O formulário permite ao usuário inserir o valor da transação em DOT e selecionar a 
complexidade da transação. 
• O sistema calcula o preço estimado do gas com base em uma regra simples: transações 
de baixa complexidade têm uma taxa menor, enquanto transações de alta 
complexidade têm um custo de gas maior. 
• O resultado é exibido na tela com o valor da transação, a complexidade escolhida e o 
custo total do gas.


**Melhorias e Desafios :** 
1. Adicionar Validação para Valores de Transação: 
Adicione uma validação que garanta que o valor da transação seja maior que zero. 
Caso contrário, exiba uma mensagem de erro ao usuário. 
2. Adicionar Conversão de Moedas: 
Permita que o usuário selecione uma moeda de conversão (por exemplo, USD ou 
EUR) e veja o valor estimado do gas na moeda escolhida, além de DOT. 
3. Adicionar um Contador de Transações: 
Implemente um contador que exiba quantas transações o usuário já simulou 
durante a sessão. A cada simulação, o contador deve ser incrementado e exibido 
no topo da página. 
4. Adicionar Temporizador Para Limpar o Histórico de Transações: 
Implemente um temporizador que limpa o histórico de transações 
automaticamente após um determinado período (por exemplo, 1 minuto), 
simulando o comportamento de expiração de transações temporárias em redes 
blockchain. 
5. Adicionar Histórico de Transações Simuladas: 
Mantenha um registro de todas as transações simuladas e exiba o histórico na 
página, mostrando informações como valor da transação, complexidade e custo do 
gas.