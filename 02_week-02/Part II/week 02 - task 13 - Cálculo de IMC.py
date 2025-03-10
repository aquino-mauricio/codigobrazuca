print(f"Saudações usuário, vamos calcular o seu IMC!\n")

peso = float(input("Digite seu peso em quilogramas (kg): "))
altura = float(input("Digite sua altura em metros (m): "))

imc = peso / (altura ** 2)

print(f"Seu Índice de Massa Corporal (IMC) é: {imc:.2f}")