var elForm = document.querySelector(".form");
var elFahrenheit = elForm.querySelector(".fahrenheit-input");
var elCelsius = elForm.querySelector(".celsius-input");
var elFormula = document.querySelector(".result");

elFahrenheit.addEventListener("input", ()=>{
   elCelsius.value= (+elFahrenheit.value.trim()-32)*5/9;
    elFormula.textContent = '(' + elFahrenheit.value + '°F  -32)*5/9 ='+elCelsius.value;
})
elCelsius.addEventListener("input", ()=>{
    elFahrenheit.value= +elCelsius.value.trim()*9/5 + 32;
    elFormula.textContent = elCelsius.value + '°C*9/5 + 32 ='+ elFahrenheit.value;
    
})