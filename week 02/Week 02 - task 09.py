nome = input("Olá, usuário, qual é o seu nome? ")
print(f"Seja bem vindo {nome}! Bóra lá! ")

frase = input("Digite uma frase por favor: ")
letra = input("Qual letra você deseja contar? ")

quantidade = frase.count(letra)

print(f"A letra '{letra}' aparece {quantidade} vezes nestra frase.")