// ### esercizio 1

let btn_1 = document.getElementById('btn_1');
let items1 = document.querySelectorAll('#lista_numeri>li');

btn_1.addEventListener('click', ()=>{
    for (let i = 0; i < items1.length; i++) {
        let inner = parseInt(items1[i].innerHTML);
        if(inner%2 == 0){
            items1[i].style.display =  "none";
        }
    }
});

// ### esercizio 2

let btn_2 = document.getElementById('btn_2');
let lista_colori = document.getElementById('lista_colori');
let items2 = document.querySelectorAll('#lista_colori>li');

btn_2.addEventListener('click', ()=>{
    let arr_colori = [];
    for (let i = 0; i < items2.length; i++) {
        arr_colori.push(items2[i].innerHTML);
    }
    arr_colori.sort();
    let res = "";
    arr_colori.forEach(el => {
        res += `
        <li>${el}</li>
        `
    });

    lista_colori.innerHTML = res;
});


// ### esercizio 2

let radio_colori = document.getElementsByName("radio_colori");
let e3_box = document.getElementById("e3_box");

for (let i = 0; i < radio_colori.length; i++) {
    radio_colori[i].addEventListener('click', ()=>{
       //alert(radio_colori[i].value);
       let val = radio_colori[i].value;
       e3_box.style.background = val;
    })
    
}



