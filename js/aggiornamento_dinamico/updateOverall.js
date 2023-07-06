
/*
function updateCardsOverall(data){

    $("#overall_thermal_val").html(data.thermal_comf)
    $("#overall_acoustic_val").html(data.acustico)
    $("#overall_visive_val").html(data.visivo)
    $("#overall_IAQ_val").html(data.iaq)

    
}

*/



function updateCardsOverall(data){



    $("#overall_thermal_val").html(data.j)
    $("#overall_acoustic_val").html(data.k)
    $("#overall_visive_val").html(data.l)
    $("#overall_IAQ_val").html(data.m)
    

    
}

function coloraCardsOverall(){


    //TEMPERATURA OPERATIVA
    
    var ot = document.getElementById("overall_thermal")
    var temperatura_operativa_Div = document.getElementById("overall_thermal_val")
    var temperatura_operativa = parseInt(temperatura_operativa_Div.innerHTML);    
   
    if (temperatura_operativa < 18) {
       addBAD(ot)
       //$("#overall_thermal_val").html("PESSIMO")
       } else if (temperatura_operativa >= 18 && temperatura_operativa <= 22) {
       addACCEPTABLE(ot)
       //$("#overall_thermal_val").html("ACCETTABILE")
       } else if (temperatura_operativa > 22 && temperatura_operativa <= 27) {
       addGOOD(ot)
       //$("#overall_thermal_val").html("BUONO")
         } else if (temperatura_operativa >27 && temperatura_operativa <=29) {
       addACCEPTABLE(ot)
       //$("#overall_thermal_val").html("ACCETTABILE")
         } else if (temperatura_operativa >29) {
       addBAD(ot)
       //$("#overall_thermal_val").html("PESSIMO")
    }

    //COMFORT ACUSTICO

    var oa = document.getElementById("overall_acoustic")
    var o_acoustic_div = document.getElementById("overall_acoustic_val")
    var o_acoustic_val = parseInt(o_acoustic_div.innerHTML);    
   
    if (o_acoustic_val < 2) {
       addGOOD(oa)
       $("#overall_acoustic_val").html("BUONO")
       } else if (o_acoustic_val >= 2 && o_acoustic_val <= 3) {
       addACCEPTABLE(oa)
       $("#overall_acoustic_val").html("ACCETTABILE")
       } else {
        addBAD(oa)
        $("#overall_acoustic_val").html("PESSIMO")
    }
       
    
    // COMFORT VISIVO



    var ov = document.getElementById("overall_visive")
    var o_visive_div = document.getElementById("overall_visive_val")
    var o_visive_val = parseInt(o_visive_div.innerHTML);    
   
    if (o_visive_val < 1) {
       addGOOD(ov)
       $("#overall_visive_val").html("BUONO")
       } else if (o_visive_val >= 1 && o_visive_val < 2) {
       addACCEPTABLE(ov)
       $("#overall_visive_val").html("ACCETTABILE")
       } else {
        addBAD(ov)
        $("#overall_visive_val").html("PESSIMO")
    }


    //IAQ

    var iaq = document.getElementById("overall_IAQ")
    var o_iaq_div = document.getElementById("overall_IAQ_val")
    var o_iaq_val = parseInt(o_iaq_div.innerHTML);    
   
    if (o_iaq_val < 1) {
       addGOOD(iaq)
       $("#overall_IAQ_val").html("BUONO")
       } else if (o_iaq_val >= 1 && o_iaq_val < 2) {
       addACCEPTABLE(iaq)
       $("#overall_IAQ_val").html("ACCETTABILE")
       } else {
        addBAD(iaq)
        $("#overall_IAQ_val").html("PESSIMO")
    }


}

