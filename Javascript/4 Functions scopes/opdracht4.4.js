//A

const namen = ['Alfijah', 'Fatos', 'Michael', 'Zico'];

// function groepsLeden() {
//     const elkLid = document.getElementById('naam').value;
//     if(elkLid === namen.includes()) {
//         console.log(elkLid + " is je groe222222pslid!");
//     } else {
//         console.log("Intruder alert!");
//     }
// }

// This code is old code that has been refactored as seen above!
// let printNaam2 = function groepsLeden() {
//    const elkLid = document.getElementById('naam').value;
//     if(elkLid.toLowerCase() === namen[0].toLowerCase()) {
//         console.log(elkLid + " is je groepslid!");
//     } else if(elkLid.toLowerCase() === namen[1].toLowerCase()) {
//         console.log(elkLid + " is je groepslid!");
//     } else if(elkLid.toLowerCase() === namen[2].toLowerCase()) {
//         console.log(elkLid + " is je groepslid!");
//     } else if(elkLid.toLowerCase() === namen[3].toLowerCase()) {
//         console.log(elkLid + " is je groepslid!");
//     } else {
//         console.log("Intruder alert!");
//     }
// }

function groepsLeden() {
    let elkLid = document.getElementById('naam').value.toString();

    let isIncluded = namen.includes(elkLid.toLowerCase());
    console.log(isIncluded);
    if(isIncluded){
        return elkLid + " is je groepslid.";
    }
    else{
        return 'Intruder alert!';
    }

//     (e
//     return elkLid + " is je groepslid!";
//  } else {
//      return 'Intruder alert!';
 }
 


//B

function printResultaat() {
    let test4 = groepsLeden();
    // let test = document.getElementById('print').value = groepsLeden();
    document.getElementById('print').innerHTML = test4;
    console.log(test4);
}