function getDataDayAcoustic(){
    var id_kit = document.getElementById("id_kit_selected").innerHTML
    renderDecibel(id_kit, "day"); //file comfort_acustico/db_history

    
}

function getData72Acoustic(){
    var id_kit = document.getElementById("id_kit_selected").innerHTML
    renderDecibel(id_kit, "72"); //file comfort_acustico/db_history

}

function getDataWeekAcoustic(){
    var id_kit = document.getElementById("id_kit_selected").innerHTML
    renderDecibel(id_kit, "week"); //file comfort_acustico/db_history

}

function getDataALLAcoustic(){
    var id_kit = document.getElementById("id_kit_selected").innerHTML
    renderDecibel(id_kit, "all"); //file comfort_acustico/db_history
}