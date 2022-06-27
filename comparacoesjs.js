// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Equality_comparisons_and_sameness
var num = 0;
var obj = new String("0");
var str = "0";
var flt = 0.0; 

//igualdade estrita usando === (tipo e valor)
console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true
console.log(num === flt); //true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

//Igualdade ampla usando == (valor)
console.log(null == undefined); // true
console.log(num == str); // true
console.log(num == obj); //true
console.log(num === flt); //true