let valCaselle = [0,0,0,0,0,0,0,0,0,];
let inGioco = false;
let numGiocata = 0;
let turnoGiocatore = 1;
let vincitore = 0;

let ficheO = `
<div class="ficheO" data-ocupata="1"></div>
`;
let ficheX = `
<div class="ficheX" data-ocupata="1"><div></div></div>
`;

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
        e.target.dataset.casella = 1;
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
        turno.innerHTML = turnoGiocatore;
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
function nuovaPartita(){
    chiudiPartita();
    turnoGiocatore = 1;
    turno.innerHTML = turnoGiocatore;
    let cc = document.querySelectorAll('#tavolo>div');
    cc.forEach((e)=>{
        e.innerHTML = "";
    });
    inGioco = true;
}
