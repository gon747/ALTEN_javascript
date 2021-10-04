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
            <td><i class="fas fa-pencil-alt btn_elim"></i></td>
        `;
        tr.innerHTML = n_utente;
        tbody.appendChild(tr);
        frm_dati.reset();
        txt_cf.style.background = "#fff";
    }else{
        // if(cf){
        //     if(!ccf){
        //         alert('CF ripetuto');
        //     }else{
        //         alert('Mancano dati');
        //     }
        // }else{                       
        //     alert('CF Obigatori');
        //     txt_cf.focus();
        //     txt_cf.style.background = "#f00";
        // }
        switch (false) {
            case value:
                
                break;
        
            default:
                break;
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