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
function Pet3(naam3, soort3) {
    return
    this.naam3 = naam3;
    this.soort3 = soort3;
}

const functionPet3 = new Pet3('Astrid', 'koe');
console.log(Pet3('Astrid', 'koe'));