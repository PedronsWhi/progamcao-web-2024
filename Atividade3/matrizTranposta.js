// Função para transpor uma matriz e imprimir as matrizes original e transposta
function transporMatriz(A) {
    // Função auxiliar para imprimir uma matriz
    function imprimirMatriz(matriz) {
        for (let i = 0; i < matriz.length; i++) {
            console.log(matriz[i].join("\t"));
        }
        console.log(); // Adiciona uma linha em branco para separar as matrizes
    }

    // Imprimir a matriz original
    console.log("Matriz original:");
    imprimirMatriz(A);

    // Criar matriz transposta
    const transposta = [];

    // Inicializar a matriz transposta com arrays vazios
    for (let i = 0; i < A[0].length; i++) {
        transposta.push([]);
    }

    // Preencher a matriz transposta
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            transposta[j].push(A[i][j]);
        }
    }

    // Imprimir a matriz transposta
    console.log("Matriz transposta:");
    imprimirMatriz(transposta);
}

// Exemplo de uso:
const matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

transporMatriz(matrizOriginal);
