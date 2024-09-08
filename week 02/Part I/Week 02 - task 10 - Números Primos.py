def eh_primo(numero):
    if numero <= 1:
        return False
    for i in range(2, int(numero ** 0.5) + 1):
        if numero % i == 0:
            return False
    return True
    
nome = input("Olá, usuário, qual é o seu nome? ")
print(f"Seja bem vindo {nome}! Vamos falar hoje sobre números primos?! ")

inicio = int(input("Digite o início de um intervalo de números e te direi quais são primos: "))
final = int(input("E até qual número você quer que eu analize? "))

print(f"Os números primos entre {inicio} e {final} são: ")
for numero in range(inicio, final + 1):
    if eh_primo(numero):
        print(numero)