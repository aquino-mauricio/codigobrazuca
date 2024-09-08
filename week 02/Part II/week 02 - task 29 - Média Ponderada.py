print("   A média ponderada, ou média aritmática ponderada, é uma medida")
print("estatística onde cada nota possui seu peso específico.\n")
print("   Vamos calcular qual a média ponderada de suas notas?")

def calcular_media_ponderada(nota1, nota2, nota3, peso1, peso2, peso3):
    soma_produtos = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)
    
    soma_pesos = peso1 + peso2 + peso3
    
    media_ponderada = soma_produtos / soma_pesos
    
    return media_ponderada

nota1 = float(input("Digite a sua primeira nota: "))
nota2 = float(input("Digite a sua segunda nota: "))
nota3 = float(input("Digite a sua terceira nota: "))

peso1 = 2
peso2 = 3
peso3 = 5

media = calcular_media_ponderada(nota1, nota2, nota3, peso1, peso2, peso3)

print(f"A média ponderada das notas é: {media:.2f}")