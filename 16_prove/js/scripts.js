/* 
Tema:

*/



function miFunc(a){

}

let miFunc2 = function(a){

}

let miFunc3 = (a,b)=>{

}
let miFunc4 = a =>{

}

let miFunc5 = (a)=>{
    return a + 1;
}

let miFunc6 = a => a + 1;


// miFunc(a);
// miFunc2(a);
// miFunc3(a,b);
// miFunc4(a);

// let x = miFunc5(4);

// let y = miFunc6(4);


let obj = {
    nome: "Maria",
    eta: 25
}

let arr = [
    {
        nome: "Giovanni",
        eta: 30
    },
    {
        nome: "Leonardo",
        eta: 22
    }
];

// console.log(arr);

// let objJ = JSON.stringify(arr);

// console.log(objJ);

let jj = '{"nome": "Maria", "eta": "2"}';

console.log(jj);

let oo = JSON.parse(jj);

console.log(oo);

console.log(typeof jj);