$(document).ready(function() {
    //$(function(){
    //devo prendere tutti cannoni dal catalogo
    $.ajax(
        {
        url: '/data/userdata', //QUI NON CI VA USER ID -> mettilo lato server gettando i cookies
        method: 'GET',
        contentType: "application/json",
        dataType: "json",
        success: function(risposta){	
        updateTitle(risposta.username);
        },
        }
    );
   
    $.ajax(
        {
        url: '/data/allKits', //QUI NON CI VA USER ID -> mettilo lato server gettando i cookies
        method: 'GET',
        contentType: "application/json",
        dataType: "json",
        success: function(risposta){		
        var dati = risposta.KitsIDs; // DAVIDE 
        //var dati = risposta.kits;
        updateTendinaKits(dati);
        },
        }
    );
    
});


function updateTitle(nome){
    console.log(nome)	
    $('#welcome_name').html("Ciao, "+nome.toString()+"!")
    $('#nome_utente_tendina').text("Utente: "+nome.toString())
}

function getData(id_kit){

    //METTI TUTTE LE REQUEST DELLE CARD
    //PER QUANTO RIGUARDA I GRAFICI PUOI PRENDERE ID DEL KIT DALL H3 -> #titolo_kit.innerHTML

    var section = document.getElementById("da_nascondere");
    section.classList.remove("nascondi");

    var titolo = document.getElementById(id_kit).innerText

    $("#titolo_kit").html(titolo);
    $("#id_kit_selected").html(id_kit);      

    var imageUrl = 'https://b911-93-66-125-119.eu.ngrok.io/img/carrier';
    console.log(imageUrl);

      // Update the HTML element with the image
      $('#imageContainer').html('<img src="' + imageUrl + '">');


    var uri_del_PD = "/data/cards?id_kit="+id_kit;
  
    $.ajax(
        {
        url: uri_del_PD, //ID devi metterlo dopoß
        method: 'GET',
        contentType: "application/json",
        dataType: "json",
        success: function(risposta){		
        updateCardsRealTime(risposta) //file aggiornamento_dinamico update_Cards_real_time
        coloraCards(); //file colorazione_cards.js
        },
        }
    );


    var uri_del_PD2 = '/data/overall_section?id_kit='+id_kit;

    $.ajax(
        {
            url: uri_del_PD2 , //DEVI METTERE ID
            method: 'GET',
            contentType: "application/json",
            dataType: "json",
            success: function(risposta){	
            //var dati = risposta.overall_comfort;
            //console.log(dati.thermal_comf)	
            updateCardsOverall(risposta); // file updateOverall.js
            coloraCardsOverall(); // file updateOverall.js
            
            var dio = [risposta.i]
            renderTortaOverall(id_kit, dio);
            
            },
        }
    );

    $.ajax(
        {
            url: '/data/co2out?id_kit='+id_kit , //DEVI METTERE ID
            method: 'GET',
            contentType: "application/json",
            dataType: "json",
            success: function(risposta){	
                        
            var dio_m = [risposta.t]
            renderTortaCo2Out(id_kit, dio_m);
            
            },
        }
    );

    //renderTortaOverall(id_kit, [67]); //file radial-bar.js
    // TODO populateCardsOverall(id_kit);
    
    renderCo2Graph(id_kit, "day");  //file C02.js
    renderPM10Graph(id_kit, "day"); //file PM10.js
    renderAirSpeedGraph(id_kit, "day");


    renderTortaPPD(id_kit); // file comfort_termico/ppd_torta -> Questa funzione popola anche le 2 cards PMV
    renderPMV(id_kit, "day"); // file comfort_termico/pmv_history
    renderTemperature(id_kit, "day"); //file comfort_termico/temp.js
    //renderMRT(id_kit, "day"); //file comfort_termico/mrt.js

    renderTortaNoise(id_kit); // file comfort_acustico/pie_db
    renderDecibel(id_kit, "day"); //file comfort_acustico/db_history

    renderLux(id_kit, "day"); //file comfort_visivo/lux_hist
    
    populateCardsVisive(id_kit); //comfort_visivo/lux_Cards
 

    //06-04 --> non è completo, inserisci cards:
    //                          OVERALL COMFORT +  COMFORT TERMICO + COMFORT VISIVO 
   
    //coloraCardsThermal();
    var carrier_src="<img src='http://localhost:8100/images/carrier"+id_kit+".jpg'>";
    //$('#carrier-img-container').html(carrier_src);
    //$('#carpet-img-container').html(carrier_src);

    var imageUrl = "http://localhost:8100/images/carrier"+id_kit+".jpg";

// fai una richiesta GET all'immagine utilizzando jQuery
    $.get(imageUrl, function(imageHtml) {
    const imageContainer = $('carrier-img-container');
    imageContainer.html(imageHtml); // inserisci il contenuto dell'immagine nell'elemento HTML
    })
    .fail(function(error) {
    console.log('Errore durante il caricamento dell\'immagine:', error);
    });

    


}

function logout() {
    // Implementa qui il codice per il logout dell'utente
    const userCard = document.querySelector('.user-card');
    userCard.style.display = 'none';
    $.ajax(
        {
            url: "/logout" , //DEVI METTERE ID
            method: 'GET',
            contentType: "application/json",
            dataType: "json",
            success: function(risposta){	
            var dati = risposta.canceled;
            if (dati =="true") {
                window.location.href= "/"
            }
            
            },
        }
    );
     
}

/*function populateCardsThermal(data){
    $('#pmv_ashrae_val').html(data[0].ashrae);
    $('#pmv_europe_val').html(data[1].europe);

}*/

