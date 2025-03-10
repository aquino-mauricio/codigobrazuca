print("Digite os números que deseja somar: (ou 0 para sair)")

soma = 0
contador = None

while contador != 0:
    contador = int(input("Número: "))
    if contador != 0:
        soma += contador

print("A soma dos números digitados é:", soma)