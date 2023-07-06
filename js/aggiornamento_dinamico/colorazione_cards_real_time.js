 // ottieni il valore della temperatura
function addBAD(div){
    div.classList.add("card-bad");
    div.classList.remove("card-acceptable");
    div.classList.remove("card-good");


}

function addACCEPTABLE(div){
    div.classList.add("card-acceptable");
    div.classList.remove("card-bad");
    div.classList.remove("card-borderline");

}

function addGOOD(div){
    div.classList.add("card-good");
    div.classList.remove("card-bad");
    div.classList.remove("card-acceptable");

}


function coloraCards(){


     var d = document.getElementById("rt_card_temp")
     var temperaturaDiv = document.getElementById("card_temp_rt")
     var temperatura = parseInt(temperaturaDiv.innerHTML);    
    
     if (temperatura < 18) {
        addBAD(d)
        } else if (temperatura >= 18 && temperatura <= 22) {
        addACCEPTABLE(d)
        } else if (temperatura > 22 && temperatura <= 27) {
        addGOOD(d)
          } else if (temperatura >27 && temperatura <=29) {
        addACCEPTABLE(d)
          } else if (temperatura >29) {
        addBAD(d)
     }


     //HUMIDITY

     var h = document.getElementById("rt_card_hum")
     var humidtyDIV = document.getElementById("card_hum_rt")
     var humidity = parseInt(humidtyDIV.innerHTML);
    
     if (humidity < 20) {
          addBAD(h)
          } else if (humidity >= 20 && humidity <= 30) {
          addACCEPTABLE(h)
          } else if (humidity > 30 && humidity <=50) {
         addGOOD(h)
          } else if (humidity > 50 && humidity <=65) {
         addACCEPTABLE(h)
          } else if (humidity > 65) {
         addBAD(h)
     }

     //AIR SPEED div: rt_card_air_speed / h3:card_air_speed_rt

     var as = document.getElementById("rt_card_air_speed");
     var asDiv = document.getElementById("card_air_speed_rt");
     var ad = parseInt(asDiv.innerHTML);


     if (ad < 0.004) {
          addBAD(as);
          } else if (ad >= 0.004 && ad <= 1) {
          addGOOD(as);
          } else if (ad > 1 && ad <= 1.3 ) {
          addACCEPTABLE(as)
          } else {
          addBAD(as)
          }


//RUMORE div:rt_card_rumore /h3 card_rumore_rt
//https://www.inail.it/cs/internet/attivita/prevenzione-e-sicurezza/conoscere-il-rischio/agenti-fisici/rumore.html#:~:text=Lgs.,a%2087%20dB(A).

     var r = document.getElementById("rt_card_rumore")
     var rDiv = document.getElementById("card_rumore_rt")
     var rumore = parseInt(rDiv.innerHTML);


     if (rumore < 30) {
          addGOOD(r)
          } else if (rumore >= 30 && rumore <= 65) {
          addACCEPTABLE(r)
          } else {
          addBAD(r)
          }


 //PM10 div: rt_card_pm10 / h3 -> card_pm10_rt

 var pm = document.getElementById("rt_card_pm10")
 var pmDiv = document.getElementById("card_pm10_rt")
 var particolato = parseInt(pmDiv.innerHTML);


 if (particolato < 25 ) {
      addGOOD(pm)
      } else if (particolato >= 25 && particolato <= 40) {
      addACCEPTABLE(pm)
      } else {
      addBAD(pm)
 }


  //CO2 div: rt_card_co2 / h3 -> card_co2_rt

  var c = document.getElementById("rt_card_co2")
  var co2Div = document.getElementById("card_co2_rt")
  var co2 = parseInt(co2Div.innerHTML);
 
 
  if (co2 < 400) {
     addGOOD(c)
       } else if (co2 >= 400 && co2 <= 1000) {
     addACCEPTABLE(c)
       } else {
     addBAD(c)
  }
 
  
    //LUCE div: rt_card_luce / h3: card_luce_rt

    //Aule scolastiche 300 – 750
     //Laboratori scolatici 500 – 1000
     // https://www.life365.eu/blog/2020/05/11/lux-i-valori-previsti-per-una-perfetta-illuminazione/

    var l = document.getElementById("rt_card_luce")
    var luceDiv = document.getElementById("card_luce_rt")
    var lux = parseInt(luceDiv.innerHTML);
   
   
    if (lux < 200) {
         addBAD(l)
         } else if (lux >= 200 && lux < 500) {
        addACCEPTABLE(l)
         } else if (lux >= 500 && lux < 750) {
          addGOOD(l)
          } else if (lux >= 750 && lux < 1000) {
          addACCEPTABLE(l)
          } else {
          addBAD(l) 
          }
   
 
    //MRT rt_card_mrt / h3: card_mrt_rt

    var m = document.getElementById("rt_card_mrt")
    var mrtDiv = document.getElementById("card_mrt_rt")
    var mrt = parseInt(mrtDiv.innerHTML);
   
   
    if (mrt < 18) {
     addBAD(m)
     } else if (mrt >= 18 && mrt <= 22) {
     addACCEPTABLE(m)
     } else if (mrt > 22 && mrt <= 27) {
     addGOOD(m)
       } else if (mrt >27 && mrt <=29) {
     addACCEPTABLE(m)
       } else if (mrt >29) {
     addBAD(m)
  }

  //PMV ASHRAE
/*
*/
}

