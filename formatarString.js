const format = (str, ...vals) => vals.reduce((s, v, i) => s.replace(new RegExp('\\{' + i + '\\}', 'g'), v), str);

const template = 'We are {0} and {1}, and we are dreaming with {2}';

console.log(format(template, 'Jorge','Gabriela', 'total'));
// We are Jorge and Gabriela, and we are dreaming with total

console.log(format(template, 'Jorge', 'Gabriela', 'a motocycle'));
// We are Jorge and Gabriela, and we are dreaming with a motocycle