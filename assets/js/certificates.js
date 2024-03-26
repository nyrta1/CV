const certificates = []

$(document).ready(function(){
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });

    $("#NDG_LINUX_CERT").click(function() {
        $("#ModalLabel").text("СЕРТИФИКАТ: NDG Linux Essential");
        $("#ModalImage").attr("src", "./assets/images/certificates/NDG-Linux-Essent-certificate.jpg")
    })
});

