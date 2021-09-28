/*
Tema: Loop
*/


// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


let num = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < num.length;i++) {
    if(num[i]==5){
        //continue;
        break;
    }
    console.log(num[i]);
    
}

