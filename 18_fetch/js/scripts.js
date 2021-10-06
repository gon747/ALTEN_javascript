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


function creaListaUtenti(jj){
    let tabella = `<table class='table'>`;
    jj.forEach(el => {
        tabella += `
            <tr onclick="caricaUtente(${el.id})">
            <td>${el.id}</td>
            <td>${el.name}</td>
            <td>${el.email}</td>
            </tr>        
        `
    });
    tabella += `</table>`;
    app.innerHTML = tabella;
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
    app.innerHTML = scheda;
}

