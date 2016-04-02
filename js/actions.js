var fn = {
    ready: function(){
        document.addEventListener("deviceready", fn.init, false);
    },
    init: function(){
        if(!fn.estaRegistrado())
            window.location.href = '#registro';
        $('#registro div[data-role=footer] a').click(fn.registrar);
        $('#tomarFoto').click(capture.takePhoto);
    },
    // ------ Funciones de Registro -------
    estaRegistrado: function(){
        var usr = window.localStorage.getItem("user");
        if(usr == undefined || usr == '')
            return false;
        else
            return true;
    },
    registrar: function(){
        var nom = $('#regNom').val();
        var mail = $('#regMail').val();
        var tel = $('#regTel').val();
        var foto = $('#regFoto').data('foto');
        
        if(nom != '' && mail != '' && tel != '' && foto != undefined){
            alert(1);
            $.ajax({
                method: "POST",
                url: "http://carlos.igitsoft.com/apps/test.php",
                data: { }//nom: nom, mail: mail, tel: tel }
            }).done(function( msg ) {
                alert(msg);
                if(msg == 1)
                    ft.transfer(foto);
            });
        }else
            alert('Todos los campos son requeridos');
    }
};

$(fn.ready);