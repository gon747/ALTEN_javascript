/* 
Tema:

*/



$(document).ready(function () {
    

$("#btn1").on('click', function(){
    //alert('Andiamo a cena !!!');
    alert(this.id);

    

    //$('#box1').hide(1000);

    $('#box1').slideToggle(1000);


});

$('#tbl1 thead').on('click', ()=>{

    
    
    $('#tbl1 tbody').fadeToggle(400, ()=>{

    });
})


$( "#btn2" ).click(function() {
    $( "#box2" ).animate({
     
    //  width: "+=20",
      left: "+=100",
      top: "+=100"
    //   height: "toggle"
    }, 500, function() {
        // $( "#box2" ).animate({
     
        //       top: "+=100"
           
        //     }, 400, function() {
        //               // Animation complete.
        //     });
    });
});




$('#btn_add').on('click', ()=>{

let tr = `
<tr>
<td>AAAAA</td>
<td>AAAAA</td>
</tr>

`;
$('#tbl1 tbody').append(tr);



});


// $('#div1').first();

// $("#div2").html(htmlString);

// let stilo = $(selector).css('color');// #ff0000

// $(".bg_1").css("background", "#000");
// $(".bg_1").css({"background": "#000", "colre": "#fff"});






});// ready