/*
Tema: 
*/

// setTimeout(() => {
//     alert('ciao');
// }, 4000);


// setInterval(() => {
    
// }, interval);


let nint = 0;
let inter = setInterval(function(){    
    console.log(nint);
    nint++;
    if(nint==10){
        clearInterval(inter);
        nint = 0;
    }
}, 1000);