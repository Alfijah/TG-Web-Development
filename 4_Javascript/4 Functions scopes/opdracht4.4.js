//A

const namen = ['Alfijah', 'Fatos', 'Michael', 'Zico'];
let elkLid;

   function groepsLeden() {
     elkLid = document.getElementById('naam').value;  
    if(elkLid.toLowerCase() === namen[0].toLowerCase()) {
        console.log(elkLid + " is je groepslid.");
    } else if(elkLid.toLowerCase() === namen[1].toLowerCase()) {
        console.log(elkLid + " is je groepslid.");
    } else if(elkLid.toLowerCase() === namen[2].toLowerCase()) {
        console.log(elkLid + " is je groepslid.");
    } else if(elkLid.toLowerCase() === namen[3].toLowerCase()) {
        console.log(elkLid + " is je groepslid.");
    } else {
        console.log("Intruder alert!");
    }
 
}

//B
function groepsLeden2() {
    elkLid = document.getElementById('naam').value;
    let isIncluded = namen.includes(elkLid);
    if(isIncluded){
        return elkLid + ' is je groepslid.';
    
    } else{
        return 'Intruder alert!'
    }
 }

 function printResultaat() {
     document.getElementById('print').innerText = groepsLeden2();
 }