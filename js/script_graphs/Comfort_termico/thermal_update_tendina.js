function getDataDayThermal(){
    var id_kit = document.getElementById("id_kit_selected").innerHTML
    renderPMV(id_kit, "day"); // file comfort_termico/pmv_history
    renderTemperature(id_kit, "day"); //file comfort_termico/temp.js
    renderMRT(id_kit, "day"); //file comfort_termico/mrt.js


    
}

function getData72Thermal(){
    var id_kit = document.getElementById("id_kit_selected").innerHTML
    renderPMV(id_kit, "72"); // file comfort_termico/pmv_history
    renderTemperature(id_kit, "72"); //file comfort_termico/temp.js
    renderMRT(id_kit,  "72"); //file comfort_termico/mrt.js

}

function getDataWeekThermal(){
    var id_kit = document.getElementById("id_kit_selected").innerHTML
    renderPMV(id_kit, "week"); // file comfort_termico/pmv_history
    renderTemperature(id_kit, "week"); //file comfort_termico/temp.js
    renderMRT(id_kit, "week"); //file comfort_termico/mrt.js


}

function getDataALLThermal(){
    var id_kit = document.getElementById("id_kit_selected").innerHTML
    renderPMV(id_kit, "all"); // file comfort_termico/pmv_history
    renderTemperature(id_kit, "all"); //file comfort_termico/temp.js
    renderMRT(id_kit, "all"); //file comfort_termico/mrt.js

}