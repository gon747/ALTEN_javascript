/*
Tema: 
*/


let a = "Ciao sono: ";

let nome = "Maria";
let cognome = "Rossi";

//let saluto = a + nome + " " + cognome;

let saluto = `
<h1>Buon giorno</h1>
<h1>Ciao sono: ${nome} ${cognome}</h1>
<h2>Ciao ${nome}</h2>


`

document.getElementById('saluto').innerHTML = saluto;
