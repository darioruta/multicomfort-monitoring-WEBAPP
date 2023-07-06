function updateTendinaKits (data){
    //console.log("QEUSTI SONO I CAZZO DI DATI: "+data)
    if (data.length >0 ){
         var updatedTableBody = '<ul class="nav navbar-nav"><li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">KITs on-line<span class="caret"></span></a><ul class="dropdown-menu">';
         for (var i = 0; i < data.length; i++) {
        var kit = data[i];
        var stato = kit.state;
        console.log(stato);
        if (stato == true){
            stato = "OnLine";

        } else {
            stato = "OffLine";
        }

        console.log("NUOVO STATO  " +stato);
        /*var stato = "";
        if (kit.state == false){
            stato = "On Line";
        } else {
            stato = "Non disponibile";
        }*/
        //var parametri = kit.id_kit.replace(/\s+/g,'_')+","+kit.kit.replace(/\s+/g,'_')+","+kit.plesso.replace(/\s+/g,'_');
        //console.log(parametri)*/
        
         updatedTableBody += "<li><a id="+kit.kitID+" href='#titolo_kit' onClick='getData("+kit.kitID+")'>";
         updatedTableBody +="KIT "+kit.kitID;
         updatedTableBody +=" - "+kit.aulaName.toUpperCase()+" - "+ kit.plessoName; // farmi mandare plesso name, aula name 
         //updatedTableBody +=" - "+stato;
         updatedTableBody +='</a></li>';
         
         }
         updatedTableBody+="</ul></li></ul>"
         $("#kit_list_container").html(updatedTableBody);
    }
    else{
        $("#kit_list_container").html("<span>Sorry! NO KITS AVAILABLE</span>");
    }        

}




/*

LOCAL VERSION

function updateTendinaKits (data){
    if (data.length>0){
         var updatedTableBody = '<ul class="nav navbar-nav"><li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">KITs on-line<span class="caret"></span></a><ul class="dropdown-menu">';
         for (var i = 0; i < data.length; i++) {
        var kit = data[i]
        //var parametri = kit.id_kit.replace(/\s+/g,'_')+","+kit.kit.replace(/\s+/g,'_')+","+kit.plesso.replace(/\s+/g,'_');
        //console.log(parametri)
         updatedTableBody += "<li><a id="+kit.id_kit+" href='#titolo_kit' onClick='getData("+kit.id_kit+")'>";
         updatedTableBody +="KIT "+kit.id_kit;
         updatedTableBody +=" - "+kit.kit.toUpperCase()+" - "+ kit.plesso;
         updatedTableBody +='</a></li>';
         
         }
         updatedTableBody+="</ul></li></ul>"
         $("#kit_list_container").html(updatedTableBody);
    }
    else{
        $("#kit_list_container").html("<span>Sorry! NO KITS AVAILABLE</span>");
    }
            

}


*/


