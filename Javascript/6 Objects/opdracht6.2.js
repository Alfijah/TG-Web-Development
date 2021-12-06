const Club = function(naam, type, aantal) {
    this.naam = naam,
    this.type = type,
    this.aantal = aantal
}

const Contactinformatie = function(adres, telefoonnummer, contactpersoon) {
    this.adres = adres,
    this.telefoonnummer = telefoonnummer,
    this.contactpersoon = contactpersoon
}

let clubObject = new Club();
let informatieObject = new Contactinformatie();
clubObject.adres = informatieObject.adres;
clubObject.telefoonnummer = informatieObject.telefoonnummer;
clubObject.contactpersoon = informatieObject.contactpersoon;

let mergeClubData = {
    ...clubObject,
    ...informatieObject
};

mergeClubData = [
    {
        naam: 'Dunk',
        type: 'Baksetbal',
        aantal: 9,
        adres: 'Dunkkade',
        telefoonnummer: 012345,
        contactpersoon: 'Dunker'
    },
    {
        naam: 'Vlinderslag',
        type: 'Zwemmen',
        aantal: 8,
        adres: 'Vlinderkade',
        telefoonnummer: 23456,
        contactpersoon: 'Vlinder'
    },
    {
        naam: 'Zwaai',
        type: 'Golf',
        aantal: 5,
        adres: 'Zwaaikade',
        telefoonnummer: 34567,
        contactpersoon: 'Zwaaier'
    },
    {
        naam: 'Race',
        type: 'Mountainbike',
        aantal: 12,
        adres: 'Racekade',
        telefoonnummer: 45678,
        contactpersoon: 'Racer'
    },
    {   
        naam: 'Flash',
        type: 'Hardlopen',
        aantal: 15,
        adres: 'Loopkade',
        telefoonnummer: 56789,
        contactpersoon: 'Flasher'
    }
]

console.log(mergeClubData);

for(let c in mergeClubData) {
    console.log(`
    naam: ${mergeClubData[c].naam},
    telefoonnummer: ${mergeClubData[c].telefoonnummer},
    contactpersoon: ${mergeClubData[c].contactpersoon}`);
}