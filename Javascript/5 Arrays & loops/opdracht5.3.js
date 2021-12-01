//A
let dutchSports = ['Voetbal', 'Hockey', 'Schaatsen'];
dutchSports.push('Zeilen', 'Zwemmen');

console.log(dutchSports);
document.getElementById('display1').innerText = 'Nieuwe array dutchSports: ' + dutchSports;


//B
dutchSports.unshift('Volleybal');

console.log(dutchSports);
document.getElementById('display2').innerText = 'Nieuwe array dutchSports: ' + dutchSports;


//C
const ballSports = dutchSports;

console.log(ballSports);
document.getElementById('display3').innerText = 'Nieuwe array ballSports: ' + ballSports;


//D
dutchSports = [];

console.log(dutchSports);
document.getElementById('display4').innerText = 'Nieuwe array dutchSports: ' + dutchSports;


//E
let sportSort = ballSports.sort();
document.getElementById('display5').innerText = 'Gesorteerde ballSports array: ' + sportSort;


//F
console.log(ballSports);
document.getElementById('display6').innerText = 'Nieuwe array ballSports: ' + ballSports;


//G
let sportsLength = ballSports.map(eachSportLength => eachSportLength.length);
console.log(sportsLength);
document.getElementById('display7').innerText = 'Lengte van elke sport: ' + sportsLength;