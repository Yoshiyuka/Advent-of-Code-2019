import * as fs from "fs"

// Setup 
const inputFile = fs.readFileSync("./data/input", "utf8").trim();
const input = inputFile.split(",").map(value => +value);

// Part One
// Revert program to pre-halt state.
input[1] = 12;
input[2] = 2;

function run_program(program: number[]) {
	for (let i = 0; i < program.length; i += 4)
	{
		const op = program[i];
		const posA = program[i + 1];
		const posB = program[i + 2];
		const posOUT = program[i + 3]

		const argA = program[posA];
		const argB = program[posB];


		switch (op)
		{
			case 1:
				program[posOUT] = argA + argB;
				break;
			case 2:
				program[posOUT] = argA * argB;
				break;
			case 99:
				// console.log(program]0]); // needed for part one. left out for part two.
				return;
			default:
				console.log("Unexpected OP: " + op.toString());
		}
	}

}

console.log(input[0]);
run_program(Array.from(input));

// Part Two
const results = new Map<{ a: number, b: number }, number>();
function run_programs(program: number[]) {
	for (let i = 0; i < 100; i++)
	{
		for (let j = 0; j < 100; j++)
		{
			const currentProgram = Array.from(program);
			currentProgram[1] = i;
			currentProgram[2] = j;
			run_program(currentProgram);
			results.set({ a: i, b: j }, currentProgram[0]);
		}
	}
}

run_programs(Array.from(input));
const target = 19690720;

results.forEach((value, key) => {
	if (value === target)
	{
		console.log(100 * key.a + key.b);
	}
})