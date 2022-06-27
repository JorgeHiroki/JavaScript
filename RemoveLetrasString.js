var str = 'Tiraremos zero';

str = str.slice(0,-4) + 'total';//tirar as ultimas 4 letras e adicionar "total"
console.log(str);

str = 'Ama' + str.slice(6); //adiciona "ama" e tirar as seis primeiras letras 
console.log(str);

str = "queria uma mo"+str.slice(7,-3); //Adicionar "queria uma mo" tirar as 7 primeiras letras e as 3 ultimas
console.log(str);