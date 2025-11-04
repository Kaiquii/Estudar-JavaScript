/* Functions / Funções
    - Trecho de código que é executado
        SOMENTE quando solicitado 
    - Trecho de código que pode ser Reutilizado várias vezes

    [X] Função VOID (Vazia)
    [X] Função com parâmetros
    [X] Função Return
    [X] Arrow Function
*/

/* --- VOID --- */

function digaMeuNome() {
  console.log("Kaiqui");
}

digaMeuNome(); // executar a função

/* --- Parâmetros --- */

function soma(num1, num2) {
  const resultado = num1 + num2;

  console.log(resultado);
}

soma(2, 6); // executar a função

function digaQualquerNome(nome) {
  console.log(nome);
}

digaQualquerNome("Kaiqui"); // executar a função

/* --- Return --- */

function estaEndividade(receita, gastos) {
  if (receita > gastos) {
    return "Está no AZUL";
  } else {
    return "Está no VERMELHO";
  }
}

const maria = estaEndividade(5000, 7000);
const joao = estaEndividade(10000, 2000);

console.log(`Maria está no`, maria);
console.log(`João está no`, joao);

/* --- Arrow Function (Função flecha) --- */

function abacate() {} // Forma clássica

// Parametros dentro da ()
const digaMeuNome2 = () => {
  console.log("Kaiqui");
};

digaMeuNome2();
