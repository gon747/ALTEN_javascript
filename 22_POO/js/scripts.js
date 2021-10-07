/* 
Tema:

*/

// let persona1 = {
//     nome: "Anna",
//     eta: 25
// }

// let persona2 = {
//     nome: "Piero",
//     eta: 25
// }


class UI{
    ficheX(){
        return `<div>Fiche</>`;
    }
}

class Persona{
    #varpriv;
    constructor(nome,eta){
        this.nome = nome;
        this.eta = eta
        this.#varpriv = "Ciao";
    }
    saluta(){
        alert(`Ciao sono ${this.nome}`);
    }
    parla(){
        alert(`Bla bla bla`);
    }
    get getVarpriv(){
        return this.#varpriv;
    }
    set setVarpriv(a){
        this.#varpriv = a;
    }
}

class Profesori extends Persona{
    constructor(nome, eta, materie){
        super(nome,eta);
        this.materie = materie;
    }
    saluta(){
        alert(`Ciao sono il prof ${this.nome}`);
    }
}


let profesore1 = new Profesori('Anna Maria', 25, ['Italiano', 'Storia']);
let persona2 = new Persona('Piero', 25);

console.log(persona2.materie);
console.log(persona2.nome);
// persona2.saluta();
// profesore1.saluta();
persona2.setVarpriv = "Ciao Ragazzi";
let ui = new UI();

let fX = ui.ficheX();

alert(persona2.getVarpriv);