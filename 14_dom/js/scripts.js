/* 
Tema:

*/

let app = document.getElementById('app');
// console.log(app);

//let el = document.getElementById('id');
// let div = document.getElementsByTagName('div');
//let el2 = document.querySelector('div');
// let el3 = document.querySelectorAll('#lista>li:nth-child(odd)');

// let el3 = document.querySelectorAll('.container li');

//let el4 = document.getElementsByClassName('.clase');

// console.log(div);

// let arr = Array.from(div);
// console.log(arr);

// for (const i of div) {
//     console.log(i.innerHTML);
// }



//console.log(el3);

// let var1 = "Ciao Mondo";
// let titolo1 = document.createElement('h1');
// let text = `
// ${var1} Bello
// `;

// titolo1.innerHTML = text;


// app.appendChild(titolo1);

// let lista = document.getElementById('lista');

// //let contet = lista.innerHTML;

// let li = document.createElement('li');

// let litext = `
// aaaaa
// `;

// li.innerHTML = litext;
// lista.appendChild(li);

// let div1 = document.querySelector('div');
// let ph1 = document.querySelector('h1');
// document.getElementById('btn_elim').onclick = ()=>{
//     //alert('ok');
//     div1.removeChild(ph1);
// }

let img = document.createElement('img');
img.setAttribute('scr', "img/foto.jpg");

let attr = img.getAttribute('scr');

console.log(attr);

// el.style.cssText = "background-color: black; color: white;";
// el.style.border = "#000 solid 2px";
// el.classList.add("clase1", "clase2");
// el.classList.remove("clase");
// el.classList.toggle("clase");
// document.getElementById("estilo").href = "css/estilosjs.css";