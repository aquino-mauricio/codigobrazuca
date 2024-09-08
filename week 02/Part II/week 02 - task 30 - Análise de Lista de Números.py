def analisar_lista_numeros():
    numeros = []
    
    print("Saudações usuário! Me informe uma lista de números a serem analizados.")
    print("(digite fim após finalizar)\n")
    
    print("Digite aqui os números: ")
    while True:
        entrada = input("Digite um número: ")
        if entrada.lower() == 'fim':
            break
        try:
            numero = float(entrada)
            numeros.append(numero)
        except ValueError:
            print("Entrada inválida. Por favor, digite um número ou 'fim' para encerrar.")
    
    if not numeros:
        print("Nenhum número foi inserido.")
        return
    
    maior = max(numeros)
    menor = min(numeros)
    media = sum(numeros) / len(numeros)
    
    print(f"O maior número inserido foi: {maior:.2f}")
    print(f"O menor número inserido foi: {menor:.2f}")
    print(f"A média dos números inseridos é: {media:.2f}")

analisar_lista_numeros()