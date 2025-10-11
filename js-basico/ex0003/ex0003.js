// Com as variáveis já declaradas, encontre uma forma de transformarem os valores delas para representar
// o valor referente ao comentário.

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// const tempA = varA;
// varA = varB;
// varB = varC;
// varC = tempA;

// Atribuição por desestruturação
[varA, varB, varC] = [varB, varC, varA]; // Meio mais inteligente

console.log(varA, varB, varC); // BCA
