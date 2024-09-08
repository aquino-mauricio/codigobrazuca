def calculadora_simples():
    print("Saudações usuário! Bem-vindo à Calculadora Simples!")
    
    num1 = float(input("Digite o primeiro número: "))
    num2 = float(input("Digite o segundo número: "))    

    operador = input("Digite a operação que deseja realizar (+, -, *, /): ")

    if operador == '+':
        resultado = num1 + num2
        print(f"{num1} + {num2} = {resultado}")
    elif operador == '-':
        resultado = num1 - num2
        print(f"{num1} - {num2} = {resultado}")
    elif operador == '*':
        resultado = num1 * num2
        print(f"{num1} * {num2} = {resultado}")
    elif operador == '/':
        if num2 != 0:
            resultado = num1 / num2
            print(f"{num1} / {num2} = {resultado}")
        else:
            print("A divisão por zero não é possível.")
    else:
        print("Operador inválido. Tente novamente.")

calculadora_simples()