/*
Tema: Array
*/
//let colore = "Blue";

//const x = "aaaa";

// const colori = ["Rosso", "Nero", "Bianco"];

//let persone = [];

//colori[0] = "Viola";


// colori.push('Verde');

// let text = colori.join(' ');

// colori.forEach(elemento => {
//     console.log(elemento);
// });

// let num = [1,2,3,4,5,6,7,8,9,10];

// // let a = num[0];
// // let b = num[1];

// let [a,b,...c] = num;
// let x = 11;
// let f = num.indexOf(x);

// console.log(num[f]);

// console.log(a);
// console.log(b);
// console.log(c);

let num = [1,2,3,4,5,6,7,8,9,10];
//console.log(num);
num.forEach((a,i) => {
    console.log(i + " - " + a);
});


let arr2 = num.map(function(x){
    return x*2;
});

let at = [];

num.forEach(val=>{
    at.push(val*2);
})

console.log(at);