// Importa a biblioteca prompt-sync para capturar input do usuário
const prompt = require('prompt-sync')();

// Função para calcular saldo de vitórias e classificar nível
function classificarJogador(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Estrutura de decisão para classificar o nível com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    } else {
        nivel = "Desconhecido";  // Caso algum erro de entrada ocorra
    }

    return { saldoVitorias, nivel };
}

// Função principal para executar o programa
function main() {
    // Captura o número de vitórias e derrotas do jogador
    let vitorias = parseInt(prompt("Digite a quantidade de vitórias: "));
    let derrotas = parseInt(prompt("Digite a quantidade de derrotas: "));

    // Calcula o saldo e o nível do jogador
    let resultado = classificarJogador(vitorias, derrotas);

    // Exibe o saldo e o nível do jogador
    console.log(`O Herói tem saldo de ${resultado.saldoVitorias} vitórias e está no nível ${resultado.nivel}`);
}

// Executa o programa
main();
