function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) {
if (b === 0) throw new Error('DivideByZeroException');
return a / b;
}
function mod(a, b) {
if (b === 0) throw new Error('DivideByZeroException');
return a % b;
}
function addThenMulThenDivBy3(a,b) {
    return ((a+b)*(a+b))/3
}
module.exports = { add, sub, mul, div, mod, addThenMulThenDivBy3 };