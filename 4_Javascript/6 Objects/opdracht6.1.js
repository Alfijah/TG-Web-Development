//A
//Object constructor
const Pet1 = new Object();
Pet1.naam = 'Pookie';
Pet1.soort = 'kat';

console.log(Pet1);
// document.getElementById('display1').innerText = Pet1.naam, Pet1.soort;

//Literal constructor
const Pet2 = {
    naam2 : 'Bruno',
    soort2 : 'hond'
};

console.log(Pet2);

//Function constructor
function Pet3() {
    this.naam3 = 'Astrid',
    this.soort3 = 'koe';
}

const functionPet3 = new Pet3();
console.log(functionPet3);

//Singleton constructor
const Pet4 = new function() {
    this.naam4 = 'Merry',
    this.soort4 = 'Paard'
};

console.log(Pet4);

//Class-based constructor
class Pet5 {
    constructor(naam5, soort5) {
        this.naam5 = 'Lotte'
        this.soort5 = 'vogel'
    }
}

const classConstructed = new Pet5('Lotte', 'vogel');
console.log(classConstructed);


//B
const nieuwPet = Object.create(Pet1);
nieuwPet.soort = 'viervoeter';
console.log(nieuwPet);

const nieuwPet2 = Object.create(Pet2);
nieuwPet2.soort = 'viervoeter';
console.log(nieuwPet2);

const nieuwPet3 = Object.create(Pet3);
nieuwPet3.soort = 'viervoeter';
console.log(nieuwPet3);

const nieuwPet4 = Object.create(Pet4);
nieuwPet4.soort = 'viervoeter';
console.log(nieuwPet4);

const nieuwPet5 = Object.create(Pet5);
nieuwPet5.soort = 'viervoeter';
console.log(nieuwPet5);


//C
const person = [{
    naam: 'Jan',
    leeftijd: 23
},
{
    naam: 'Janneke',
    leeftijd: 21
},
{
    naam: 'Peter',
    leeftijd: 30
},
{
    naam: 'Petra',
    leeftijd: 29
},
{
    naam: 'Jos',
    leeftijd: 18
},
{
    naam: 'Joosje',
    leeftijd: 19
},
{
    naam: 'Bert',
    leeftijd: 55
},
{
    naam: 'Berta',
    leeftijd: 53
},
{
    naam: 'John',
    leeftijd: 44
},
{
    naam: 'Joanna',
    leeftijd: 41
}];

// let leeftijdVolgorde = person.leeftijd;
person.sort((a, b) => {
    return a.leeftijd - b.leeftijd;
});

person.forEach((p) => {
    console.log(p.leeftijd);
})


