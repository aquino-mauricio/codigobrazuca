print(f"Saudações usuário! Vamos contar as vogais?\n")

frase = input("Digite uma frase: ").lower()

vogais = "aeiou"

contagem_vogais = 0

for letra in frase:
    if letra in vogais:
        contagem_vogais += 1

print(f"A frase contém {contagem_vogais} vogais.")