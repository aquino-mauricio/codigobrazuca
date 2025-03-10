let contadorTransacoes = 0;
let historico = [];

// Função para atualizar o contador de transações
function atualizarContador() {
    document.getElementById('contador').textContent = `Transações simuladas: ${contadorTransacoes}`;
}

// Função para limpar o histórico após 1 minuto
function limparHistorico() {
    setTimeout(() => {
        historico = [];
        document.getElementById('historico').innerHTML = '';
        console.log('Histórico de transações limpo.');
    }, 60000); // 60.000 ms = 1 minuto
}

// Função para converter moedas usando a API da Binance
async function converterMoeda(valor, moeda) {
    if (moeda === 'DOT') return valor; // Se a moeda for DOT, não precisa converter

    try {
        // Caso a moeda seja USDT, retorna a conversão diretamente
        if (moeda === 'USDT') {
            const response = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=DOTUSDT`);
            const data = await response.json();

            if (data && data.price) {
                const taxa = parseFloat(data.price);
                return valor * taxa; // Converte DOT para USDT diretamente
            }
        }

        // Caso a moeda seja BTC, primeiro converte DOT para USDT, depois de USDT para BTC
        if (moeda === 'BTC') {
            // Converte DOT para USDT
            const responseUsdt = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=DOTUSDT`);
            const dataUsdt = await responseUsdt.json();
            const taxaUsdt = parseFloat(dataUsdt.price);

            // Converte USDT para BTC
            const responseBtc = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT`);
            const dataBtc = await responseBtc.json();
            const taxaBtc = parseFloat(dataBtc.price);

            // Realiza as conversões
            const valorUsdt = valor * taxaUsdt; // Converte DOT para USDT
            const valorBtc = valorUsdt / taxaBtc; // Converte USDT para BTC
            return valorBtc;
        }

        throw new Error('Moeda não suportada para conversão.');
    } catch (error) {
        console.error('Erro ao converter moeda:', error);
        return valor; // Retorna o valor original em caso de erro
    }
}

// Evento de clique no botão "Calcular"
document.getElementById('calcular').addEventListener('click', async function () {
    const valorTransacao = parseFloat(document.getElementById('valor-transacao').value);
    const complexidade = document.getElementById('complexidade').value;
    const moeda = document.getElementById('moeda').value;

    // Validação do valor da transação
    if (isNaN(valorTransacao) || valorTransacao <= 0) {
        alert('Por favor, insira um valor válido para a transação.');
        return;
    }

    // Cálculo do custo do gas
    let precoGas;
    switch (complexidade) {
        case 'baixa':
            precoGas = 0.01;
            break;
        case 'media':
            precoGas = 0.05;
            break;
        case 'alta':
            precoGas = 0.1;
            break;
    }

    const custoGas = valorTransacao * precoGas;
    const custoConvertido = await converterMoeda(custoGas, moeda);

    // Exibe o resultado
    document.getElementById('resultado').innerHTML = `
        <p>Valor da Transação: ${valorTransacao} DOT</p>
        <p>Complexidade: ${complexidade.charAt(0).toUpperCase() + complexidade.slice(1)}</p>
        <p><strong>Custo Estimado do Gas: ${custoConvertido.toFixed(6)} ${moeda}</strong></p>
    `;

    // Atualiza o contador e o histórico
    contadorTransacoes++;
    atualizarContador();

    const transacao = {
        valor: valorTransacao,
        complexidade,
        custoGas: custoConvertido.toFixed(6),
        moeda,
    };
    historico.push(transacao);

    // Exibe o histórico
    const historicoHTML = historico.map((transacao, index) => `
        <li>
            <strong>Transação #${index + 1}:</strong>
            Valor: ${transacao.valor} DOT,
            Complexidade: ${transacao.complexidade},
            Custo do Gas: ${transacao.custoGas} ${transacao.moeda}
        </li>
    `).join('');
    document.getElementById('historico').innerHTML = historicoHTML;

    // Inicia o temporizador para limpar o histórico
    limparHistorico();
});