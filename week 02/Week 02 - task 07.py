print("Lista de compras atual: laranja, arroz, sabonete")

compras = ["laranja", "arroz", "sabonete"]
compras.append(input("Adicionar a lista: "))

for item in compras:
    print("Compras:", item)