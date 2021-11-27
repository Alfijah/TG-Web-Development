//A

const namen = ['Alfijah', 'Fatos', 'Michael', 'Zico'];

// function groepsLeden() {
//     const elkLid = document.getElementById('naam').value;
//     if(elkLid === namen.includes()) {
//         console.log(elkLid + " is je groepslid!");
//     } else {
//         console.log("Intruder alert!");
//     }
// }

// This code is old code that has been refactored as seen above!
function groepsLeden() {
    const elkLid = document.getElementById('naam').value;
    if(elkLid.toLowerCase() === namen[0].toLowerCase()) {
        console.log(elkLid + " is je groepslid!");
    } else if(elkLid.toLowerCase() === namen[1].toLowerCase()) {
        console.log(elkLid + " is je groepslid!");
    } else if(elkLid.toLowerCase() === namen[2].toLowerCase()) {
        console.log(elkLid + " is je groepslid!");
    } else if(elkLid.toLowerCase() === namen[3].toLowerCase()) {
        console.log(elkLid + " is je groepslid!");
    } else {
        console.log("Intruder alert!");
    }
}


//B
function printResultaat() {
    const printNaam = groepsLeden();
    document.getElementById('print').innerHTML = printNaam;
}