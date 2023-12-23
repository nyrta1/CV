$(document).ready(function(){
    $("#NDG_LINUX_CERT").click(function() {
        $("#ModalLabel").text("СЕРТИФИКАТ: NDG Linux Essential course");
        $("#ModalImage").attr("src", "./images/certificates/NDG-Linux-Essent-certificate.jpg")
    })

    $("#RUSSIAN_CAMPUS_CERT").click(function() {
        $("#ModalLabel").text("СЕРТИФИКАТ: Кампус на зелёной улице. Компетенции будущего");
        $("#ModalImage").attr("src", "./images/certificates/campus.jpeg")
    })

    $("#ROBOTICS_CERT").click(function() {
        $("#ModalLabel").text("СЕРТИФИКАТ: 'СПОРТТЫҚ РОБОТОТЕХНИКА' КЕГЛЬРИНГ КВАДРО");
        $("#ModalImage").attr("src", "./images/certificates/robo.jpeg")
    })

    $("#3D_MODELING_CERT").click(function() {
        $("#ModalLabel").text("СЕРТИФИКАТ: 'СПОРТТЫҚ РОБОТОТЕХНИКА' 3D МОДЕЛИРОВАНИЯ");
        $("#ModalImage").attr("src", "./images/certificates/3dmodel.jpeg")
    })
});