soma_notas = 0
contador = 0

print(f"Saudações usuário! Vamos calcular a média das notas alcançadas. (Digite -1 a qualquer momento para encerrar)")

while True:
    nota = float(input("Digite uma nota: "))
    
    if nota == -1:
        break
    
    soma_notas += nota
    contador += 1

if contador > 0:
    media = soma_notas / contador
    print(f"A média das {contador} notas inseridas é: {media:.2f}")
else:
    print("Nenhuma nota foi inserida.")