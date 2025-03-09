const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularMedia(numeros) {
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
}

function solicitarNumeros() {
    console.log("Digite 10 números separados por espaço:");

    rl.question("", (input) => {
        const numeros = input.split(" ").map((num) => parseFloat(num));

        if (numeros.length !== 10 || numeros.some(isNaN)) {
            console.log("Por favor, insira exatamente 10 números válidos.");
        } else {
            const media = calcularMedia(numeros);
            console.log(`A média dos números é: ${media}`);
        }

        rl.close();
    });
}

solicitarNumeros();