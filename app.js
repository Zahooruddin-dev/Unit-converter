// worked on for three days with differnet versions and final work this, had the change the design concept I was going for mid work
const button = document.getElementById('btn-el');
const input = document.getElementById('input-el');
let length = document.getElementById('length');
let volumne = document.getElementById('volume');
let mass = document.getElementById('mass');
function pEnter() {
	metersToFeet();
	litersToGallons();
	kilogramsToPounds();
	console.log(input.value);
}
function metersToFeet() {
	let inputValue = parseFloat(input.value);
	const lengthInFeet = inputValue * 3.28084;
	const lengthInMeter = inputValue * 0.3048;
	length.innerHTML = `
	Length (Meter/Feet)
  	${input.value} meters = 
		${lengthInFeet.toFixed(2)} feet | 
		${input.value} 
		feet = 
		${lengthInMeter.toFixed(2)}
		 meter
  
  `;
}

function litersToGallons() {
	let inputValue = parseFloat(input.value);
	const lengthInFeet = inputValue * 0.264172;
	const lengthInMeter = inputValue * 3.78541;
	volumne.innerHTML = `
Volume (Liters/Gallons)
${input.value} Litres = 
${lengthInFeet.toFixed(2)} 
Gallon |
 ${input.value}
  Gallon
	 = ${lengthInMeter.toFixed(2)}
	 Litres
  
  `;
}

function kilogramsToPounds() {
	let inputValue = parseFloat(input.value);
	const kiloToPound = inputValue * 2.20462;
	const poundToKilo = inputValue * 0.453592;

	mass.innerHTML = `

Mass (Kilograms/Pounds)

  ${input.value}
	 Kilo = 
	 ${kiloToPound.toFixed(2)} 
	 Pound |
   ${input.value} 
   Pound = ${poundToKilo.toFixed(2)}
  Kilogram
  
  `;
}
