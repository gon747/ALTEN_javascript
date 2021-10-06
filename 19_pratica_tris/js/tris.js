let valCaselle = [0,0,0,0,0,0,0,0,0];

let inGioco = false;
let numGiocata = 0;
let turnoGiocatore = 1;
let vincitore = 0;

let giocatore_1;
let giocatore_2;

let ficheO = `
<div class="ficheO" data-ocupata="1"></div>
`;
let ficheX = `
<div class="ficheX" data-ocupata="1"><div data-ocupata="1"></div></div>
`;
document.querySelector('#btn_gioca_ancora').addEventListener('click', nuovaPartita);
document.querySelector('#btn_nuova').addEventListener('click', nuovaPartita);
let tavolo = document.querySelector('#tavolo');
let turno = document.querySelector('#turno');

tavolo.addEventListener('click', (e)=>{
    let ocupata = parseInt(e.target.dataset.ocupata);
    let fiche;
    let valCasella;
    if(ocupata == 0 && inGioco ){        
        if(turnoGiocatore == 1){
            fiche = ficheX;
            turnoGiocatore = 2;
            valCasella = 1;
        }else{
            fiche = ficheO;
            turnoGiocatore = 1;
            valCasella = 4;
        }  
        numGiocata++;
        let casella = parseInt(e.target.dataset.casella);

        valCaselle[casella] = valCasella;


        e.target.innerHTML = fiche;
        e.target.dataset.ocupata = 1;
        controllaVincitore();
       
    }   
    
});



function controllaVincitore(){
    let tris = [
        valCaselle[0] + valCaselle[1] + valCaselle[2],
        valCaselle[3] + valCaselle[4] + valCaselle[5],
        valCaselle[6] + valCaselle[7] + valCaselle[8],
        valCaselle[0] + valCaselle[3] + valCaselle[6],
        valCaselle[1] + valCaselle[4] + valCaselle[7],
        valCaselle[2] + valCaselle[5] + valCaselle[8],
        valCaselle[0] + valCaselle[4] + valCaselle[8],
        valCaselle[2] + valCaselle[4] + valCaselle[6]
    ];
    tris.forEach(function(c, i){
        if(c==3){
            alert('Vince Giocatore 1');
            vincitore = 1;
            chiudiPartita();
        }
        if(c==12){
            alert('Vince Giocatore 2');
            vincitore = 2;
            chiudiPartita();
        }
        if(numGiocata == 9 && vincitore == 0){
            alert('Pari');
            chiudiPartita();
        }
    });
    if(inGioco){
        let gx = turnoGiocatore == 1 ? giocatore_1 : giocatore_2;
        turno.innerHTML = gx;
    }

}

function chiudiPartita(){
    numGiocata = 0;
    vincitore = 0;
    inGioco = false;
    valCaselle.forEach((e,i) => {
        valCaselle[i] = 0;
    });

}


function nuovaPartita(e){
    let x = e.target.id;
    if(x == "btn_nuova"){
        giocatore_1 = prompt("Nome giocatore 1");
        giocatore_1 = giocatore_1 == "" ? prompt("Nome giocatore 1") : "";
        giocatore_2 = prompt("Nome giocatore 2");
        giocatore_2 = giocatore_2 == "" ? prompt("Nome giocatore 2") : "";
        document.querySelector('#btn_gioca_ancora').style.display = "inline-block";
    }

    

    chiudiPartita();
    turnoGiocatore = giocatore_1;
    turno.innerHTML = turnoGiocatore;
    let cc = document.querySelectorAll('#tavolo>div');
    cc.forEach((e)=>{
        e.innerHTML = "";
        e.dataset.ocupata = 0;
    });
    inGioco = true;
    
}

