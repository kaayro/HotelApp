var fn = {
    init: function(){
        if(!fn.estaRegistrado())
            window.location.href = '#registro';
        $('#registro div[data-role=footer] a').click(fn.registrar);
    },
    // ------ Funciones de Registro -------
    estaRegistrado: function(){
        return false;
    },
    registrar: function(){
        var nom = $('#regNom').val();
        var mail = $('#regMail').val();
        var tel = $('#regTel').val();
        var foto = $('#regFoto').data('foto');
        
        if(nom != '' && mail != '' && tel != '')
            alert('Sincronizar');
        else
            alert('Todos los campos son requeridos');
    }
};

$(fn.init);