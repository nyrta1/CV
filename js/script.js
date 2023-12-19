$(document).ready(function(){
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