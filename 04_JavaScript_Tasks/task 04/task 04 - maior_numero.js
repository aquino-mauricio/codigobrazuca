const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function encontrarMaiorNumero() {
    rl.question("Digite o primeiro número: ", (input1) => {
        const numero1 = parseFloat(input1);

        if (isNaN(numero1)) {
            console.log("Por favor, insira um número válido para o primeiro número.");
            rl.close();
            return;
        }

        rl.question("Digite o segundo número: ", (input2) => {
            const numero2 = parseFloat(input2);

            if (isNaN(numero2)) {
                console.log("Por favor, insira um número válido para o segundo número.");
                rl.close();
                return;
            }

            const maior = numero1 > numero2 ? numero1 : numero2;
            console.log(`Entre os números digitados, o maior número é: ${maior}`);

            rl.close();
        });
    });
}

encontrarMaiorNumero();