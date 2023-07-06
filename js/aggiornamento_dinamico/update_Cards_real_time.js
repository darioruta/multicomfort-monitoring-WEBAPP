
//UPDATE MISURE IN TEMPO REALE
/*
function updateCardsRealTime(data){

    $('#card_temp_rt').html(data[0].temp +"  °C");
    $('#card_hum_rt').html(data[1].umidita+"  %");
    $('#card_air_speed_rt').html(data[2].velocita_aria+"  m/s");
    $('#card_rumore_rt').html(data[3].rumore+"  db");
    $('#card_pm10_rt').html(data[4].pm10+"  p.p.m");
    $('#card_co2_rt').html(data[5].co2+"  &mu;g/m3");
    $('#card_luce_rt').html(data[6].luce+"  lux");
    $('#card_mrt_rt').html(data[7].mrt+"  °C");

    }

*/


function updateCardsRealTime(data){
   
    var air_speed =  Math.round((data.e + 3.14) * 1000) / 1000
    
    $('#card_temp_rt').html(data.a+"  °C");
    $('#card_hum_rt').html(data.b+"  %");
    $('#card_air_speed_rt').html(air_speed+"  m/s");
    $('#card_rumore_rt').html(data.f+"  db");
    $('#card_pm10_rt').html(data.c+"  &mu;g/m3");
    $('#card_co2_rt').html(data.d+"  &mu;g/m3");
    $('#card_luce_rt').html((data.g)+"  lux");
    $('#card_mrt_rt').html(data.h+"  °C");

}
