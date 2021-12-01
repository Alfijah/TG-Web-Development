//A
const eenVoorbeeld = ['een', 'twee', 'drie'];

console.log(Array.from(eenVoorbeeld));
document.getElementById('display1').innerText = eenVoorbeeld;


//B
const spelSoorten = ['Sudoku', 'Logikwis', 'Kruiswoordpuzzel', 'Rubiks cube'];
const spelResultaat = spelSoorten.filter(woord => woord.length > 7);

console.log(spelResultaat);
document.getElementById('display2').innerText = spelResultaat;


//C
const spelResultaat2 = spelSoorten.find(woord => woord.length > 6);

console.log(spelResultaat2);
document.getElementById('display3').innerText = spelResultaat2;


//D
const spelResultaat3 = spelSoorten.some(woord =>woord.length > 7);

console.log(spelResultaat3);
document.getElementById('display4').innerText = spelResultaat3;


//E
const woordLengte = (lengte) => lengte.length > 5;
let woordLengteVergelijking = spelSoorten.every(woordLengte);

console.log(woordLengteVergelijking);
document.getElementById('display5').innerText = woordLengteVergelijking;