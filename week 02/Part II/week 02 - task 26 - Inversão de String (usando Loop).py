print("Saudações usuário! Vamos brincar de escrever de trás pra frente?\n")

def inverter_string_loop():
    string = input("Digite uma frase e eu te ajudo: ")
    
    string_invertida = ""
    for char in string:
        string_invertida = char + string_invertida

    print(f"A frase invertida é: {string_invertida}")

inverter_string_loop()