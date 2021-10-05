/* 
Tema:

*/

let app = document.getElementById('app');
//console.log(app);

let btn_carica = document.getElementById('btn_carica');
btn_carica.addEventListener('click', ()=>{

fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    return res.json();
})
.then((el)=>{
    //console.log(el);
    creaTabella(el);
})
.catch((err)=>{
    console.log(err.message)
});



});


function creaTabella(listaUtenti){

    let tabella = `<table class="table">`;
    listaUtenti.forEach((el) => {
        tabella += `
        <tr>
        <td>${el.id}</td>
        <td>${el.name}</td>
        <td>${el.email}</td>
         </tr>
        `;
        
        
    });
    tabella += `</table>`;
    app.innerHTML = tabella;

}