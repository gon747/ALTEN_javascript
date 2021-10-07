/* 
Tema:

*/

let app = document.getElementById('app');


document.getElementById('btn_carica').addEventListener('click', ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
        return res.json();
    })
    .then((el)=>{
        creaListaUtenti(el);
        
    })
    .catch((err)=>{
        console.log(err.message)
    });
});

let tbl1 = document.getElementById('tbl1');
function creaListaUtenti(jj){
    let tabella = "";
    jj.forEach(el => {
        tabella += `
            <tr onclick="caricaUtente(${el.id})">
            <td>${el.id}</td>
            <td>${el.name}</td>
            <td>${el.email}</td>
            </tr>        
        `
    });
    app.innerHTML = "";
    tbl1.innerHTML = tabella;
}

function caricaUtente(id){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>{
        return res.json();
    })
    .then((el)=>{
        creaSchedaUtente(el);
        
    })
    .catch((err)=>{
        console.log(err.message)
    });
}

function creaSchedaUtente(ut){
    let scheda = `
    <h2>Nome: ${ut.name}</h2>
    <p><b>Email:</b> ${ut.email}</p>
    <p><b>Username:</b> ${ut.username}</p>
    <p><b>Cita: </b> ${ut.address.city}</p>
    <p><b>Latitudine: </b> ${ut.address.geo.lat}</p>
    <p><b>Ditta: </b> ${ut.company.name}</p>

    
    
    `
    tbl1.innerHTML = "";
    app.innerHTML = scheda;
}



$(document).ready(function() {
   
$(document).ready(function () {
    $("#txt_cerca").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#tbl1 tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});





});