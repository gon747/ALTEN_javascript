/* 
Tema:

*/

let app = document.getElementById('app');
console.log(app);

let btn_up = document.getElementById('btn_up');
let val = document.getElementById('val_scroll');
window.onscroll = ()=>{
    let sp = window.scrollY;
    val.innerHTML = sp;

    if(sp>100){
       btn_up.style.display = "block"; 
    }else{
        btn_up.style.display = "none";
    }
}

// btn_up.click = ()=>{
//     alert('ok');
//     window.scrollTo(0,0);
// }

btn_up.addEventListener('click', ()=>{
    window.scrollTo(0,0);
     
})