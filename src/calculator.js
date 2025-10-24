function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }
function div(a, b) {
if (b === 0) throw new Error('DivideByZeroException');
return a / b;
}
if(a == b){
    a = 666;
}
module.exports = { add, sub, mul, div};