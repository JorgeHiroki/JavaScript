//não realiza a troca
var str = 'Iremos tirar total';
var str = str.replace("Total", "zero");
console.log(str);

//realiza a troca
var str = 'Tiramos zero';
var str = str.replace("zero", "total");
console.log(str);

//Realiza a troca de todas as strings iguais no texto
var str = 'Gabriela: zero , Jorge: zero';
var str = str.replaceAll("zero", "total");
console.log(str);