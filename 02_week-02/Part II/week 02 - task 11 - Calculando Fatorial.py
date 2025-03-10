print(f"CALCULANDO O FATORIAL\n")

num = int(input("Para o cálculo, digite um número inteiro: "))

fatorial = 1

if num < 0:
    print("Não existe fatorial para números negativos.")
elif num == 0:
    print("O fatorial de 0 é 1.")
else:
    for i in range(1, num + 1):
        fatorial *= i
    
    print(f"O fatorial de {num} é {fatorial}.")