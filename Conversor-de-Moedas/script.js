document.getElementById('convertButton').addEventListener('click', async function () {
  const amount = document.getElementById('amount').value;
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;
  const resultElement = document.getElementById('result');
  const ratesTable = document.getElementById('ratesTable');

  if (!amount || amount <= 0) {
    resultElement.textContent = "Por favor, insira um valor válido.";
    return;
  }

  try {
    // URL da API com as taxas de câmbio
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
    
    // Fazendo a requisição à API
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Obtendo a taxa de câmbio
    const exchangeRate = data.rates[toCurrency];
    if (!exchangeRate) {
      resultElement.textContent = "Não foi possível obter a taxa de câmbio.";
      return;
    }

    // Calculando o valor convertido
    const convertedAmount = (amount * exchangeRate).toFixed(2);
    resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;

    // Atualizando a tabela com todas as taxas de câmbio
    ratesTable.innerHTML = ''; // Limpa a tabela antes de preencher
    for (const [currency, rate] of Object.entries(data.rates)) {
      const row = `<tr><td>${currency}</td><td>${rate.toFixed(2)}</td></tr>`;
      ratesTable.innerHTML += row;
    }
  } catch (error) {
    resultElement.textContent = "Ocorreu um erro ao realizar a conversão.";
    console.error("Erro:", error);
  }
});

  