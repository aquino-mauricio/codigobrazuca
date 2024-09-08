print("Saudações usuário! ")
print("Um número perfeito é um número que é igual à soma dos seus divisores próprios, excluindo ele mesmo.\n")

def verificar_numero_perfeito(numero):
    if numero < 2:
        return False
    
    soma_divisores = 0
    for i in range(1, numero):
        if numero % i == 0:
            soma_divisores += i
    
    return soma_divisores == numero

numero = int(input("Digite um número e eu verifico para você se ele é um número perfeito: "))
if verificar_numero_perfeito(numero):
    print(f"O número {numero} é um número perfeito.")
else:
    print(f"O número {numero} não é um número perfeito.")