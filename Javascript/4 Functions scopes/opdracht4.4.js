//A

const namen = ['Alfijah', 'Fatos', 'Michael', 'Zico'];

// function groepsLeden() {
//     const elkLid = document.getElementById('naam').value;
//     if(elkLid === namen[]) {
//         console.log(elkLid + " is je groepslid!");
//     } else {
//         console.log("Intruder alert!");
//     }
// }

// This code is old code that has been refactored as seen above!
   function groepsLeden() {
   let elkLid = document.getElementById('naam').value;
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

function groepsLeden2() {
    let elkLid = document.getElementById('naam').value.toString();

    let isIncluded = namen.includes(elkLid);
    if(isIncluded){
        return elkLid + " is je groepslid.";
    }
    else{
        return 'Intruder alert!';
    }
 }
 


//B
function printResultaat() {
    let test4 = groepsLeden2();
    // let test = document.getElementById('print').value = groepsLeden();
    document.getElementById('print').innerText = test4;
    // console.log(test4);
}