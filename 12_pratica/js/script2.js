
let btn_1 = document.getElementById('btn_1');
let lista_numeri = document.querySelectorAll('#lista_numeri>li');

btn_1.addEventListener('click', ()=>{
    for(let i = 0; i < lista_numeri.length; i++){
        //let val = parseInt(lista_numeri[i].innerHTML); 
        let val = +lista_numeri[i].innerHTML;         
        if(val%2 == 0){
            lista_numeri[i].style.display = "none";
        }
    }
})


let btn_2 = document.getElementById('btn_2');
let lista_colori = document.querySelectorAll('#lista_colori>li');

btn_2.addEventListener('click', ()=>{
    // lista_colori.sort(); no si puo
    // lista_colori.toArray(); no si puo
    let elm = [];
    for(let i = 0; i < lista_colori.length; i++){
        elm.push(lista_colori[i].innerHTML);        
    }
    elm.sort();
    let txt = "";
    elm.forEach(el => {
        txt += `
            <li>${el}</li>       
        `
    });
    document.getElementById('lista_colori').innerHTML = txt;
})