def saudacao(nome):
    print("Olá,", nome + "! Digite um número por favor: ")
    numero = int(input("Número: "))
    return numero

def par_ou_impar(numero):
    if numero % 2 == 0:
        return "par"
    else:
        return "ímpar"

usuario = input("Qual o seu nome? ")
numero_digitado = saudacao(usuario)

resultado = par_ou_impar(numero_digitado)

print("O número", numero_digitado, "é um numero", resultado)


