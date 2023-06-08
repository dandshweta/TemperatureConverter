let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

let calculateFromCelsius = () => {
  let celsiusValue = celsius.value;
  fahrenheit.value = celsiusValue * 1.8 + 32;
};

let calculateFromFahrenheit = () => {
  let fahrenheitValue = fahrenheit.value;
  celsius.value = (fahrenheitValue - 32) * 0.555;
};

celsius.addEventListener("input", calculateFromCelsius);
fahrenheit.addEventListener("input", calculateFromFahrenheit);
