/* 
Tema:

*/

let app = document.getElementById('app');


let data = new Date();

let giorno = data.getDate();

let gset = data.getDay();

let mese = data.getMonth();

let giorni = ["Domenica", "Lunedì" , "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
let mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"];

app.innerHTML = `

<h1>${giorni[gset]} ${giorno} ${mesi[mese]} ${data.getFullYear()} -- ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}</h1>

`;