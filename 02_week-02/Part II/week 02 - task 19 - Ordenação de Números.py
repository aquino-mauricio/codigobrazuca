print(f"Saudações usuário! Vamos colocar os números em ordem!\n")

num1 = float(input("Digite o primeiro número: "))
num2 = float(input("Digite o segundo número: "))
num3 = float(input("Digite o terceiro número: "))

numeros = [num1, num2, num3]

numeros.sort()

print("Os números digitados, em ordem crescente são:", numeros)