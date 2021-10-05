



document.getElementById('btn_carica').addEventListener('click', ()=>{



fetch('html/lista.html')
.then((res)=>{
    return res.text();
})
.then((el)=>{
    app.innerHTML = el;
})
.catch((err)=>{
    console.log(err.message)
});



})



