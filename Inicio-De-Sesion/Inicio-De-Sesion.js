
document.getElementById("BotonDeIniciarSesion").addEventListener("click",Validar )
function Validar() {
    let DNI = document.getElementById("CajaDeDNI").value;
    let MensajeDeError = document.getElementById("MensajeDeError")

if (DNI !== "49") {
   MensajeDeError.style.color = "red";
   MensajeDeError.textcontent = "ERROR No se encontro el usuario El DNI o contraseña puede ser incorrecta"

} else {
    MensajeDeError.style.color = "green";
    MensajeDeError.textContent = "AAAA"
}
}