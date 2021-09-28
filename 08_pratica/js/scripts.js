/*
Tema: 
*/

let val1 = document.getElementById('val1');
let val2 = document.getElementById('val2');
let btn_calc = document.getElementById('btn_calc');
let res = document.getElementById('res');


// btn_calc.addEventListener('click', somma);


// function somma(){

// }


btn_calc.addEventListener('click', function(){
    let x = parseFloat(val1.value) + parseFloat(val2.value);
    res.innerHTML = "<h1>" + x + "</h1>";
});