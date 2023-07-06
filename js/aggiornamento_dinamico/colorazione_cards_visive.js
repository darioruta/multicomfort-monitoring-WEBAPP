function coloraCardsVisive(){

    var perc_lux_no_opt = document.getElementById("lux_inst");
    var perc_lux_no_opt_div = document.getElementById("lux_inst_val");
    var perc_lux_no_opt_val = parseInt(perc_lux_no_opt_div.innerHTML);
    
    
    if (perc_lux_no_opt_val < 15) {
        addGOOD(perc_lux_no_opt)
        } else if (perc_lux_no_opt_val >= 15 && perc_lux_no_opt_val < 40) {
       addACCEPTABLE(perc_lux_no_opt)
        } else {
            addBAD(perc_lux_no_opt)
        }
        
    var lux_medi = document.getElementById("lux_medi");
    var lux_medi_div = document.getElementById("lux_medi_val");
    var lux_medi_val = parseInt(lux_medi_div.innerHTML);

    
    if (lux_medi_val < 200) {
        addBAD(lux_medi)
        } else if (lux_medi_val >= 200 && lux_medi_val < 500) {
       addACCEPTABLE(lux_medi)
        } else if (lux_medi_val >= 500 && lux_medi_val < 750) {
         addGOOD(lux_medi)
         } else if (lux_medi_val >= 750 && lux_medi_val < 1000) {
         addACCEPTABLE(lux_medi)
         } else {
         addBAD(lux_medi) 
         }
        
}