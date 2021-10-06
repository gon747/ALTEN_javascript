/* 
Tema:

*/

let app = document.getElementById('app');
// console.log(app);


// let pr = prompt("Scrivi qualcosa");

// app.innerHTML = pr;


let cf = confirm('Vai in ferie');

if(cf){
    app.innerHTML = "Si vai";
}else{
    app.innerHTML = "Non ci vai";
}