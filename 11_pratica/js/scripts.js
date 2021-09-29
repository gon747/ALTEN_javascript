/*
Tema: 


el.style.cssText = "background-color: black; color: white;";
el.style.border = "#000 solid 2px";
el.classList.add("clase1", "clase2");
el.classList.remove("clase");
el.classList.toggle("clase");

document.getElementById("stilo").href = "css/modo_oscuro.css";


*/

let menu = document.getElementById('menu');
let btn_ac = document.getElementById('btn_ac');

menu.style.cssText = `
    position: fixed;
    right: -300px;
    top: 0px;
    width: 300px;
    height: 100%;
    background-color: #1b33bd;

`;
btn_ac.style.cssText = `
position: fixed;
right: 10px;
top: 10px;
cursor: pointer;
color: #000;
`;

let aperto = false;

btn_ac.addEventListener('click', ()=>{
    if(aperto){
        chiudi();
    }else{
        apri();
    }
});





function chiudi(){
    let fine = 0;

    let inter = setInterval(()=>{
        fine = fine - 10;
        menu.style.right = fine + "px";
        if(fine == -300){
            clearInterval(inter);
            fine = 0;
        }

    })
    
    btn_ac.innerHTML = "APRI";
    aperto = false;
}




function apri(){
    let fine = -300;

    let inter = setInterval(()=>{
        fine = fine + 10;
        menu.style.right = fine + "px";
        if(fine == 0){
            clearInterval(inter);
            fine = 0;
        }

    })

    menu.style.right = "0px";
    btn_ac.innerHTML = "CHIUDI";
    aperto = true;
}





let btn_tema = document.getElementById('btn_tema');

btn_tema.addEventListener('change', ()=>{    
    if(btn_tema.checked){
        document.getElementById("stilo").href = "css/scuro.css";
    }else{
        document.getElementById("stilo").href = "css/chiaro.css";
    }
});




// ######### timer ################

let txt_tempo = document.getElementById('txt_tempo');
let btn_inizia = document.getElementById('btn_inizia');
let timer2 = document.getElementById('timer');

btn_inizia.addEventListener('click', (e)=>{
    e.preventDefault();
    
    let i = 0;
    let tt = parseInt(txt_tempo.value) + 1;
    

    let inter2 = setInterval(function(){
        
        if(i<10){
            timer2.innerHTML = "0" + i;
        }else{
            timer2.innerHTML = i;
        }
       
        i++;
        if(i == tt){
            clearInterval(inter2);
            i = 0;
        }
    }, 1000);
})
