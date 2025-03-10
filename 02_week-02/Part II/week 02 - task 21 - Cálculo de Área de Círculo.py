import math

print(f"Saudações usuário! Apenas para título de padronização, usaremos a medida em centímetros.")

def calcular_area_circulo():
    raio = float(input("Para calcularmos a área, digite o valor em cm do raio de um círculo: "))
    area = math.pi * raio ** 2
    print(f"A área do círculo com um raio de {raio} cm é: {area:.2f} cm")

calcular_area_circulo()