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
            fn.regSend(nom,tel,mail,foto);
            /*$.ajax({
                method: "POST",
                url: "http://carlos.igitsoft.com/apps/test.php",
                data: { nom: nom, mail: mail, tel: tel },
                error: function(jq,txt){
                    alert(jq+txt);
                }
            }).done(function( msg ) {
                alert(msg);
                if(msg == 1)
                    ft.transfer(foto);
            });*/
        }else
            alert('Todos los campos son requeridos');
    },
    path: null,
	regSend: function(nom, tel, mail, foto){
		server.path = foto;
		$.ajax({
			method: "POST",
			url: "http://carlos.igitsoft.com/apps/test.php",
			data: { nom: nom, mail: mail, tel: tel },
			error: function(jq,txt){
				alert(jq+txt);
			}
		}).done(server.regDone);
	},
	regDone: function(msg){
		if(msg == 1){
			fileTransfer.sendPhoto(server.path);
		}else
			navigator.notification.alert("Hubo un error al enviar los datos", null, "Error al enviar datos", "Aceptar");
	}
};

$(fn.ready);