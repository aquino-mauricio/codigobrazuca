def soma_numeros_pares():
    soma = 0
    for num in range(1, 101):
        if num % 2 == 0:
            soma += num
    print(f"A soma de todos os números pares entre 1 e 100 é: {soma}")

soma_pares = soma_numeros_pares()