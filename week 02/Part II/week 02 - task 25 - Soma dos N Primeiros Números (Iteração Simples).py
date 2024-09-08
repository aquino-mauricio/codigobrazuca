def soma_primeiros_numeros():
    n = int(input("Digite um número inteiro positivo n: "))
    
    if n < 1:
        print("Por favor, insira um número inteiro positivo.")
        return
    
    soma = 0

    for i in range(1, n + 1): # Usando iteração simples
        soma += i

    print(f"A soma dos primeiros {n} números naturais é: {soma}")

soma_primeiros_numeros()