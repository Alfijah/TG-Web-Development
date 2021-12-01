//A
const getallen = [9, 10, 5, 6, 3, 4, 7, 1, 2, 8];
console.log(getallen);


//B
const fruitSoorten = ['Appel', 'Aardbei', 'Banaan', 'Bosbessen', 'Druiven'];
console.log(fruitSoorten);


//C
console.log(fruitSoorten.slice(0, 2));


//D
//Het getallen array heeft 10 elementen. Dit geeft dus 'undefined' als resultaat.
let randomGetal1 = Math.floor(Math.random() * getallen.length);

//Omdat het fruitSoorten array uit 5 elementen bestaat heb ik hier gewerkt met het getal 5.
let randomGetal2 = Math.floor(Math.random() * 5);
console.log(fruitSoorten[randomGetal2]);


//E
console.log(fruitSoorten.length);



//F
let randomGetal1 = Math.floor(Math.random() * 10);
const lengteFruit = fruitSoorten.length;
let randomFruit = randomGetal1 % lengteFruit;
console.log(fruitSoorten[randomFruit]);
document.getElementById('display6').innerText = 'Resultaat: ' + fruitSoorten[randomFruit];


//G
fruitSoorten.splice(0, 1, 'Peer');
console.log(fruitSoorten);
document.getElementById('display7').innerText = 'Resultaat: ' + fruitSoorten;


//H
// console.log(move(fruitSoorten, 0, 1));
fruitSoorten.shift();
console.log(fruitSoorten.splice(1, 0, 'Peer' ));
document.getElementById('display8').innerText = 'Resultaat: ' + fruitSoorten;

