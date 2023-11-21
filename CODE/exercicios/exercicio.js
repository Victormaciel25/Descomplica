// Função para gerar os múltiplos de um número
function gerarMultiplos(numero, quantidade) {
    const multiplos = [];
    for (let i = 1; i <= quantidade; i++) {
        multiplos.push(numero * i);
    }
    return multiplos;
}

// Criar a matriz 4x5
const matriz = [];

// Preencher a matriz com os múltiplos
matriz.push(gerarMultiplos(2, 5));
matriz.push(gerarMultiplos(3, 5));
matriz.push(gerarMultiplos(4, 5));
matriz.push(gerarMultiplos(5, 5));

// Imprimir a matriz no console
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i]);
}
