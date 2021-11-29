//A
const dutchSports = ['Voetbal', 'Hockey', 'Schaatsen'];
let sport;
for(sport = 0; sport<dutchSports.length; sport++) {
    console.log(dutchSports[sport]);
}


//B
for(sport in dutchSports) {
    console.log(sport);
}

for(sport of dutchSports) {
    console.log(sport);
}


//C
const getallen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let getal;
for(getal = 0; getal<getallen.length; getal++) {
    if(getallen[getal]%2 === 0 ) {
        console.log(getallen[getal]);
    }
} 


//D