// function isODD(a){
//     if(a%2!=0){
//         return false;
//     }else{
//         return true;
//     }
// }

// function isODDusingternary(a){
//     return a%2!==0?"value is odd":"value is even";
// }

// console.log(isODDusingternary(5));
// console.log(isODD(3));

// let funAsExpression=function isODD(a){
//      return a%2!==0?"value is odd":"value is even";
// }

const arrowfun=(a)=>a%2!==-0?"value is odd":"value is even";

console.log("op from arrow func(7):",arrowfun(7));

(function iifeFun(){
    console.log("inside iife function");
})();