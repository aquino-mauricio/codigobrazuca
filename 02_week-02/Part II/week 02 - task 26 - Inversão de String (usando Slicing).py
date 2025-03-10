print("Saudações usuário! Vamos brincar de escrever de trás pra frente?\n")

def inverter_string_slicing():
    string = input("Digite uma frase e eu te ajudo: ")
    
    string_invertida = string[::-1]
    
    print(f"A frase invertida é: {string_invertida}")

inverter_string_slicing()