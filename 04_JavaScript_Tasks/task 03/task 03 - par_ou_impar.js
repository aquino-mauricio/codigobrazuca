const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarParOuImpar() {
    rl.question("Digite um número: ", (input) => {
        const numero = parseInt(input, 10);

        if (isNaN(numero)) {
            console.log("Por favor, insira um número válido.");
        } else if (numero % 2 === 0) {
            console.log("Este é um número par");
        } else {
            console.log("Este é um número ímpar");
        }

        rl.close();
    });
}

verificarParOuImpar();