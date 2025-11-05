const valorReal = document.querySelector("input");

function converter() {
  document.querySelector("h1").style.color = "red"; // Modificando a Cor pelo JS

  const valorConvertido = valorReal.value / 5; // Logica de Convertei real para Dólar

  alert(`O valor do dólar é ${valorConvertido} dólares`);
}
