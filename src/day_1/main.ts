import * as fs from "fs"

// Setup 
const inputFile = fs.readFileSync("./data/input", "utf8").trim();
const input = inputFile.split("\n").map(value => +value);


// Part One
const processedInput = input.map(value => (Math.floor(value / 3) - 2));

console.log(processedInput.reduce((acc, val) => acc += val))

// Part Two
function CalculateFuel(mass: number, accumulated = 0) {
	const fuel = (Math.floor(mass / 3) - 2);
	if (fuel < 0) { return accumulated; }

	accumulated += fuel;
	return CalculateFuel(fuel, accumulated);
}

const totalFuelMass = input.map(value => CalculateFuel(value));
console.log(totalFuelMass.reduce((acc, val) => acc += val)); 