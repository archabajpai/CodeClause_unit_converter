let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length");
let volumeEl = document.getElementById("volume");
let massEl = document.getElementById("mass");
let convertEl = document.getElementById("convert")

const meter = 3.281;
const liter = 0.264;
const kilo = 2.204;

convertEl.addEventListener("click", function() {

    let baseInput = inputEl.value;
 
      lengthEl.textContent = `${baseInput} meters = ${ parseFloat(baseInput * meter).toFixed(2) } feet`

      volumeEl.textContent = `${baseInput} liters = ${ parseFloat(baseInput * liter).toFixed(2) } gallons`

      massEl.textContent = `${baseInput} kilos = ${ parseFloat(baseInput * kilo).toFixed(2) } pounds`
})