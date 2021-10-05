/* 
Tema:

*/

let txt_nome = document.getElementById('txt_nome');
let txt_cognome = document.getElementById('txt_cognome');
let txt_cf = document.getElementById('txt_cf');

let tbody = document.querySelector('#tbl_1>tbody');

let btn_add = document.getElementById('btn_add');
let frm_dati = document.getElementById('frm_dati');

btn_add.addEventListener('click', (e)=>{
    e.preventDefault();
    let nome = txt_nome.value.trim();
    let cognome = txt_cognome.value.trim();
    let cf = txt_cf.value.trim();
    let ccf = controlaCF(cf);
    if(nome && cognome && cf && ccf){
        let tr = document.createElement('tr');
        let n_utente = `
            <td>${nome}</td>
            <td>${cognome}</td>
            <td>${cf}</td>
            <td><i class="fas fa-trash-alt btn_elim" onclick="this.parentNode.parentNode.remove()"></i></td>
            <td><i class="fas fa-pencil-alt btn_elim" onclick="modifica(this)"></i></td>
        `;
        tr.innerHTML = n_utente;
        tbody.appendChild(tr);
        frm_dati.reset();
        txt_cf.style.background = "#fff";
    }else{
        if(!ccf){
            alert('CF Ripetuto');
            txt_cf.focus();
            txt_cf.select();
        }else{
            alert('Tutti i dati sono obbligatori');
        }
    }
});


function controlaCF(cf){
let licf = document.querySelectorAll('#tbl_1>tbody>tr>td:nth-child(3)');
let arr = Array.from(licf);

// let arr2= [];
// arr.forEach(el => {
//     arr2.push(el.innerHTML);
// });

// let arr2 = arr.map((el)=>{
//     return el.innerHTML;
// })

let arr2 = arr.map(el => el.innerHTML );

if(arr2.includes(cf)){
    return false;
}else{
    return true;
}

}
let nn;
let modal = new bootstrap.Modal(document.getElementById('mod_cambio'));
function modifica(el){
    nn = el.parentNode.parentNode;
    document.getElementById('c_nome'). value = nn.children[0].innerHTML;
    document.getElementById('c_cognome'). value = nn.children[1].innerHTML;
    document.getElementById('c_cf'). value = nn.children[2].innerHTML;
    modal.show();    
}

let btn_cambia = document.getElementById('btn_cambia');

btn_cambia.addEventListener('click', ()=>{
    let nome = document.getElementById('c_nome').value;
    let cognome = document.getElementById('c_cognome').value;
    let cf = document.getElementById('c_cf').value;

    let ccf = controlaCF(cf);
    if(nome && cognome && cf && ccf){
    let n_utente = `
            <td>${nome}</td>
            <td>${cognome}</td>
            <td>${cf}</td>
            <td><i class="fas fa-trash-alt btn_elim" onclick="this.parentNode.parentNode.remove()"></i></td>
            <td><i class="fas fa-pencil-alt btn_elim" onclick="modifica(this)"></i></td>
        `;
        let tr = document.createElement('tr');
        tr.innerHTML = n_utente;
        nn.parentNode.replaceChild(tr,nn);
    modal.hide();
}else{
    if(!ccf){
        alert('CF Ripetuto');
        txt_cf.focus();
        txt_cf.select();
    }else{
        alert('Tutti i dati sono obbligatori');
    }
}

})


