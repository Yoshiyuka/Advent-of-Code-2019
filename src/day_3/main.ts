import * as fs from 'fs'

const inputFile = fs.readFileSync("./data/input", "utf8");
const input = inputFile.split("\n");

interface Op {
	direction: "U" | "D" | "L" | "R",
	distance: number
}
type Chord = Op[];

const chords = [] as Chord[];

function parseOp(input: string) {
	const op = input[0];
	const dist = +Array.from(input).splice(1).join('');
	return { direction: op, distance: dist } as Op;
}
input.forEach((instruction, index) => {
	const program = instruction.split(",");
	const chord = [] as Chord;

	//const input = [] as Op[];
	program.forEach(move => {
		chord.push(parseOp(move));
	})
	chords.push(chord);
})

console.log(chords[0]);

interface Point { x: number, y: number };
interface Line { a: Point, b: Point };
const lines = [] as Line[];

const opmap = new Map<string, Function>();
opmap.set("U", (pos: Point, dist: number) => {
	const newPos = { x: pos.x, y: pos.y + dist } as Point;
	lines.push({ a: pos, b: newPos });
});
opmap.set("D", (pos: Point, dist: number) => {
	const newPos = { x: pos.x, y: pos.y - dist } as Point;
	lines.push({ a: pos, b: newPos });
});
opmap.set("L", (pos: Point, dist: number) => {
	const newPos = { x: pos.x - dist, y: pos.y } as Point;
	lines.push({ a: pos, b: newPos });
});
opmap.set("R", (pos: Point, dist: number) => {
	const newPos = { x: pos.x + dist, y: pos.y } as Point;
	lines.push({ a: pos, b: newPos });
});


opmap.get("U")({ x: 0, y: 0 } as Point, 30);
console.log(lines);


