
function coloraCardsThermal(){


    //modello adattivo
    var pmv_ash = document.getElementById("pmv_ashrae");
    var pmv_div_ash = document.getElementById("pmv_ashrae_val");
    var pmv_val_ash = parseInt(pmv_div_ash.innerHTML);
    
    
    
    if (pmv_val_ash==0) {
    addGOOD(pmv_ash);
    } else if (pmv_val_ash==1) {
    addACCEPTABLE(pmv_ash);
    } else {
    addBAD(pmv_ash);
    }
    
    
    //PMV EUROPE
    
    var pmv = document.getElementById("pmv_europe");
    var pmv_div = document.getElementById("pmv_europe_val");
    var pmv_val = parseInt(pmv_div.innerHTML);
   
    if (pmv_val >= -1 && pmv_val <= 1) {
        addGOOD(pmv);
    } else if ((pmv_val > 1 && pmv_val <=2) || (pmv_val > -2 && pmv_val <= -1)){
        addACCEPTABLE(pmv);
    } else{
        addBAD(pmv);
    }
    
    //if (pmv_val==3 || pmv_val == -3) {
        //addBAD(pmv)
    //} else if (pmv_val==2 || pmv_val == -2) {
        //addACCEPTABLE(pmv)
    //} else if (pmv_val >= -1 && pmv_val <= 1) {
        //addGOOD(pmv)
    //}


     
    //PERCENTAGE COMFORT
    
    var tc_out = document.getElementById("tc_out_range");
    var tc_out_div = document.getElementById("tc_out_range_val");
    var tc_out_val = parseInt(tc_out_div.innerHTML);
   
    
    
    
    if (tc_out_val >= 60 ) {
        addGOOD(tc_out)
    } else if (tc_out_val > 40 || tc_out_val < 60) {
        addACCEPTABLE(tc_out)
    } else if (tc_out_val < 40) {
        addBAD(tc_out)
    }


     //PERCENTAGE COMFORT
    
     var tdc_out = document.getElementById("tdc_out_range");
     var tdc_out_div = document.getElementById("tdc_out_range_val");
     var tdc_out_val = parseInt(tdc_out_div.innerHTML);
    
     
     
     
     if (tdc_out_val >= 60 ) {
         addGOOD(tdc_out)
     } else if (tdc_out_val > 40 || tdc_out_val < 60) {
         addACCEPTABLE(tdc_out)
     } else if (tdc_out_val < 40) {
         addBAD(tdc_out)
     }
 


}
