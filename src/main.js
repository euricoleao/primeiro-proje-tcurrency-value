
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")





function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueConvert = document.querySelector(".currency-value-convert")
  const convertedValue = document.querySelector(".converted-value")

  const dolarToday = 5.2
  const euroToday = 6.2
  const libraToday = 6.03
  const bitcoinToday = 130.

  if (currencySelect.value == "dolar") {
    convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dolarToday)

  }
  if (currencySelect.value == "euro") {
    convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday)

  }
  
  if (currencySelect.value == "libra") {
    convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue / libraToday)

  }

  if (currencySelect.value == "bitcoin") {
    convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC"
    }).format(inputCurrencyValue / bitcoinToday)

  }
  currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)
}
  function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")
   
    if (currencySelect.value == "dolar") {
     currencyName.innerHTML ="Dólar americano"
     currencyImg.src = "./img/dolar.png"
    }
   
    if (currencySelect.value == "euro") {
     currencyName.innerHTML ="Euro"
     currencyImg.src = "./img/euro.png"
    }

    if (currencySelect.value == "libra") {
      currencyName.innerHTML ="Libra"
      currencyImg.src = "./img/libra.png"
     }

     if (currencySelect.value == "bitcoin") {
      currencyName.innerHTML ="Bitcoin"
      currencyImg.src = "./img/bitcoin.png"
     }
   convertValues()
}
convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change",changeCurrency)