function func(){
var a=20;
let b=30;
const pi=3.14;
console.log("Gllobal Scope:");
console.log("value of a in fucntion scope:",a)
console.log("value of b in function scope:",b)
console.log("value of pie in function scope:",pi)
}
func();

console.log("outside function:");
console.log("value of a out fucntion scope:",a)
console.log("value of b out function scope:",b)
console.log("value of pie out function scope:",pi)
