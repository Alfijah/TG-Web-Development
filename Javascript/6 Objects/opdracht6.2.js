function Club(naam, type, aantal) {
    this.naam = naam
    this.type = type
    this.aantal = aantal
    function Contactinformatie(adres, telefoonnummer, contactpersoon) {
        this.adres = adres
        this.telefoonnummer = telefoonnummer
        this.contactpersoon = contactpersoon
    }
}

let soortenClubs = [('Swing', 'Golf', 8), ('Dunk', 'Basketball', 9)]

let club1 = soortenClubs.find(naam => naam === 'Swing');
console.log(club1);



// for (let club in soortenClubs) {
//     console.log(soortenClubs[club]);
// }




// console.log(clubInformatie.Club);

// for(let club in clubInformatie) {
//     console.log(`${clubInformatie[0][0]}`);
// }
