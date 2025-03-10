print(f"Saudações usuário! Precisamos de um intervalo de números inteiros.")

inicio = int(input("Digite o número inicial do intervalo: "))
fim = int(input("Digite o número final do intervalo: "))

def decifrar_codigo(inicio, fim):
    total = 0
    
    for numero in range(inicio, fim + 1):
        if numero % 3 == 0 and numero % 5 == 0:
            continue 
        elif numero % 3 == 0:
            total += numero 
        elif numero % 5 == 0:
            total -= numero 
    
    return total

resultado = decifrar_codigo(inicio, fim)
print(f"O valor total calculado é: {resultado}")