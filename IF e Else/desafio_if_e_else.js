/*
DESAFIO:

Utilizando If / Else, crie um código que 
 - Verifica se uma cidade é grande ou pequena
 - Cidade grande possui mais de 300mil habitantes
*/

// Resolução
const cidade = 125000;

if (cidade >= 300000) {
  console.log("É uma cidade GRANDE!!");
} else if (cidade > 150000) {
  console.log("É uma cidade MÉDIA!!");
} else {
  console.log("É uma cidade PEQUENA!!");
}
