print(f"Saudações usuário!")
celsius = float(input("Digite a temperatura em Celsius que deseja converter: "))

fahrenheit = (celsius * 9/5) + 32

kelvin = celsius + 273.15

print(f"A temperatura de {celsius}°C corresponde a {fahrenheit:.2f}°F e {kelvin:.2f}K.")