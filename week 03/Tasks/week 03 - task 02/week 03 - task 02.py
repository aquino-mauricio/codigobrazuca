print(f"Saudações usuário! Para procurarmos o 'número mágico', preciso de um intervalo de números inteiros.\n")

inicio = int(input("Insira o início do intervalo: "))
final = int(input("Insira o final do intervalo: "))

def eh_primo(n):
    if n <= 1:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    for i in range(3, int(n**0.5) + 1, 2):
        if n % i == 0:
            return False
    return True

def soma_numeros(n):
    return sum(int(digit) for digit in str(n))

def encontra_numero_magico(inicio, final):
    for number in range(inicio, final + 1):
        if number % 4 == 0 and eh_primo(number) and soma_numeros(number) % 2 != 0:
            return number
    return None

numero_magico = encontra_numero_magico(inicio, final)

if numero_magico:
    print(f"O Número Mágico encontrado é: {numero_magico}")
else:
    print("Número Mágico não encontrado no intervalo fornecido.")