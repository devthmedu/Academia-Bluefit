let peso, altura, resultado, imc, erro;

/**
 * Calcula o IMC (Índice de Massa Corporal) com base no peso e altura fornecidos
 */
function calcularIMC() {
  // Obtém os valores dos campos de entrada
  peso = parseFloat(document.getElementById('weight').value);
  altura = parseFloat(document.getElementById('height').value);

  // Mensagem de erro padrão
  erro = 'Por favor, insira valores válidos';

  // Verifica se os valores são válidos
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    document.getElementById('results').innerHTML = erro;
    return;
  }

  // Converte altura para metros e calcula o IMC
  altura /= 100;
  imc = peso / (altura * altura);
  imc = imc.toFixed(1);

  // Determina a classificação com base no IMC
  if (imc <= 18.4) {
    resultado = `Seu IMC é ${imc}, o que significa que você está Abaixo do Peso.`;
  } else if (imc >= 18.5 && imc <= 24.9) {
    resultado = `Seu IMC é ${imc}, o que significa que você está com o Peso Normal.`;
  } else if (imc >= 25 && imc <= 29.9) {
    resultado = `Seu IMC é ${imc}, o que significa que você está com Sobrepeso.`;
  } else if (imc >= 30) {
    resultado = `Seu IMC é ${imc}, o que significa que você está com Obesidade.`;
  }

  // Exibe o resultado
  document.getElementById('results').innerHTML = resultado;
}
