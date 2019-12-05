import * as fs from "fs"

// Setup 
const inputFile = fs.readFileSync("./data/input", "utf8").trim();
const input = inputFile.split(",").map(value => +value);

// Part One
// Revert program to pre-halt state.
input[1] = 12;
input[2] = 2;

function run_program(program: number[]) {
	for (let i = 0; i < input.length; i += 4)
	{
		const op = input[i];
		const posA = input[i + 1];
		const posB = input[i + 2];
		const posOUT = input[i + 3]

		const argA = input[posA];
		const argB = input[posB];


		switch (op)
		{
			case 1:
				input[posOUT] = argA + argB;
				break;
			case 2:
				input[posOUT] = argA * argB;
				break;
			case 99:
				return;
			default:
				console.log("Unexpected OP: " + op.toString());
		}

		//input[output_position] = operators[op](arg_a, arg_b);
	}
}

console.log(input[0]);
run_program(input);
console.log(input[0]);

// Part Two
