function populateCardsVisive(id_kit){
    $.ajax(
        {
            url: '/data/lux?id_kit='+id_kit, //ID devi metterlo dopo
            method: 'GET',
            contentType: "application/json",
            dataType: "json",
            success: function(risposta){		
            $('#lux_medi_val').html(risposta.r + " lux");
            $('#lux_inst_val').html(risposta.s + " %");
            coloraCardsVisive();
    
            },
        }
      );
    
    
    
}