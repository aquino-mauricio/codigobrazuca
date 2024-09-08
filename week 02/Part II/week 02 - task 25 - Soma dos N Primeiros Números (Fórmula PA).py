def soma_primeiros_numeros():
    n = int(input("Digite um número inteiro positivo n: "))

    if n < 1:
        print("Por favor, insira um número inteiro positivo.")
        return

    soma = n * (n + 1) // 2  # Usando a fórmula da soma da PA
    
    print(f"A soma dos primeiros {n} números naturais é: {soma}")

soma_primeiros_numeros()