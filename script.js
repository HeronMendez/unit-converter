const input = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

convertBtn.addEventListener("click", function () {
  let baseValue = input.value;
// variables assigned to later fix their results to 3 decimal numbers
  let lengthElMult = baseValue * meterToFeet;
  let lengthElDiv = baseValue / meterToFeet;
  let volumeElMult = baseValue * literToGallon;
  let volumeElDiv = baseValue / literToGallon;
  let massElMult = baseValue * kiloToPound;
  let massElDiv = baseValue / kiloToPound;
// assignation of values on user-end
  lengthEl.textContent = `${baseValue} meters = ${lengthElMult.toFixed(3)} feet | ${baseValue} feet = ${lengthElDiv.toFixed(3)} meters`;
  volumeEl.textContent = `${baseValue} liters = ${volumeElMult.toFixed(3)} gallons | ${baseValue} gallons = ${volumeElDiv.toFixed(3)} liters`;
  massEl.textContent = `${baseValue} kilos = ${massElMult.toFixed(3)} pounds | ${baseValue} pounds = ${massElDiv.toFixed(3)} kilos`;
});
