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
ballSports.sort();


//F
console.log(ballSports);
document.getElementById('display5').innerText = 'Nieuwe array ballSports: ' + ballSports;


//G
function sportMeasure(ballSports) {
    let eachLength;
    for(let sport=0; sport<ballSports.length; sport++) {
        let eachSport = ballSports[sport];
        eachLength = eachSport.length;
        console.log(eachLength);
        
    } return eachLength;
}

let sportsLength = [];
sportsLength = sportMeasure(ballSports);
console.log(sportsLength);

// for(let sport=0; sport<ballSports.length; sport++) {
//     let eachSport = ballSports[sport];
//     let eachLength = eachSport.length;
//     console.log(eachLength);
// }   return eachLength;