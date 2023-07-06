function getDataDayIAQ(){
    var id_kit = document.getElementById("id_kit_selected").innerHTML
    renderCo2Graph(id_kit, "day");
    renderPM10Graph(id_kit, "day");
    renderAirSpeedGraph(id_kit, "day");

    
}

function getData72IAQ(){
    var id_kit = document.getElementById("id_kit_selected").innerHTML
    renderCo2Graph(id_kit, "72");
    renderPM10Graph(id_kit, "72");
    renderAirSpeedGraph(id_kit, "72");
}

function getDataWeekIAQ(){
    var id_kit = document.getElementById("id_kit_selected").innerHTML
    renderCo2Graph(id_kit, "week");
    renderPM10Graph(id_kit, "week");
    renderAirSpeedGraph(id_kit, "72");

}

function getDataALLIAQ(){
    var id_kit = document.getElementById("id_kit_selected").innerHTML
    renderCo2Graph(id_kit, "all");
    renderPM10Graph(id_kit, "all");
    renderAirSpeedGraph(id_kit, "all");
}