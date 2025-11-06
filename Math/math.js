/*

    Math -> Matemática
        - pow(2,2) / Potência / 2 elevado a 2 = 4
        - sqrt(25,2) / Raiz quadrada
        - ceil / teto -> arredondar pra cima
        - floor / chão -> arredondar pra baixo
        - random() / número aleatório entre 0 e 1

*/

// const calculo = Math.pow(2,5)
// console.log(calculo)

const calculo = Math.random() * (100 - 1) + 1;
console.log(Math.ceil(calculo)); // Math.ceil arredonda o valor para cima
