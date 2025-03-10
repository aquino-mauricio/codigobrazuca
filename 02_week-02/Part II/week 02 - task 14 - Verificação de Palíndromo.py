print(f"Um palíndromo é uma palavra ou frase que pode ser lida da mesma forma de trás para frente. Vamos testar?\n")

texto = input("Digite uma palavra ou frase: ")

texto_limpo = texto.replace(" ", "").lower()

if texto_limpo == texto_limpo[::-1]:
    print(f"A palavra '{texto}' é um palíndromo.")
else:
    print(f"A palavra '{texto}' não é um palíndromo.")