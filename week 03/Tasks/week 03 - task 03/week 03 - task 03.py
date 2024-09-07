import random

print(f"## BINGO DA ADIVINHAÇÃO POLKADOT ##\n")

def gerar_cartela():
    cartela = random.sample(range(1, 76), 5)
    return cartela

def sortear_numero(numeros_sorteados):
    while True:
        numero = random.randint(1, 75)
        if numero not in numeros_sorteados:
            numeros_sorteados.add(numero)
            return numero

def jogar_bingo():
    cartela = gerar_cartela()
    print(f"Sua cartela: {cartela}")
    
    numeros_sorteados = set()
    tentativas = 0
    
    while cartela:
        tentativas += 1
        numero = sortear_numero(numeros_sorteados)
        print(f"Número sorteado: {numero}")
        
        if numero in cartela:
            cartela.remove(numero)
            print(f"Você acertou! Números restantes na cartela: {cartela}")
        else:
            print("Esse número não está na sua cartela.")
    
    print(f"Parabéns! Você completou a cartela em {tentativas} sorteios.")

jogar_bingo()