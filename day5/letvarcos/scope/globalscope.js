let a=20;
var b=30;
const pi=3.14;
console.log("Gllobal Scope:");
console.log("value of a in global scope:",a)
console.log("value of b in global scope:",b)
console.log("value of pie in global scope:",pi)
function callValues(a,b,c){
   console.log(" inside function:");
console.log("value of a inside function:",a)
console.log("value of b inside function:",b)
console.log("value of pie inside function:",pi) 
}
callValues(a,b,pi);