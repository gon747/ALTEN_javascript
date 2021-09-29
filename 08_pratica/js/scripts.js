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


// btn_calc.addEventListener('click', function(e){

//     let aa = e.target.id;


//     alert(aa);

//     let x = parseFloat(val1.value) + parseFloat(val2.value);
//     res.innerHTML = "<h1>" + x + "</h1>";


// });

let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');

box1.addEventListener('click', ()=>{
    alert('BTN 1');
});


box2.addEventListener('click', (e)=>{
    e.stopPropagation();
    e.preventDefault();
    
    alert('BTN 2');
});


let menu = document.getElementById('menu');

menu.addEventListener('click', (e)=>{
    
    let a = e.target.id;
    
    switch (a) {
        case "btn1":
            per_btn1();
            break;
        case "btn2":
            per_btn2();
            break;
        case "btn3":
            per_btn3();
            break;
        default:
            // codice
            break;
    }

})



function per_btn1(){
    alert('Sono BTN 1');
}
function per_btn2(){
    alert('Sono BTN 2');
}
function per_btn3(){
    alert('Sono BTN 3');
}