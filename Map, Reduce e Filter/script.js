/*

    Dominando ARRAYS no JavaScript

    Map(Mapear Item por item do Array)
        - Criar um novo Array com a mesma quantidade de itens do original.
        - O novo array você pode alterar o que quiser em relação ao array original.
        - Você tem acesso a 3 dados:
            - Item por Item do array
            - Posição atual do array
            - Array Completo

    Reduce(Reduzir o Array a um único valor)
      - Reduz um array inteiro a um Único valor
        - Você tem acesso a 4 dados:
          - Acumulador
          - Valor Atual
          - Posição atual
          - Array Completo
            
*/

// const numeros = [1, 2, 3, 4, 5];

// const dobro = numeros.map((numero, index, arrayCompleto) => {
//  console.log(arrayCompleto);|
// });

const produtos = [
  { id: 1, nome: "Samsung Galaxy S21", preco: 3999.99, temDesconto: true, quantidade: 1, },
  { id: 2, nome: "iPhone 14", preco: 6499.9, temDesconto: false, quantidade: 1, },
  { id: 3, nome: "Xiaomi Redmi Note 13 Pro", preco: 2299.99, temDesconto: true, quantidade: 1, },
  { id: 4, nome: "Motorola Edge 40", preco: 2999.0, temDesconto: false, quantidade: 1, },
  { id: 5, nome: "Samsung Galaxy A54", preco: 2499.9, temDesconto: true, quantidade: 1, },
  { id: 6, nome: "Realme 11 Pro+", preco: 2799.99, temDesconto: true, quantidade: 1, },
  { id: 7, nome: "Asus Zenfone 10", preco: 4599.0, temDesconto: false, quantidade: 1, },
  { id: 8, nome: "Google Pixel 8", preco: 5599.99, temDesconto: true, quantidade: 1, },
  { id: 9, nome: "OnePlus 11", preco: 4899.0, temDesconto: false, quantidade: 1, },
  { id: 10, nome: "Poco X6 Pro", preco: 2099.9, temDesconto: true, quantidade: 1, },
];

// Criar um novo Array formatando a moeda e dando desconto aos clientes
const novosProdutos = produtos.map((produto) => {
  const novoPreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco;

  // Ternário = IF e ELSE    ? = IF / ELSE

  return {
    id: produto.id,
    nome: produto.nome,
    preco: novoPreco.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    }),
    quantidade: produto.quantidade,
  };
});

console.log(novosProdutos);

// Qual será o faturamento, se vendermos todo o estoque

const totalVendas = produtos.reduce((acumulador, produto) => {})

// const numeros = [1, 2, 3, 4, 5];

// const soma = numeros.reduce((acumulador, atual) => {
//   const total = acumulador + atual;

//   return total;
// });

// console.log(soma);