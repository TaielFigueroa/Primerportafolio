function enviar(){
    var nombre = document.getElementById("txtNombre").value;
    var email = document.getElementById("txtEmail").value;
    var asunto = document.getElementById("txtAsunto").value;
    var mensaje = document.getElementById("Mensaje").value;
    if(nombre == "" || email == "" || asunto == "" || mensaje == "")
        alert("Por favor complete todos los campos.");
    else
        alert("Gracias por querer contactarme, aún no están habilitados los envíos, estoy trabajando en ello 😀\n\r Si quieres puedes contactarme a través de mis redes, los links los encontrarás al final de la página.");
}