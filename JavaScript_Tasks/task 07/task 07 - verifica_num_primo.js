const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarNumeroPrimo(numero) {
    if (numero <= 1) return false;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function solicitarNumero() {
    rl.question("Digite um número: ", (input) => {
        const numero = parseInt(input, 10);

        if (isNaN(numero)) {
            console.log("Por favor, insira um número válido.");
        } else {
            const resultado = verificarNumeroPrimo(numero);
            if (resultado) {
                console.log("Sim, o número é primo.");
            } else {
                console.log("Não, o número não é primo.");
            }
        }

        rl.close();
    });
}

solicitarNumero();