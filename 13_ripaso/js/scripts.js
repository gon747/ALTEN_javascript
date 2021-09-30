/*
Tema: 
*/

// let arr = [
//     [1,2,3],
//     [1,2,3],
//     [1,2,3]  

// ];

// let arr2 = [
//     {nome: "Anna", eta: 25},
//     {nome: "Giovanni", eta: 25}
// ]
// json
// console.log(arr2[0]['nome']);

// let app = document.getElementById('app');

// let divs = document.getElementsByTagName('div');

// for(let i=0; i< divs.length; i++){
//     console.log(divs[i]);
// }

//console.log(divs);

// let el = document.querySelectorAll('#menu>div');


// for(let i=0; i< el.length; i++){
//     //el[i].addEventListener('click',func1);
// }
// console.log(el);

//let box1 = document.querySelector('#box1');
//let box2 = document.querySelector('#box2');

// box1.addEventListener('click', (e)=>{
//     alert(e.target.id);
// });
// box2.addEventListener('click', (e)=>{
//     alert(e.target.id);
// });

// box1.addEventListener('click', (e)=>{

//     let a = e.target.id;
//     switch (a) {
//         case "box2":
//             alert(a);
//             break;
//         case "box3":
//             alert(a);
//             break;
//         default:
           
//             break;
//     }
    
// });
// let app = document.querySelector('#app');
// var nint = 10;


// let inter = setInterval(function(){    
//     app.innerHTML = nint;
//     nint--;
//     if(nint==0){
//         clearInterval(inter);
//         nint = 10;
//         faiAltro();
//     }
// }, 1000);

// function faiAltro(){
// ///
// }

let btn_a = document.getElementById('btn_a');
let app = document.getElementById('app');
let app2 = document.getElementById('app2');

btn_a.addEventListener('click', ()=>{
    let nome = app.dataset.eta;
    alert(nome);
    console.log(app2.dataset);
})