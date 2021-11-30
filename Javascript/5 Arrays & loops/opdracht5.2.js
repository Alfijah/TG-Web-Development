// //A
const dutchSports = ['Voetbal', 'Hockey', 'Schaatsen'];
let sport;
for(sport = 0; sport<dutchSports.length; sport++) {
    console.log(dutchSports[sport]);
}


// //B
for(sport in dutchSports) {
    console.log(sport);
}

for(sport of dutchSports) {
    console.log(sport);
}


// //C
const getallen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let getal;
for(getal = 0; getal<getallen.length; getal++) {
    if(getallen[getal]%2 === 0 ) {
        console.log(getallen[getal]);
    }
} 


//D
const getallenGroep1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const getallenGroep2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const getallenGroep3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

//Deze loop is outcommented om het resultaat van de volgende loop te zien.
// for (let count= 0; count<3; count++) {
//     for(let getal1=0; getal1<getallenGroep1.length; getal1++) {
//         console.log(getallenGroep1[getal1]);
//     }
    
// }


//E
for (let count= 0; count<3; count++) {
    for(let getal1=0; getal1<getallenGroep1.length; getal1++) {
        console.log(getallenGroep1[getal1]);
        for(let getal2=0; getal2<getallenGroep2.length; getal2++) {
            console.log(getallenGroep2[getal2]);
        }
        for(let getal3=0; getal3<getallenGroep3.length; getal3++) {
            console.log(getallenGroep3[getal3]);
        }
    }
    
}


//F
let cijfer;
let fibReeks = [];

fibReeks[0] = 0;
fibReeks[1] = 1;

for (cijfer = 2; cijfer <= 50; cijfer++) {
    fibReeks[cijfer] = fibReeks[cijfer -2] + fibReeks[cijfer - 1];
    console.log(fibReeks[cijfer]);
}


//G
let randomGetallen =  [2,7,5,10,4,9,3,1,8,6];

function bubbleSort(randomGetallen) {
    for(let num = 0; num < randomGetallen.length; num++) {
        if (randomGetallen[num] > randomGetallen[num + 1]) {
            let x = randomGetallen[num];
            let y = randomGetallen[num + 1];
            randomGetallen[num] = y;
            randomGetallen[num + 1] = x;
        }
    }
    return randomGetallen;
}

document.getElementById('display2').innerText = 'Resultaat: ' + bubbleSort(randomGetallen);