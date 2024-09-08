import random

def jogo_adivinhacao():
    numero_secreto = random.randint(1, 100)
    tentativas = 0
    acertou = False
    
    print("Saudações usuário! Bem-vindo ao Jogo de Adivinhação!")
    print("Tente adivinhar o número entre 1 e 100.")

    while not acertou:
        palpite = int(input("Digite o seu palpite: "))
        tentativas += 1
        
        if palpite < numero_secreto:
            print("O número secreto é maior!")
        elif palpite > numero_secreto:
            print("O número secreto é menor!")
        else:
            acertou = True
            print(f"Parabéns! Você acertou o número {numero_secreto} em {tentativas} tentativas.")

jogo_adivinhacao()