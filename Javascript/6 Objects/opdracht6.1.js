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
