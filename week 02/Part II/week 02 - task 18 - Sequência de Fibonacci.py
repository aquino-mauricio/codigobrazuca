print("Fibonacci - Sequência numérica onde cada termo, a partir do terceiro, é a soma dos dois anteriores.")

n = int(input("Digite a quantidade de termos que deseja ver da sequência de Fibonacci: "))

fibonacci = [0, 1]

for i in range(2, n):
    proximo = fibonacci[i - 1] + fibonacci[i - 2]
    fibonacci.append(proximo)

print(f"Os primeiros {n} termos da sequência de Fibonacci são:")
print(fibonacci[:n])