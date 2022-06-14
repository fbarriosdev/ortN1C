//Usuario de la sesión
let usuarioSesionU = "";
let usuarioSesionC = "";

function cleanSessionUser() {
    usuarioSesionU = "";
    usuarioSesionC = "";
}

function setSessionUser(user, pass) {
    usuarioSesionU = user;
    usuarioSesionC = pass;
}

function cargarDatosInicio() {
    let usuario;
    usuario = getPersona("usuario", usuarioSesionC);
    if (usuario === undefined) usuario = getLocal("usuario", usuario);
    if (usuario !== undefined) {
        getElementDQS("#sectIniTitleNombre").innerHTML = usuario.getNombre();
    }
}