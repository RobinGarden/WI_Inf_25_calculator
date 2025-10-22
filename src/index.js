const calc = require('/calculator');
const args = process.argv.slice(2);
if (args.length === 0) {
console.log('Usage: node index.js <operation> <a> <b?>');
console.log('Operations: add, sub, mul, div, pow, sqrt, mod');
process.exit(0);
}
const op = args[0];
const a = Number(args[1]);
const b = Number(args[2]);
try {
let res;
switch (op) {
case 'add': res = calc.add(a, b); break;
case 'sub': res = calc.sub(a, b); break;
case 'mul': res = calc.mul(a, b); break;
case 'div': res = calc.div(a, b); break;
case 'pow': res = calc.pow(a, b); break;
case 'sqrt': res = calc.sqrt(a); break;
case 'mod': res = calc.mod(a, b); break;
default: throw new Error('Unknown operation: ' + op);
}
console.log('Result:', res);
} catch (e) {
console.error('Error:', e.message);
process.exit(1);
}