/*
Tema: Oggetti
*/

let studente = {
    nome: "Ana",
    eta: 25,
    saluta: function(){
        //console.log('Ciao sono Maria')
        alert('Ciao sono' + " " + this.nome)
    }
};




let ind = "eta";

console.log(studente.eta);

studente.eta = 40;

console.log(studente.eta);


studente.saluta();


