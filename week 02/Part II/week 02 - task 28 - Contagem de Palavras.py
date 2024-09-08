print("Saudações usuário! Quer saber quantas palavras contém uma frase?\n")

def contar_palavras(frase):
    palavras = frase.split()
    
    return len(palavras)

frase = input("Digite uma frase e eu te digo quantas palavras ela tem: ")
quantidade_palavras = contar_palavras(frase)

print(f"A sua frase contém {quantidade_palavras} palavras.")