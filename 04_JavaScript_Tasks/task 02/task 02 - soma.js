const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function somarNumeros() {
    rl.question("Digite o primeiro número: ", (input1) => {
        const numero1 = parseFloat(input1);

        rl.question("Digite o segundo número: ", (input2) => {
            const numero2 = parseFloat(input2);

            if (isNaN(numero1) || isNaN(numero2)) {
                console.log("Por favor, insira valores numéricos válidos.");
            } else {
                const soma = numero1 + numero2;
                console.log(`A soma dos números é: ${soma}`);
            }

            rl.close();
        });
    });
}

somarNumeros();