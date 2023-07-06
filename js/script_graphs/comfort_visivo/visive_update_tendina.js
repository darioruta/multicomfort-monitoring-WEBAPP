function getDataDayVisive(){
    var id_kit = document.getElementById("id_kit_selected").innerHTML
    renderLux(id_kit,"day"); //file comfort_visivo/lux_hist

    
}

function getData72Visive(){
    var id_kit = document.getElementById("id_kit_selected").innerHTML
    renderLux(id_kit,"72"); //file comfort_visivo/lux_hist
}

function getDataWeekVisive(){
    var id_kit = document.getElementById("id_kit_selected").innerHTML
    renderLux(id_kit,"week"); //file comfort_visivo/lux_hist);

}

function getDataALLVisive(){
    var id_kit = document.getElementById("id_kit_selected").innerHTML
    renderLux(id_kit, "all"); //file comfort_visivo/lux_hist
}